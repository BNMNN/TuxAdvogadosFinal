import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../modal/clientes.modal';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  texto = "Cadastro";
  texto2 = "Usuários Cadastrados";
  texto3 = "Usuários Idosos";
  control = true;
  nameButton = "Exibir Usuários com mais de 60 anos";

  usuarios: Clientes[] = [];
  constructor(private http:HttpClient){}


  ngOnInit(): void {
    this.http.get<Clientes[]>('http://localhost:3000/clientes').subscribe(caixa => this.usuarios=caixa);
  }
  


  obterUsuariosMaisVelhos() {
    /* this.clientes =  this.usuarios.filter(usuario => usuario.idade > 60); */
    /* location.reload(); */
    this.control ? this.nameButton = "Exibir Todos" : this.nameButton = 'Exibir Usuários com mais de 60 anos';
    return this.control = !this.control;
  }
}