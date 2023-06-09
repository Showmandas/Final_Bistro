import React from 'react';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';

const Mycart = () => {
    const[cart]=useCart()
    const total=cart.reduce((sum,item)=>item.price + sum,0)
    const handleDelete=(item)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${item._id}`,{
                method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount > 0){
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                  
                }
              })
            }
          })

    }
    return (
        <>

        <div className='uppercase font-semibold flex gap-6 mb-10 justify-evenly items-center'>
            <h2 className='text-3xl'>Total Items: {cart.length}</h2>
            <h2 className='text-3xl'>Total Price: ${total}</h2>
            <button className='btn btn-warning btn-sm'>Pay</button>
        </div>
         <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        cart.map((item,index)=>
        <tr key={item._id}>
        <td>
          {index+1}
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <td className="font-bold">{item.name}</td>
              <td className="text-sm opacity-50">{item.price}</td>
            </div>
          </div>
        </td>
        
        <td>
          <button className="btn bg-danger btn-xs" onClick={()=>handleDelete(item)}>delete</button>
          <button className="btn bg-ghost btn-xs">update</button>
        </td>
      </tr>   
        )
    }
    </tbody>
    
  </table>
</div>
        </>

    );
};

export default Mycart;