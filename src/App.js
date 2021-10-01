
import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
// import productssProductss  from "./productss";

function App() {
  return (
    <BrowserRouter>
    <div className="grid_container">
    <header className="raw">
        <div>
            <a className="brand" href="/">amazone</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/sign_in">sign in</a>
        </div>
    </header>
    
    <main>
        <Route path="/product/:id"  component={ProductScreen}></Route>
    <Route path="/" component={HomeScreen} exact></Route>  
    </main>
    <footer className="raw center">
        All right reserved
    </footer>

</div>
</BrowserRouter>
  );
}

export default App;
