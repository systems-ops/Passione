"use client";

import { useEffect, useRef } from "react";

const OPENTABLE_RID = process.env.NEXT_PUBLIC_OPENTABLE_RID;

export default function OpenTableWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!OPENTABLE_RID || !container) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.opentable.com/widget/reservation/loader?rid=${OPENTABLE_RID}&type=standard&theme=standard&color=1&dark=false&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website`;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  if (!OPENTABLE_RID) {
    return (
      <div className="rounded-2xl border border-dashed border-brand-black/20 bg-white p-8 text-center">
        <p className="text-sm text-brand-black/60">
          The OpenTable widget isn&apos;t connected yet. Add the restaurant&apos;s
          OpenTable Restaurant ID as{" "}
          <code className="rounded bg-black/5 px-1.5 py-0.5 text-xs">
            NEXT_PUBLIC_OPENTABLE_RID
          </code>{" "}
          to enable live booking here.
        </p>
        <a
          href="https://www.opentable.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green/90"
        >
          Book on OpenTable
        </a>
      </div>
    );
  }

  return <div ref={containerRef} id="reservation-widget-container" />;
}
