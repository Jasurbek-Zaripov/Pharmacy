import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-medical',
  templateUrl: './list-medical.component.html',
  styleUrls: ['./list-medical.component.css']
})
export class ListMedicalComponent implements OnInit {
  medicals = [
    { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Pharmacy_Prague_Dlouha_st..JPG/282px-Pharmacy_Prague_Dlouha_st..JPG', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
    , { name: 'Akbar Apteka', location: "Toshkent shahar,Yunosobod tuman,11-chorak,Ahmad Donish ko'chasi -8", time: '07:00 - 23:30', updateAt: '2022-04-27 12:24:06', img: '', phone: '+998900149669' }
  ];
  page = 1;
  sortBy=''
  constructor() { }

  ngOnInit(): void {
  }

}
