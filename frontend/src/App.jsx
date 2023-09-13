import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className='App' style={{textAlign: "center"}}>
        <ToastContainer position='top-center' />
        <Switch>
          <Route exact path="/" component={Home}></Route> 
          <Route path="/addcontact" component={AddEdit}></Route> 
          <Route path="/update/:id" component={AddEdit}></Route> 
          <Route path="/view/:id" component={View}></Route> 
        </Switch>
      </div>
    </BrowserRouter> 
  )
}

export default App;
