import { useState } from 'react';
import type { FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircleIcon, CheckIcon, Loader2Icon, SendIcon } from 'lucide-react';
import { buttonClasses } from '../utils/button';
import { profile } from '../data/profile';

const inputClass =
  'w-full border border-line bg-white px-4 py-3 text-base sm:text-sm text-espresso placeholder:text-muted/60 transition-[border-color,box-shadow] duration-150 focus:border-taupe focus:ring-1 focus:ring-taupe focus:outline-none rounded-none';

export function ContactForm() {
  const [result, setResult] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const accessKey = profile.web3FormsAccessKey || '5af8f68c-63e8-4e7c-94f2-9908bcf94b09';

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending....');
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', accessKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setResult('Form Submitted Successfully');
        form.reset();
      } else {
        setResult('Error');
        setErrorMessage(data.message || 'Something went wrong while submitting. Please try again.');
      }
    } catch {
      setResult('Error');
      setErrorMessage('Unable to reach the email server. Please check your connection or email me directly.');
    }
  };

  const handleReset = () => {
    setResult('');
    setErrorMessage('');
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait" initial={false}>
        {result === 'Form Submitted Successfully' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            role="status"
            className="border border-line bg-beige/30 p-8 sm:p-10 text-center sm:text-left"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center bg-taupe/15 text-taupe">
              <CheckIcon aria-hidden="true" className="h-6 w-6" />
            </span>
            <h3 className="mt-5 font-serif text-2xl text-espresso sm:text-3xl">
              Form Submitted Successfully
            </h3>
            <p className="mt-3 max-w-lg leading-relaxed text-muted text-sm sm:text-base">
              Thank you for reaching out! Your message has been delivered directly to my inbox, and I will get back to you shortly.
            </p>
            <p className="mt-4 text-xs sm:text-sm text-muted">
              Need immediate assistance? You can also reach me directly at{' '}
              <a
                href={`mailto:${profile.email}`}
                className="text-taupe underline underline-offset-2 hover:text-taupe-deep font-medium"
              >
                {profile.email}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={handleReset}
              className={buttonClasses('outline', 'mt-8')}
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onSubmit={onSubmit}
            className="space-y-6"
            aria-label="Contact inquiry form"
          >
            {/* Web3Forms spam honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-xs uppercase tracking-[0.14em] text-espresso font-medium"
                >
                  Your Name <span className="text-taupe">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="e.g. Alex Morgan"
                  className={`${inputClass} mt-2`}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-xs uppercase tracking-[0.14em] text-espresso font-medium"
                >
                  Email Address <span className="text-taupe">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="alex@example.com"
                  className={`${inputClass} mt-2`}
                />
              </div>

              {/* Subject */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-xs uppercase tracking-[0.14em] text-espresso font-medium"
                >
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="IT Support, Data Analytics, Virtual Assistance, or General Inquiry"
                  className={`${inputClass} mt-2`}
                />
              </div>

              {/* Message */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-xs uppercase tracking-[0.14em] text-espresso font-medium"
                >
                  Message <span className="text-taupe">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit about what you need assistance with..."
                  className={`${inputClass} mt-2 resize-y`}
                />
              </div>
            </div>

            {/* Error Message Alert */}
            {result === 'Error' && (
              <div
                role="alert"
                className="flex items-start gap-3 border border-red-200 bg-red-50 p-4 text-sm text-red-800"
              >
                <AlertCircleIcon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <div className="space-y-1">
                  <p className="font-semibold text-red-900">Submission Error</p>
                  <p className="text-red-700">{errorMessage || 'Unable to submit form. Please try again.'}</p>
                </div>
              </div>
            )}

            {/* Submit Action */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={result === 'Sending....'}
                className={buttonClasses('primary', 'w-full sm:w-auto inline-flex items-center justify-center gap-2')}
              >
                {result === 'Sending....' ? (
                  <>
                    <Loader2Icon aria-hidden="true" className="h-4 w-4 animate-spin" />
                    <span>Sending....</span>
                  </>
                ) : (
                  <>
                    <span>Submit Form</span>
                    <SendIcon aria-hidden="true" className="h-3.5 w-3.5" />
                  </>
                )}
              </button>

              {result === 'Sending....' && (
                <span className="font-mono text-xs text-taupe animate-pulse">
                  Connecting to Web3Forms…
                </span>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;