import { Component } from "react";
import bestBg from './best-bg.png'
import item1 from './item1.png'
import item2 from './item2.png'
import item3 from './item3.png'
import './best.css'

class Best extends Component{

    render(){
        const divStyle = {
            backgroundImage:`url(${bestBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
        }
        return(
            <div className="best-wrap" style={divStyle} > 
            <div className="best-cont">
            <h3 className="best-title">Our best</h3>
            <div className='list-wrap'>
                <div className="best-list-item">
                    <img src={item1} alt="img1"className="list-item-img"/>
                        <div className="list-item-text">
                        <div className="list-item-descr">
                            Solimo Coffee Beans 2 kg
                        </div>
                        <div className="list-item-price">
                            10.73$
                            </div>
                        </div>
                </div>
                
                <div className="best-list-item">
                    <img src={item2} alt="" className="list-item-img"/>
                        <div className="list-item-text">
                            <div className="list-item-descr">
                                Presto Coffee Beans 1 kg
                            </div>
                            <div className="list-item-price">
                                15.99$
                            </div>
                        </div>
                
                </div>

                <div className="best-list-item">
                    <img src={item3} alt="" className="list-item-img"/>
                    <div className="list-item-text">
                        <div className="list-item-descr">
                            AROMISTICO Coffee 1 kg
                        </div>
                        <div className="list-item-price">
                            6.99$
                        </div>    
                    </div>
                </div>
        </div>
            </div>
            </div>
        )
    }
}

export default Best;
