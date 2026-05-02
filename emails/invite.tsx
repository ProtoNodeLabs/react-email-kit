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

interface InviteEmailProps {
  inviteeName?: string;
  inviterName?: string;
  teamName?: string;
  inviteUrl?: string;
  expiresInDays?: number;
  logoUrl?: string;
  companyName?: string;
  supportEmail?: string;
}

export default function InviteEmail({
  inviteeName = "there",
  inviterName = "A teammate",
  teamName = "the team",
  inviteUrl = "https://app.example.com/invite/accept",
  expiresInDays = 7,
  logoUrl,
  companyName = "Acme",
  supportEmail = "support@example.com",
}: InviteEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        {inviterName} invited you to join {teamName} on {companyName}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {logoUrl && (
            <Section style={logoSection}>
              <Img src={logoUrl} alt={companyName} height={40} />
            </Section>
          )}

          <Heading style={h1}>You're invited to join {teamName}</Heading>

          <Text style={text}>
            <strong>{inviterName}</strong> has invited you to collaborate on{" "}
            {companyName}.
          </Text>

          <Section style={buttonSection}>
            <Button style={button} href={inviteUrl}>
              Accept invitation
            </Button>
          </Section>

          <Text style={expiry}>
            This invitation expires in {expiresInDays} day{expiresInDays !== 1 ? "s" : ""}.
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            If you weren't expecting this invitation, you can ignore it safely.
            Questions?{" "}
            <Link href={`mailto:${supportEmail}`} style={link}>
              Contact support
            </Link>
            .
          </Text>

          <Text style={footer}>{companyName}</Text>
        </Container>
      </Body>
    </Html>
  );
}

InviteEmail.PreviewProps = {
  inviteeName: "Jordan",
  inviterName: "Alex Chen",
  teamName: "Design team",
  inviteUrl: "https://app.example.com/invite/accept?token=abc123",
  expiresInDays: 7,
  companyName: "Acme",
  supportEmail: "support@acme.com",
} satisfies InviteEmailProps;

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
  backgroundColor: "#0070f3",
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
