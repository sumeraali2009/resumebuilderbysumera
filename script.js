const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const degreeInput = document.getElementById('degree');
const institutionInput = document.getElementById('institution');
const skillsInput = document.getElementById('skills');
const generateResumeButton = document.getElementById('generate-resume');
const generatedResumeDiv = document.getElementById('generated-resume');

generateResumeButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || degreeInput.value === '' || institutionInput.value === '' || skillsInput.value === '') {
    alert('Please fill in all fields');
    return;
  }
  

  const resume = `
    <h1>Resume</h1>
    <section>
      <h2>Contact Information</h2>
      <p>Name: ${nameInput.value}</p>
      <p>Email: ${emailInput.value}</p>
      <p>Phone: ${phoneInput.value}</p>
    </section>
    
    <section>
      <h2>Education</h2>
      <p>Degree: ${degreeInput.value}</p>
      <p>Institution: ${institutionInput.value}</p>
    </section>
    
    <section>
      <h2>Skills</h2>
      <p>${skillsInput.value}</p>
    </section>
  `;
  
  generatedResumeDiv.innerHTML = resume;
});

