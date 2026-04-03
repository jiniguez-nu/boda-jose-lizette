import { z } from 'zod';

export const rsvpFormSchema = z.object({
  timestamp: z.string(),
  firstName: z
    .string()
    .min(1, { message: 'El nombre es requerido' })
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    .max(50, { message: 'El nombre no puede exceder 50 caracteres' }),
  
  lastName: z
    .string()
    .min(1, { message: 'El apellido es requerido' })
    .min(2, { message: 'El apellido debe tener al menos 2 caracteres' })
    .max(50, { message: 'El apellido no puede exceder 50 caracteres' }),
  
  dietaryRestrictions: z
    .string()
    .max(200, { message: 'Las restricciones dietéticas no pueden exceder 200 caracteres' })
    .optional()
    .or(z.literal('')),
  
  message: z
    .string()
    .max(500, { message: 'El mensaje no puede exceder 500 caracteres' })
    .optional()
    .or(z.literal('')),
});

export type RSVPFormData = z.infer<typeof rsvpFormSchema>;
