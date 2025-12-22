# @zakodium/sbom-tools

[![NPM version](https://img.shields.io/npm/v/@zakodium/sbom-tools.svg)](https://www.npmjs.com/package/@zakodium/sbom-tools)
[![npm download](https://img.shields.io/npm/dm/@zakodium/sbom-tools.svg)](https://www.npmjs.com/package/@zakodium/sbom-tools)
[![test coverage](https://img.shields.io/codecov/c/github/zakodium/sbom-tools.svg)](https://codecov.io/gh/zakodium/sbom-tools)
[![license](https://img.shields.io/npm/l/@zakodium/sbom-tools.svg)](https://github.com/zakodium/sbom-tools/blob/main/LICENSE)

Tools to analyse CycloneDX SBOM files.

## Installation

```console
npm install @zakodium/sbom-tools
```

## Usage

### Generate SBOM file

The tools expect a SBOM file in CycloneDX JSON format, version 1.6.

#### npm

See <https://github.com/CycloneDX/cyclonedx-node-npm>.

A compatible SBOM can be generated with:

```shell
npx --package @cyclonedx/cyclonedx-npm cyclonedx-npm --omit=dev --spec-version=1.6 --gather-license-texts --output-reproducible --output-file=sbom.json
```

#### Yarn

See <https://github.com/CycloneDX/cyclonedx-node-yarn>

A compatible SBOM can be generated with:

```shell
yarn dlx -q @cyclonedx/yarn-plugin-cyclonedx --production --spec-version=1.6 --gather-license-texts --output-reproducible --output-file=sbom.json
```

## License

[MIT](./LICENSE)
