import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

export interface ContactFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof ContactFields, string>>;
export type FormStatus = 'idle' | 'sending' | 'sent' | 'error';

const emptyFields: ContactFields = { name: '', email: '', subject: '', message: '' };
const fieldOrder: (keyof ContactFields)[] = ['name', 'email', 'subject', 'message'];

export function useContactForm(accessKey = '5af8f68c-63e8-4e7c-94f2-9908bcf94b09') {
  const [values, setValues] = useState<ContactFields>(emptyFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  const update =
    (field: keyof ContactFields) =>
      (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = event.target;
        setValues((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
          setErrors((prev) => ({ ...prev, [field]: undefined }));
        }
        if (serverError) {
          setServerError(null);
        }
      };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = fieldOrder.find((key) => found[key]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setStatus('sending');
    setServerError(null);

    try {
      const formData = new FormData(event.currentTarget);
      formData.set('access_key', accessKey);
      formData.set('name', values.name.trim());
      formData.set('email', values.email.trim());
      formData.set('subject', values.subject.trim() || `New inquiry from ${values.name.trim()}`);
      formData.set('message', values.message.trim());
      formData.set('from_name', values.name.trim() || 'Portfolio Visitor');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('sent');
        setValues(emptyFields);
      } else {
        setStatus('error');
        setServerError(data.message || 'Unable to send message. Please try again.');
      }
    } catch {
      setStatus('error');
      setServerError('Unable to reach the email service. Please check your connection or contact me directly.');
    }
  };

  const reset = () => {
    setValues(emptyFields);
    setErrors({});
    setServerError(null);
    setStatus('idle');
  };

  return { values, errors, status, serverError, update, handleSubmit, reset };
}

function validate(values: ContactFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'That email address doesn’t look quite right.';
  }
  if (!values.subject.trim()) errors.subject = 'Please add a subject.';
  if (values.message.trim().length < 10) {
    errors.message = 'Please write a message of at least 10 characters.';
  }
  return errors;
}