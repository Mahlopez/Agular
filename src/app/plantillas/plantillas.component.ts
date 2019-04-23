import { Component } from '@angular/core';

@Component({
	selector: 'plantillas',
	templateUrl: './plantillas.component.html',
})

export class PlantillasComponent{
	public titulo;
	public administrador;

	constructor(){
		this.titulo = "plantillas ng-template";
		this.administrador = true;
	}

	cambiar(para){
		this.administrador = para;
	}
}