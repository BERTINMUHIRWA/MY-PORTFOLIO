import type { Metadata, Viewport } from "next";
import "./globals.css";
import ContactModal from "@/components/ContactModal";
export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL to your real domain once deployed (e.g. https://bertin.dev).
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Bertin Creatives — Software Developer & Designer",
  description:
    "Portfolio of Bertin Creatives, a software developer, UI/UX designer and graphic designer building digital products that look considered and work reliably.",
  openGraph: {
    title: "Bertin Creatives — Software Developer & Designer",
    description:
      "Full-stack development, interface design and visual branding.",
    type: "website",
    images: ["/images/bertin.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}<ContactModal /></body>
    </html>
  );
}
