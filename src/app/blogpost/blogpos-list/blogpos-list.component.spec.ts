import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogposListComponent } from './blogpos-list.component';

describe('BlogposListComponent', () => {
  let component: BlogposListComponent;
  let fixture: ComponentFixture<BlogposListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogposListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
