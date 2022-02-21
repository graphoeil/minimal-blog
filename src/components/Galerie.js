// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';
import Visuel from './Visuel';

// Classe
class Galerie extends React.Component{

	// Render
	render(){
		return(
			<main>
				<div className="galerie">
					{
						this.props.minimalStore.minimalVisuelDOM.map((visuel, index) => {
							return <Visuel key={ visuel.id } visuel={ visuel }/>
						})
					}
				</div>
			</main>
		)
	};

};

// Export
export default inject('minimalStore')(observer(Galerie));