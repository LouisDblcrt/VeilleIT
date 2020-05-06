import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/services/resume.service';
import { Article } from '../model/article';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-of-resume',
  templateUrl: './list-of-resume.component.html',
  styleUrls: ['./list-of-resume.component.scss']
})
export class ListOfResumeComponent implements OnInit {

  listToShow: Array<Article>;
  name = new FormControl('');
  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.getResumes();
  }

  getResumes() {
    try {
      this.resumeService.makeResume();
      this.listToShow = this.resumeService.getResumeList();
    } catch (ex) {
      console.log(ex)
    }
  }

  getResumesTestAPI(){
    this.resumeService.getResumesTestAPI();
  }

  addArticle(){
    if (this.name.value === "") {
      alert("Veuillez entrer une URL")
    } else {
      this.resumeService.addArticle(this.name.value);
      this.name.reset();
      this.resumeService.reset()
      this.listToShow=[];
      this.getResumes();
    }
  }
}
