import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-placeholder-page',
  styleUrl: './placeholder-page.scss',
  templateUrl: './placeholder-page.html',
})
export class PlaceholderPage {
  readonly kind = input.required<string>();
  readonly title = input.required<string>();
}
