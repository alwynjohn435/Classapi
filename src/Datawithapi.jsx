import React, { Component } from "react";
import Dataitem from "./Dataitem";
import './Classmystyle.css';
export default class Datawithapi extends Component{


constructor(){

    super()
    this.state={
        details:[]
    }
}
async getDetails(){

    var rawdata= await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=eec8dcb2875a4aba87463dc0fc7847a9`)

    var data =await rawdata.json()
    console.log(data)
    this.setState({ details: data.articles })
}

componentDidMount(){
    this.getDetails()
}

componentDidUpdate(old){
    if(old.category!=this.props.category){
        this.getDetails()
    }


}



render(){

return(
<>
<div className="bg2">
<h2 className="mt-5 text-center p-4 mb-5">Data App</h2>

<div className="container">
<div className="row">


{

this.state.details.map((item,index)=>{

return <Dataitem

title={item.title}
author={item.author}
date={item.publishedAt}
description={item.description}
image={item.urlToImage}
url={item.url}

/>

})


}




</div>





</div>
</div>
</>

)

}



}