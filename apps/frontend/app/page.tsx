"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 24px",
        position: "relative",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          border: "1px solid #444",
          borderRadius: 999,
          padding: "4px 14px",
          fontSize: 13,
          letterSpacing: 1,
          color: "#aaa",
        }}
      >
        BETA
      </span>

      <h1
        style={{
          fontSize: "clamp(32px, 6vw, 64px)",
          fontWeight: 700,
          textAlign: "center",
          maxWidth: 800,
          lineHeight: 1.15,
          marginBottom: 20,
        }}
      >
        پلتفرمی که مدل‌ها را برای تحقیقات علمی می‌سازد
      </h1>

      <p style={{ color: "#999", fontSize: 18, maxWidth: 560, textAlign: "center", marginBottom: 56 }}>
        ابزارهای هوش‌مصنوعی اختصاصی، ساخته‌شده برای پژوهشگران و نویسندگان آکادمیک.
      </p>

      <section
        style={{
          width: "100%",
          maxWidth: 640,
          border: "1px solid #262626",
          borderRadius: 16,
          padding: 32,
          background: "#111",
        }}
      >
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>محصول اول: ادیتور متن آکادمیک</h2>
        <p style={{ color: "#999", marginBottom: 24, lineHeight: 1.7 }}>
          متن علمی‌ات را وارد کن؛ ایجنت گرامر، واژگان، انسجام و لحن را بررسی و اصلاح می‌کند —
          همراه با توضیح هر تغییر.
        </p>
        <Link
          href="/editor"
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#0a0a0a",
            padding: "12px 28px",
            borderRadius: 10,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          امتحان کن
        </Link>
      </section>
    </main>
  );
}
