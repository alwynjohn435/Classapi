import React, { Component } from "react";

import Navbar from "./Navbar";
import Datawithapi from "./Datawithapi";
import { BrowserRouter,Routes,Route } from "react-router-dom";
export default class App extends Component{

    render(){

return(
<>
<BrowserRouter>
<Navbar/>
<Routes>

<Route path="/" element={<Datawithapi category="all"/>}></Route>
<Route path="/Sports" element={<Datawithapi category="Sports"/>}></Route>
<Route path="/Medical" element={<Datawithapi category="Medical"/>}></Route>
<Route path="/Technology" element={<Datawithapi category="Technology"/>}></Route>
<Route path="/Business" element={<Datawithapi category="Business"/>}></Route>
<Route path="/Entertainment" element={<Datawithapi category="Entertainment"/>}></Route>
<Route path="/Bitcoin" element={<Datawithapi category="Bitcoin"/>}></Route>
<Route path="/Education" element={<Datawithapi category="Education"/>}></Route>
<Route path="/Jokes" element={<Datawithapi category="Jokes"/>}></Route>
<Route path="/Games" element={<Datawithapi category="Games"/>}></Route>



</Routes>

</BrowserRouter>


</>
)

    }}


