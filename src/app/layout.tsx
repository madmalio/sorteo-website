import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Footer } from "@/components/footer";
import { ThemeToggle } from "@/components/theme-toggle";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sorteo",
  description: "Effortless File Organization for Your Desktop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Add this div for the toggle button */}
          <div className="absolute top-4 right-4 z-50">
            <ThemeToggle />
          </div>

          {children}
          <ScrollToTop />
          <Footer />
        </ThemeProvider>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K601YQ7JT6"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K601YQ7JT6');
        </script>
      </body>
    </html>
  );
}
