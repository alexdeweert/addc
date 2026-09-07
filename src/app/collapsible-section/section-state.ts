import { afterNextRender, Service, signal } from '@angular/core';

type SavedSectionStates = Record<string, boolean>;

@Service()
export class SectionState {
  private readonly states = signal<SavedSectionStates>({});
  private readonly storageKey = 'alexdeweert.section-state.v1';
  private storageReady = false;

  constructor() {
    afterNextRender(() => {
      this.states.set(this.readSavedStates());
      this.storageReady = true;
    });
  }

  isExpanded(sectionId: string, fallback: boolean) {
    return this.states()[sectionId] ?? fallback;
  }

  setExpanded(sectionId: string, expanded: boolean) {
    this.states.update((states) => ({
      ...states,
      [sectionId]: expanded,
    }));

    if (this.storageReady) {
      this.saveStates();
    }
  }

  private readSavedStates() {
    try {
      const savedStates = localStorage.getItem(this.storageKey);

      if (savedStates === null) {
        return {};
      }

      const parsedStates: unknown = JSON.parse(savedStates);

      if (
        typeof parsedStates !== 'object' ||
        parsedStates === null ||
        Array.isArray(parsedStates)
      ) {
        return {};
      }

      const validStates: SavedSectionStates = {};

      for (const [sectionId, expanded] of Object.entries(parsedStates)) {
        if (typeof expanded === 'boolean') {
          validStates[sectionId] = expanded;
        }
      }

      return validStates;
    } catch {
      return {};
    }
  }

  private saveStates() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.states()));
    } catch {
      // The in-memory state still works when browser storage is unavailable.
    }
  }
}
