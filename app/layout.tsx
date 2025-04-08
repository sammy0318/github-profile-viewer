import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/ui/Footer'; 
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GitHub Profile Viewer',
  description: 'A GitHub user API-based project made in Next.js with ShadCN UI and Tailwind CSS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
