import './globals.css';
import NavBar from '../components/Navbar';
export const metadata = {
  title: 'My Next.js App',
  description: 'A simple Next.js app with embedded Google Forms',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="flex flex-col items-center justify-center min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
