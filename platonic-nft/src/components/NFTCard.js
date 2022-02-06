import React from 'react';
import ReactDom from 'react-dom';

export default function NFTCard(props){
	let className = "nft-card lexend";
	
	if(props.mainShape != null){
		if(props.nftData.name === props.mainShape.name){
			className += " nft-card-selected";
		}
	}
	
	function handleClick(){
		props.onShapeClicked(props.nftData);
	}
	 
	 
	return(
		<div className={className} onClick={handleClick}>
			<img className="zero-padding zero-margin" src={props.nftData.image_url} alt={require("../assets/PlatonicAssets/Cube.png")}/>
			<h3>{props.nftData.name}</h3>
			<p>20,000 ETH</p>
		</div>
	)
}
