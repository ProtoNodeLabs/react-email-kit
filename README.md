# react-email-kit

Five production-ready email templates built with [React Email](https://react-email.com) and wired to [Resend](https://resend.com). Preview locally, send with one function call.

---

## Templates

| Template | File | Description |
|---|---|---|
| Welcome | `emails/welcome.tsx` | New user onboarding — confirms signup, shows next steps, CTA to log in |
| Invite | `emails/invite.tsx` | Team/org invitation with expiry — accepts an invite token URL |
| Password Reset | `emails/password-reset.tsx` | Secure reset link with expiry time, red CTA, reassurance copy |
| Receipt | `emails/receipt.tsx` | Line-item purchase receipt with subtotal, tax, and total |
| Notification | `emails/notification.tsx` | Configurable info / success / warning / alert with optional CTA |

---

## Preview

Start the live preview server — each template renders with its `PreviewProps`:

```bash
npm install
npm run dev
```

Opens at [http://localhost:3030](http://localhost:3030). Edit templates and see changes instantly.

---

## Send via Resend

**1. Copy `.env.example` → `.env` and fill in your values:**

```bash
cp .env.example .env
```

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
FROM_EMAIL=hello@yourdomain.com
FROM_NAME=Your Company
TEST_TO_EMAIL=you@yourdomain.com
```

Your sending domain must be [verified in Resend](https://resend.com/domains).

**2. Import and send:**

```typescript
import { sendEmail } from "./src/send";
import WelcomeEmail from "./emails/welcome";
import * as React from "react";

await sendEmail({
  to: "user@example.com",
  subject: "Welcome to Acme!",
  react: React.createElement(WelcomeEmail, {
    firstName: "Jordan",
    companyName: "Acme",
    loginUrl: "https://app.acme.com/login",
    supportEmail: "support@acme.com",
  }),
});
```

**3. Smoke test all templates:**

```bash
npm run send:test
```

Sends one of each template to `TEST_TO_EMAIL`.

---

## Customizing templates

Each template accepts typed props — swap in your colors, logo URL, and copy. The props interface is at the top of each file.

To change the brand color, find the `button` style object and update `backgroundColor`. All templates follow the same style pattern so changes are consistent.

**Add your logo:**

```tsx
<WelcomeEmail
  logoUrl="https://yourcdn.com/logo.png"
  companyName="Acme"
  ...
/>
```

---

## Using in a Next.js app

Drop the `emails/` folder into your project and call `sendEmail` from an API route or server action:

```typescript
// app/api/welcome/route.ts
import { sendEmail } from "@/lib/send";
import WelcomeEmail from "@/emails/welcome";
import * as React from "react";

export async function POST(req: Request) {
  const { email, firstName } = await req.json();
  await sendEmail({
    to: email,
    subject: `Welcome to Acme, ${firstName}!`,
    react: React.createElement(WelcomeEmail, { firstName }),
  });
  return new Response("ok");
}
```

---

## Stack

- [React Email](https://react-email.com) — component library and preview server
- [Resend](https://resend.com) — email delivery
- TypeScript throughout

---

Built by [ProtoNodeLabs](https://proto-nodelabs.com). MIT licensed.
