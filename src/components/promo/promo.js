import { Component } from "react";
import PromoTitle from "../promo-title/promo-title";
// import bgImage from './bg.png'
import './promo.css'

class Promo extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="promo">
                
                <PromoTitle></PromoTitle>
            </div>
           
        )
    }
}


export default Promo