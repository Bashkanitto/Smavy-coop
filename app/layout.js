import '../globals.css';

export const metadata = {
  title: 'Smavy Coop',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className="mx-auto z-20">{children}</main>
      </body>
    </html>
  );
}
