const trainings = [
  {
    id: "1",
    title: "Introduction to Project Design",
    modality: "Online and in person",
    description: `Participants will learn the basics of designing a successful project, including defining objectives, setting scope, creating a timeline, and identifying stakeholders. The training will cover the fundamentals of project conceptualization, goal setting, and resource identification to ensure project success from the onset.`,
    duration: "3 hours",
    image:
      "assets/img/trainings/12 Advantages of Power BI for Better Business Decision.jpeg",
    numberOfParticipants: "12-15",
  },
  {
    id: "2",
    title: "Project Planning and Implementation",
    modality: "Online and in person",
    description: `This training focuses on the development of detailed project plans, including task breakdowns, resource allocation, risk management, and time management. Participants will also learn strategies for implementing projects efficiently, ensuring they stay on time and within budget while meeting their goals.`,
    duration: "15 hours; 3 days in person or 6 half days online",
    image: "assets/img/trainings/project planning.jpg",
    numberOfParticipants: "6-10",
  },
  {
    id: "3",
    title: "Reporting and Documentation",
    modality: "Online and in person",
    description: `This session teaches the importance of maintaining accurate records and reporting throughout the project lifecycle. Participants will learn best practices for creating comprehensive reports, including how to document project progress, challenges, achievements, and lessons learned, which are vital for accountability and transparency.`,
    duration: "6 hours",
    image: "assets/img/trainings/Reporting and documentation .jpg",
    numberOfParticipants: "8-10",
  },
  {
    id: "4",
    title: "Communication and Stakeholder Engagement",
    modality: "Online and in person",
    description: `Effective communication is key to any successful project. This training explores techniques for engaging stakeholders, managing expectations, and ensuring continuous feedback. Participants will learn how to build communication strategies that foster collaboration and maintain trust with stakeholders throughout the project lifecycle.`,
    duration: "3 hours",
    image: "assets/img/trainings/Communication and stakeholder engagement.png",
    numberOfParticipants: "12-15",
  },
  {
    id: "5",
    title: "Introduction to M&E framework",
    modality: "Online and in person",
    description: `Participants will be introduced to Monitoring and Evaluation (M&E) frameworks, including how to track project performance, assess progress, and measure impact. This training provides the foundation for understanding M&E principles and how to apply them for continuous project improvement.`,
    duration: "6 hours",
    image: "assets/img/trainings/introduction to M&E framework.png",
    numberOfParticipants: "6-10",
  },
  {
    id: "6",
    title:
      "Monitoring and Evaluation for project staff: Result Based Management",
    modality: "Online and in person",
    description: `This course delves into results-based management (RBM) as an approach to M&E, where project performance is measured based on desired outcomes and impacts. Project staff will learn how to create results-based frameworks, set performance indicators, and conduct evaluations focusing on achieving tangible results.`,
    duration: "6 hours",
    image:
      "assets/img/trainings/Self-Evaluation and Success in the Workplace.jpg",
    numberOfParticipants: "6-10",
  },
  {
    id: "7",
    title:
      "Monitoring and Evaluation Essentials - Outcome Monitoring and Evaluation",
    modality: "Online and in person",
    description: `Participants will learn key M&E skills, with a specific focus on monitoring and evaluating project outcomes. The training covers the differences between outputs and outcomes, how to track progress toward goals, and how to assess the effectiveness and impact of a project over time.`,
    duration: "6 hours",
    image:
      "assets/img/trainings/Making Money_ 5 Reasons Why Digitalization is a Must for Your Business.jpeg",
    numberOfParticipants: "6-10",
  },
  {
    id: "8",
    title: "Data Collection and Management",
    modality: "Online and in person",
    description: `This training teaches essential techniques for collecting, organizing, and managing data within a project. Participants will learn about different data collection tools and methods, how to maintain data integrity, and best practices for storing and managing data securely and efficiently.`,
    duration: "4 hours",
    image: "assets/img/trainings/data collection.jpg",
    numberOfParticipants: "12-15",
  },
  {
    id: "9",
    title: "Data Analysis and Reporting",
    modality: "Online and in person",
    description: `This session covers key aspects of data analysis, starting with data validation to ensure accuracy. Participants will learn to create an analysis matrix for organizing data and apply data cleaning techniques to remove errors. They will then explore data analysis and visualization methods to generate insights and present them visually. The session concludes with report writing, teaching participants how to document findings and present actionable recommendations effectively.`,
    duration: "12 hours",
    image: "assets/img/trainings/data reporting.jpg",
    numberOfParticipants: "10-12",
  },
  {
    id: "10",
    title: "Data Dissemination and Feedback Use",
    modality: "Online and in person",
    description: `Once data is collected and analyzed, it needs to be effectively disseminated and utilized. This session explores how to present data in a meaningful way to stakeholders, facilitate feedback mechanisms, and ensure that insights gained from the data are used to improve project performance and inform decision-making.`,
    duration: "3 hours",
    image: "assets/img/trainings/Data dissemination and feedback use.jpg",
    numberOfParticipants: "6-10",
  },
  {
    id: "11",
    title: "Strategic Planning",
    modality: "Online and in person",
    description: `Participants will gain an understanding of strategic planning, including how to develop long-term visions, set goals, and create actionable plans. This training will focus on building frameworks that align with organizational objectives, ensuring that projects contribute to the overall mission and strategy.`,
    duration: "6 hours",
    image: "assets/img/trainings/planning.jpg",
    numberOfParticipants: "8-15",
  },
  {
    id: "12",
    title: "Stakeholder Analysis",
    modality: "Online and in person",
    description: `This training equips participants with tools to identify, prioritize, and engage stakeholders in a project. They will learn how to map stakeholder influence and interest, understand their needs, and develop strategies for managing stakeholder relationships to ensure their support and involvement throughout the project lifecycle.`,
    duration: "3 hours",
    image: "assets/img/trainings/stakeholder analysis.png",
    numberOfParticipants: "12-15",
  },
  {
    id: "13",
    title: "FGD trainings",
    modality: "Online and in person",
    description: `Participants will learn how to design, conduct, and analyze Focus Group Discussions (FGDs). This training covers key elements such as developing discussion guides, selecting participants, facilitating conversations, and using FGDs to gather qualitative data that can inform project decisions.`,
    duration: "3 hours",
    image: "assets/img/trainings/trainings.jpg",
    numberOfParticipants: "12-15",
  },
  {
    id: "14",
    title: "Data collection and Analysis",
    modality: "Online and in person",
    description: `This session focuses on the process of collecting and analyzing both qualitative and quantitative data. Participants will learn about various data collection methods, how to ensure data accuracy and reliability, and how to analyze the data to extract meaningful insights that can drive project improvements and inform decision-making.`,
    duration: "6 hours",
    image: "assets/img/trainings/data analysis.jpg",
    numberOfParticipants: "8-10",
  },
  {
    id: "15",
    title: "AI training",
    modality: "Online",
    description: `This training introduces participants to the fundamentals of artificial intelligence (AI) and its transformative role in modern organizations. It covers the potential of AI to enhance productivity, automate routine tasks, improve decision-making, and drive innovation. The course explores AI applications such as predictive analytics, machine learning, and natural language processing in corporate environments, with case studies demonstrating successful AI implementations in various industries. 
For participants interested in understanding how AI works and the different types of models. 
`,
    duration: "2 hrs",
    image: "assets/img/trainings/Ai trainings.jpg",
    numberOfParticipants: "10-12",
  },
  {
    id: "16",
    title: "Integration of AI in Organizational and Corporate work",
    modality: "Online and in person",
    description: `This training covers how artificial intelligence (AI) can be effectively integrated into corporate and organizational settings. It introduces AI concepts, practical applications, and the benefits of using AI for improving efficiency, automating tasks, and enhancing decision-making processes. Participants will explore AI-driven tools and case studies on successful AI implementations.`,
    duration: "6 hours; one full day in person or 2 half days online",
    image: "assets/img/trainings/Ai integration.jpg",
    numberOfParticipants: "6-10",
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
// Function to find training by title different from trainingtitle
function findTrainingsWithTitleNot(trainingId) {
  return trainings.filter((training) => training.id !== trainingId);
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
    document.getElementById("training-modality").textContent =
      trainingData.modality;
    document.getElementById("training-participants").textContent =
      trainingData.numberOfParticipants;
    document.getElementById("training-description").textContent =
      trainingData.description;
    /*document
      .getElementById("contact-btn")
      .addEventListener("click", function () {
        sendWhatsAppMessage(trainingData.title);
      });*/
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

// Function to update recent articles in HTML
function updateRecentPostsInHtml(recentTrainings) {
  const recentPostsContainer = document.querySelector(".recent-post");
  recentPostsContainer.innerHTML = ""; // Clear existing content

  recentTrainings.forEach((training) => {
    const recentSinglePost = document.createElement("div");
    recentSinglePost.className = "recent-single-post";

    const postImg = document.createElement("div");
    postImg.className = "post-img";

    const imgLink = document.createElement("a");
    imgLink.href = `trainings.html?id=${encodeURIComponent(training.id)}`;

    const img = document.createElement("img");
    img.src = training.image;
    img.alt = training.title;

    imgLink.appendChild(img);
    postImg.appendChild(imgLink);

    const pstContent = document.createElement("div");
    pstContent.className = "pst-content";

    const p = document.createElement("p");

    const titleLink = document.createElement("a");
    titleLink.href = `trainings.html?id=${encodeURIComponent(training.id)}`;
    titleLink.textContent = training.title;

    p.appendChild(titleLink);
    pstContent.appendChild(p);

    recentSinglePost.appendChild(postImg);
    recentSinglePost.appendChild(pstContent);

    recentPostsContainer.appendChild(recentSinglePost);
  });
}

// Function to update training details on page load
function updateTrainingDetailsOnLoad() {
  const trainingId = getTrainingIdFromUrl();
  const trainingData = findTrainingById(trainingId);
  if (trainingData) {
    updateTrainingDetailsInHtml(trainingData);
    const recentTrainings = findTrainingsWithTitleNot(trainingId);
    updateRecentPostsInHtml(recentTrainings);
  } else {
    displayPageNotFound();
  }
}

// Call updateTrainingDetailsOnLoad when the page loads
document.addEventListener("DOMContentLoaded", updateTrainingDetailsOnLoad);

/*Whatsapp message
function sendWhatsAppMessage(productName) {
  const phoneNumber = "96170119027";
  const message = `Hello! I'm interested in finding out more about "${productName}" training. Could you please provide more details? Thank you!.`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");
}*/

//list of countries
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((countries) => {
    const countrySelect = document.getElementById("country");
    countries.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.name.common;
      option.textContent = country.name.common;
      countrySelect.appendChild(option);
    });
  })
  .catch((error) => console.error("Error fetching countries:", error));

//trainings list form
const trainingSelect = document.getElementById("training");

trainings.forEach((training) => {
  const option = document.createElement("option");
  option.value = training.title;
  option.textContent = training.title;
  trainingSelect.appendChild(option);
});

// phone number country code
const phoneInputField = document.querySelector("#phone");

const phoneInput = window.intlTelInput(phoneInputField, {
  initialCountry: "auto",
  separateDialCode: true, // Show only the dial code separate from the number
  autoPlaceholder: "off", // Disable the default number placeholder
  geoIpLookup: function (success, failure) {
    fetch("https://ipapi.co/json/")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        success(data.country_code.toLowerCase()); // Set the country code
      })
      .catch(function () {
        success("us"); // Fallback to US in case of an error
      });
  },
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // for validation
});
