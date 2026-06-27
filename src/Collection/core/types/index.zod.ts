import { z } from 'zod'

export const watchStatusSchema = z.enum(['want_to_watch', 'watching', 'completed'])

export const watchlistEntrySchema = z.object({
  id: z.string().uuid(),
  mediaId: z.number().int().positive(),
  mediaType: z.enum(['movie', 'tv']),
  status: watchStatusSchema,
  note: z.string().max(300),
  cachedTitle: z.string(),
  cachedPoster: z.string().nullable(),
  addedAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

export const watchlistWriteSchema = z.object({
  mediaId: z.number().int().positive(),
  mediaType: z.enum(['movie', 'tv']),
  status: watchStatusSchema,
  note: z.string().max(300),
  cachedTitle: z.string().min(1),
  cachedPoster: z.string().nullable(),
})

export const watchlistUpdateSchema = z.object({
  status: watchStatusSchema.optional(),
  note: z.string().max(300).optional(),
})
