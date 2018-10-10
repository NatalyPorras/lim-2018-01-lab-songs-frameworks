import React, {Component} from 'react';
import Card from '../components/slide';
// import LeftArrow from '../components/left';
// import RigthArrow from '../components/rigth';
import data from '../data/data';

import './Slider.css'


class Slider extends Component{

    constructor(props){
        super(props)
        this.state = {
            dataTracks:[],
            properties: data.properties,
            property: data.properties[0]
        }
    }
    gotToNextSlide = () =>{
        const newIndex= this.state.property.index+1;
        this.setState({
            property: data.properties[newIndex]
        })
    }
   loadData(){
        let { dataTracks } = this.state;
              Object.values(data).forEach(artist=>{          
                artist.forEach(artistList =>{   
                    fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artistList.name}&api_key=abbfe0feb0cf98ff82ecdbb23d78c656&format=json`)
                    .then (response => response.json())
                    .then (artistListData=>{       
                        Object.values(artistListData).forEach(artistData =>{
                                dataTracks.push({
                                    id:artistList.id,
                                    name:artistList.name,
                                    image:artistList.image,
                                    index:artistList.index,
                                    tracks:artistData.track})
                            this.setState({dataTracks});
                        })
                    })    
                })
              })
        }
 
    gotToPrevSlide = () =>{
        const newIndex= this.state.property.index-1;
        this.setState({
            property: data.properties[newIndex]
        })
    }


        
    componentDidMount(){
        this.loadData();
    }
 
    render(){

        const {properties,property,dataTracks}=this.state;
       
        return (
            <div className="App">
                <button onClick={()=>this.gotToNextSlide()} disabled={property.index === data.properties.length-1}>Next</button>
                <button onClick={()=>this.gotToPrevSlide()} disabled={property.index === 0}>Prev</button>
                
                
                <div className="page">
                    <div className='cards-slider'>
                        <div className='cards-slider-wrapper'>
                            <div>
                            {
                                dataTracks.map(propertys=>{
                                return property.index === propertys.index ?
                                    <Card key={propertys.id} 
                                    name={propertys.name} 
                                    image={propertys.image}
                                    index={propertys.index}
                                    tracks={propertys.tracks}/>:false
                                })
                            }
                            </div> 
                           

                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
export default Slider