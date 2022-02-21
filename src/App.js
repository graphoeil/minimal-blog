// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';
import './css/displayMain.css';
import FondDegrade from './components/FondDegrade';
import Header from './components/Header';
import Galerie from './components/Galerie';
import Footer from './components/Footer';
import Page from './components/Page';

// Classe
class App extends React.Component{

	// Render
	render(){
		return(
			<React.Fragment>

				{/* Fond dégradé */}
				<FondDegrade/>
				{/* Fond dégradé */}

				{/* Page */}
				{ this.props.minimalStore.minimalPageVisible && <Page/> }
				{/* Page */}

				{/* Header */}
				<Header/>
				{/* Header */}

				{/* Galerie */}
				<Galerie/>
				{/* Galerie */}

				{/* Footer */}
				<Footer/>
				{/* Footer */}

			</React.Fragment>
		)
	};

};

// Export
export default inject('minimalStore')(observer(App));