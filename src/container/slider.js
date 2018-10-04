import React, {Component} from 'react';
import Slide from '../components/slide';
import LeftArrow from '../components/left';
import RigthArrow from '../components/rigth';

class Slider extends Component{
    constructor(props){
        super(props)
        this.state = {
            songs:[],
            currentIndex: 0,
            artist:['Luis Miguel','Martin Garrix', 'Hardwell', 'The Chainsmokers' ,'Ed Sheran', 'Dash Berlin'],
            artistaSelect = 0
        }
    
    }
/*     componentDidMount(){
        this.state.artist.forEach(artist=>{
            fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist[this.state.artistaSelect]}&api_key=abbfe0feb0cf98ff82ecdbb23d78c656&format=json`)
            .then (response => response.json())
            .then (data=>{
                console.log(data)
               /*  this.setState.push(  
                    { 
                    name: data.toptracks['@attr'].artist, 
                    songs:data.toptracks.track
                }
                ) 
            })
    
        })
       
    } */
    gotToPrevSlide = () =>{

    }
    gotToNextSlide = () =>{
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex +1 
        }))
    }
    render(){

        return (
            <div>
                
                {
                 this.state.artist.map((name,i)=>{
                         <Slide key={i} name={name} /> 
                  })  
                }
                
                <LeftArrow  gotToPrevSlide={this.gotToPrevSlide}/>
                <RigthArrow gotToNextSlide={this.gotToNextSlide}/>
    
            </div>
        )
    }

}
export default Slider