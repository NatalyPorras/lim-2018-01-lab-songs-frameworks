import React from 'react';
import Likes from './likes.js'
const Card = (props) =>{
    // const{name,image,index}=property
    const {name,image,index,tracks} = props
    return (
        <div  id={`card-${index}`} className='card'>
             <img src={image} alt={name}/>
             <p>{name}</p>
             <div className='details'>
                    {
                    tracks.map(list=>{
                        
                        return(
                            <div className="opciones">
                                <Likes name={list.name} countLikes={list.playcount}/>
                            </div>                          
                        )                    })
                    }
            </div>
        </div>
    )
}

export default Card

