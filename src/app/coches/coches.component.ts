import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
	selector: 'coches',
	templateUrl: './coches.component.html',
	providers: [PeticionesService]
	})

export class CochesComponent{
	public coche: Coche;
	public coches:Array<Coche>;
	public articulos;

	constructor(
			private _peticionesService: PeticionesService
		){
		this.coche = new Coche("","","");
		this.coches = [
			new Coche("Sail","1400","gris"),
			new Coche("aveo","1400","blanco")
		];
	}

	ngOnInit(){
		this._peticionesService.getArticulos().subscribe(
				result => {
						this.articulos = result;
						console.log(result);
					},
				error => {
						console.log("sd");
					}
			);
		console.log(this._peticionesService.getPrueba());
	}


	onSubmit(){
		this.coches.push(this.coche);
		this.coche = new Coche("","","");
	}
}