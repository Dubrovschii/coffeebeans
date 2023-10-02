import { Component } from "react";
import Header from "../../components/header/header";
import ItemList from "../../components/itemlist/itemList";
import SearchPanel from "../../components/search-panel/search-panel";
import Footer from "../../components/footer/footer";
import ArrowBack from "../../components/arrow-back/arrowback";
import ArrowUp from "../../components/arrow-up/arrowup";
import ourBg from './our-bg.png'
import imgGirl from './girl.png'

import './bg.css'
import './our.css'
import BeansBlack from "../../components/beansBlack/beansblack";
import Filter from "../../components/filter/filter";


class Our extends Component{
    constructor(props){
        super(props);
        this.state = {
        
            term: '',
            filter: '',
        }
    }
    searchCoffee = (items, term) =>{
        if(term.length === 0){
          return items;
        }
        return items.filter(item => {
          return item.country.indexOf(term) > -1
        })
      }
    onUpdateSearch = (term) => {
        this.setState({term: term})
        
    }
    filterPost = (items, filter) => {
        switch (filter) {
          case 'Brazil':
            return items.filter(item => item.country === 'Brazil')
          case 'Kenya':
            return items.filter(item => item.country === 'Kenya')
          case 'Columbia':
            return items.filter(item => item.country === 'Columbia')
          default:
            return items;
        }
      }
      onFilterSelect = (filter) => {
        this.setState({filter});
      }

    render(){
        const divStyle = {
            backgroundImage:`url(${ourBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center', 
        }
        const { data } = this.props;
        const { term } = this.state;
        const { filter } = this.state;
        const visibleData = this.filterPost(this.searchCoffee(data, term),filter);
        return(
            <div className="our">
                <div className="our-wrap" style={divStyle} >
                   <Header/> 
                   <h2 className="our-title">Our Coffee</h2>
                </div>
                <div className="our-promo">
                   
                    <div className="our-block">
                    <img src={imgGirl} alt="" />
                    </div>
                    <div className="our-block">
                        <h3 className="our-block-title">About our beans</h3>
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
                
                <div className="our-filter">
                    <div className="our-filter-search">
                        <label htmlFor="text">Lookiing for</label>
                        <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    </div>
                   <Filter filter={filter} onFilterSelect={this.onFilterSelect}/> 
                </div>

                
                <ItemList data={visibleData}/>

                    
               
                <ArrowBack />
                <ArrowUp/>
                <Footer/>
            </div>
            
               
            
        )
    }
}

export default Our;