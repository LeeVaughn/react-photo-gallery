import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';
import Photos from './Photos';

class PhotoContainer extends Component {

  state = {
    results: [],
    title: "",
    loading: true
  }

  componentDidMount() {
    this.performSearch(this.props.data);
  }

  // Need to include a conditional to to avoid an infinite loop: https://www.geeksforgeeks.org/reactjs-componentdidupdate-method/
  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.performSearch(this.props.data);
    }
  }

  performSearch(query) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&in_gallery=&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        results: response.data.photos.photo,
        title: query,
        loading: false
      })
    })
    .catch(error => {
      console.log("Error fetching data", error)
    })

    // resets loading indicator
    this.setState({
      loading: true
    })
  }

  render() {
    return (
      <div className="photo-container">
        <h2>Images for { this.state.title }</h2>
        <ul>
          {
            (this.state.loading) ? <p>Loading...</p> : <Photos results={ this.state.results } />
          }
        </ul>
      </div>
    )
  }
}

export default PhotoContainer;