export const metadata = {
  title: "پلتفرم ما",
  description: "شل مستقل - بدون وابستگی به بک‌اند یا مدل",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
