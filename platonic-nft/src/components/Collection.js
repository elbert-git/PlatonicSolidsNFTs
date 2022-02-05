import React from 'react';
import ReactDom from 'react-dom';
import NFTCard from './NFTCard'

export default function NFTCollection(props){
	console.log(props.onShapeClicked);
	
	return(
		<div className="nft-collection">
		{props.nftList.map(data => {
			return <NFTCard nftData={data} key={data.token_id} onShapeClicked={props.onShapeClicked}/>
		})}
		</div>
	)
}
