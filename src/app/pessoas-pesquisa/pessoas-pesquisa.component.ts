import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class AppPessoasPesquisaComponent {

  pessoas = [
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG',
      status: true },
    { nome: 'Sebastião Silva', cidade: 'São Paulo', estado: 'SP',
      status: false },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC',
        status: true },
    { nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR',
      status: true },
    { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ',
      status: false },
    { nome: 'Ronaldo Assis', cidade: 'Porto Alegre', estado: 'RS',
      status: true },
    { nome: 'Renato Albani', cidade: 'Vitória', estado: 'ES',
      status: false },
    { nome: 'Michel Telló', cidade: 'Campo Grande', estado: 'MS',
      status: true }
  ];  

}
