import React,{ Component } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import BeansBlack from "../../components/beansBlack/beansblack";
import ArrowBack from "../../components/arrow-back/arrowback";

import ourBg from "../our/our-bg.png"
import moreImg from "./more.svg"

import './more.css'


class More extends Component {
    constructor(props){
        super(props);
        this.state = {
            country: '', 
            price: '',
        }
        
    }
    componentDidMount() {
        const searchParams = new URLSearchParams(window.location.search);
        const country = searchParams.get("country");
        const price = searchParams.get("price");
    
        this.setState({
          country,
          price,
       });
      } 
    

    render(){
        
        const divStyle = {
            backgroundImage:`url(${ourBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
        }
        const { country, price } = this.state;

    
        return(
            <div className="more">
                <div className="more-wrap" style={divStyle}>
                    <Header/>
                    <h2 className="our-title">Our Coffee</h2>
                </div>
                <div className="more-promo">
                    <img src={moreImg} alt="" className="moreImg"/>
                    <div className="more-block">
                        <h3 className="more-block-pretitle">About it</h3>
                        <BeansBlack/>
                      <div className="more-block-info">
                      <div className="more-block-title">
                        <span>Country:</span>
                        <span data={country}>{country}</span>
                       </div>
                       <div className="more-block-descr">
                       <span>Description:</span>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nemo cupiditate quas commodi dolore possimus, libero qui distinctio ab placeat obcaecati. Illum rem recusandae suscipit vero voluptas officia et dolore.</span>
                       </div>
                       <div className="more-block-price">
                        <span>Price:</span>
                        <span data={price}>{price}</span>
                       </div>
                      </div>
                    </div>
                </div>
                <ArrowBack/>
                <Footer/>
            </div>
        )
    }
}
export default More;