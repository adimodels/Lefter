import { z } from "zod";
import { MAX_AGE, MIN_AGE, MINOR_AGE_THRESHOLD } from "./constants";

// Telefon moldovenesc: prefix +373 urmat de 8 cifre.
const MD_PHONE_REGEX = /^\+373\d{8}$/;

export const demographicsSchema = z.object({
  age: z.number().int().min(MIN_AGE).max(MAX_AGE),
  gender: z.enum(["MASCULIN", "FEMININ", "NESPECIFICAT"]),
  livingArea: z.enum(["URBAN", "RURAL", "SMALL_TOWN"]),
  county: z.string().optional(),
});

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, "Prenumele este obligatoriu"),
  lastName: z.string().trim().min(1, "Numele este obligatoriu"),
  email: z.string().trim().email("Adresă de email invalidă"),
  phone: z
    .string()
    .trim()
    .regex(MD_PHONE_REGEX, "Format telefon invalid (+373XXXXXXXX)"),
});

// Toate câmpurile sunt `boolean` (nu `literal(true)`) ca să corespundă cu
// starea din client (bifele pornesc nebifate); obligativitatea lui
// dataProcessing/statistics/parentalConsent e verificată în superRefine mai
// jos, unde putem da mesaje de eroare specifice per câmp.
export const consentsSchema = z
  .object({
    dataProcessing: z.boolean(),
    statistics: z.boolean(),
    marketingOptIn: z.boolean(),
    parentalConsent: z.boolean(),
  })
  .strict();

export const submitPayloadSchema = z
  .object({
    audience: z.enum(["YOUTH", "PARENT"]),
    demographics: demographicsSchema,
    contact: contactSchema,
    consents: consentsSchema,
    answers: z.record(z.string(), z.unknown()),
  })
  .superRefine((data, ctx) => {
    if (!data.consents.dataProcessing) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["consents", "dataProcessing"],
        message: "Consimțământul de prelucrare a datelor este obligatoriu",
      });
    }
    if (!data.consents.statistics) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["consents", "statistics"],
        message: "Consimțământul pentru statistica națională este obligatoriu",
      });
    }
    if (data.demographics.age < MINOR_AGE_THRESHOLD && !data.consents.parentalConsent) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["consents", "parentalConsent"],
        message: "Acordul părintelui/tutorelui este obligatoriu pentru utilizatorii sub 16 ani",
      });
    }
  });

export type SubmitPayload = z.infer<typeof submitPayloadSchema>;
export type Demographics = z.infer<typeof demographicsSchema>;
export type ContactInfo = z.infer<typeof contactSchema>;
export type Consents = z.infer<typeof consentsSchema>;

export const waitlistPayloadSchema = z.object({
  email: z.string().trim().email(),
  audience: z.enum(["YOUTH", "PARENT"]),
});
