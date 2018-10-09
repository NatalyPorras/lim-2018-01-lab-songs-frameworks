import React from 'react';
import Likes from './likes.js'
const Card = (props) =>{
    const{name,image,tracks,index}=props
    return (
        <div  className='card'>
             <img src={image} alt={name}/>

             <div className='details'>
                <p>{name}</p>
                <div>
                    {
                    tracks.map(list=>{
                        console.log(list);
                        
                        return(
                            <div className="opciones">
                                <Likes name={list.name} countLikes={list.playcount}/>
                            </div>                          
                        )
                    })
                    }
                </div>

                <span className='index'>{index+1}</span>
            </div>} 
        </div>
    )
}

export default Card

