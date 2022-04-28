import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  chart: any;
  @Output() exit = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit(): void {
    this.chart = document.getElementById('canvas');
    Chart.register(...registerables);
    this.loadChart();
  }

  loadChart() {
    new Chart(this.chart, {
      type: 'line',
      data: {
        labels: ['a', 'b', 'c', 'd', 'e',],
        datasets: [{
          label: 'Admin Page',
          data: [12, 19, 3, 5, 2, 3, 30, 15, 45, 15, 20, 79, 65, 15],
          borderColor: 'blue',
          borderJoinStyle: 'bevel'
        }, {
          label: 'Un',
          data: [15, 65, 79, 20, 15, 45, 15, 30, 3, 2, 5, 3, 19, 12],
          borderColor: 'red',
          fill: false
        }]
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInBounce',
            from: 0.05,
            to: 0,
            loop: true
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
