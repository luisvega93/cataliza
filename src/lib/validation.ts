import { z } from "zod";

export const applicationSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  location: z.string().trim().min(2).max(160),
  projectName: z.string().trim().min(2).max(160),
  craft: z.string().trim().min(2).max(160),
  website: z.string().trim().max(240).optional().or(z.literal("")),
  summary: z.string().trim().min(20).max(1800),
  traction: z.string().trim().min(10).max(1200),
  economics: z.string().trim().min(10).max(1200),
  mission: z.string().trim().min(10).max(1200),
  references: z.string().trim().min(5).max(1200),
  trap: z.string().trim().max(240).optional().or(z.literal("")),
  startedAt: z.coerce.number().min(1),
});

export type ApplicationPayload = z.infer<typeof applicationSchema>;
