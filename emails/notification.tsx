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

type NotificationType = "info" | "success" | "warning" | "alert";

interface NotificationEmailProps {
  recipientName?: string;
  type?: NotificationType;
  title?: string;
  message?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  logoUrl?: string;
  companyName?: string;
  unsubscribeUrl?: string;
}

const typeConfig: Record<
  NotificationType,
  { color: string; label: string; emoji: string }
> = {
  info:    { color: "#0070f3", label: "Info",    emoji: "ℹ️" },
  success: { color: "#16a34a", label: "Success", emoji: "✅" },
  warning: { color: "#d97706", label: "Warning", emoji: "⚠️" },
  alert:   { color: "#dc2626", label: "Alert",   emoji: "🚨" },
};

export default function NotificationEmail({
  recipientName = "there",
  type = "info",
  title = "A heads up from us",
  message = "Something happened that we thought you should know about.",
  ctaLabel,
  ctaUrl,
  logoUrl,
  companyName = "Acme",
  unsubscribeUrl,
}: NotificationEmailProps) {
  const { color, label, emoji } = typeConfig[type];

  return (
    <Html>
      <Head />
      <Preview>
        {emoji} {title}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {logoUrl && (
            <Section style={logoSection}>
              <Img src={logoUrl} alt={companyName} height={40} />
            </Section>
          )}

          <Section style={{ ...badge, borderColor: color }}>
            <Text style={{ ...badgeText, color }}>
              {emoji} {label}
            </Text>
          </Section>

          <Heading style={h1}>{title}</Heading>

          <Text style={text}>Hi {recipientName},</Text>
          <Text style={text}>{message}</Text>

          {ctaLabel && ctaUrl && (
            <Section style={buttonSection}>
              <Button style={{ ...button, backgroundColor: color }} href={ctaUrl}>
                {ctaLabel}
              </Button>
            </Section>
          )}

          <Hr style={hr} />

          <Text style={footer}>
            You're receiving this from {companyName}.
            {unsubscribeUrl && (
              <>
                {" "}
                <Link href={unsubscribeUrl} style={link}>
                  Unsubscribe
                </Link>
                .
              </>
            )}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

NotificationEmail.PreviewProps = {
  recipientName: "Jordan",
  type: "success" as NotificationType,
  title: "Your export is ready",
  message:
    "Your data export has finished processing and is ready to download. The file will be available for 7 days.",
  ctaLabel: "Download export",
  ctaUrl: "https://app.example.com/exports/download",
  companyName: "Acme",
} satisfies NotificationEmailProps;

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
  marginBottom: "20px",
};

const badge: React.CSSProperties = {
  borderLeft: "3px solid",
  paddingLeft: "12px",
  marginBottom: "20px",
};

const badgeText: React.CSSProperties = {
  fontSize: "12px",
  fontWeight: "600",
  letterSpacing: "0.05em",
  margin: "0",
  textTransform: "uppercase",
};

const h1: React.CSSProperties = {
  color: "#1a1a1a",
  fontSize: "22px",
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
  margin: "24px 0",
};

const button: React.CSSProperties = {
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
  margin: "0",
};

const link: React.CSSProperties = {
  color: "#9ca3af",
};
