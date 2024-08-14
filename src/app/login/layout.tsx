import "../globals.css";
import loginDesktopImage from '../../assets/images/image-login/login-desktop.png';
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${loginDesktopImage.src})` }}>
        {children}
      </body>
    </html>
  );
}

