"use client";
import React, { useState, useEffect } from "react";
import Datas from "../html.json";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Page() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentId, setCurrentId] = useState(() => {
    const id = parseInt(pathname.split("/").pop(), 10);
    return isNaN(id) ? 1 : id;
  });

  useEffect(() => {
    const id = parseInt(pathname.split("/").pop(), 10);
    if (!isNaN(id) && id !== currentId) {
      setCurrentId(id);
    }
  }, [pathname, currentId]);

  const handleNext = () => {
    setCurrentId((prevId) => {
      const nextId = prevId + 1;
      if (Datas.some((item) => item.id === nextId)) {
        router.push(`/htmls/${nextId}`);
        return nextId;
      }
      return prevId;
    });
  };

  const handleBack = () => {
    setCurrentId((prevId) => {
      const prevIdUpdated = prevId - 1;
      if (Datas.some((item) => item.id === prevIdUpdated)) {
        router.push(`/htmls/${prevIdUpdated}`);
        return prevIdUpdated;
      }
      return prevId;
    });
  };

  const currentData = Datas.find((item) => item.id === currentId);

  const copyToClipboard = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          toast.success("Code copied to clipboard!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // Avoid scrolling to bottom of the page in MS Edge.
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        const successful = document.execCommand("copy");
        if (successful) {
          toast.success("Code copied to clipboard!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          console.error("Failed to copy text");
        }
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }

      document.body.removeChild(textArea);
    }
  };

  return (
    <div>
      <div className="flex gap-14 pb-12 justify-between">
        <button
          className="w-24 h-12 bg-green-900 text-white rounded-xl"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="w-24 h-12 bg-green-900 text-white rounded-xl"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      {currentData ? (
        <div className="gap-16 pb-12">
          <h1 className="pb-12 text-2xl font-bold">{currentData.title}</h1>
          <img
            src={currentData.image}
            alt="Tutorial Image"
            width={600}
            height={400}
            className="pb-12"
          />
          {Array.isArray(currentData.description) ? (
            <ul className="pb-12">
              {currentData.description.map((desc, index) => (
                <li className="border-b-2" key={index}>
                  {desc}
                </li>
              ))}
            </ul>
          ) : (
            <p>{currentData.description}</p>
          )}
                    <h1 className=" font-bold text-green-500 text-2xl">{currentData.title01}</h1>

          <div className="relative bg-gray-100 p-4 rounded-lg">
            <button
              onClick={() => copyToClipboard(currentData.code)}
              className="absolute top-2 right-2 bg-gray-300 text-gray-800 py-1 px-2 rounded text-sm hover:bg-gray-400"
            >
              Copy
            </button>
            <code className="block text-gray-800 font-mono text-sm leading-relaxed overflow-x-auto max-w-full">
              {currentData.code}
            </code>
          </div>
          <h1 className=" font-bold text-green-500 text-2xl">{currentData.title1}</h1>
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <button
              onClick={() => copyToClipboard(currentData.code1)}
              className="absolute top-2 right-2 bg-gray-300 text-gray-800 py-1 px-2 rounded text-sm hover:bg-gray-400"
            >
              Copy
            </button>
            <code className="block text-gray-800 font-mono text-sm leading-relaxed overflow-x-auto max-w-full">
              {currentData.code1}
            </code>
          </div>
          <h1 className=" font-bold text-green-500 text-2xl" >{currentData.title2}</h1>
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <button
              onClick={() => copyToClipboard(currentData.code2)}
              className="absolute top-2 right-2 bg-gray-300 text-gray-800 py-1 px-2 rounded text-sm hover:bg-gray-400"
            >
              Copy
            </button>
            <code className="block text-gray-800 font-mono text-sm leading-relaxed overflow-x-auto max-w-full">
              {currentData.code2}
            </code>
          </div>
          <h1 className=" font-bold text-green-500 text-2xl">{currentData.title3}</h1>
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <button
              onClick={() => copyToClipboard(currentData.code3)}
              className="absolute top-2 right-2 bg-gray-300 text-gray-800 py-1 px-2 rounded text-sm hover:bg-gray-400"
            >
              Copy
            </button>
            <code className="block text-gray-800 font-mono text-sm leading-relaxed overflow-x-auto max-w-full">
              {currentData.code3}
            </code>
          </div>
          <h1 className=" font-bold text-green-500 text-2xl">{currentData.title4}</h1>
          <div className="relative bg-gray-100 p-4 rounded-lg">
            <button
              onClick={() => copyToClipboard(currentData.code4)}
              className="absolute top-2 right-2 bg-gray-300 text-gray-800 py-1 px-2 rounded text-sm hover:bg-gray-400"
            >
              Copy
            </button>
            <code className="block text-gray-800 font-mono text-sm leading-relaxed overflow-x-auto max-w-full">
              {currentData.code4}
            </code>
          </div>
          <div
            className="gap-20 pb-12"
            dangerouslySetInnerHTML={{ __html: currentData.content }}
          />
          <img
            src={currentData.templet}
            alt="Tutorial Image"
            width={600}
            height={400}
            className="pb-12"
          />
          <Link
            href={currentData.content}
            className="text-blue-700 size-36 underline"
          >
            For more detail, click here
          </Link>
        </div>
      ) : (
        <div>No data found</div>
      )}
      <div className="flex pt-24 justify-between">
        <button
          className="w-24 h-12 bg-green-900 text-white rounded-xl"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="w-24 h-12 bg-green-900 text-white rounded-xl"
          onClick={handleNext}
        >
          Next
        </button>
      </div>

      {/* Toast container */}
      <ToastContainer />
    </div>
  );
}

export default Page;
