import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  tools: [{codeExecution: {}}]
});

const generationConfig = {
  temperature: 0.5,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain" 
};

export async function getMotivation() {
  const chatSession = model.startChat({
    generationConfig,
  });

  const result = await chatSession.sendMessage("Give me a qoute, I am feeling angry right now. Just give the quote not the explanation.");
  return result.response.text();
}
