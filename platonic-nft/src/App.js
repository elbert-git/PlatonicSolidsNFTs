import "./App.css";
import MainContent from './components/MainContent'
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
	//props and states
	const [shapesList, setShapesList] = useState([]);
	const [mainShapeList, setMainShapeList] = useState([]);
	 
	
	//useEffect On load hook
	useEffect(() => {
		const getShapesNFTs = async() => {
			const downloadedList = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xBc84f7c7074cC7451d90c8E909682d344ea8C3eE&order_direction=asc');
			const finalList = downloadedList.data.assets;
			finalList.splice(4,1);
			setShapesList(finalList);
			setMainShapeList([finalList[0]])
		}
		 
		return getShapesNFTs();
	}, [])
	 
	// handling onclick for main shape updater
	function onShapeClicked(data){
		setMainShapeList([data]);
	}
	 
	
	//returning html
	return (
		<div className="App">
			<img className="main-bg-image" src={require("./assets/PlatonicAssets/HeaderPage.png")} alt={require("./assets/PlatonicAssets/HeaderPage.png")} />
			<div className="zero-margin main-bg-image-bottom-panel main-bg-image-bottom-panel-shadow"/>
			<div className="zero-margin main-bg-image-bottom-panel-2"/>
			 
			
			<div className="layer-over">
				<MainContent nftList={shapesList} mainShape={mainShapeList} onShapeClicked={onShapeClicked}/>
			</div>
		</div>
	);
}

export default App;
