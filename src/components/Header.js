// Imports
import React from 'react';

// Classe
class Header extends React.Component{

	// Render
	render(){
		return(
			<header>
				<h1>Minimal Blog</h1>
				<p>Un blog minimaliste inspiré de <a href="https://tympanus.net/Development/GridLayoutScrollableContent/" target="_blank" rel="noreferrer">Codrops</a>, développé 
				avec <a href="https://fr.reactjs.org/" target="_blank" rel="noreferrer">React</a>, <a href="https://mobx.js.org/" target="_blank" rel="noreferrer">MobX</a>, 
				<a href="https://jquery.com/" target="_blank" rel="noreferrer">jQuery</a>, <a href="https://greensock.com/" target="_blank" rel="noreferrer">Greensock</a> 
				et <a href="https://isotope.metafizzy.co/" target="_blank" rel="noreferrer">Isotope</a>
				</p>
			</header>
		)
	};

};

// Export
export default Header;