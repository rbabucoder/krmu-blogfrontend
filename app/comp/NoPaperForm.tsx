"use client";
import { useEffect, useRef } from "react";

export default function NoPaperForm() {
  const widgetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Clear widget container when navigating
    if (widgetRef.current) {
      widgetRef.current.innerHTML = "";
    }

    // Remove old script if present
    const oldScript = document.getElementById("npf-script");
    if (oldScript) oldScript.remove();

    // Create new script exactly as NPF docs require
    const script = document.createElement("script");
    script.id = "npf-script";
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.nopaperforms.com/emwgts.js";

    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={widgetRef}
      className="npf_wgts npfblog-form"
      data-height="550px"
      data-w="0d2d6e28c86e4213b353bfe132035965"
    ></div>
  );
}
