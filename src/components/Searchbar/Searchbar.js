import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class Searchbar extends Component {
    state ={
      query: '',  
    }

handleChange = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase()})
}

handleSubmit = evt => {
    evt.preventDefault();
    if(this.state.query.trim() === ''){
      toast('Enter some word!')
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({query: ''})
  }

render() {
    return (
        <form 
        //   className={styles.SearchForm}
          onSubmit={this.handleSubmit}>         
          <input
            // className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button type="submit" 
        //   className={styles.SearchFormButton}
          >Search
          </button>
        </form>
    )
}}

Searchbar.propTypes={
  onSubmit: PropTypes.func,
  query: PropTypes.string
}

export default withRouter(Searchbar)