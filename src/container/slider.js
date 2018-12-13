import React, {Component} from 'react';
import Card from '../components/slide';
// import LeftArrow from '../components/left';
// import RigthArrow from '../components/rigth';
import data from '../data/data';
import './Slider.scss'


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
                                    index:artistList.index,
                                    tracks:artistData.track})
                        })
                        this.setState({dataTracks});

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
        
    componentWillMount(){
        this.loadData();
    }
 
    render(){

        const {properties,property,dataTracks}=this.state;
       
        return (
            <div className="App">
                <header>
                        <h1>Ranking de Canciones</h1>
                </header>
                                
                <div className="page">
                    <div className="direcciones">
                        <div className="btn-border mr-9">
                        <button onClick={()=>this.gotToPrevSlide()} disabled={property.index === 0}><i class="fas fa-angle-left"></i></button>
                        </div>
                        <div className="btn-border ml-9">
                        <button onClick={()=>this.gotToNextSlide()} disabled={property.index === data.properties.length-1}><i class="fas fa-angle-right"></i></button>
                        </div>
                    </div>
                    
                    <div className="col">
                        <div className={`cards-slider active-slide-${property.index}`}>
                            <div className="cards-slider-wrapper" style={{
                                'transform':`translateX(-${property.index*(100/properties.length)}%)`
                            }}>
                                {
                                   properties.map(property=> {
                                        return dataTracks.map(track =>{
                                            if(property.index === track.index){
                                                
                                               return(
                                                     <Card key={property.id} property={property} tracks={track.tracks}/>
                                                                                                  )
                                            }
                                        })
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