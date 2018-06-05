import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-washington-dc',
  templateUrl: './washington-dc.component.html',
  styleUrls: ['./washington-dc.component.css']
})
export class WashingtonDcComponent implements OnInit {

  humidity: number;
  max_temp: number;
  avg_temp: number;
  low_temp: number;
  status: string;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {

    let observable = this._httpService.getWashingtonDcWeatherData()
    
    observable.subscribe(data => {
      this.humidity = data['main'].humidity
      this.max_temp = this.convertKelvinToFarenheit(data['main'].temp_max)
      this.avg_temp = this.convertKelvinToFarenheit(data['main'].temp)
      this.low_temp = this.convertKelvinToFarenheit(data['main'].temp_min)
      this.status = data['weather'][0].main
    })

  }

  convertKelvinToFarenheit(kelvinTemp){
    return Math.round(kelvinTemp * 9/5 - 459.67)
  }

}
