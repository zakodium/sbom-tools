import { expect, test } from 'vitest';

import { parseSbom } from '../index.ts';

test('should parse a valid SBOM', () => {
  const emptySbomData = {
    bomFormat: 'CycloneDX',
    specVersion: '1.6',
    metadata: {},
    components: [],
  };
  const sbom = parseSbom(JSON.stringify(emptySbomData));

  expect(sbom.getSbom()).toStrictEqual({
    bomFormat: 'CycloneDX',
    specVersion: '1.6',
    components: [],
  });
  expect(sbom.getOriginalSbom()).toStrictEqual(emptySbomData);
});
