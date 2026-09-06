import { Component, computed, input, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-collapsible-section',
  styleUrl: './collapsible-section.scss',
  templateUrl: './collapsible-section.html',
})
export class CollapsibleSection {
  readonly sectionId = input.required<string>();
  readonly title = input.required<string>();
  readonly initiallyExpanded = input(false);

  protected readonly expanded = linkedSignal(() => this.initiallyExpanded());
  protected readonly contentId = computed(() => `${this.sectionId()}-content`);

  protected toggle() {
    this.expanded.update((expanded) => !expanded);
  }

  protected expand() {
    this.expanded.set(true);
  }
}
