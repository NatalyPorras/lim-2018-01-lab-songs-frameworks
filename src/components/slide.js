import React from 'react';
import Likes from './likes.js'
import './slide.css'
const Card = ({property,tracks}) =>{
    const {index,image,name} = property
  
    return (
            <div  id={`card-${index}`} className="card">
                <h4>{name}</h4>
                <img src={image} alt={name}/>
                <div className='details'>
                <div className='song'>Canciones</div>
                    <div>
                        {
                            tracks.map((list)=>{
                                console.log(list);
                                
                                return(<p>{list.name}</p>)
                            })
                        }
                    </div>   
                </div>
            </div>
    )
}
export default Card

