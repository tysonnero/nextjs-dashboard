import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'You best login, Fool!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
