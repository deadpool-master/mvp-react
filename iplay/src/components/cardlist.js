import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Cardlist extends React.Component {
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
      <div className="row">
  <div className="col-md-12">

    <div id="mdb-lightbox-ui"></div>

    <div className="mdb-lightbox no-margin">

      {this.state.cards.map((card) => (
        <div>
        <figure className="col-md-4">
        <a className="black-text" href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(121).jpg"
          data-size="1600x1067">
          
          <h3 className="text-center my-3">{card.title}</h3>
        </a>
      </figure></div>
      )) 
      }

      
    </div>

  </div>
</div>

    )
  }
}
export default Cardlist;
