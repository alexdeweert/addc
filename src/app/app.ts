import { afterNextRender, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

type Theme = 'dark' | 'light';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly theme = signal<Theme>('dark');
  protected readonly themeAction = computed(() =>
    this.theme() === 'dark' ? 'Light mode' : 'Dark mode',
  );

  constructor() {
    afterNextRender(() => {
      const savedTheme = localStorage.getItem('theme');
      const theme =
        savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : this.systemTheme();

      this.setTheme(theme, false);

      if (savedTheme === null) {
        const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
        colorScheme.addEventListener('change', (event) => {
          this.setTheme(event.matches ? 'dark' : 'light', false);
        });
      }
    });
  }

  protected toggleTheme() {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }

  private setTheme(theme: Theme, persist = true) {
    this.theme.set(theme);
    document.documentElement.dataset['theme'] = theme;

    if (persist) {
      localStorage.setItem('theme', theme);
    }
  }

  private systemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }
}
