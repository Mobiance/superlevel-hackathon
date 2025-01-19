'use client'
import React, { useState } from "react";
import axios from "axios";
import Navbar2 from "../Components/Navbar2";

const Page = () => {
  const [blogText, setBlogText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [generatedContent, setGeneratedContent] = useState("Your generated content will appear here...");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async () => {
    if (!blogText || !selectedLanguage) {
      alert("Please enter blog text and select a language.");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post("http://localhost:3001/blogs/text", {
        content: blogText,
        language: selectedLanguage,
      });

      setGeneratedContent(response.data|| "Generated content is not available.");
    } catch (error) {
      console.error("Error generating content:", error);
      setGeneratedContent("An error occurred while generating content.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar2 />
      <div className="w-full h-full flex flex-col items-center px-5 py-10 gap-8">
        <h1 className="text-3xl font-semibold font-denton">Text Translation</h1>
        <div className="w-full max-w-3xl flex gap-4 h-24 items-center">
          <textarea
            className="w-full h-24 bg-[#212121] border border-[#333] rounded-lg p-4 text-white/80 focus:outline-none focus:border-white/40 resize-none"
            placeholder="Enter your blog text here..."
            value={blogText}
            onChange={(e) => setBlogText(e.target.value)}
          />
          <div className="flex flex-col gap-4">
            <select
              className="w-40 h-10 bg-[#212121] border border-[#333] rounded-md text-white/80 px-2 focus:outline-none focus:border-white/40"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
            >
              <option value="" disabled>
                Select Language
              </option>
              <option value="hi">Hindi</option>
              <option value="mr">Marathi</option>
              <option value="gu">Gujarati</option>
              <option value="ta">Tamil</option>
              <option value="kn">Kannada</option>
              <option value="te">Telugu</option>
              <option value="bn">Bengali</option>
              <option value="ml">Malayalam</option>
              <option value="pa">Punjabi</option>
              <option value="or">Odia</option>
            </select>
            <button
              onClick={handleGenerate}
              className="w-full ai-button-gradient px-6 py-2 h-fit bg-[#212121] hover:bg-[#313131] border border-[#333] rounded-md text-white hover:opacity-80 transition duration-200"
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>

        <div className="w-full max-w-3xl min-h-[200px] bg-[#212121] border border-[#333] rounded-lg p-6">
          <h2 className="text-xl text-white/80 mb-4">Generated Content</h2>
          <div className="text-white/60">{generatedContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
