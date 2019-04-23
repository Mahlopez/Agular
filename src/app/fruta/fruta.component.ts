import { Component } from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl: './fruta.Component.html'
	})

export class FrutaComponent{
	public nombre_componente:string;
	public listado_frutas:string;
	public trabajos:Array<any> = ['Carpintero',44,'Fontanero'];

	constructor(){
		this.nombre_componente = 'milton';
		this.listado_frutas = 'pera, manzana, mora';
	}

	ngOnInit(){
		this.cambiarNombre();
		this.cambiarEdad('azul, amarillo, rojo');
	}

	cambiarNombre(){
		this.nombre_componente = 'nuevo nombre';
	}

	cambiarEdad(lista){
		this.listado_frutas = lista;
	}
}
