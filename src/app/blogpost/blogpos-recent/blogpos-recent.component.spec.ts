import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogposRecentComponent } from './blogpos-recent.component';

describe('BlogposRecentComponent', () => {
  let component: BlogposRecentComponent;
  let fixture: ComponentFixture<BlogposRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogposRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogposRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
