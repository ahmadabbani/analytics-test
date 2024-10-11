const trainings = [
  {
    id: "1",
    title: "Introduction to Project Design",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "3 months",
    image: "assets/img/trainings/Introduction to project design .jpg",
    location: "Online",
    numberOfParticipants: "5",
  },
  {
    id: "2",
    title: "Project Planning and Implementation",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/project planning.jpg",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "3",
    title: "Reporting and Documentation",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/Reporting and documentation .jpg",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "4",
    title: "Communication and Stakeholder Engagement",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/Communication and stakeholder engagement.png",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "5",
    title: "Introduction to M&E framework",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/introduction to M&E framework.png",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "6",
    title:
      "Monitoring and Evaluation for project staff: Result Based Management",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image:
      "assets/img/trainings/Self-Evaluation and Success in the Workplace.jpg",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "7",
    title:
      "Monitoring and Evaluation Essentials - Outcome Monitoring and Evaluation",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image:
      "assets/img/trainings/Making Money_ 5 Reasons Why Digitalization is a Must for Your Business.jpeg",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "8",
    title: "Data Collection and Management",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/data collection.jpg",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "9",
    title: "Data Analysis and Reporting",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/data reporting.jpg",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "10",
    title: "Data Dissemination and Feedback Use",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/Data dissemination and feedback use.jpg",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "11",
    title: "Strategic Planning",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/planning.jpg",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "12",
    title: "Stakeholder Analysis",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/stakeholder analysis.png",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "13",
    title: "FGD trainings",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/trainings.jpg",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "14",
    title: "Data collection and Analysis",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/data analysis.jpg",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "15",
    title: "AI training",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/Ai trainings.jpg",
    location: "beirut",
    numberOfParticipants: "8",
  },
  {
    id: "16",
    title: "Integration of AI in Organizational and Corporate work",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                  officiis, veritatis doloribus in a laudantium explicabo
                  accusamus sapiente autem itaque perspiciatis nihil laborum
                  veniam error neque natus deserunt numquam, illo dolorem
                  doloremque vel, minus quisquam quidem. Optio, illum quas totam
                  quia fugiat nihil quasi quis?`,
    duration: "5 months",
    image: "assets/img/trainings/Ai integration.jpg",
    location: "beirut",
    numberOfParticipants: "8",
  },
];

// Function to extract training id from URL query parameter
function getTrainingIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

// Function to find training by id
function findTrainingById(trainingId) {
  return trainings.find((training) => training.id === trainingId);
}

// Function to update blog details in HTML
function updateTrainingDetailsInHtml(trainingData) {
  if (trainingData) {
    // set the textContent for all elements with class 'training-title'
    var elements = document.getElementsByClassName("training-title");
    // Iterate through all elements with the class name and set the textContent
    for (var i = 0; i < elements.length; i++) {
      elements[i].textContent = trainingData.title;
    }
    document.getElementById("training-img").src = trainingData.image;
    document.getElementById("training-duration").textContent =
      trainingData.duration;
    document.getElementById("training-location").textContent =
      trainingData.location;
    document.getElementById("training-participants").textContent =
      trainingData.numberOfParticipants;
    document.getElementById("training-description").textContent =
      trainingData.description;
    document
      .getElementById("contact-btn")
      .addEventListener("click", function () {
        sendWhatsAppMessage(trainingData.title);
      });
  } else {
    displayPageNotFound();
  }
}
// if title is wrong
function displayPageNotFound() {
  var elements = document.getElementsByClassName("training-title");
  for (var i = 0; i < elements.length; i++) {
    elements[i].textContent = "Page Not Found";
  }

  document.getElementById("portfolio-details").textContent =
    "The training you are looking for does not exist.";
}

//Whatsapp message
function sendWhatsAppMessage(productName) {
  const phoneNumber = "96170119027";
  const message = `Hello! I'm interested in finding out more about "${productName}" training. Could you please provide more details? Thank you!.`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");
}
