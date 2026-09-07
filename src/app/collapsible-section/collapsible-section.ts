import { Component, computed, inject, input } from '@angular/core';
import { SectionState } from './section-state';

@Component({
  selector: 'app-collapsible-section',
  styleUrl: './collapsible-section.scss',
  templateUrl: './collapsible-section.html',
})
export class CollapsibleSection {
  readonly sectionId = input.required<string>();
  readonly title = input.required<string>();
  readonly initiallyExpanded = input(true);

  private readonly sectionState = inject(SectionState);

  protected readonly expanded = computed(() =>
    this.sectionState.isExpanded(this.sectionId(), this.initiallyExpanded()),
  );
  protected readonly contentId = computed(() => `${this.sectionId()}-content`);

  protected toggle() {
    this.sectionState.setExpanded(this.sectionId(), !this.expanded());
  }

  protected expand() {
    this.sectionState.setExpanded(this.sectionId(), true);
  }
}
