import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
  const apiKey = "AIzaSyBsDkkGE64Dz9q9aCozSjmbFw_JX7WVN-w"; 
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  export async function Run(query) {
    if (!query.topic || !query.description || !query.company_name) {
      throw new Error("Missing required fields in query.");
    }

    const data = `You are an AI blog writer. Here is the input:
    - Blog Topic: ${query.topic}
    - Blog Description: ${query.description}
    - Company Name: ${query.company_name}
    - Company Tagline: ${query.company_tagline}
    - About the Company: ${query.company_description}
    Generate two blog options, a blog heading, and metadata as suggestions. Adjust the mood based on the topic and description.`

    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: data,
            },
          ],
        },
        {
            role: "model",
            parts: [
              {text: "Okay, I'm ready.  Please provide me with the blog topic, basic description, company name, tagline, and about the company.  I will then generate two blog post options, including headings and meta descriptions, aiming for different moods to show versatility.  I'll try to analyze the input to set the appropriate mood for each blog."},
            ],
          },
      ],
    });
  
    const result = await chatSession.sendMessage(data);
    return result.response.text(); 
  }
  