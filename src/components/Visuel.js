// Imports
import React from 'react';
import { inject, observer } from 'mobx-react';
const $ = window.jQuery;
const gsap = window.gsap;
const SplitText = window.SplitText;
const Modernizr = window.Modernizr;

// Classe
class Visuel extends React.Component{

	// Constructeur
	constructor(props){
		super(props);
		this.state = { isVisible:false };
		this.visuelRef = React.createRef();
		this.spanRef = React.createRef();
	};

	// Render
	render(){
		// Variables
		const { visuel } = this.props;
		// Return
		return(
			<div className={ `visuel ${ this.isVisible() } ${ this.isFlou() }` } ref={ this.visuelRef }
				onMouseOver={ this.handleHover.bind(this) } onMouseOut={ this.handleHover.bind(this) }
				onClick={ this.handleClick.bind(this) }>
				<div className="innerVisuel">
					<h2>{ visuel.titre }</h2>
					<span ref={ this.spanRef }>{ visuel.reference }</span>
					<div className="imgVisuel">
						<img src={ `http://www.graphoeilmultimedia.com/reactDev/minimalBlog/imagesWWW/${visuel.image}` } alt={ visuel.legende }
							onLoad={ this.handleImgLoad.bind(this) }/>
					</div>
				</div>
			</div>
		)
	};

	// ClassName
	isVisible(){
		if (this.state.isVisible){ return 'visible'; } else { return ''; }
	};
	isFlou(){
		if (!Modernizr.touchevents){
			if (this.props.minimalStore.minimalVisuelHoverID !== null){
				if (this.props.minimalStore.minimalVisuelHoverID === this.props.visuel.id){
					return '';
				} else {
					return 'flou';
				}
			} else {
				return '';
			}
		} else {
			return '';
		}
	};

	// Hover innerVisuel
	handleHover(e){
		if (!Modernizr.touchevents){
			if (e.type === 'mouseover'){
				this.props.minimalStore.setVisuelHoverID(this.props.visuel.id);
				this.tlRef.play();
			} else {
				this.props.minimalStore.setVisuelHoverID();
				this.tlRef.pause(0);
			}
		}
	};

	// Click visuel
	handleClick(){
		this.props.minimalStore.setPageActive(this.props.visuel);
	};

	// Image chargée
	handleImgLoad(){
		this.setState({ isVisible:true }, function(){
			this.props.minimalStore.setVisuelEnCours();
			// Isotope
			const $visuel = $(this.visuelRef.current);
			$('.galerie').isotope().append($visuel).isotope('appended',$visuel).isotope('reloadItems');
		});
	};

	// didMount
	componentDidMount(){
		// GSAP Timeline
		this.tlRef = gsap.timeline({ paused:true });
		const $refSpan = $(this.spanRef.current);
		const spanSplit = new SplitText($refSpan,{ type:'chars' });
		spanSplit.split({ type:'chars' });
		this.tlRef.fromTo(spanSplit.chars,{ y:-16 },{ duration:0.3, y:0, stagger:{ each:0.1, yoyo:true, repeat:-1 } });
	};

};

// Export
export default inject('minimalStore')(observer(Visuel));