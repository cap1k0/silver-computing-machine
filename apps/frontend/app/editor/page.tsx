"use client";

import { useState } from "react";
import { apiFetch } from "@/lib/apiFetch";

type Change = {
  original: string;
  revised: string;
  type: string;
  reason: string;
};

type EditResult = {
  session_id: string;
  edited_text: string;
  changes: Change[];
};

const TYPE_LABELS: Record<string, string> = {
  grammar: "گرامر",
  vocabulary: "واژگان",
  style: "سبک",
  clarity: "وضوح",
  cohesion: "انسجام",
  formality: "رسمیت",
  hedging: "احتیاط زبانی",
  conciseness: "ایجاز",
  citation_language: "زبان استناد",
  punctuation: "نگارش/نقطه‌گذاری",
};

export default function EditorPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<EditResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit() {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const data = await apiFetch("/api/edit/", {
        method: "POST",
        body: JSON.stringify({ text: input }),
      });
      setResult(data);
    } catch (e) {
      setError("مدل جواب نداد، دوباره امتحان کن.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        maxWidth: 900,
        margin: "0 auto",
        padding: "48px 24px",
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 24 }}>ادیتور متن آکادمیک</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="متن علمی‌ات رو اینجا بذار..."
        rows={10}
        style={{
          width: "100%",
          padding: 16,
          borderRadius: 12,
          border: "1px solid #ddd",
          fontSize: 16,
          lineHeight: 1.7,
          marginBottom: 16,
          resize: "vertical",
        }}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          background: "#0a0a0a",
          color: "#fff",
          padding: "12px 28px",
          borderRadius: 10,
          fontWeight: 600,
          border: "none",
          cursor: loading ? "default" : "pointer",
          opacity: loading ? 0.6 : 1,
        }}
      >
        {loading ? "در حال بررسی..." : "ویرایش کن"}
      </button>

      {error && <p style={{ color: "red", marginTop: 16 }}>{error}</p>}

      {result && (
        <div style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 20, marginBottom: 12 }}>متن ویرایش‌شده</h2>
          <p
            style={{
              background: "#f7f7f7",
              padding: 16,
              borderRadius: 12,
              lineHeight: 1.8,
              marginBottom: 32,
            }}
          >
            {result.edited_text}
          </p>

          <h2 style={{ fontSize: 20, marginBottom: 12 }}>
            تغییرات ({result.changes.length})
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {result.changes.map((c, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #eee",
                  borderRadius: 10,
                  padding: 14,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    background: "#eee",
                    borderRadius: 999,
                    padding: "2px 10px",
                    marginBottom: 8,
                    display: "inline-block",
                  }}
                >
                  {TYPE_LABELS[c.type] ?? c.type}
                </span>
                <div style={{ marginBottom: 6 }}>
                  <span style={{ textDecoration: "line-through", color: "#b00" }}>
                    {c.original}
                  </span>{" "}
                  ←{" "}
                  <span style={{ color: "#080", fontWeight: 600 }}>{c.revised}</span>
                </div>
                <div style={{ fontSize: 14, color: "#666" }}>{c.reason}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
