import type { SimplifiedSbomComponent } from './validate_sbom.js';

export class SbomComponent {
  #component: SimplifiedSbomComponent;

  constructor(component: SimplifiedSbomComponent) {
    this.#component = component;
  }

  get packageName(): string {
    if (this.#component.group) {
      return `${this.#component.group}/${this.#component.name}`;
    } else {
      return this.#component.name;
    }
  }

  get version(): string {
    return this.#component.version;
  }

  /**
   * Returns the component's license if it has one.
   * @returns License's SPDX identifier, expression, or null.
   */
  get license(): string | null {
    const license = this.#component.licenses?.[0];
    if (!license) {
      return null;
    } else if ('license' in license) {
      return license.license.id;
    } else {
      return license.expression;
    }
  }
}
