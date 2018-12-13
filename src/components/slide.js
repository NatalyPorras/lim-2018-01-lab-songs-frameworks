import React from 'react';
import Likes from './likes.js'
import './slide.css'
const Card = ({property,tracks}) =>{
    const {index,image,name} = property
    const newTracks = tracks.slice(0,11)
    return (
            <div  id={`card-${index}`} className="card">
                <h4>{name}</h4>
                <img src={image} alt={name}/>
                <div className='details'>
                    <p className='song'>Canciones</p>
                    <div className='listSong'>
                        {
                            newTracks.map((list)=>{                              
                                return(<Likes name={list.name} countLikes={list.playcount}/>)
                            })
                        }
                    </div>   
                </div>
            </div>
    )
}
export default Card

