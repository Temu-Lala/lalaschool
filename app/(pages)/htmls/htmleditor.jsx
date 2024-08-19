import React, { useState } from "react";
import dynamic from "next/dynamic";
import { FaHandPointer } from "react-icons/fa";
const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

function htmleditor() {
    const [htmlContent, setHtmlContent] = useState(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <header>
                <h1>Welcome to My Website</h1>
            </header>
            <main>
                <section>
                    <h2>About Us</h2>
                    <p>This is a paragraph about us.</p>
                </section>
                <section>
                    <h2>Contact</h2>
                    <p>Feel free to reach out to us.</p>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 My Website</p>
            </footer>
        </body>
        </html>
          `);
        
          const [iframeSrc, setIframeSrc] = useState("");
        
          const handleRunCode = () => {
            const blob = new Blob([htmlContent], { type: "text/html" });
            const url = URL.createObjectURL(blob);
            setIframeSrc(url);
          };
  return (
    <div className="flex-1 z-0 rounded-xl bg-white">
    <div>
      <Editor
        height="60vh"
        language="html"
        value={htmlContent}
        onChange={(value) => setHtmlContent(value || "")}
        theme="vs-dark"
      />
      <button
        onClick={handleRunCode}
        className="mt-4 p-2 bg-green-500 text-white rounded"
      >
        Run Code
      </button>
      <iframe className=" rounded-2xl"
        src={iframeSrc}
        style={{ width: "100%", height: "100vh", border: "none" }}
        title="Output"
      ></iframe>
    </div>
  </div>
  )
}

export default htmleditor
