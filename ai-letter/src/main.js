
import { generateLetter } from './counter'; 





let formObject = {};
const form = document.getElementById('form');
console.log(form);

const inputFiled = document.querySelectorAll('input');
const textArea = document.querySelectorAll('textarea');
const submit = document.getElementById('submit');
const order=document.getElementById('introduction')
const promot=document.getElementById('prompt')
console.log(order);
function getData() {
  inputFiled.forEach(input => {
    formObject[input.id] = input.value;
  });
  formObject["prompt"]=promot.value;

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
  generateLetter(JSON.stringify(formObject)).then((data)=>{
    console.log(data);
    return data;
  })
  .catch((error)=>{
    console.log(error);
  })

});



