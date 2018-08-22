import React, {Component} from 'react';

export default class Header extends Component{
  render(){
    return(
      <div className="grid header">
        <div className="salutation cell -8of12">
   			  <div className="content">
            <div className="name">
   					  <center>
                <b> {this.props.nam} </b>
                <hr/>
   					  </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}