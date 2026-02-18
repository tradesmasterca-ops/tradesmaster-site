import React from "react";

export function CookiesPage(): React.JSX.Element {
  return (
    <div className="tm-container py-14">
      <h1 className="text-3xl font-semibold">Cookie Policy</h1>
      <p className="mt-4 max-w-3xl text-sm text-slate-600">
        This site uses essential cookies for core functionality and optional
        analytics cookies to understand usage.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-base font-semibold">Cookie categories</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          {[
            "Essential: required for the site to function (always on).",
            "Analytics: optional; helps improve the site.",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
