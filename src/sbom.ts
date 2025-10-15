import type { SimplifiedSbom } from './validate_sbom.js';

type OriginalSbom = object;

/**
 * Wrapper on a CycloneDX SBOM with various methods to analyse it and verify compliance.
 */
export class Sbom {
  #sbom: SimplifiedSbom;
  #originalSbom: OriginalSbom;

  constructor(sbom: SimplifiedSbom, originalSbom: OriginalSbom) {
    this.#sbom = sbom;
    this.#originalSbom = originalSbom;
  }

  /**
   * Get a copy of the simplified SBOM.
   * @returns Simplified SBOM copy.
   */
  getSbom(): SimplifiedSbom {
    return structuredClone(this.#sbom);
  }

  /**
   * Get a copy of the original SBOM.
   * @returns Simplified SBOM copy.
   */
  getOriginalSbom(): OriginalSbom {
    return structuredClone(this.#originalSbom);
  }
}
