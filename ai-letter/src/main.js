import GoogleGenerativeAI from"@google/generative-ai"




let fromObject = {};
const form = document.getElementById('form');
console.log(form);

const inputFiled = document.querySelectorAll('input');
const textArea = document.querySelectorAll('textarea');
const submit = document.getElementById('submit');

function getData() {
  inputFiled.forEach(input => {
    fromObject[input.id] = input.value;
  });

  textArea.forEach(area => {
    fromObject[area.id] = area.value;
  });

  localStorage.setItem('fromObject', JSON.stringify(fromObject));
  alert('Form data saved to local storage');
}

function insert() {
  const storeData = localStorage.getItem('fromObject');
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
  



});

