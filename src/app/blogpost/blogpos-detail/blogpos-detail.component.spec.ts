import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogposDetailComponent } from './blogpos-detail.component';

describe('BlogposDetailComponent', () => {
  let component: BlogposDetailComponent;
  let fixture: ComponentFixture<BlogposDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogposDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogposDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
