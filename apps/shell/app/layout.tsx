export const metadata = {
  title: "QPlatform",
  description: "indep",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
