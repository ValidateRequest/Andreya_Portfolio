import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

export interface ContactFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof ContactFields, string>>;
type Status = 'idle' | 'sending' | 'sent';

const emptyFields: ContactFields = { name: '', email: '', subject: '', message: '' };
const fieldOrder: (keyof ContactFields)[] = ['name', 'email', 'subject', 'message'];

export function useContactForm(recipient: string) {
  const [values, setValues] = useState<ContactFields>(emptyFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const update =
  (field: keyof ContactFields) =>
  (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = fieldOrder.find((key) => found[key]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setStatus('sending');
    const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;
    const href = `mailto:${recipient}?subject=${encodeURIComponent(
      values.subject.trim()
    )}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      window.location.href = href;
      setStatus('sent');
    }, 400);
  };

  const reset = () => {
    setValues(emptyFields);
    setErrors({});
    setStatus('idle');
  };

  return { values, errors, status, update, handleSubmit, reset };
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