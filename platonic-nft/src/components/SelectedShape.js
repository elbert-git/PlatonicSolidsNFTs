import React from 'react';
import ReactDom from 'react-dom';

export default function SelectedShape(props){
	function goToOpenSea(){
		window.open(props.mainShape.permalink);
	}
	 
	if(props.mainShape != null){
		return(
			<div className="card selected-shape">
				<img src={props.mainShape.image_url} />
				<div className="lexend selected-shape-right">
					<h2>{props.mainShape.name}</h2>
				<div className="selected-shape-bottom-div">
					<div>20,000 ETH</div>
					<button onClick={goToOpenSea}> Make Offer </button>
				</div>
				</div>
			</div>
		);
	}
	else{
		return(<></>);
	}
}
