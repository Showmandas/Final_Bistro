import React, { useState } from "react";
import OrderCover from "../../assets/shop/order.jpg";
import Cover from "../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
// import FoodCard from "../../components/FoodCard/FoodCard";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
    const[tabIndex,setTabIndex]=useState(0)
    const [menu]=useMenu()
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const desserts=menu.filter(item=>item.category==='dessert')
    const soup=menu.filter(item=>item.category==='soup')
    const salad=menu.filter(item=>item.category==='salad')
    const pizza=menu.filter(item=>item.category==='pizza')
    const drinks=menu.filter(item=>item.category==='drinks')

  return (
    <div>
      <Cover img={OrderCover} title="Order food" />
      <Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
    <TabList>
      <Tab>salad</Tab>
      <Tab>pizza</Tab>
      <Tab>soup</Tab>
      <Tab>dessert</Tab>
      <Tab>drinks</Tab>
    </TabList>

    <TabPanel>
    <OrderTab items={salad}/>
    </TabPanel>
    <TabPanel>
    <OrderTab items={pizza}/>
    </TabPanel>
    <TabPanel>
    <OrderTab items={soup}/>
    </TabPanel>
    <TabPanel>
    <OrderTab items={desserts}/>
    </TabPanel>
    <TabPanel>
    <OrderTab items={drinks}/>
    </TabPanel>
  </Tabs>
    </div>
  );
};

export default Order;
