import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from './article';

@Component({
  imports: [RouterLink],
  selector: 'app-article-item',
  styleUrl: './article-item.scss',
  templateUrl: './article-item.html',
})
export class ArticleItem {
  readonly article = input.required<Article>();
}
