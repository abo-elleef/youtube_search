import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.setState({term: ''})
    }
    onSearchChanges(term){
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    }
    render(){
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <input onChange={(e)=> this.onSearchChanges(e.target.value)} />
                </div>
            </div>
        );

    }
}


export default SearchBar;