import { Component } from "react";
import Header from "../../components/header/header";
import ItemList from "../../components/itemlist/itemList";
import ArrowBack from "../../components/arrow-back/arrowback";
import ArrowUp from "../../components/arrow-up/arrowup";

import Footer from "../../components/footer/footer";
import imgPleasure from './coffee-pleasure.png'
import imgCoffee from './pleasure.png'
import BeansBlack from "../../components/beansBlack/beansblack";

import './pleasure.css'

class Pleasure extends Component{

    render(){
        const divStyle = {
            backgroundImage:`url(${imgPleasure})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
        }
        const { data } = this.props;
        return(
           <div className="pleasure">
             <div className="pleasure-wrap"  style={divStyle} >
                <Header></Header>
                <h2 className="pleasure-title">For your pleasure</h2>

            </div>
            <div className="our-promo">
                    <div className="our-block">
                    <img src={imgCoffee} alt="" />
                    </div>
                    <div className="our-block">
                        <h3 className="pleasure-block-title">About our beans</h3>
                        <BeansBlack/>
                        <p className="our-block-text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                    </div>
                </div>
                <div className="our-hr"></div>

                <ItemList  data={data}/>
                
                <ArrowBack/>
                <ArrowUp/>
                <Footer/>

           </div>
        )
    }
}

export default Pleasure;



