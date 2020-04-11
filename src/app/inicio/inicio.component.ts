import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./style.css', './responsive.css']
})

export class InicioComponent implements OnInit {


  titulo = 'FERME'

  constructor() { }

  ngOnInit(): void {
  }

}
