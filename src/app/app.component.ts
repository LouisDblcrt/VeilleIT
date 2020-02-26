import { Component } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import * as xml2js from "xml2js";
import { NewsRss } from './news-rss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'VeilleIT';
  access_token="6a0a149b-f958-0a5a-507d-0b9c66";
  consumer_key="90029-6e5808843cc3bdcdafe7a477"
  RssData: NewsRss;
  constructor(private http: HttpClient) {}
  GetRssFeedData() {
    const optionRequete = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*'
      })
    };
    this.http
      .post<any>(`https://getpocket.com/v3/get?consumer_key=${this.consumer_key}&access_token=${this.access_token}`, optionRequete)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }
}
export interface IRssData {}

