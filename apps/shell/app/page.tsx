// این صفحه عمداً هیچ fetch/API call نداره - کاملاً استاتیکه.
// هدفش اینه که حتی اگه Django، Supabase، یا مدل هاگینگ‌فیس هرکدوم قطع باشن،
// این صفحه (روی دامنه/پروژه‌ی جدا رو Vercel) همیشه بالا و قابل‌دسترس بمونه.

export default function ShellPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        color: "#fff",
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        textAlign: "center",
        padding: 24,
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 12 }}>پلتفرم ما</h1>
      <p style={{ color: "#999", maxWidth: 420 }}>
        سرویس اصلی موقتاً در دسترس نیست. این صفحه مستقل از بک‌اند و مدل کار می‌کنه
        و همیشه بالاست — به‌محض بازگشت سرویس، لینک اصلی رو امتحان کن.
      </p>
    </main>
  );
}
