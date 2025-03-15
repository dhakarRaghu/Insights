"use client";
import { useState } from "react";
import Image from "next/image";

export default function ArticleSummarizer() {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Summarizing URL:", url);
    // Add your summarization logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <section className="py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          AI Article Summarizer
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
          Summarize web pages and articles with our free AI tool! Simply input
          your website URL, link, or text, and we'll generate a summary of the
          article or blog. Start summarizing articles or blogs for key points
          today!
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex items-center gap-4">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/blog-summary-translation"
            className="flex-1 p-3 border border-blue-200 dark:border-blue-700 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Generate Summary
          </button>
        </form>
      </section>

      {/* Need a Quick Summary Section */}
      <section className="py-16 bg-blue-50 dark:bg-gray-800 text-center">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Need a Quick Summary of Web Page?
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover our AI tool to quickly summarize web pages! Enter the
              content URL, and get a concise summary in no time and effort.
              Simply input the URL and format, create mindmaps, and AI chat for
              web content interaction.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-600">
              <Image
                src="/article-summarizer-image.png" // Replace with actual image path
                alt="AI Article Summarizer"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <div className="mt-2 text-center">
                <span className="text-blue-600 dark:text-blue-300 font-semibold">
                  AI Article Summarizer
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use an AI Article Summarizer Section */}
      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            How to Use an AI Article Summarizer?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            By following these simple 3 steps, you can learn how to generate
            article with AI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                1. Input Your URL
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enter the URL of the web page you want to summarize.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                2. Generate Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Click the "Generate Summary" button to get a concise summary.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                3. Utilize Features
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Extract content in markdown format, create mindmaps, and use AI
                chat for deeper interaction with the content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}