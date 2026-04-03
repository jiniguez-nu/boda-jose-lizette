'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { rsvpFormSchema, TGuestProps, type RSVPFormData } from '@/lib/validation';
import styles from './RsvpForm.module.scss';
import { translations } from '@/lib/translations';
import { save } from '@/app/login/actions';

export default function RsvpForm({guest}: TGuestProps) {

  const { rsvpSection } = translations;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setIsSubmited] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RSVPFormData>({
    resolver: zodResolver(rsvpFormSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: RSVPFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await save(data);

      if (response) {
        setSubmitMessage({
          type: 'success',
          message: rsvpSection.form.success,
        });

        reset();

        setTimeout(() => setSubmitMessage(null), 5000);
        setIsSubmited(true);
      } else {
        setSubmitMessage({
          type: 'error',
          message: rsvpSection.form.error,
        });
      }

    } catch (error) {
      setSubmitMessage({
        type: 'error',
        message: rsvpSection.form.error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className={styles.rsvpWrapper}>
      <div className={styles.container}>
        <h2>{rsvpSection.title}</h2>
        <p className={styles.subtitle}>{rsvpSection.description}</p>
        <p className={styles.subtitle}>{rsvpSection.description2}</p>
        <p className={styles.subtitle}>{rsvpSection.description3}</p>
        <p className={styles.subtitle}>{rsvpSection.description4}</p>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formGroup}>
            <input type="hidden" value={new Date().toISOString()} {...register('timestamp')} />
            <label htmlFor="firstName">{rsvpSection.form.firstName}</label>
            <input
              id="firstName"
              type="text"
              placeholder={rsvpSection.form.firstName_placeholder}
              {...register('firstName')}
              aria-invalid={errors.firstName ? 'true' : 'false'}
              disabled={true}
              value={guest.Nombre1}
            />
            {errors.firstName && (
              <span className={styles.error}>{errors.firstName.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastName">{rsvpSection.form.lastName}</label>
            <input
              id="lastName"
              type="text"
              placeholder={rsvpSection.form.lastName_placeholder}
              {...register('lastName')}
              aria-invalid={errors.lastName ? 'true' : 'false'}
              disabled={true}
              value={guest.Nombre2}
            />
            {errors.lastName && (
              <span className={styles.error}>{errors.lastName.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="dietaryRestrictions">
              {rsvpSection.form.dietaryRestrictions}
              <span className={styles.optional}>({translations.common.optional})</span>
            </label>
            <input
              id="dietaryRestrictions"
              type="text"
              placeholder={rsvpSection.form.dietaryRestrictions_placeholder}
              {...register('dietaryRestrictions')}
            />
            {errors.dietaryRestrictions && (
              <span className={styles.error}>{errors.dietaryRestrictions.message}</span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">
              {rsvpSection.form.message}
              <span className={styles.optional}>({translations.common.optional})</span>
            </label>
            <textarea
              id="message"
              placeholder={rsvpSection.form.message_placeholder}
              {...register('message')}
              maxLength={500}
            />
            {errors.message && (
              <span className={styles.error}>{errors.message.message}</span>
            )}
          </div>

          {submitMessage && (
            <div
              className={`${styles.message} ${styles[submitMessage.type]}`}
              role="alert"
            >
              {submitMessage.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className={styles.submitButton}
          >
            {isSubmitting ? rsvpSection.form.submitting : rsvpSection.form.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
