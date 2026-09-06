import { Component, input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLink],
  selector: 'app-article-page',
  styleUrl: './article-page.scss',
  templateUrl: './article-page.html',
})
export class ArticlePage {
  readonly date = input.required<string>();
  readonly dateTime = input.required<string>();
  readonly kind = input('Article');
  readonly title = input.required<string>();
}
