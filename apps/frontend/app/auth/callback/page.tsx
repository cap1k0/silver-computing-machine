"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    async function run() {
      // supabase-js خودش کد رو از URL می‌خونه و سشن رو می‌سازه
      const { data, error } = await supabase.auth.getSession();
      if (error || !data.session) {
        router.replace("/login");
        return;
      }

      const token = data.session.access_token;

      // این call به جانگو، پروفایل رو اگه وجود نداشت می‌سازه
      // (اسم از گوگل خودکار پر می‌شه، از مجیک‌لینک خالی می‌مونه)
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile/me/`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const profile = await res.json();

      if (!profile.name) {
        router.replace("/complete-profile");
      } else {
        router.replace("/");
      }
    }
    run();
  }, [router]);

  return <p style={{ textAlign: "center", marginTop: 80 }}>در حال ورود...</p>;
}
