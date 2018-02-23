import React, { Component } from 'react';


class Card extends Component{
    render(){
        return(
            <div className="col-sm-4">
            <div className="card" style={{width: "100%",height:"32rem",marginTop:"15px"}}>
            <img className="card-img-top" src={this.props.Img} alt="Card image cap" style={{height:"4C0%"}}/>
            <div className="card-body">
              <h5 className="card-title">{this.props.name}</h5>
     
              <p className="card-text">{this.props.descrip} </p>
              <p className="card-text">Original release date:{this.props.Date} </p>
              <a href={this.props.link} target="_blank" className="btn btn-primary">GO to Site</a>
            </div>
          </div>
          </div>
        )

    }
}
export default Card;