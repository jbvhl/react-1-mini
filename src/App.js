import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      friends: [],
      picture: ``,
      name: ``
    }
  }

  handleUpdatePicture(value) {
    this.setState({picture: value})
  }

  handleUpdateName(value) {
    this.setState({name: value})
  }

  handleAddFriend() {
    const friendsCopy = this.state.friends.slice()
    friendsCopy.push({
      picture: this.state.picture,
      name: this.state.name
    })

    this.setState({
      friends: friendsCopy,
      name: ``,
      picture: ``
    })
  }

  render() {
    const friends = this.state.friends.map((friend, index) => {
      return (
      <div key = {index}>
      <img src = {friend.picture} alt = {friend.name}/>
      <span>{friend.name}</span>
      </div>
      )
    })    
  
    return (
      <div className = 'App'>
      <label>URL to picture:</label>
        <input onChange = {(evt) => this.updateHandlePicture(evt.target.value)}
        value = {this.state.picture}/>
        <label>Name:</label>
        <input onChange = {(evt) => this.updateHandleName(evt.target.value)}
        value = {this.state.name}/>
        <button onClick = {() => this.handleAddFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}


export default App;
