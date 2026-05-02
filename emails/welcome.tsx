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

interface WelcomeEmailProps {
  firstName?: string;
  companyName?: string;
  loginUrl?: string;
  logoUrl?: string;
  supportEmail?: string;
}

export default function WelcomeEmail({
  firstName = "there",
  companyName = "Acme",
  loginUrl = "https://app.example.com/login",
  logoUrl,
  supportEmail = "support@example.com",
}: WelcomeEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to {companyName} — you're all set.</Preview>
      <Body style={main}>
        <Container style={container}>
          {logoUrl && (
            <Section style={logoSection}>
              <Img src={logoUrl} alt={companyName} height={40} />
            </Section>
          )}

          <Heading style={h1}>Welcome, {firstName}.</Heading>

          <Text style={text}>
            Your {companyName} account is ready. We're glad to have you.
          </Text>

          <Text style={text}>
            Here's what to do next:
          </Text>

          <Text style={listItem}>→ Log in and complete your profile</Text>
          <Text style={listItem}>→ Explore the dashboard</Text>
          <Text style={listItem}>→ Reach out if you need anything</Text>

          <Section style={buttonSection}>
            <Button style={button} href={loginUrl}>
              Get started
            </Button>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Questions? Reply to this email or contact{" "}
            <Link href={`mailto:${supportEmail}`} style={link}>
              {supportEmail}
            </Link>
            .
          </Text>

          <Text style={footer}>{companyName}</Text>
        </Container>
      </Body>
    </Html>
  );
}

WelcomeEmail.PreviewProps = {
  firstName: "Jordan",
  companyName: "Acme",
  loginUrl: "https://app.example.com/login",
  supportEmail: "support@acme.com",
} satisfies WelcomeEmailProps;

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
  color: "##444444",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "0 0 12px",
};

const listItem: React.CSSProperties = {
  color: "#444444",
  fontSize: "15px",
  lineHeight: "1.6",
  margin: "0 0 6px",
  paddingLeft: "4px",
};

const buttonSection: React.CSSProperties = {
  margin: "28px 0",
};

const button: React.CSSProperties = {
  backgroundColor: "#0070f3",
  borderRadius: "6px",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "15px",
  fontWeight: "500",
  padding: "12px 24px",
  textDecoration: "none",
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
