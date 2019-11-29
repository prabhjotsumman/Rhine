import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
// import '@firebase/database'
import Appbar from './Components/Appbar';
import Container from './Components/Container';

export default class App extends Component {
  componentDidMount() {
    const productsRef = firebase.database().ref('products');
    productsRef.on('value', (snapshot) => {
      let products = snapshot.val();
      let newState = [];
      for (let product in products) {
        newState.push(product);
      }
      console.log(products);
    })
  }
  render() {
    return (
      <>
        <Appbar />
        <Container />
      </>
    )
  }
}