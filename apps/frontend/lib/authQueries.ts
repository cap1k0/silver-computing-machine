import { supabase } from "./supabaseClient";

// این‌ها تنها کوئری‌هایی هستن که فرانت مستقیم به سوپابیس می‌زنه -
// فقط برای auth. بقیه‌ی داده (Profile، EditSession و ...) از Django میاد،
// چون تصمیم گرفتیم مدیریتش دست جانگو باشه.

export async function getCurrentSession() {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  return data.session; // null اگه لاگین نکرده
}

export async function getAccessToken(): Promise<string | null> {
  const session = await getCurrentSession();
  return session?.access_token ?? null;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

// برای گوش دادن به تغییر وضعیت لاگین (مثلا تو یه AuthProvider بالای اپ)
export function onAuthStateChange(callback: (token: string | null) => void) {
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    callback(session?.access_token ?? null);
  });
  return data.subscription.unsubscribe; // برای cleanup تو useEffect
}
