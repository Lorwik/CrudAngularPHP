import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  API: string = 'http://192.168.1.5/crudangular/';

  constructor(private clienteHttp:HttpClient) { }

  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"index.php?insertar=1", datosEmpleado);
  }

  ObtenerEmpleados() {
    return this.clienteHttp.get(this.API)
  }

  BorrarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"index.php?borrar="+id);
  }

  ObtenerEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"index.php?consultar="+id);
  }

  EditarEmpleado(id:any, datosEmpleado:any):Observable<any>{
    return this.clienteHttp.post(this.API+"index.php?actualizar="+id, datosEmpleado);
  }

}
