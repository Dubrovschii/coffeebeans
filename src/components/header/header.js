import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from './logo.svg' 
import './header.css';
import Animate from "../animated/animated";
class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
          burgerActive: false, 
        };
      }
    burgerActive = () => {
        this.setState({ burgerActive: !this.state.burgerActive });
    } 
    // componentDidMount() {
    //     AOS.init({
    //       duration: 1000, // Длительность анимации в миллисекундах
    //       easing: 'ease', // Функция времени (например, 'ease', 'linear', 'ease-in-out')
    //       once: false, // Если true, анимация проигрывается только при первой прокрутке
    //     });
    //   }
    
    render(){
        const {burgerActive} = this.state;
        const hamburger = burgerActive ? 'burgerActive ' : "hamburger";
        const mobMenu = burgerActive ? 'list-mob-wr' : 'mob-active'; 
        return(
            <ul className="header-wrap">
                <li className="list-item">
                    <Link to="/">
                    <img src={logo} className="logo" alt="logo" />
                    <button className="header-link">Coffee house</button>
                    </Link>
                    
                </li>
                <li className="list-item list-item-page">
                <Link to="/our">
                <button className="header-link">Our coffee</button>
                </Link>
                   
                </li>
                <li className="list-item list-item-page">
                <Link to="/pleasure">
                <button className="header-link">For your pleasure</button>
                </Link>
                    
                </li>
                <div className="header-mob-menu">
                <div className={hamburger}onClick={() => this.burgerActive()}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={mobMenu}>
                    <li className="list-item list-item-mob">
                    <Link to="/our">
                    <button className="header-link">Our coffee</button>
                    </Link>
                    
                    </li>
                    <li className="list-item list-item-mob">
                    <Link to="/pleasure">
                    <button className="header-link">For your pleasure</button>
                    </Link>
                    <Animate/>
                    </li>
                </ul>
                </div>
               
            </ul>
        )
    }
    
}





export default Header;