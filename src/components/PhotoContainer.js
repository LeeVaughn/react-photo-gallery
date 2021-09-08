import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';
import Photos from './Photos';

class PhotoContainer extends Component {

  state = {
    results: [],
    loading: true
  }

  componentDidMount() {
    this.performSearch(this.props.data);
  }

  performSearch(query) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&in_gallery=&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response.data.photos)
      this.setState({
        results: response.data.photos.photo,
        loading: false
      })
    })
    .catch(error => {
      console.log("Error fetching data", error)
    })
    .finally(function() {
      // always executed
    });
  }

  render() {
    return (
      <div className="photo-container">
        <h2>Results</h2>
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