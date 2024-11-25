import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

export async function getMotivation(emotion: string) {
  const result = await model.generateContent(
    `Give me a qoute, I am feeling ${emotion} right now. Just give the quote not the explanation.`
  );
  return result.response.text();
}

export async function changeMotivation(currentMotivation: string) {
  const result = await model.generateContent(
    `I have quote: ${currentMotivation}. Give me a quote with same context. Just give the quote not the explanation.`
  );
  return result.response.text();
}
