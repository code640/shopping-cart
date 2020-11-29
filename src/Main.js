import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Shipping from "./Shipping";
 
class Main extends Component {
  render() {
    return (
	 <HashRouter>
        <div>
          
          <h1>Golden Mart Beauty Supply</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/Shop">Shop</NavLink></li>
            <li><NavLink to="/Shipping">Shipping</NavLink></li>
          </ul>
          <div className="content">
			<Route path="/" component={Home}/>
            <Route path="/Shop" component={Shop}/>
            <Route path="/Shipping" component={Shipping}/>
             
          </div>
        </div>
		 </HashRouter>
    );
  }

}
 
export default Main;