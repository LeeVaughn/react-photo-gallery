import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config'

class PhotoContainer extends Component {

  state = {
    results: [],
    loading: true
  }

  componentDidMount() {
    this.performSearch("pizza");
  }

  performSearch(query) {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&in_gallery=&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <h1>React Gallery App</h1>
    )
  }
}

export default PhotoContainer;