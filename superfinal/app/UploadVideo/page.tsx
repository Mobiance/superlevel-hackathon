"use client";

import React, { useState } from "react";
import axios from "axios";
import Navbar2 from "../Components/Navbar2";

const Page = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [originalTranscription, setOriginalTranscription] = useState("");
    const [transcription, setTranscription] = useState("");
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isTranslated, setIsTranslated] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const languages = [
        { code: "hi", name: "Hindi" },
        { code: "mr", name: "Marathi" },
        { code: "gu", name: "Gujarati" },
        { code: "ta", name: "tamil" },
        { code: "kn", name: "kannada" },
        { code: "te", name: "telugu" },
        { code: "bn", name: "bengali" },
        { code: "ml", name: "malayalam" },
        { code: "pa", name: "punjabi" },
        { code: "or", name: "odia" },
    ];

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setVideoFile(event.target.files[0]);
        }
    };

    const handleGenerateTranscription = async () => {
        if (!videoFile) {
            alert("Please upload a video file.");
            return;
        }

        const formData = new FormData();
        formData.append("video", videoFile);

        try {
            setIsGenerating(true);
            const response = await axios.post(
                "http://localhost:3001/blogs/video",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setOriginalTranscription(response.data || "No transcription available.");
            setTranscription(response.data || "No transcription available.");
            setIsTranslated(false);
        } catch (error) {
            console.error("Error generating transcription:", error);
            alert("Failed to generate transcription.");
        } finally {
            setIsGenerating(false);
        }
    };

    const handleProcessForTranslation = async () => {
        if (!originalTranscription) {
            alert("No transcription available to process for translation.");
            return;
        }

        try {
            setIsProcessing(true);
            const response = await axios.post("http://localhost:3001/blogs/text", {
                content: originalTranscription,
                language: selectedLanguage,
            });
            setTranscription(response.data|| "Translation not available.");
            setIsTranslated(true);
        } catch (error) {
            console.error("Error processing translation:", error);
            alert("Failed to process translation.");
        } finally {
            setIsProcessing(false);
        }
    };

    const resetTranscription = () => {
        setTranscription(originalTranscription);
        setIsTranslated(false);
    };

    const toggleEditMode = () => {
        setIsEditMode((prevMode) => !prevMode);
    };

    return (
        <div>
            <Navbar2 />
            <div className="w-full h-full flex flex-col items-center px-5 py-10 gap-8">
                <h1 className="text-3xl font-semibold text-white/80 font-denton">Video Transcription</h1>

                <div className="w-full max-w-3xl flex flex-col gap-6">
                    <div className="w-full flex flex-col gap-4">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#333] rounded-lg cursor-pointer bg-[#212121] hover:bg-[#313131] transition-colors duration-200">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <p className="mb-2 text-sm text-white/80">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-white/60">MP4, WebM, or OGG (MAX. 800MB)</p>
                            </div>
                            <input
                                type="file"
                                className="hidden"
                                accept="video/*"
                                onChange={handleFileChange}
                            />
                        </label>

                        <button
                            onClick={handleGenerateTranscription}
                            className="w-full ai-button-gradient px-6 py-3 bg-[#212121] hover:bg-[#313131] border border-[#333] rounded-md text-white hover:opacity-80 transition duration-200"
                            disabled={isGenerating}
                        >
                            {isGenerating ? "Generating..." : "Generate Transcription"}
                        </button>
                    </div>

                    <div className="w-full min-h-[300px] bg-[#212121] border border-[#333] rounded-lg p-6">
                        <h2 className="text-xl text-white/80 mb-4">Transcribed Content</h2>
                        <button
                            onClick={toggleEditMode}
                            className="mb-4 px-4 py-2 bg-[#313131] hover:bg-[#414141] text-white rounded-md transition duration-200"
                        >
                            {isEditMode ? "Disable Edit Mode" : "Enable Edit Mode"}
                        </button>
                        {isTranslated && (
                            <button
                                onClick={resetTranscription}
                                className="mb-4 px-4 py-2 bg-[#313131] hover:bg-[#414141] text-white rounded-md transition duration-200"
                            >
                                Reset to Original Transcription
                            </button>
                        )}
                        <div className="text-white/60">
                            {isEditMode ? (
                                <textarea
                                    className="w-full h-[200px] bg-transparent border-none text-white/60 focus:outline-none resize-none"
                                    placeholder="Your video transcription will appear here..."
                                    value={transcription}
                                    onChange={(e) => setTranscription(e.target.value)}
                                />
                            ) : (
                                <div className="w-full h-[200px] overflow-auto text-white/60">
                                    {transcription || "Your video transcription will appear here..."}
                                </div>
                            )}
                        </div>

                        <div className="my-4">
                            <label className="text-white/80 mb-2 block">Select Language for Translation</label>
                            <select
                                className="w-full px-4 py-2 bg-[#313131] text-white rounded-md border border-[#333] focus:outline-none"
                                value={selectedLanguage}
                                onChange={(e) => setSelectedLanguage(e.target.value)}
                            >
                                {languages.map((lang) => (
                                    <option key={lang.code} value={lang.code}>
                                        {lang.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={handleProcessForTranslation}
                            className="w-full ai-button-gradient font-semibold px-6 py-3 bg-[#212121] hover:bg-[#313131] border border-[#333] rounded-md text-white hover:opacity-80 transition duration-200"
                            disabled={isProcessing}
                        >
                            {isProcessing ? "Processing..." : "Process for Translation"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
