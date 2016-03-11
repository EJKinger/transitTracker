import {Page} from 'ionic-framework/ionic';
import {Http, Response} from 'angular2/http';
import 'rxjs';

@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 {
  data: any
  constructor(private _http: Http) {}
  getData() {
    const url: string = 'http://localhost:1337/marta';
    // var url = 'http://developer.itsmarta.com/BRDRestService/BRDRestService.svc/GetAllBus';
    this._http.get(url).subscribe(data => this.data = JSON.stringify(data));
  }
}
