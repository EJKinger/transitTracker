import {Page} from 'ionic-framework/ionic';
import {Http, Response} from 'angular2/http';
import {Config} from '/Users/ericking/Documents/projects/transitTracker/app/config';
import 'rxjs';

@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  data: any
  constructor(private _http: Http, private _config: Config) {}
  getData() {
    var url = 'http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=' + this._config.getMartaApiKey();
    // var url = 'http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetAllBus';
    this._http.get(url + '.json').subscribe(data => this.data = JSON.stringify(data));
  }
}
