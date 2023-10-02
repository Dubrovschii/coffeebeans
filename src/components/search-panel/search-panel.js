import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term: term})
        this.props.onUpdateSearch(term)
    }

    render(){
        return (
            <input type="text"
                    className="our-filter-input search-input"
                    placeholder="start typing here..."
                    value={this.state.term}
                    onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;