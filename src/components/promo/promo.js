import { Component } from "react";
import PromoTitle from "../promo-title/promo-title";
import bgImage from './bg.png'
import './promo.css'

class Promo extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="bg-cont">
                <img src={bgImage} alt="promo-img" className="bg" />
                <PromoTitle></PromoTitle>
            </div>
            // <img src={bgImage} alt="logo" className="bg" />
        )
    }
}


export default Promo