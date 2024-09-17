import "./globals.css";
import NavBar from "../components/Navbar";
import Head from "next/head";
export const metadata = {
  title: "Game On Volleyball",
  description: "A simple Next.js app with embedded Google Forms",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body>
        <NavBar />
        <main className="flex flex-col items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
