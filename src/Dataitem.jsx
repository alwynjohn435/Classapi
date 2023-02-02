import React, { Component } from "react";
export default class Dataitem extends Component{


render(){

return(

<div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
<div className="card">
  <img src={this.props.image} className="card-img-top" alt="..." height="100px"/>
  <div className="card-body">
    <h5 className="card-title" style={{height:"100px"}}>{this.props.title.slice(0,60)+"..."}</h5>
    <h5 className="card-title">{this.props.date}</h5>
    <p className="card-text" style={{height:"300px"}}>{this.props.description}</p>
    <a href={this.props.url} className="btn btn-primary">Go somewhere</a>
  </div>
</div>

</div>



)




}



}