import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  onSearch(event: any) {
    const searchValue = event.detail.value;
    console.log('Buscando:', searchValue);
  }

}
