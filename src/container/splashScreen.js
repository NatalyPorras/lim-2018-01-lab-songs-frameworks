import React, { Component } from 'react'
import Slider from './slider'
import './container.css';
import '../fuentes/font.css'
class Splash extends Component{
    constructor(props){
        super(props);
        this.state={
            splash:false
        }
    }
    enableComponent(){
        setTimeout(()=>{
            this.setState({
                splash:true
            })
        },10000)
        
    }
    componentDidMount(){
        this.enableComponent();
    }

   
    render(){
        const {splash}=this.state
        if(splash){
             return(<Slider />)
        }else{
            return(
                <div className="content">
                     <div className="name">
                        <div className="melod">Melod</div>
                        <div className="ryth">
                            <span>Rythm</span>
                        </div>
                    </div>
                    <div>
                        <div id="preloader">
                            <div id="loader"></div>
                        </div>
                    </div>
                </div>
               
            )
        }

    }

}
export default Splash