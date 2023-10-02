import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './item.css'

import imgItem from './our-item.png'



const Item = ({name, country, price}) => {
    useEffect(() => {
        AOS.init({
          duration: 1200, // Длительность анимации в миллисекундах
          easing: 'ease-in', // Функция времени (например, 'ease', 'linear', 'ease-in-out')
          once: false, // Если true, анимация проигрывается только при первой прокрутке
        });
      }, []);
    return(
        
        <div data-aos="fade-up" className="col-md-4 col-sm-6 col-xs-12">
        <Link to={`/more?country=${country}&price=${price}`}>
            <div className="item">
                <img src={imgItem} alt="" />
                <div className="item-text">
                    <div className="item-title">{name}</div>
                    <div className="item-country">{country}</div>
                    <div className="item-price">{price + ' $'}</div>
                </div>
            </div>
        </Link>
        </div>

    
       
    )
}


export default Item;