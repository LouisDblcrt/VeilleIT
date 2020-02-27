import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfResumeComponent } from './list-of-resume.component';

describe('ListOfResumeComponent', () => {
  let component: ListOfResumeComponent;
  let fixture: ComponentFixture<ListOfResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
