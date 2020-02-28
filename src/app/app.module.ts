import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ListOfResumeComponent } from './list-of-resume/list-of-resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AddArticleComponent } from './add-article/add-article.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOfResumeComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
