import React, { useEffect, useState } from 'react';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuItem from '../shared/MenuItem';
import useMenu from '../../hooks/useMenu';
// import { data } from 'autoprefixer';

const PopularMenu = () => {
    const [menu]=useMenu()
    const popular= menu.filter(item=>item.category === 'popular')
    // const[menu,setMenu]=useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItem=data.filter(item=> item.category === 'popular')
    //         setMenu(popularItem)})
    // },[])
    return (
        <section className='mb-12'>
            <SectionTitle  subHeading={'Popular Items'} heading={'From Our Menu'}/>
            <div className='grid md:grid-cols-2 gap-10'>
            {
                popular.map(item=><MenuItem item={item} key={item._id}/>)
            }
            </div>
        </section>
    );
};

export default PopularMenu;