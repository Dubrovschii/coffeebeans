import { Component } from "react";

import Item from "../item/item";

import './bg.css'
import './itemList.css'



class ItemList extends Component {
    

    render(){
    

    const {data } = this.props;
        const elements = data.map(item => {
            const {id, ...itemProps} = item

        return(
            <Item key={id}{...itemProps}/>

        )
    })
    return(
        <div className="item-list wr800">
        <div className="col-sm-12 wrapCont">
            <div className="space-row-30">
                {elements}
            </div>
        </div>
        </div>
    )
    }

}

export default ItemList;