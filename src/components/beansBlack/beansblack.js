import { Component } from "react";
import beansBlack from './beans-black.svg'

class BeansBlack extends Component {
    render (){
        return(
            <div className="beans-wrap-black">
                        <div className="beans-line"></div>
                                <img src={beansBlack} alt="beansBlack" className="beans-black" />
                        <div className="beans-line"></div>
            </div>
        )
    }
}

export default BeansBlack;