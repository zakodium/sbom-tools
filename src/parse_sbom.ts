import { Sbom } from './sbom.ts';
import { validateSbom } from './validate_sbom.ts';

/**
 * Parse a CycloneDX SBOM file
 * @param data - JSON string with the SBOM contents.
 * @returns The parsed SBOM.
 */
export function parseSbom(data: string): Sbom {
  const originalSbom = JSON.parse(data);
  const sbom = validateSbom(originalSbom);
  return new Sbom(sbom, originalSbom);
}
