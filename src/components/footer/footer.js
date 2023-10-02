import { Component } from "react";
import logo from './footer-logo.svg'
import BeansBlack from "../beansBlack/beansblack";
import './footer.css'

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="footer">
                <ul className="footer-wrap">
                <li className="list-item footer-list-item">
                    <img src={logo} className="logo" alt="logo" />
                    <button className="footer-link">Coffee house</button>
                </li>
                <li className="list-item footer-list-item">
                    <button className="footer-link">Our coffee</button>
                </li>
                <li className="list-item footer-list-item">
                    <button className="footer-link">For your pleasure</button>
                </li>
                
            </ul>
            <BeansBlack/>
            </div>
        )
    }
}

export default Footer;
