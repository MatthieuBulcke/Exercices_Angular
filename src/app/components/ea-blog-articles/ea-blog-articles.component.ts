import { Component, Input, OnInit } from '@angular/core';
import { AwBlogArticleModel } from '../models/ea-blog-article.model';

@Component({
  selector: 'ea-blog-articles',
  templateUrl: './ea-blog-articles.component.html',
  styleUrls: ['./ea-blog-articles.component.css']
})
export class EaBlogArticlesComponent implements OnInit {
  @Input() article! : AwBlogArticleModel;

  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {

  }
  toggle():void{
    this.isCollapsed = !this.isCollapsed;
  }
}
