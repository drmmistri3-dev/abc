
import { GoogleGenAI } from "@google/genai";

// Use process.env.API_KEY directly for initialization as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateReportRemarks = async (studentName: string, scores: any[]) => {
  const prompt = `Based on the following scores for student ${studentName}, generate a 2-sentence encouraging academic remark for a school report card: ${JSON.stringify(scores)}`;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Keep up the hard work!";
  } catch (error) {
    console.error("AI remark generation failed:", error);
    return "Consistently showing good progress across all subjects.";
  }
};

export const draftWhatsAppAnnouncement = async (topic: string) => {
  const prompt = `Write a professional but friendly school WhatsApp announcement message about: ${topic}. Include emojis.`;
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || `Announcement: ${topic}`;
  } catch (error) {
    return `📢 Important Update: ${topic}. Please check the notice board for details.`;
  }
};
