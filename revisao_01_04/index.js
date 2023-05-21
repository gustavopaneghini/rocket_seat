const scrollButton = document.querySelector('.text_content button')
const input_Form = document.querySelector('form')
const page = document.querySelector('.page')

scrollButton.onclick = () => { input_Form.scrollIntoView({ behavior: "smooth" }) }