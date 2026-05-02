/**
 * Quick smoke test — sends one of each template to TEST_TO_EMAIL.
 * Run with: npm run send:test
 * Requires RESEND_API_KEY, FROM_EMAIL, FROM_NAME, TEST_TO_EMAIL in .env
 */

import "dotenv/config";
import * as React from "react";
import { sendEmail } from "./send.js";

import WelcomeEmail from "../emails/welcome.js";
import InviteEmail from "../emails/invite.js";
import PasswordResetEmail from "../emails/password-reset.js";
import ReceiptEmail from "../emails/receipt.js";
import NotificationEmail from "../emails/notification.js";

const TO = process.env.TEST_TO_EMAIL;
if (!TO) {
  console.error("Set TEST_TO_EMAIL in .env");
  process.exit(1);
}

const tests = [
  {
    subject: "[Test] Welcome email",
    react: React.createElement(WelcomeEmail, { firstName: "Test User" }),
  },
  {
    subject: "[Test] Invite email",
    react: React.createElement(InviteEmail, {
      inviteeName: "Test User",
      inviterName: "Maverick",
      teamName: "Engineering",
    }),
  },
  {
    subject: "[Test] Password reset email",
    react: React.createElement(PasswordResetEmail, { firstName: "Test User" }),
  },
  {
    subject: "[Test] Receipt email",
    react: React.createElement(ReceiptEmail, { firstName: "Test User" }),
  },
  {
    subject: "[Test] Notification email",
    react: React.createElement(NotificationEmail, {
      recipientName: "Test User",
      type: "success",
      title: "Test notification",
      message: "This is a test notification from react-email-kit.",
    }),
  },
];

for (const t of tests) {
  try {
    const result = await sendEmail({ to: TO, ...t });
    console.log(`✓ Sent: ${t.subject} → ${result?.id}`);
  } catch (err) {
    console.error(`✗ Failed: ${t.subject}`, err);
  }
}
