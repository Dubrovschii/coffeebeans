import React,{ Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../../pages/home/home';
import Our from '../../pages/our/our';
import More from '../../pages/more/more';
import Pleasure from '../../pages/pleasure/pleasure';
import './app.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        data: [
        { name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "16.99", id: 1 },
        { name: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "7.99" ,id: 2 },
        { name: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "9.99", id: 3 },
        { name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "12.99", id: 4 },
        { name: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "8.99" ,id: 5 },
        { name: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "11.99", id: 6 },
        { name: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "14.99", id: 7 },
        { name: "AROMISTICO Coffee 1 kg", country: "Brazil", price: "14.99", id: 8 },
        { name: "AROMISTICO Coffee 1 kg", country: "Kenya", price: "12.99" ,id: 9 },
        { name: "AROMISTICO Coffee 1 kg", country: "Columbia", price: "11.99", id: 10 },
    
      ],
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
    const {data, term, filter} = this.state;
    const visibleData = this.filterPost(this.searchCoffee(data, term),filter);
    return(
      <Router>
      <div>
        
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/our" element={<Our data={visibleData} onUpdateSearch={this.onUpdateSearch} />} />
          <Route path="/more" element={<More data={data}/>} />
          <Route path="/pleasure" element={<Pleasure data={visibleData}/>} />
        </Routes>
       
        
      </div>
      
    </Router>
    
    )
  }
}

export default App;
