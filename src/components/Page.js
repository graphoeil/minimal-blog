// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';
import Footer from './Footer';
const $ = window.jQuery;
const gsap = window.gsap;
const $window = $(window);
const $bodyHTMl = $('body, html');

// Classe
class Page extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.pageRef = React.createRef();
		this.scrollPos = 0;
	};

	// Render
	render(){
		// Variables
		const { minimalPage } = this.props.minimalStore;
		// Return
		return(
			<div className="page" onClick={ this.handleClick.bind(this) } ref={ this.pageRef }>
				<div className="titreImgPage">
					<h3>{ minimalPage.titre }</h3>
					<div className="imgPage">
						<img src={ `http://www.graphoeilmultimedia.com/reactDev/minimalBlog/imagesWWW/${minimalPage.image}` } alt={ minimalPage.legende } />
					</div>
				</div>
				<div className="textePage">{ minimalPage.texte }</div>
				<Footer/>
			</div>
		)
	};

	// Referme la page
	handleClick(){
		let $page = $(this.pageRef.current);
		$bodyHTMl.scrollTop(this.scrollPos);
		$page.fadeOut(1000, function(){
			this.props.minimalStore.showHidePage();
		}.bind(this));
	};

	// didMount
	componentDidMount(){
		this.scrollPos = $window.scrollTop();
		let $page = $(this.pageRef.current);
		$page.fadeIn('slow', function(){
			gsap.to($bodyHTMl,{ scrollTop:0, ease:'power1.out', duration:1 });
		});
	};

};

// Export
export default (inject('minimalStore')(observer(Page)));