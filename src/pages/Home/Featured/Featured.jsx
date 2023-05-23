import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item text-white my-20 p-4 bg-fixed'>
        <SectionTitle subHeading={'check it out'} heading={'Featured Item'}/>
            <div className='md:flex justify-center items-center py-8 px-16 gap-10 bg-opacity-30 bg-slate-500'>
            <div>
                <img src={featuredImg} alt="feature image" />
            </div>
            <div>
                <p>Aug 20,2023</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolor fugit repudiandae, veniam molestiae ut praesentium eos quidem voluptatem nemo placeat accusamus optio sapiente libero, dicta quaerat magnam temporibus nam tempore dolorum tenetur ipsa odio? Repellendus culpa mollitia ab minus.</p>
                <button className='btn btn-outline border-0 border-b-4 mt-3'>Order now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;