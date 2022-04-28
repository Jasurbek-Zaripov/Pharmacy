import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pills',
  templateUrl: './pills.component.html',
  styleUrls: ['./pills.component.css']
})
export class PillsComponent implements OnInit {
  page = 1;
  sortBy = ''
  pills = [{
    name: 'Цитрамон-П, таб. №6',
    firma: "O'zkimyofarm, AO им. С.К. Исламбекова (Узбекистан)",
    price: '725 cўм',
    phone: '+998 95 420 07 07',
    region: 'Шайхантахурский район',
    pharmacy: 'Premium Pharm',
    img: ''
  }];
  constructor() { }

  ngOnInit(): void {
  }

}
