import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, Loader2Icon } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';
import type { ContactFields } from '../hooks/useContactForm';
import { buttonClasses } from '../utils/button';
import { profile } from '../data/profile';

const fieldClass =
'w-full border bg-ink px-4 py-3 text-paper placeholder:text-muted/70 transition-[border-color] duration-150 focus:border-teal focus:outline-none';

export function ContactForm() {
  const { values, errors, status, update, handleSubmit, reset } = useContactForm(profile.email);

  const fields: {key: keyof ContactFields;label: string;type: string;autoComplete?: string;}[] = [
  { key: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { key: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { key: 'subject', label: 'Subject', type: 'text' }];


  return (
    <div className="border border-line bg-surface p-6 sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'sent' ?
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          role="status"
          className="py-10">
          
            <span className="flex h-12 w-12 items-center justify-center bg-teal/15 text-teal">
              <CheckIcon aria-hidden="true" className="h-6 w-6" />
            </span>
            <h2 className="mt-6 font-serif text-3xl text-paper">Almost there</h2>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              Your email app should have opened with the message ready to send. If it didn’t,
              you can reach me directly at{' '}
              <a href={`mailto:${profile.email}`} className="text-teal hover:text-teal-light">
                {profile.email}
              </a>
              .
            </p>
            <button type="button" onClick={reset} className={buttonClasses('outline', 'mt-8')}>
              Write another message
            </button>
          </motion.div> :

        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form">
          
            <div className="grid gap-6 sm:grid-cols-2">
              {fields.map((field) =>
            <div key={field.key} className={field.key === 'subject' ? 'sm:col-span-2' : ''}>
                  <label
                htmlFor={`contact-${field.key}`}
                className="block font-mono text-xs uppercase tracking-[0.14em] text-paper/85">
                
                    {field.label}
                  </label>
                  <input
                id={`contact-${field.key}`}
                name={field.key}
                type={field.type}
                autoComplete={field.autoComplete}
                value={values[field.key]}
                onChange={update(field.key)}
                aria-invalid={Boolean(errors[field.key])}
                aria-describedby={errors[field.key] ? `contact-${field.key}-error` : undefined}
                className={`${fieldClass} mt-2 ${errors[field.key] ? 'border-red-400' : 'border-line'}`} />
              
                  {errors[field.key] &&
              <p id={`contact-${field.key}-error`} className="mt-2 text-sm text-red-300">
                      {errors[field.key]}
                    </p>
              }
                </div>
            )}

              <div className="sm:col-span-2">
                <label
                htmlFor="contact-message"
                className="block font-mono text-xs uppercase tracking-[0.14em] text-paper/85">
                
                  Message
                </label>
                <textarea
                id="contact-message"
                name="message"
                rows={6}
                value={values.message}
                onChange={update('message')}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                className={`${fieldClass} mt-2 resize-y ${errors.message ? 'border-red-400' : 'border-line'}`} />
              
                {errors.message &&
              <p id="contact-message-error" className="mt-2 text-sm text-red-300">
                    {errors.message}
                  </p>
              }
              </div>
            </div>

            <button
            type="submit"
            disabled={status === 'sending'}
            className={buttonClasses('primary', 'mt-8 w-full sm:w-auto')}>
            
              {status === 'sending' ?
            <>
                  <Loader2Icon aria-hidden="true" className="h-4 w-4 animate-spin" />
                  Sending…
                </> :

            'Send Message'
            }
            </button>
          </motion.form>
        }
      </AnimatePresence>
    </div>);

}