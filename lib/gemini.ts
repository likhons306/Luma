// lib/gemini.ts
import fs from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";

const systemPromptPath = path.join(process.cwd(), "prompts/luma.mdx");
const registryPath = path.join(process.cwd(), "data/shadcn-registry.json");

const systemPrompt = fs.readFileSync(systemPromptPath, "utf8");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

const model = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!).getGenerativeModel({
  model: "gemini-2.0-pro",
  systemInstruction: systemPrompt,
});

export async function generateUI(prompt: string) {
  try {
    const response = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    const mdxOutput = response.response.text();

    // Optional: save to a temp file
    const tmpPath = path.join("/tmp", "luma-output.mdx");
    fs.writeFileSync(tmpPath, mdxOutput);

    return mdxOutput;
  } catch (err: any) {
    console.error("⚠️ Gemini API error:", err.message || err);
    return "⚠️ Error generating UI with Gemini.";
  }
}
