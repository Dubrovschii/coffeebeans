import { Component } from "react";
import beans from './beans.svg'
import './promo-title.css'

class PromoTitle extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="title-wrap"> 
                <h2 className="title-h2">Everything You Love About Coffee</h2>
                <div className="title-subh2">
                    <div className="title-line"></div>
                        <img src={beans} alt="beans" className="title-img" />
                    <div className="title-line"></div>
                </div>

                <p className="title-subtitle">We makes every day full of energy and taste</p>
                <p className="title-subtitle">Want to try our beans?</p>


                <button className="title-btn">More</button>
            </div>
        )
    }
}

export default PromoTitle;