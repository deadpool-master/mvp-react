import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Shoppage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards : [
        {
          url : "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(121).jpg",
          title : "test1"
        },
        {
          url :"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(96).jpg" ,
          title : "test2"
        },
        {
          url : "https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg",
          title : "test3"
        }
      ]

    }
  }

  render(){
    return(
      
  <div>
      HELLLLLLLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO WORLD
  </div>

    )
  }
}
export default Shoppage;
