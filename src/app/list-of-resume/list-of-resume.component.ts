import { Component, OnInit } from '@angular/core';
import { ResumeService } from 'src/services/resume.service';

@Component({
  selector: 'app-list-of-resume',
  templateUrl: './list-of-resume.component.html',
  styleUrls: ['./list-of-resume.component.scss']
})
export class ListOfResumeComponent implements OnInit {

  listToShow: Array<string>;

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

  clean(): void {
    this.listToShow = [];
  }

}
