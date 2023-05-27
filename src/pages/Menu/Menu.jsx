import React from 'react';
import Cover from '../shared/Cover/Cover';
import menuImg from '../../assets/menu/menu-bg.png'
import useMenu from '../../hooks/useMenu';
const Menu = () => {
    const[menu]=useMenu()
    const desserts=menu.filter(item=>item.category==='dessert')
    const soup=menu.filter(item=>item.category==='soup')
    const salad=menu.filter(item=>item.category==='salad')
    const pizza=menu.filter(item=>item.category==='pizza')
    const offered=menu.filter(item=>item.category==='offered')
    return (
        <div>
        <Cover img={menuImg}/>
            <h1>Our menu </h1>
        </div>
    );
};

export default Menu;