import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  httpOpitions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
  }; 

  constructor(private http:HttpClient){}

  cadastrarUsuario(form:any) {
    this.http.post('http://localhost:3000/clientes',form.value, this.httpOpitions).subscribe();
   
   setTimeout(this.refresh, 2000);
  }

  refresh(){
    location.reload();
  }
}
