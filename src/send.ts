/**
 * Resend integration helper.
 * Import the rendered template and pass it to `sendEmail`.
 *
 * Usage:
 *   import { render } from "@react-email/components";
 *   import WelcomeEmail from "../emails/welcome";
 *   await sendEmail({
 *     to: "user@example.com",
 *     subject: "Welcome!",
 *     react: <WelcomeEmail firstName="Jordan" />,
 *   });
 */

import { Resend } from "resend";
import type { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.FROM_EMAIL ?? "hello@example.com";
const FROM_NAME = process.env.FROM_NAME ?? "My App";

interface SendEmailOptions {
  to: string | string[];
  subject: string;
  react: ReactElement;
  replyTo?: string;
  cc?: string | string[];
  bcc?: string | string[];
  tags?: { name: string; value: string }[];
}

export async function sendEmail(opts: SendEmailOptions) {
  const { data, error } = await resend.emails.send({
    from: `${FROM_NAME} <${FROM}>`,
    to: opts.to,
    subject: opts.subject,
    react: opts.react,
    reply_to: opts.replyTo,
    cc: opts.cc,
    bcc: opts.bcc,
    tags: opts.tags,
  });

  if (error) throw new Error(`Resend error: ${error.message}`);
  return data;
}
