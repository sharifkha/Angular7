import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogpos-list',
  templateUrl: './blogpos-list.component.html',
  styleUrls: ['./blogpos-list.component.css'],
})
export class BlogposListComponent implements OnInit {
  title = 'Blogs';
  constructor() {}

  ngOnInit(): void {}
}
