import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AwBlogArticleModel } from '../models/ea-blog-article.model';

@Component({
  selector: 'ea-blog-form',
  templateUrl: './ea-blog-form.component.html',
  styleUrls: ['./ea-blog-form.component.css']
})
export class EaBlogFormComponent implements OnInit {
  @Input() max: number = 0;
  @Output() addEmitter: EventEmitter<AwBlogArticleModel> = new EventEmitter<AwBlogArticleModel>();

  article: AwBlogArticleModel = {
    title: '',
    text: ''
  };
  articles: [] = [];

  constructor() { }

  ngOnInit(): void {
  }
  post():void{
    this.addEmitter.emit(this.article);
  }

}
