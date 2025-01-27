import {GoogleGenerativeAI} from"@google/generative-ai"



const userData = {
    "Your Name": "Rameshwar Patil",
    "Your Address": "123 Main Street, Udgir",
    "City": "Udgir",
    "State": "Maharashtra",
    "ZIP": "413001",
    "Email Address": "rameshwar@example.com",
    "Phone Number": "+91 9876543210",
    "Date": "January 27, 2025",
    "Recipient's Name": "John Doe",
    "Recipient's Title": "Dr.",
    "Company/Organization": "XYZ Corporation",
    "Recipient's City": "Pune",
    "Recipient's State": "Maharashtra",
    "Recipient's ZIP": "411001",
    "Subject": "Regarding AI-based Project",
    "Introduction": "Dear Dr. John Doe,",
    "Your Title (if applicable)": "Project Manager, AI Division",
    "prompt":"write a letter for request for id card to librian"
};

const userDataString=JSON.stringify(userData)
console.log(userDataString);

async function generateLetter(prompt) {console.log("yuyuy");
  const apiKey = 'AIzaSyAuU2wCq2wyDstzRrrvognE1ngX20xqEbo';  
  const genAI = new GoogleGenerativeAI(apiKey)
  const model=genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const response=await model.generateContent(prompt);
  console.log(response.response.text());

}
generateLetter(userDataString)




// const form = document.getElementById('form');

// const formData = new FormData(form);

// for (const [key, value] of formData.entries()) {
//   console.log(`${key}: ${value}`); // Log key-value pairs
// }