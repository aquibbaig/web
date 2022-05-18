import React, { useEffect } from "react";
import Prism from "prismjs";

export default function Code({ content = "", codeClass = "language-js" }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <pre style={{ maxWidth: "100%", overflow: "scroll" }}>
        <code
          id="jsx-code"
          style={{ maxWidth: "100%", overflow: "scroll" }}
          className={`jsx-3109235630 ${codeClass}`}
        >
          {content}
        </code>
      </pre>
      <style jsx>{`
        code {
          max-width: 100%;
          overflow: "scroll";
        }
      `}</style>
    </div>
  );
}
