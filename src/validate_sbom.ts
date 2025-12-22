import { z } from 'zod';

const simplifiedSbomComponentSchema = z.object({
  type: z.literal('library'),
  name: z.string(),
  group: z.string().optional(),
  version: z.string(),
  'bom-ref': z.string(),
  author: z.string().optional(),
  description: z.string().optional(),
  licenses: z
    .array(
      z.union([
        z.object({ license: z.object({ id: z.string() }) }),
        z.object({ expression: z.string() }),
      ]),
    )
    .length(1)
    .optional(),
  evidence: z.object({
    licenses: z
      .array(
        z.object({
          license: z.object({
            name: z.string(),
            text: z.object({
              encoding: z.literal('base64'),
              content: z
                .string()
                .transform((str) =>
                  Buffer.from(str, 'base64').toString('utf8'),
                ),
            }),
          }),
        }),
      )
      .length(1)
      .optional(),
  }),
});

export type SimplifiedSbomComponent = z.output<
  typeof simplifiedSbomComponentSchema
>;

/**
 * A simplified schema for CycloneDX SBOM.
 * The schema is optimized for use by Zakodium projects.
 * It only contains a subset of the standard fields and is stricter than the
 * original specification to make sure that the SBOM can be analysed efficiently.
 */
const simplifiedSbomSchema = z.object({
  bomFormat: z.literal('CycloneDX'),
  specVersion: z.literal('1.6'),
  components: z.array(simplifiedSbomComponentSchema),
});

export type SimplifiedSbom = z.output<typeof simplifiedSbomSchema>;

/**
 * Validate CycloneDX SBOM data and return a simplified and transformed
 * version for use in the package.
 * @param data - Data to validate.
 * @returns The validated SBOM.
 */
export function validateSbom(data: object): SimplifiedSbom {
  return simplifiedSbomSchema.parse(data);
}
