import React, {Component} from 'react';

export default class DisplayToday extends Component{

	removeThis(e){
		this.props.deleteItem(e, 'Today');
	}

	render(){
		return(
  		<div className="cell">
  			<h3>Today</h3>
  				{this.props.items.map((item, index) => {
  					return(
  						<div key={index} className="grid myitems">
  							<div className="cell -9of12">
  								<div className="content-title">
  									<span key="{index}"> ~ &nbsp;{item} &nbsp;</span>
  								</div>
  							</div>
  							<div className="cell -3of12">
  								<div className="content">
  									<button onClick={() => this.removeThis(index)} className="btn-default btn-ghost">X</button>
  								</div>
  							</div>
  						</div>
  					);
  				})
  			}
  		</div>
		);
	}
}