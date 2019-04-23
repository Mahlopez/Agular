import {Injectable} from '@angular/core';

@Injectable()
export class RopaService{

	public nombre_prenda = 'Pantalones vaqueros';
	public coleccion_ropa = ['Pantalon blanco', 'camisa roja'];
	
	prueba(){
		return this.nombre_prenda;
	}

	addRopa(nombre_prenda:string):Array<string>{
		this.coleccion_ropa.push(nombre_prenda);
		return this.getRopa();
	}

	getRopa(){
		return this.coleccion_ropa;
	}
	

	eliminarPrenda(indiceDelete:number){
		alert(indiceDelete);
		this.coleccion_ropa.splice(indiceDelete,1);
	}
}