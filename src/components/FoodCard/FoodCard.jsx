import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCard = ({item}) => {
    const{name,image,price,recipe,_id}=item
    const{user}=useContext(AuthContext)
    const[,refetch]=useCart()
    const navigate=useNavigate()
    const location=useLocation()
    const handleBuyNow=item=>{
      console.log(item)
      if(user && user.email){
        const orderItem={menuId: _id,name,image,price,email:user.email}
        fetch('http://localhost:5000/carts',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(orderItem)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            refetch()
            Swal.fire({
              icon: 'success',
              title: 'Your Cart has been added',
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please Log in',
        })
        navigate('/login',{state :{from:location}})
      }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={()=>handleBuyNow(item)}>Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;