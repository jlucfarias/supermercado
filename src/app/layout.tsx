import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { constructMetadata } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = constructMetadata();

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default async function RootLayout({
  children,
}: RootLayoutProps) {
  const lang = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={lang}>
      <body className={`antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
