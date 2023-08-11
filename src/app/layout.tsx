// from radix themes 
import "@radix-ui/themes/styles.css";

// project based or tailwind css file
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

// wrap the project with Theme component
import { Theme } from "@radix-ui/themes";

import { Header } from "@/components/Header/Header";
import { NextThemeProvider } from '@/components/ThemeProvider';
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Install Radix Theme",
  description: "Built new demo project with Radix Theme",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={inter.className}>
        <NextThemeProvider>
          <Theme accentColor="violet" panelBackground="solid">
            <Header />
            {children}
          </Theme>
        </NextThemeProvider>
      </body>
    </html>
  );
}
