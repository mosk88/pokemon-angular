import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-tableau-de-bord',
  standalone: true,
  imports: [BaseChartDirective,RouterLink],
  templateUrl: './tableau-de-bord.component.html',
  styleUrl: './tableau-de-bord.component.css'
})
export class TableauDeBordComponent {
data: ChartData<'bar'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
    
      data: this.getData()
  }]
  }

  getData(){
    return [10, 20, 30, 40, 50, 60]
  }
}
