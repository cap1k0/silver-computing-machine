import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-5xl px-6 py-10">
        {/* Nav */}
        <nav className="mb-16 flex items-center justify-between">
          <span className="text-lg font-medium">Bruca</span>
          <div className="flex gap-6 text-sm text-neutral-500">
            <Link href="#product">Product</Link>
            <Link href="#research">Research</Link>
            <Link href="#docs">Docs</Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block rounded-md bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">
            beta
          </span>
          <h1 className="mb-4 text-4xl font-medium leading-tight sm:text-5xl">
            Models built for scientific research
          </h1>
          <p className="mb-6 text-base leading-relaxed text-neutral-600">
            Bruca trains language models purpose-built for research writing.
            Our first agent edits scholarly text with the precision of a
            professional copyeditor.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#product"
              className="rounded-md border-2 border-blue-600 bg-blue-50 px-5 py-2.5 font-medium text-blue-800"
            >
              Try the editing agent →
            </a>
            <a
              href="#research"
              className="rounded-md border border-neutral-300 px-5 py-2.5 font-medium text-neutral-700"
            >
              Read the research
            </a>
          </div>
        </section>

        {/* Product preview */}
        <section
          id="product"
          className="mb-16 rounded-xl border border-neutral-200 bg-neutral-50 p-6"
        >
          <div className="mb-4 flex items-center gap-2 text-xs text-neutral-500">
            <span>draft.docx</span>
          </div>
          <p className="text-base leading-relaxed">
            The results{" "}
            <span className="bg-red-100 text-red-800 line-through">
              indicate that
            </span>{" "}
            <span className="bg-green-100 text-green-800">suggest</span> a
            significant correlation between the two variables, which{" "}
            <span className="bg-red-100 text-red-800 line-through">
              was not expected by us
            </span>{" "}
            <span className="bg-green-100 text-green-800">
              we did not anticipate
            </span>
            .
          </p>
        </section>

        {/* Three pillars */}
        <section className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div>
            <p className="mb-1 font-medium">Research-grade editing</p>
            <p className="text-sm text-neutral-600">
              Trained on linguistic patterns from published academic writing.
            </p>
          </div>
          <div>
            <p className="mb-1 font-medium">Own model, own infra</p>
            <p className="text-sm text-neutral-600">
              Hosted and served independently, not a wrapper on a generic API.
            </p>
          </div>
          <div>
            <p className="mb-1 font-medium">Track changes, not rewrites</p>
            <p className="text-sm text-neutral-600">
              Every edit is shown as a diff, so the author stays in control.
            </p>
          </div>
        </section>

        {/* Model development space */}
        <section
          id="research"
          className="mb-16 rounded-xl border border-neutral-200 p-6"
        >
          <h2 className="mb-2 text-lg font-medium">Model development space</h2>
          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-neutral-600">
            An open workspace where we train, evaluate, and iterate on the
            models behind Bruca, including our ongoing research into how
            professional and AI-generated edits differ in scholarly
            publications, and how academic writers actually engage with
            AI-assisted language editing.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="text-xs text-neutral-500">Stage</p>
              <p className="font-medium">Active training</p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="text-xs text-neutral-500">Focus</p>
              <p className="font-medium">Scholarly language editing</p>
            </div>
            <div className="rounded-lg bg-neutral-50 p-4">
              <p className="text-xs text-neutral-500">Hosting</p>
              <p className="font-medium">Self-hosted inference</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex items-center justify-between border-t border-neutral-200 pt-4 text-sm text-neutral-500">
          <span>© 2026 Bruca</span>
          <Link href="/terms" className="hover:text-neutral-800">
            Terms of service
          </Link>
        </footer>
      </div>

      <CookieBanner />
    </main>
  );
}

function CookieBanner() {
  return (
    <div className="fixed inset-x-0 bottom-4 z-50 mx-auto flex w-[calc(100%-2rem)] max-w-2xl items-center justify-between gap-4 rounded-lg border border-neutral-200 bg-white p-4 shadow-md">
      <p className="text-sm text-neutral-600">
        We use cookies to improve your experience. See our{" "}
        <Link href="/terms" className="underline">
          terms of service
        </Link>{" "}
        for details.
      </p>
      <div className="flex flex-shrink-0 gap-2">
        <button className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm">
          Decline
        </button>
        <button className="rounded-md border border-blue-600 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-800">
          Accept
        </button>
      </div>
    </div>
  );
}
