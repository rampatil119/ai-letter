import { generateLetter } from './counter'; 

let formObject = {};
const form = document.getElementById('form');
console.log(form);

const inputFiled = document.querySelectorAll('input');
const textArea = document.querySelectorAll('textarea');
const submit = document.getElementById('submit');
const order = document.getElementById('introduction');
const promot = document.getElementById('prompt');
console.log(order);

function getData() {
  inputFiled.forEach(input => {
    formObject[input.id] = input.value;
  });
  formObject["prompt"] = promot.value;

  localStorage.setItem('formObject', JSON.stringify(formObject));
  alert('Form data saved to local storage');
}

function insert() {
  const storeData = localStorage.getItem('formObject');
  if (storeData) {
    const parsedData = JSON.parse(storeData);
    Object.keys(parsedData).forEach(key => {
      const input = document.getElementById(key);
      if (input) {
        input.value = parsedData[key];
      }
    });
  }
}

window.addEventListener('load', () => {
  insert();
  // localStorage.clear()
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  getData();

  generateLetter(JSON.stringify(formObject))
    .then((data) => {
      console.log(data); 
      
    })
    .catch((error) => {
      console.log(error);
    });
});


const formElements = document.querySelectorAll('#form input, #form textarea'); // Select all input and textarea elements

formElements.forEach(element => {
  // For each form element, set the value of the element as a key in the object
  formObject[element.id] = element.value;
});

console.log(formObject);


const letterContent = `
    <div class="letter">
      <p>${formObject.yourName}</p>
      <p>${formObject.yourAddress}</p>
      <p>${formObject.yourCity}</p>
      <p>${formObject.yourPhone}</p>
      <p>${formObject.yourEmail}</p>
      
      <p>${new Date().toLocaleDateString()}</p>

      <p>${formObject.recipientName}</p>
      <p>${formObject.recipientTitle}</p>
      <p>${formObject.company}</p>
      <p>${formObject.companyAddress}</p>
      <p>${formObject.companyCity}</p>

      <p>Dear ${formObject.recipientName},</p>

      <p>Thank you for ${formObject.thankYouMessage}.</p>

      <p>Sincerely,</p>

      <p>${formObject.yourName}</p>
    </div>
  `;

  // Create a div to hold the letter content
  const div = document.createElement('div');
  div.innerHTML = letterContent;

  // Add styles for A4 print
  div.style.width = '210mm';  // A4 paper width
  div.style.height = '297mm'; // A4 paper height
  div.style.margin = '0';
  div.style.padding = '20mm'; // Optional: Add some padding for aesthetics

  // Append the letter content to the body
  document.body.appendChild(div);

  // Open the print dialog
  window.print();

  // Clean up: remove the div after printing
  document.body.removeChild(div);
