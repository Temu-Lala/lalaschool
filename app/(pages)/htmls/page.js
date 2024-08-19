"use client";
import React, { useState } from "react";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import Image from "next/image";
import Images from "../../../public/htmlsphoto/image.png";
import { FaHandPointer } from "react-icons/fa";
import Codeeditor from './htmleditor'
function Page() {
 

  return (
    <div className="flex xl:flex-row flex-col ">
      <div className="flex-1 ">
        <h1 className="text-2xl border-b-2 font-bold ">
          HTML: HyperText Markup Language
        </h1>
        <span>
          ማለት የ አንድ ዌብሳይት የጀርባ አጥንት ነው፡፡ ከHTML በተጨማሪ ሌሎች ቴክኖሎጂዎች በአጠቃላይ የድረ-ገጹን
          ገጽታ/appearance (CSS) ወይም ተግባር/functionality (Javascript) ለመግለፅ ያገለግላሉ።
        </span>
        <h1>የ HTMLመሰረታዊ መዋቅር ይህንን ይመስላል</h1>
        <Image
          src={Images}
          alt="Description of the image"
          width={500}
          height={300}
          layout="responsive"
          className="  p-5 rounded-3xl"
        />
        <p>
          የድረ-ገጹ አጠቃላይ ይዘት በ&lt;html&gt; መለያ ውስጥ ተዘግቷል። ይህ በገጹ ላይ ያሉትን ሁሉንም ሌሎች
          አካላት የያዘው የስር አካል ነው።
        </p>
        <p className="text-red-500 underline border-b-4 border-t-2">
          ምን ማለት ነው እያንዳንዱ ዌብሳይታችን ላይ ሚታየው ሁሉም ነገር በ በ&lt;html&gt; ታግ ውስጥ ነው
        </p>
        <div className="flex flex-col">
          የ&lt;head&gt; ክፍል ሁሉም የድረ-ገጹ ሜታዳታ የሚቀመጥበት ሜታዳታ
          <ul className="items-center justify-center self-center">
            <li>የ ዌብ ሳይታችን ስም ለ ምሳሌ google.com</li>
            <li>stylesheets (CSS)</li>
            <li>scripts(Javascript)</li>
          </ul>
          ይህ ክፍል በቀጥታ በድረ-ገጹ ላይ የሚታየውን ይዘት አልያዘም
        </div>
        <div>የ&lt;body&gt; ክፍል በድረ-ገጹ ላይ ለተጠቃሚው የሚታዩትን ሁሉንም ይዘቶች ይዟል።</div>
        <div className="flex flex-col p-6 space-y-6 rounded-lg shadow-md">
          <h2 className="text-2xl border-b-2 font-bold">Example Explained</h2>

          <ol className="list-decimal list-inside space-y-4">
            <li className="flex items-start space-x-3">
              <FaHandPointer className="text-blue-500 text-2xl" />
              <span className="font-medium">
                The <code>&lt;!DOCTYPE html&gt;</code> declaration defines that
                this document is an HTML5 document.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <FaHandPointer className="text-blue-500 text-2xl" />
              <span className="font-medium">
                The <code>&lt;html&gt;</code> element is the root element of an
                HTML page.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <FaHandPointer className="text-blue-500 text-2xl" />
              <span className="font-medium">
                The <code>&lt;head&gt;</code> element contains meta information
                about the HTML page.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <FaHandPointer className="text-blue-500 text-2xl" />
              <span className="font-medium">
                The <code>&lt;title&gt;</code> element specifies a title for the
                HTML page (which is shown in the browser's title bar or in the
                page's tab).
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <FaHandPointer className="text-blue-500 text-2xl" />
              <span className="font-medium">
                The <code>&lt;body&gt;</code> element defines the document's
                body, and is a container for all the visible contents, such as
                headings, paragraphs, images, hyperlinks, tables, lists, etc.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <FaHandPointer className="text-blue-500 text-2xl" />
              <span className="font-medium">
                The <code>&lt;h1&gt;</code> element defines a large heading.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <FaHandPointer className="text-blue-500 text-2xl" />
              <span className="font-medium">
                The <code>&lt;p&gt;</code> element defines a paragraph.
              </span>
            </li>
          </ol>
        </div>
      </div>
   
   
   
    </div>
  );
}

export default Page;
