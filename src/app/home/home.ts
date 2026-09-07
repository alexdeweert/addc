import { Component } from '@angular/core';
import { Article, sortArticles } from '../article/article';
import { ArticleItem } from '../article/article-item';
import { CollapsibleSection } from '../collapsible-section/collapsible-section';

@Component({
  imports: [ArticleItem, CollapsibleSection],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly articles: Article[] = sortArticles([
    {
      date: 'TBD',
      header: 'Why keep a project archive?',
      route: '/articles/why-keep-a-project-archive',
      summary: 'What abandoned work can still teach us when the outcome is not a launch.',
    },
    {
      date: '2026-09-06',
      header: 'Building a small Angular portfolio',
      pinned: true,
      pinOrder: 1,
      route: '/articles/building-a-small-angular-portfolio',
      summary: 'Static output, GitHub Actions, and choosing familiar tools over fashionable ones.',
    },
    {
      date: 'TBD',
      header: 'Notes from the workbench',
      route: '/articles/notes-from-the-workbench',
      summary: 'Short observations that are useful enough to keep but too small for a full essay.',
    },
  ]);

  protected readonly projects: Article[] = sortArticles([
    {
      date: '2026-09-06',
      header: 'alexdeweert.dev',
      route: '/projects/alexdeweert-dev',
      summary: 'This site—an Angular application prerendered and deployed through GitHub Pages.',
    },
    {
      date: 'TBD',
      header: 'Earlier work',
      route: '/projects/earlier-work',
      summary:
        'Past projects will appear here as their notes, screenshots, and source material are recovered.',
    },
    {
      date: 'TBD',
      header: 'The next entry',
      route: '/projects/the-next-entry',
      summary:
        'A place for work still in motion, without pretending that every experiment needs to be finished.',
    },
  ]);
}
