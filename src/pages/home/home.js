import { Component } from 'react';

import Header from '../../components/header/header';
import Promo from '../../components/promo/promo';
import PromoTitle from '../../components/promo-title/promo-title';
import About from '../../components/about/about';
import Best from '../../components/best/best';
import Footer from '../../components/footer/footer'
import ArrowBack from "../../components/arrow-back/arrowback";
import ArrowUp from "../../components/arrow-up/arrowup";



class Home extends Component {
    render(){
        return(
            <div className='home'>
                <Header/>
                    <Promo>
                        <PromoTitle/>
                    </Promo>
                <About/>
                <Best/>   
                <ArrowBack/>
                <ArrowUp/>
                <Footer/>
            </div>
        )
    }
}


export default Home;