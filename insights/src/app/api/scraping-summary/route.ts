import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 60; // Increased to 60 seconds to accommodate Gemini API

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const content = searchParams.get("content");

  if (!content) {
    return NextResponse.json({ error: "Content is required" }, { status: 400 });
  }

  let parsedContent;
  try {
    parsedContent = JSON.parse(content);
  } catch {
    console.log("Content is not JSON-encoded.");
    parsedContent = content; // Fallback to raw string if not JSON
  }

  const summarizationPrompt = `
You are an **intelligent and highly skilled AI assistant** specializing in summarizing and refining web-scraped content. Your task is to transform raw scraped data into a **well-organized, professional-quality summary** in **Markdown format**. The goal is to present the content in a clear, structured, and engaging manner while preserving all essential details and improving readability.

---

## ✅ **Guidelines for Summarization**  
Follow these detailed instructions to ensure the summary is polished and professional:  

### 1. **Markdown Formatting**  
- Use appropriate **headings** (\`#\`, \`##\`, \`###\`) to organize the content logically and enhance readability.  
- Present information using **bullet points** and **numbered lists** for clarity and structure.  
- For technical terms or code snippets, use **code blocks** (\`\`\`language).  
- Apply **bold** or *italic* text for emphasis where needed.  

---

### 2. **Summarization Style**  
- Be **concise** yet **comprehensive** — maintain the key details while improving clarity.  
- Use a **neutral, professional tone** while remaining friendly and accessible.  
- Eliminate any redundant or low-value information without losing the core message.  
- Ensure the summary is easy to follow and logically structured.  

---

### 3. **Enhancement Guidelines**  
- Refine the language to improve **flow** and **readability** without altering the original meaning.  
- Explain technical terms or complex ideas using **simple language** where needed.  
- Add **context** where necessary to clarify the content and make it more actionable.  
- Highlight key takeaways or insights to enhance the user’s understanding.  

---

### 4. **Handling Edge Cases**  
- If the content is incomplete or unclear, **indicate the gap** and provide a logical interpretation.  
- If certain details are missing, make an informed guess where possible or highlight the limitation.  
- If the content is inappropriate, irrelevant, or unethical, respond with a polite refusal and suggest alternative approaches.  

---

## 🚀 **Task**  
Transform the following raw scraped content into a structured, easy-to-understand, and professional-quality summary. Ensure the content is logically organized, refined for clarity, and formatted in Markdown.  

### 📝 **Scraped Content**  
\`\`\`json
${JSON.stringify(parsedContent, null, 2)}
\`\`\`

---

**Deliver a polished and enhanced summary that reflects the professionalism and quality expected from an expert AI assistant.**  
`;

  try {
    const result = await model.generateContent(summarizationPrompt);
    const summary = result.response.text();
    return NextResponse.json({ summary }, { status: 200 });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error generating summary:", error);
    return NextResponse.json(
      { error: `Error generating summary: ${errorMessage}` },
      { status: 500 }
    );
  }
}