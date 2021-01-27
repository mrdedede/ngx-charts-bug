import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  @Input() data: {name: string, value: number}[]
  @Input() view: number[]
  @Input() gradient: boolean
  @Input() showLegend: boolean
  @Input() showLabels: boolean
  @Input() isDoughnut: boolean
  @Input() legendPosition: string
  @Input() legendTitle: string
  total: number

  ngOnInit() {
    this.total = 0
    this.data.forEach(data => {
      this.total = this.total + data.value
    })
  }

  tooltipText = function tooltipText(val: any): string {
    let percentage = (val.data.value/this.total)*100
    return `${val.data.label} <br> ${percentage.toFixed(2)}%`
  }.bind(this)

  labelFormatting = function labelFormatting(val: string): string {
    let foundData = this.data.find(data => data.name === val)
    return `${((foundData.value/this.total)*100).toFixed(2)}%`
  }.bind(this)
}
