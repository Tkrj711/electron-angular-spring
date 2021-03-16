import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable()
export class HttpClientService {
  constructor(private http: HttpClient) { }

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  rootURL = 'http://localhost:4200/api';

  getItems() {
    return this.http.get(this.rootURL + '/items' ).toPromise().then((res) => {
      return res;
    })
    .catch(this.errorHandler);
  }

  private errorHandler(err) {
    console.log('Error occured.', err);
    return Promise.reject(err.message || err);
  }
}