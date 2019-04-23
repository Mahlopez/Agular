import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
	selector: 'empleado-tag',
	templateUrl: './empleado.component.html'
	})
export class EmpleadoComponent{
	public titulo = 'Componente Empleados';
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public color_seleccionado:string;

	constructor(){
		this.empleado = new Empleado('david perez',45,'cocinero',
			true);
		this.trabajadores = [
		new Empleado('ANDRES BELOO',35,'chef',false),
		new Empleado('EL PADRINO',25,'ing',true),
		new Empleado('EL LOCO',5,'desempleado',false)
		];
		this.trabajador_externo = false;
		this.color = 'red';
		this.color_seleccionado ='#ccc';
	}

	ngOnInit(){
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	cambiarExterno(valor){
		this.trabajador_externo = valor;
	}
}