// Imports
import { observable, makeObservable, action } from 'mobx';
import { MinimalVisuels } from '../js/MinimalData';

// Classe
class MinimalStore{

	// Constructeur
	constructor(){
		// Rendre une variable observable
		makeObservable(this,{
			// Galerie
			setVisuelEnCours:action,
			setVisuelHoverID:action,
			minimalVisuelDOM:observable,
			minimalVisuelHoverID:observable,
			// Page
			setPageActive:action,
			showHidePage:action,
			minimalPage:observable,
			minimalPageVisible:observable,
			// Footer
			footerVisible:observable
		});
	};

	// Variables
	// 
	// Galerie
	minimalVisuel = MinimalVisuels.slice(0);
	minimalVisuelDOM = this.minimalVisuel.splice(0,1);
	minimalVisuelEnCours = -1;
	minimalVisuelTotal = this.minimalVisuel.length - 1;
	minimalVisuelHoverID = null;
	// Page
	minimalPage = this.minimalVisuel[0];
	minimalPageVisible = false;
	// Footer
	footerVisible = false;

	// Méthodes
	//
	// Galerie
	setVisuelEnCours = () => {
		if (this.minimalVisuelEnCours < this.minimalVisuelTotal){
			this.minimalVisuelEnCours++;
			this.minimalVisuelDOM.push(this.minimalVisuel[this.minimalVisuelEnCours]);
		}
		if (this.minimalVisuelEnCours === this.minimalVisuelTotal - 1){
			this.footerVisible = true;
		}
	};
	setVisuelHoverID = (id) => {
		if (id){
			this.minimalVisuelHoverID = id;
		} else {
			this.minimalVisuelHoverID = null;
		}
	};
	// Page
	setPageActive = (page) => {
		this.minimalPage = page;
		this.showHidePage();
	};
	showHidePage(){
		this.minimalPageVisible = !this.minimalPageVisible;
	};

};

// Export
export default MinimalStore;