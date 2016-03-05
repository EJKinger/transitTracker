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
    this._http.get('/marta').subscribe(data => this.data = data);
  }
}
