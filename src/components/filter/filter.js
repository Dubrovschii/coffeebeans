import './filter.css'

const Filter = (props) => {
    const buttonsData = [
        {country: 'Brazil', label: 'Brazil'},
        {country: 'Kenya', label: 'Kenya'},
        {country: 'Columbia', label: 'Columbia'},
    ];
    const buttons = buttonsData.map(({country, label}) => {
        const active = props.filter === country;
        const clazz = active ? 'tab-active' : 'filter-tab';
        return (
            <button 
                type='button'
                className={`filter-tab ${clazz}`}
                key={country}
                onClick={() => props.onFilterSelect(country)}
                >
                {label}

            </button>
        )
    })
    return(
        <div className="filter-tabs">
                        <label htmlFor="tabs">Or filter</label>

                        <div className="filter-tabs-wrap">
                            {buttons}
                        </div>
                    </div>
    )
}

export default Filter;