// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';

// Classe
class Footer extends React.Component{

	// Render
	render(){
		return(
			this.props.minimalStore.footerVisible && <footer><b>Graphoeil</b> | 2021</footer>
		)
	};

};

// Export
export default inject('minimalStore')(observer(Footer));