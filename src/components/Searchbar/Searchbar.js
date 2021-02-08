import React, { Component } from 'react'
// import styles from './Searchbar.module.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types'
import {Link, withRouter} from 'react-router-dom'

class Searchbar extends Component {
    state ={
      query: '',  
    }

handleQueryChange = evt => {
    this.setState({ query: evt.currentTarget.value.toLowerCase()})
}

handleSubmit = evt => {
    evt.preventDefault();
    if(this.state.query.trim() === ''){
      toast('Enter some word!')
      return;
    }

    this.props.onSubmit(this.state.query);
    // this.setState({query: ''})
  }
// handleSubmit = query =>{
//     this.setState({query})
//     console.log(query);
// }

render() {
    return (
        <form 
        //   className={styles.SearchForm}
          onSubmit={this.handleSubmit}>
          <button type="submit" 
        //   className={styles.SearchFormButton}
          >
            <span 
            // className={styles.SearchFormButtonLabel}
            >Search</span>
          </button>
          <input
            // className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
        </form>
    )
}}

export default withRouter(Searchbar)