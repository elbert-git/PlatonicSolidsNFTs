import React from 'react';
import ReactDom from 'react-dom';

export default function SelectedShape(props){
	if(props.mainShape != null){
		return(
			<div className="card selected-shape">
				<img src={props.mainShape.image_url} />
				<div className="lexend selected-shape-right">
					<h2>{props.mainShape.name}</h2>
					<div>20,000 ETH</div>
					<button link={props.mainShape.permalink}> aaa </button>
				</div>
			</div>
		);
	}
	else{
		return(<></>);
	}
}
