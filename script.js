const form = document.getElementById('contact-form');
const errorMessage = document.getElementById('error-msg');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Here you would typically submit the form data to a server
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        return;
    }
});

const projects = [

{
    title: "AI-Based E-Waste Sorting System",

    desc: "Built a Python computer vision system using CNN and MobileNetV2 models to classify electronic waste in real time.",

    tags: ["Python", "CNN", "MobileNetV2"]
},

{
    title: "Hospital Readmission Prediction",

    desc: "Built machine learning models on a dataset of 70,000+ patients and improved prediction precision from 75% to 90%.",

    tags: ["Python", "Machine Learning", "Data Analysis"]
},

{
    title: "Scrum Team Project",

    desc: "Led a six-person development team using Agile Scrum methodology and improved application performance.",

    tags: ["Python", "Scrum", "Leadership"]
}

];

function showProject(index){

    document.getElementById("project-title").textContent =
        projects[index].title;

    document.getElementById("project-desc").textContent =
        projects[index].desc;

    const tagsContainer =
        document.getElementById("project-tags");

    tagsContainer.innerHTML = "";

    projects[index].tags.forEach(tag => {

        tagsContainer.innerHTML +=
            `<span class="tag">${tag}</span>`;

    });
}