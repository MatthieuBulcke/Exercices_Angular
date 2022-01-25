import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { EaBlogArticlesComponent } from '../ea-blog-articles/ea-blog-articles.component';
import { AwBlogArticleModel } from '../models/ea-blog-article.model';

@Component({
  selector: 'ea-blog',
  templateUrl: './ea-blog.component.html',
  styleUrls: ['./ea-blog.component.css']
})
export class EaBlogComponent implements OnInit {
  articles:AwBlogArticleModel[] = [{title:'1',text:'1'},{title:'2',text:'2'},{title:'3',text:'3'}];
  @ViewChildren(EaBlogArticlesComponent)
  articlesList!:QueryList<EaBlogArticlesComponent>;
  constructor() { }

  ngOnInit(): void {
  }

  add(article:AwBlogArticleModel):void{
    console.log(article);
    this.articles.push({...article});
  }

  ngAfterViewInit(): void {
    //console.log(this.articlesList);
  }

  close():void{
    this.articlesList.forEach(article => {
      //console.log(article)
      article.isCollapsed = false;
    });
  }
  open():void{
    this.articlesList.forEach(article => {
      //console.log(article)
      article.isCollapsed = true;
    });
  }
}
