import { Component } from "react";

import beans from './beans-black.svg'
import './about.css'


class About extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){

        return(
            <div className="about-wrap">
             <div className="about-cont">
                <h3 className="about-title">About Us</h3>
                        <div className="beans-wrap-black">
                        <div className="beans-line"></div>
                                <img src={beans} alt="beans" className="beans-black" />
                        <div className="beans-line"></div>
                    </div>
                    <p className="about-text fch">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face. 
                    </p>
                    <p className="about-text">
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>

             </div>
            </div>
        )
    }
}

export default About;
