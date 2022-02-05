import React from 'react';
import ReactDom from 'react-dom';
import '../App.css'
import NFTCollection from './Collection'
import SelectedShape from './SelectedShape'

export default function MainContent(props){
	console.log(props.onShapeClicked);
	//data handle
	return(
		<>
		<div className="center-child full-width">
			<div className="card title-card center-text">
				<h1 className="lexend">Platonic Solids</h1>
				<div className="raleway">Friendly, Casual, Non-Romantic, Solid</div>
			</div>
			<div className="card title-card center-text">
				<h2 className="lexend">Own the shapes</h2>
				<div className="raleway">Now you can own these universal mathematical concepts. Have physicists, mathematcians, teachers, artists pay royalties to you every time they use these shapes</div>
			</div>
			
			<SelectedShape mainShape={props.mainShape[0]}/>
			 
			<NFTCollection nftList={props.nftList} onShapeClicked={props.onShapeClicked}/>
			 
			<div className="card title-card center-text">
				<h2 className="lexend">Own the shapes</h2>
				<div className="raleway">Now you can own these universal mathematical concepts. Have physicists, mathematcians, teachers, artists pay royalties to you every time they use these shapes</div>
			</div>
		</div>
		</>
	)
}
