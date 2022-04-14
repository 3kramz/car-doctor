import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';





const Service = ({service}) => {
    const {id,name, img, description, price} = service;
    const navigate=useNavigate()

    const handleServiceBtn=id=>{
        navigate(`/services/${id}`)
    }


    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>handleServiceBtn(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;