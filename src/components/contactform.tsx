'use client';

import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from './ui/button';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xnqennrj");
  if (state.succeeded) {
      return <p>Thanks, will reach out to you soon.</p>;
  }

  return (
    
      <form
        className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="label capitalize">
            Name
          </label>
          <input
            type="name"
            name="name"
            placeholder="Nwachukwu Promise"
            id="name"
            className={twMerge(
              'bg-input px-4 py-2 text-sm leading-8 text-foreground outline-none outline-1 outline-offset-0 placeholder:text-foreground/40 focus-visible:outline-primary disabled:cursor-not-allowed disabled:text-foreground/60 aria-[invalid=true]:outline-destructive aria-[invalid=true]:focus-visible:outline-destructive',
            )}
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>

        <div  className="flex flex-col">
          <label className="label capitalize">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="mail@mail.com"
            id="email"
            className={twMerge(
              'bg-input px-4 py-2 text-sm leading-8 text-foreground outline-none outline-1 outline-offset-0 placeholder:text-foreground/40 focus-visible:outline-primary disabled:cursor-not-allowed disabled:text-foreground/60 aria-[invalid=true]:outline-destructive aria-[invalid=true]:focus-visible:outline-destructive',
            )}
          />
          <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        </div>

        <div className="flex flex-col">
          <label className="label capitalize">
            Message
          </label>
          <textarea
            name="message"
            placeholder="How can I help?"
            className={twMerge(
              'resize-y bg-input px-4 py-2 text-sm leading-8 text-foreground outline-none outline-1 outline-offset-0 placeholder:text-foreground/40 focus-visible:outline-primary disabled:cursor-not-allowed disabled:text-foreground/60 aria-[invalid=true]:outline-destructive aria-[invalid=true]:focus-visible:outline-destructive',
            )}
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

        <Button type="submit" className="self-start">
          Send message
        </Button>
      </form>
   
  );
};

export default ContactForm;
