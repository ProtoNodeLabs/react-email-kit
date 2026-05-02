import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface LineItem {
  description: string;
  quantity: number;
  unitPrice: number;
}

interface ReceiptEmailProps {
  firstName?: string;
  orderNumber?: string;
  orderDate?: string;
  lineItems?: LineItem[];
  subtotal?: number;
  tax?: number;
  total?: number;
  currency?: string;
  logoUrl?: string;
  companyName?: string;
  supportEmail?: string;
}

function formatCurrency(amount: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

export default function ReceiptEmail({
  firstName = "there",
  orderNumber = "ORD-00001",
  orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  lineItems = [
    { description: "Pro Plan — Monthly", quantity: 1, unitPrice: 49.0 },
  ],
  subtotal = 49.0,
  tax = 0,
  total = 49.0,
  currency = "USD",
  logoUrl,
  companyName = "Acme",
  supportEmail = "support@example.com",
}: ReceiptEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Your {companyName} receipt — {orderNumber}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {logoUrl && (
            <Section style={logoSection}>
              <Img src={logoUrl} alt={companyName} height={40} />
            </Section>
          )}

          <Heading style={h1}>Receipt</Heading>

          <Text style={text}>Hi {firstName},</Text>

          <Text style={text}>
            Thanks for your payment. Here's your receipt for{" "}
            <strong>{orderNumber}</strong> on {orderDate}.
          </Text>

          <Section style={tableContainer}>
            <Row style={tableHeader}>
              <Column style={colDescription}>
                <Text style={tableHeaderText}>Description</Text>
              </Column>
              <Column style={colQty}>
                <Text style={{ ...tableHeaderText, textAlign: "center" }}>Qty</Text>
              </Column>
              <Column style={colAmount}>
                <Text style={{ ...tableHeaderText, textAlign: "right" }}>Amount</Text>
              </Column>
            </Row>

            {lineItems.map((item, i) => (
              <Row key={i} style={tableRow}>
                <Column style={colDescription}>
                  <Text style={tableCell}>{item.description}</Text>
                </Column>
                <Column style={colQty}>
                  <Text style={{ ...tableCell, textAlign: "center" }}>
                    {item.quantity}
                  </Text>
                </Column>
                <Column style={colAmount}>
                  <Text style={{ ...tableCell, textAlign: "right" }}>
                    {formatCurrency(item.quantity * item.unitPrice, currency)}
                  </Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Column>
                <Text style={summaryLabel}>Subtotal</Text>
              </Column>
              <Column>
                <Text style={summaryValue}>{formatCurrency(subtotal, currency)}</Text>
              </Column>
            </Row>
            {tax > 0 && (
              <Row>
                <Column>
                  <Text style={summaryLabel}>Tax</Text>
                </Column>
                <Column>
                  <Text style={summaryValue}>{formatCurrency(tax, currency)}</Text>
                </Column>
              </Row>
            )}
            <Row>
              <Column>
                <Text style={totalLabel}>Total</Text>
              </Column>
              <Column>
                <Text style={totalValue}>{formatCurrency(total, currency)}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Questions about this charge? Email{" "}
            <span style={{ color: "#0070f3" }}>{supportEmail}</span> and
            reference <strong>{orderNumber}</strong>.
          </Text>

          <Text style={footer}>{companyName}</Text>
        </Container>
      </Body>
    </Html>
  );
}

ReceiptEmail.PreviewProps = {
  firstName: "Jordan",
  orderNumber: "ORD-00042",
  orderDate: "May 1, 2025",
  lineItems: [
    { description: "Pro Plan — Monthly", quantity: 1, unitPrice: 49.0 },
    { description: "Extra seats (×3)", quantity: 3, unitPrice: 10.0 },
  ],
  subtotal: 79.0,
  tax: 6.32,
  total: 85.32,
  currency: "USD",
  companyName: "Acme",
  supportEmail: "billing@acme.com",
} satisfies ReceiptEmailProps;

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

const tableContainer: React.CSSProperties = {
  margin: "24px 0 0",
};

const tableHeader: React.CSSProperties = {
  backgroundColor: "#f6f9fc",
  borderRadius: "4px",
};

const tableHeaderText: React.CSSProperties = {
  color: "#6b7280",
  fontSize: "12px",
  fontWeight: "600",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  margin: "8px 0",
  padding: "0 8px",
};

const tableRow: React.CSSProperties = {
  borderBottom: "1px solid #f3f4f6",
};

const tableCell: React.CSSProperties = {
  color: "#374151",
  fontSize: "14px",
  margin: "10px 0",
  padding: "0 8px",
};

const colDescription: React.CSSProperties = { width: "60%" };
const colQty: React.CSSProperties = { width: "15%" };
const colAmount: React.CSSProperties = { width: "25%" };

const summaryLabel: React.CSSProperties = {
  color: "#6b7280",
  fontSize: "14px",
  margin: "4px 0",
  textAlign: "left",
};

const summaryValue: React.CSSProperties = {
  color: "#374151",
  fontSize: "14px",
  margin: "4px 0",
  textAlign: "right",
};

const totalLabel: React.CSSProperties = {
  color: "#111827",
  fontSize: "16px",
  fontWeight: "700",
  margin: "8px 0 4px",
  textAlign: "left",
};

const totalValue: React.CSSProperties = {
  color: "#111827",
  fontSize: "16px",
  fontWeight: "700",
  margin: "8px 0 4px",
  textAlign: "right",
};

const hr: React.CSSProperties = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer: React.CSSProperties = {
  color: "#9ca3af",
  fontSize: "13px",
  lineHeight: "1.5",
  margin: "0 0 8px",
};
