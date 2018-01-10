import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    onSearchChanges(term) {
        this.setState({term: term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="form-group">
                <label for="exampleInputEmail1">You Tube Search</label>
                <input onChange={(e) => this.onSearchChanges(e.target.value)}
                       aria-describedby="emailHelp" placeholder="Type To Search" className="form-control"/>
                <small id="emailHelp" className="form-text text-muted">
                    videos will be shown as soon as you finish typing.
                </small>
            </div>
        );

    }
}


export default SearchBar;