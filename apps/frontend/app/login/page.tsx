"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleMagicLink(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) setError(error.message);
    else setSent(true);
  }

  async function handleGoogleLogin() {
    setError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    if (error) setError(error.message);
  }

  return (
    <div style={{ maxWidth: 360, margin: "80px auto" }}>
      <h1>ورود</h1>

      <button onClick={handleGoogleLogin} style={{ width: "100%", marginBottom: 16 }}>
        ورود با گوگل
      </button>

      <div style={{ textAlign: "center", margin: "12px 0", opacity: 0.6 }}>یا</div>

      {sent ? (
        <p>لینک ورود به {email} ارسال شد. ایمیلت رو چک کن.</p>
      ) : (
        <form onSubmit={handleMagicLink}>
          <input
            type="email"
            required
            placeholder="ایمیل"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 8 }}
          />
          <button type="submit" style={{ width: "100%" }}>
            ارسال لینک ورود
          </button>
        </form>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
