import React from 'react';
import ReactDom from 'react-dom';
import NFTCard from './NFTCard'

export default function NFTCollection(props){
	
	return(
		<div className="nft-collection">
		{props.nftList.map(data => {
			return <NFTCard mainShape={props.mainShape} nftData={data} key={data.token_id} onShapeClicked={props.onShapeClicked}/>
		})}
		</div>
	)
}
