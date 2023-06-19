import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import { useSelector } from 'react-redux';
import { AppState } from './types/states';
import Navbar from './components/Navbar'
function App() {

  const stateSelector = (state:AppState) => state;
  const state = useSelector(stateSelector);

  let messageArea = <h4 style={{height:40}}></h4>
  if(state.login.loading) {
      messageArea = <h4 style={{height:40}}>Loading...</h4>
  }
  if(state.shopping.error) {
    messageArea = <h4 style={{height:40}}>{state.shopping.error}</h4>
  }
  if(state.login.error) {
    messageArea = <h4 style={{height:40}}>{state.login.error}</h4>
  }
  return (
    <div className="App">
      <Navbar/>
      {messageArea}
      <LoginPage/>
    </div>
  );
}

export default App;
