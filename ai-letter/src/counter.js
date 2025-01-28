import {GoogleGenerativeAI} from"@google/generative-ai"




export async function generateLetter(prompt) {
  const apiKey = 'AIzaSyAuU2wCq2wyDstzRrrvognE1ngX20xqEbo';  
  const genAI = new GoogleGenerativeAI(apiKey)
  const model=genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const response=await model.generateContent(prompt);
  const result=response.response.text()
  console.log(result);
  return result;
}