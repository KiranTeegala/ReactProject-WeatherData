import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreaters} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
    
    constructor(props){
        super(props);
        this.state={term:''};
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmission=this.onFormSubmission.bind(this);
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term:event.target.value});
        
    }

    onFormSubmission(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }
    render(){
        return (
            <form onSubmit={this.onFormSubmission} className="input-group">
            <input 
            placeholder="enter the city that you need to forecast"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
            />
            <span className="input-group-btn">
                <button type= "submit" className="btn btn-secondary">
                Submit
                </button>
            </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreaters({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);