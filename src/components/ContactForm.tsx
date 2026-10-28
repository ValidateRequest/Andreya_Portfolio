import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon, CheckIcon, Loader2Icon } from 'lucide-react';
import { useContactForm } from '../hooks/useContactForm';
import type { ContactFields } from '../hooks/useContactForm';
import { buttonClasses } from '../utils/button';
import { profile } from '../data/profile';

const fieldClass =
  'w-full border bg-ink px-4 py-3 text-paper placeholder:text-muted/70 transition-[border-color] duration-150 focus:border-teal focus:outline-none';

export function ContactForm() {
  const accessKey = profile.web3FormsAccessKey || 'a00140ed-1808-4e0e-9b61-7b9ba008dfc2';
  const { values, errors, status, serverError, update, handleSubmit, reset } = useContactForm(accessKey);

  const fields: { key: keyof ContactFields; label: string; type: string; autoComplete?: string }[] = [
    { key: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
    { key: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
    { key: 'subject', label: 'Subject', type: 'text' }
  ];

  return (
    <div className="border border-line bg-surface p-6 sm:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'sent' ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            role="status"
            className="py-10"
          >
            <span className="flex h-12 w-12 items-center justify-center bg-teal/15 text-teal">
              <CheckIcon aria-hidden="true" className="h-6 w-6" />
            </span>
            <h2 className="mt-6 font-serif text-3xl text-paper">Message Sent!</h2>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              Thank you for reaching out. Your message has been sent directly to my inbox, and I will get back to you as soon as possible.
            </p>
            <p className="mt-4 text-sm text-muted">
              Need an immediate answer? You can also contact me directly at{' '}
              <a href={`mailto:${profile.email}`} className="text-teal hover:text-teal-light underline underline-offset-2">
                {profile.email}
              </a>
              .
            </p>
            <button type="button" onClick={reset} className={buttonClasses('outline', 'mt-8')}>
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
          >
            {/* Web3Forms configuration fields */}
            <input type="hidden" name="access_key" value={accessKey} />
            <input type="hidden" name="from_name" value={values.name || 'Portfolio Visitor'} />
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid gap-6 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.key} className={field.key === 'subject' ? 'sm:col-span-2' : ''}>
                  <label
                    htmlFor={`contact-${field.key}`}
                    className="block font-mono text-xs uppercase tracking-[0.14em] text-paper/85"
                  >
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
                    className={`${fieldClass} mt-2 ${errors[field.key] ? 'border-red-400' : 'border-line'}`}
                  />
                  {errors[field.key] && (
                    <p id={`contact-${field.key}-error`} className="mt-2 text-sm text-red-300">
                      {errors[field.key]}
                    </p>
                  )}
                </div>
              ))}

              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs uppercase tracking-[0.14em] text-paper/85"
                >
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
                  className={`${fieldClass} mt-2 resize-y ${errors.message ? 'border-red-400' : 'border-line'}`}
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-2 text-sm text-red-300">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {serverError && (
              <div
                role="alert"
                className="mt-6 flex items-start gap-3 border border-red-400/40 bg-red-950/30 p-4 text-sm text-red-200"
              >
                <AlertCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                <div className="space-y-1">
                  <p className="font-medium text-red-200">Unable to send message</p>
                  <p className="text-red-300/90">{serverError}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className={buttonClasses('primary', 'mt-8 w-full sm:w-auto')}
            >
              {status === 'sending' ? (
                <>
                  <Loader2Icon aria-hidden="true" className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : status === 'error' ? (
                'Try Again'
              ) : (
                'Send Message'
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;