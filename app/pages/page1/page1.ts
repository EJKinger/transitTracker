import {Page} from 'ionic-framework/ionic';
import {config} from 'config';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  constructor: {config: config, http: Http}
  
})
export class Page1 {
  constructor(http: Http) {
    http.get('http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=' + config.MartaApiKey)
    .map(res => console.log(res));
  }
}
