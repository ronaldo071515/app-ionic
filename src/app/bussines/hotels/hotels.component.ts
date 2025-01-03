import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { parseString } from 'xml2js';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hoteles',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class HotelesComponent implements OnInit {
  hoteles: any[] = [
    {
      nombre: 'Hotel 1',
      estrellas: 5,
      precio: 1000
    },
    {
      nombre: 'Hotel 2',
      estrellas: 4,
      precio: 800
    }
  ];
  filteredHoteles: any[] = [];
  searchQuery: string = '';
  loading = false;

  constructor() {}

  ngOnInit() {
    this.getHoteles();
  }

  getHoteles() {
    // Simulación de petición HTTP
    // this.http.get('https://api-dev.bestday.net/AffiliateService/v2.0/AffiliateService.svc/restful/GetHotels?d=2&l=ESP&a=4085fa34a0', { responseType: 'text' }).subscribe(
    //   (response) => {
    //     parseString(response, { explicitArray: false }, (err, result) => {
    //       if (err) {
    //         console.error('Error al convertir XML a JSON:', err);
    //         return;
    //       }
    //       this.hoteles = result.hoteles.hotel || [];
    //       this.filteredHoteles = this.hoteles; // Inicializa con todos los hoteles
    //       this.loading = false;
    //     });
    //   },
    //   (error) => {
    //     console.error('Error en la petición HTTP:', error);
    //     this.loading = false;
    //   }
    // );
  }

  filterHoteles() {
    const query = this.searchQuery.toLowerCase();
    this.filteredHoteles = this.hoteles.filter((hotel) =>
      hotel.nombre.toLowerCase().includes(query)
    );
  }
}
