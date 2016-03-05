import {Page} from 'ionic-framework/ionic';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  constructor: {http: Http}
  
})
export class Page1 {
  constructor(http: Http) {
    var url = 'http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=' + Window.MartaApiKey; 
    http.get(url).subscribe({next: (value) => console.log(value)});
  }
}
