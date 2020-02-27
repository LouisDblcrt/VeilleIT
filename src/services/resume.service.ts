import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from 'src/app/model/article';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  api_key = "01596E34E4";

  access_token = "6a0a149b-f958-0a5a-507d-0b9c66";
  consumer_key = "90029-6e5808843cc3bdcdafe7a477";

  listOfUrl: Array<string> = [];
  listOfResume: Array<string> = [];
  listOfArticle: Array<Article> = [];

  constructor(private http: HttpClient) { }

  getUrls() {
    const optionRequete = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    this.http
      .get<any>(`https://getpocket.com/v3/get?consumer_key=${this.consumer_key}&access_token=${this.access_token}`, optionRequete)
      .subscribe(data => {
        var getValueArray = Object.values(data.list);

        getValueArray.forEach(element => {
          let article = new Article(element['resolved_title'], element['given_url']);
          this.listOfArticle.push(article);
        });
      });
  }

  getResumes() {
    this.listOfArticle.forEach(element => {
      this.http
        .get<any>(`https://api.smmry.com?SM_API_KEY=${this.api_key}&SM_URL=${element.url}`)
        .subscribe(data => {
          this.listOfResume.push(data.sm_api_content);
        });
    });
  }

  makeResume(): Array<string> {
    this.getUrls();
    this.getResumes()
    return this.listOfResume;
  }

}