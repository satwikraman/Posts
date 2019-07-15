import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import Post from './components/Post'

class App extends Component {
  state = {
    data: {}
  }
  componentDidMount() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'https://mobile-tha-server.firebaseapp.com/walmartproducts/1/30'
    fetch(proxyUrl + targetUrl)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props} data={this.state.data} />} />
            <Route path='/:post_id'
              render={(props) => <Post {...props} data={this.state.data} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
