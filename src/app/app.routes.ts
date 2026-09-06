import { Routes } from '@angular/router';

const placeholderPage = () =>
  import('./placeholder-page/placeholder-page').then(({ PlaceholderPage }) => PlaceholderPage);

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then(({ Home }) => Home),
    title: 'Alex Deweert — Developer',
  },
  {
    path: 'articles/why-keep-a-project-archive',
    loadComponent: placeholderPage,
    title: 'Why keep a project archive? — Alex Deweert',
    data: {
      kind: 'Article',
      title: 'Why keep a project archive?',
    },
  },
  {
    path: 'articles/building-a-small-angular-portfolio',
    loadComponent: () =>
      import('./articles/building-a-small-angular-portfolio/building-a-small-angular-portfolio').then(
        ({ BuildingASmallAngularPortfolio }) => BuildingASmallAngularPortfolio,
      ),
    title: 'Building a small Angular portfolio — Alex Deweert',
  },
  {
    path: 'articles/notes-from-the-workbench',
    loadComponent: placeholderPage,
    title: 'Notes from the workbench — Alex Deweert',
    data: {
      kind: 'Article',
      title: 'Notes from the workbench',
    },
  },
  {
    path: 'projects/alexdeweert-dev',
    loadComponent: placeholderPage,
    title: 'alexdeweert.dev — Alex Deweert',
    data: {
      kind: 'Project',
      title: 'alexdeweert.dev',
    },
  },
  {
    path: 'projects/earlier-work',
    loadComponent: placeholderPage,
    title: 'Earlier work — Alex Deweert',
    data: {
      kind: 'Project',
      title: 'Earlier work',
    },
  },
  {
    path: 'projects/the-next-entry',
    loadComponent: placeholderPage,
    title: 'The next entry — Alex Deweert',
    data: {
      kind: 'Project',
      title: 'The next entry',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
