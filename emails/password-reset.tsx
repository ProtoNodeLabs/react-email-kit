import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface PasswordResetEmailProps {
  firstName?: string;
  resetUrl?: string;
  expiresInMinutes?: number;
  logoUrl?: string;
  companyName?: string;
  supportEmail?: string;
}

export default function PasswordResetEmail({
  firstName = "there",
  resetUrl = "https://app.example.com/reset-password?token=abc123",
  expiresInMinutes = 60,
  logoUrl,
  companyName = "Acme",
  supportEmail = "support@example.com",
}: PasswordResetEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Reset your {companyName} password</Preview>
      <Body style={main}>
        <Container style={container}>
          {logoUrl && (
            <Section style={logoSection}>
              <Img src={logoUrl} alt={companyName} height={40} />
            </Section>
          )}

          <Heading style={h1}>Reset your password</Heading>

          <Text style={text}>Hi {firstName},</Text>

          <Text style={text}>
            We received a request to reset your password. Click the button below
            to choose a new one.
          </Text>

          <Section style={buttonSection}>
            <Button style={button} href={resetUrl}>
              Reset password
            </Button>
          </Section>

          <Text style={expiry}>
            This link expires in {expiresInMinutes} minute{expiresInMinutes !== 1 ? "s" : ""}.
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            If you didn't request a password reset, you can safely ignore this
            email — your password won't change.
          </Text>

          <Text style={footer}>
            Questions?{" "}
            <Link href={`mailto:${supportEmail}`} style={link}>
              {supportEmail}
            </Link>
          </Text>

          <Text style={footer}>{companyName}</Text>
        </Container>
      </Body>
    </Html>
  );
}

PasswordResetEmail.PreviewProps = {
  firstName: "Jordan",
  resetUrl: "https://app.example.com/reset-password?token=abc123",
  expiresInMinutes: 60,
  companyName: "Acme",
  supportEmail: "support@acme.com",
} satisfies PasswordResetEmailProps;

const main: React.CSSProperties = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "40px",
  borderRadius: "8px",
  maxWidth: "560px",
  border: "1px solid #e6ebf1",
};

const logoSection: React.CSSProperties = {
  marginBottom: "28px",
};

const h1: React.CSSProperties = {
  color: "#1a1a1a",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "1.3",
  margin: "0 0 16px",
};

const text: React.CSSProperties = {
  color: "#444444",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 12px",
};

const buttonSection: React.CSSProperties = {
  margin: "28px 0 16px",
};

const button: React.CSSProperties = {
  backgroundColor: "#dc2626",
  borderRadius: "6px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "15px",
  fontWeight: "500",
  padding: "12px 24px",
  textDecoration: "none",
};

const expiry: React.CSSProperties = {
  color: "#6b7280",
  fontSize: "13px",
  margin: "0 0 24px",
};

const hr: React.CSSProperties = {
  borderColor: "#e6ebf1",
  margin: "28px 0 20px",
};

const footer: React.CSSProperties = {
  color: "#9ca3af",
  fontSize: "13px",
  lineHeight: "1.5",
  margin: "0 0 8px",
};

const link: React.CSSProperties = {
  color: "#0070f3",
};
