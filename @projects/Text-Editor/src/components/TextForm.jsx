import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");
  const [color, setColor] = useState("text-gray-700"); // Default text color

  const handleToggleCase = () => {
    setText((prev) =>
      prev === prev.toUpperCase() ? prev.toLowerCase() : prev.toUpperCase()
    );
  };

  const handleRemoveSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };

  const handleLoremIpsum = () => {
    setText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus."
    );
  };

  const handleClear = () => {
    setText("");
  };

  const handleReverseText = () => {
    setText(text.split("").reverse().join(""));
  };

  const handleRemovePunctuation = () => {
    setText(text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""));
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleChangeTextColor = () => {
    setColor(color === "text-gray-700" ? "text-red-500" : "text-gray-700");
  };

  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word !== "").length;

  const sentenceCount = text
    .split(/[.!?]+/)
    .filter((sentence) => sentence.trim().length > 0).length;

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Text Transformer
          </h1>
        </div>
        {/* Main Content */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div>
            <label
              htmlFor="textInput"
              className="block text-gray-700 font-medium mb-2"
            >
              Enter Your Text
            </label>
            <textarea
              id="textInput"
              className={`w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 transition-colors ${color}`}
              rows={8}
              value={text}
              onChange={handleOnChange}
              placeholder="Type your text here..."
            />
          </div>
          {/* Preview Section */}
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h2 className="text-lg font-semibold mb-2 text-gray-800">Preview</h2>
            <p className={`${color}`}>
              {text || "Your preview will appear here..."}
            </p>
          </div>
        </div>
        {/* Buttons Section */}
        <div className="mt-6 p-6 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <button
              onClick={handleToggleCase}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl border-2 border-blue-700 px-4 py-2 shadow transition-colors"
            >
              Toggle Case
            </button>
            <button
              onClick={handleRemoveSpaces}
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl border-2 border-teal-700 px-4 py-2 shadow transition-colors"
            >
              Remove Spaces
            </button>
            <button
              onClick={handleLoremIpsum}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl border-2 border-indigo-700 px-4 py-2 shadow transition-colors"
            >
             Add Lorem Ipsum
            </button>
            <button
              onClick={handleReverseText}
              className="bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-xl border-2 border-purple-700 px-4 py-2 shadow transition-colors"
            >
              Reverse Text
            </button>
            <button
              onClick={handleRemovePunctuation}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl border-2 border-yellow-700 px-4 py-2 shadow transition-colors"
            >
              Remove Punctuation
            </button>
            <button
              onClick={handleCopyToClipboard}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl border-2 border-green-700 px-4 py-2 shadow transition-colors"
            >
              Copy Text
            </button>
            <button
              onClick={handleClear}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl border-2 border-red-700 px-4 py-2 shadow transition-colors"
            >
              Clear Text
            </button>
            <button
              onClick={handleChangeTextColor}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-xl border-2 border-pink-700 px-4 py-2 shadow transition-colors"
            >
              Toggle Text Color
            </button>
          </div>
        </div>
        {/* Statistics Section */}
        <div className="p-6 border-t border-gray-200 bg-blue-50">
          <div className="flex flex-col sm:flex-row justify-between">
            <p className="text-blue-900 font-medium">
              Word Count: {wordCount}
            </p>
            <p className="text-blue-900 font-medium">
              Character Count: {text.length}
            </p>
            <p className="text-blue-900 font-medium">
              Sentence Count: {sentenceCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
