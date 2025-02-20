import aboutImage from '../Assets/about.jpg';
import academicsImage from '../Assets/academics.jpg';
import contactImage from '../Assets/contact.jpg';
import exitImage from '../Assets/exit.jpg';
import initialImage from '../Assets/initial.jpg';
import projectsImage from '../Assets/projects.jpg';
import skillsImage from '../Assets/skills.jpg';
import '../public/style.css';


// Section Backgrounds and Content
const sections = {
    initial: {
        background: initialImage,
        content: `
      <div id="initial-content" style="position: relative; height: 100vh; overflow: hidden; background: url('initialImage.jpg') no-repeat center center; background-size: cover; display: flex; justify-content: center; align-items: center;">
  <!-- Dimming and Thunder Effects (Optional Overlays) -->
  <div id="dim-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0); z-index: 1; transition: background 0.5s ease-in-out;"></div>
  <div id="thunder-overlay" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: white; z-index: 2; opacity: 0; transition: opacity 0.2s;"></div>

  <!-- Welcome Content -->
  <div style="background: rgba(0, 0, 0, 0.6); padding: 40px 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); max-width: 600px; z-index: 3; text-align: center; color: white; animation: fadeIn 1.5s forwards;">
    <h1 style="font-size: 2rem; margin-bottom: 20px; font-family: 'Arial', sans-serif; letter-spacing: 1px; opacity: 0; animation: fadeIn 1s 0.5s forwards;">🌟 Welcome to My Portfolio</h1>

    <blockquote style="font-size: 1.2rem; color: #FFD700; margin-bottom: 30px; opacity: 0; animation: fadeIn 1s 1s forwards;">
      <em>"Innovation and passion shape my work. Every project is a step towards transforming ideas into reality, and I strive to push the boundaries of technology and creativity with each line of code."</em>
    </blockquote>

    <button id="next-button"
            style="background-color: #FFD700; color: white; padding: 15px 30px; border-radius: 5px; font-size: 1.2rem; border: none; cursor: pointer; transition: background-color 0.3s, transform 0.3s;">
      Let's Start the Journey 👉
    </button>
  </div>
</div>


<style>
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
    @keyframes dimEffect {
  0%, 100% {
    background: rgba(0, 0, 0, 0);
  }
  50% {
    background: rgba(0, 0, 0, 0.5);
  }
}

/* Thunder Flash */
@keyframes thunderEffect {
  0%, 100% {
    opacity: 0;
  }
  10%, 30% {
    opacity: 1;
  }
}

  #next-button:hover {
    background-color: #ffcc00; /* Lighter yellow on hover */
    transform: scale(1.05); /* Button grows slightly */
  }

  #next-button:active {
    transform: scale(0.98); /* Button shrinks slightly when clicked */
  }
</style>


    `,
    },
    about: {
        background: aboutImage,
        content: `
      <h2>👩‍💻 About Me</h2>
      <div class="about-content" style="max-height: 400px; overflow-y: scroll; padding-right: 10px;">
        <p>
          Hi! I'm <strong>Garvita Jhanwar</strong>, a passionate <em>Computer Science student</em> from <strong>Pune</strong>, currently pursuing my studies at 
          <strong>Vellore Institute of Technology</strong>.
        </p>
        <p>
          I specialize in <strong>full-stack development</strong> and crafting <em>real-time data applications</em>. My journey has been shaped by hands-on experience, technical mastery, and a relentless curiosity to learn. Here's a glimpse into my key accomplishments:
        </p>

        <h3>✨ Key Projects</h3>
        <ul>
          <li><strong>HomeVista</strong>: A real estate app with advanced search and mapping features using the MERN stack.</li>
          <li><strong>FinTech Nexus</strong>: A banking application with real-time transaction monitoring and analytics.</li>
          <li><strong>Investment Insights</strong>: A stock portfolio management tool with dynamic data visualization.</li>
          <li><strong>Chess-like Game</strong>: A strategic board game developed using JavaScript and HTML5 Canvas for seamless gameplay.</li>
          <li><strong>Portfolio</strong>: A sleek, interactive personal website showcasing my skills, projects, and journey in tech, built using React.js and CSS animations.</li>
          <li><strong>AGROTIX</strong>: A smart agricultural system that leverages TensorFlow and Keras for crop disease prediction, integrated with FastAPI for robust backend functionality.</li>
          <li><strong>Chatbot</strong>: An AI-driven conversational assistant capable of dynamic responses, developed using NLP libraries in Python and deployed on Streamlit.</li>
        </ul>

        <h3>📜 Certifications</h3>
        <ul>
          <li><strong>5-Star Java Developer</strong>: Achieved 5-star ratings on Hackerrank for Java programming.</li>
          <li><strong>SQL Expertise</strong>: Solved advanced SQL challenges and earned the <em>Hackerrank SQL Certificate</em>.</li>
          <li><strong>SQL Foundations</strong>: Certified in <em>Intro to SQL</em> by Kaggle, demonstrating a solid grasp of database management.</li>
        </ul>

        <h3>🎨 Beyond Code</h3>
        <p>
          Life isn't just about lines of code! Here's a peek into what fuels my creativity and balance:
        </p>
        <ul>
          <li><strong>Dancing</strong>: Moving to the rhythm is my way of expressing and staying active.</li>
          <li><strong>Cooking</strong>: Experimenting with flavors and creating delicious dishes is my form of art.</li>
          <li><strong>Freelance Content Writer</strong>: I craft engaging content that tells stories and connects with audiences.</li>
          <li><strong>Reading</strong>: Avid reader with a penchant for books that inspire and educate.</li>
        </ul>

        <blockquote>
          <em>"Innovation is fueled by curiosity, and creativity keeps the spark alive. Balancing technology and hobbies defines who I am."</em>
        </blockquote>
      </div>
      <div class="buttons">
        <button id="next-button" class="button">Next 👉</button>
        <button id="previous-button" class="button">⬅️ Back</button>
      </div>
    `,
    },

    skills: {
        background: skillsImage,
        content: `
      <h2>💡 My Skills</h2>
      <p style="font-size: 1.2em; margin-bottom: 20px;">
        A blend of creative and technical expertise to bring ideas to life.
      </p>
      <div class="skills-container" style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center;">
        <div class="skill-box" style="animation-delay: 0s;">
          <h3>🎨 Front-End Development</h3>
          <p>React.js, Tailwind CSS, HTML, CSS</p>
        </div>
        <div class="skill-box" style="animation-delay: 0.3s;">
          <h3>🛠️ Back-End Development</h3>
          <p>MongoDB, MySQL</p>
        </div>
        <div class="skill-box" style="animation-delay: 0.6s;">
          <h3>💻 Programming Languages</h3>
          <p>Java, JavaScript, TypeScript</p>
        </div>
        <div class="skill-box" style="animation-delay: 0.9s;">
          <h3>🔧 Tools & Technologies</h3>
          <p>Visual Studio Code, Git, Postman</p>
        </div>
      </div>
      <div class="skills-footer" style="margin-top: 20px; font-size: 1em; text-align: center;">
        <blockquote>
          <em>“Skills are the tools of creativity; combined with passion, they shape the future.”</em>
        </blockquote>
      </div>
      <div class="buttons" style="margin-top: 20px;">
        <button id="next-button" class="button">Next 👉</button>
        <button id="previous-button" class="button">⬅️ Back</button>
      </div>
    `,
    },

    projects: {
        background: projectsImage,
        content: `
      <h2>🚀 Projects That Define My Journey</h2>
      <div id="projects-content" style="height: calc(100vh - 150px); overflow-y: auto; padding: 10px;">
        <div id="projects-container" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
          <div class="project-box" style="animation-delay: 0s;">
          <h3>🌱 Agrotix | Web Development</h3>
          <button class="toggle-button" data-target="agrotix-details">📖 Know More</button>
          <div id="agrotix-details" class="details" style="display: none;">
            <ul>
              <li>Integrated a plant disease prediction tool leveraging TensorFlow with 92% accuracy.</li>
              <li>Used FastAPI for backend and React.js for frontend.</li>
              <li>Incorporated Sklearn for crop recommendations (95% accuracy).</li>
              <li>Team Project: 4 Members. Role: Frontend Developer.</li>
            </ul>
            <p>Technologies: Sklearn, Stremlid, Python, TensorFlow, Keras, FastAPI, ReactJS, NodeJS</p>
          </div>
        </div>

        <div class="project-box" style="animation-delay: 0.3s;">
          <h3>🏡 HomeVista | Web Development</h3>
          <button class="toggle-button" data-target="homevista-details">📖 Know More</button>
          <div id="homevista-details" class="details" style="display: none;">
            <ul>
              <li>Built a real estate app with secure login, property listings, and advanced search filters.</li>
              <li>Increased user engagement by 50% with over 5,000 monthly active users.</li>
            </ul>
            <p>Technologies: MongoDB, Express.js, React.js, Node.js</p>
          </div>
        </div>

        <div class="project-box" style="animation-delay: 0.6s;">
          <h3>💳 FinTech Nexus | Web Development</h3>
          <button class="toggle-button" data-target="fintech-details">📖 Know More</button>
          <div id="fintech-details" class="details" style="display: none;">
            <ul>
              <li>Developed a banking app with real-time transaction monitoring and analytics.</li>
              <li>Increased user engagement by 70% and attracted 25,000 monthly active users.</li>
            </ul>
            <p>Technologies: TypeScript, React.js, Next.js, Tailwind CSS, Chart.js, Sentry</p>
          </div>
        </div>

        <div class="project-box" style="animation-delay: 0.9s;">
          <h3>📊 Investment Insights</h3>
          <button class="toggle-button" data-target="investment-details">📖 Know More</button>
          <div id="investment-details" class="details" style="display: none;">
            <ul>
              <li>Developed a stock portfolio management tool with real-time data and analytics.</li>
              <li>Designed an intuitive UI for tracking investments and personalized recommendations.</li>
              <li>Implemented live stock price updates and historical trend analysis.</li>
            </ul>
            <p>Technologies: React.js, Node.js, FastAPI, MongoDB, Chart.js</p>
          </div>
        </div>

        <div class="project-box" style="animation-delay: 1.2s;">
          <h3>♟️ Chess-like Game</h3>
          <button class="toggle-button" data-target="chess-details">📖 Know More</button>
          <div id="chess-details" class="details" style="display: none;">
            <ul>
              <li>Designed a strategic chess-like game with custom rules for hero and pawn movements.</li>
              <li>Implemented real-time gameplay using React.js for the frontend.</li>
              <li>Integrated dynamic team composition and spectator modes for a rich user experience.</li>
            </ul>
            <p>Technologies: React.js, Node.js, WebSockets</p>
          </div>
        </div>

        <div class="project-box" style="animation-delay: 1.5s;">
          <h3>🖥️ Recent Portfolio | Web Development</h3>
          <button class="toggle-button" data-target="portfolio-details">📖 Know More</button>
          <div id="portfolio-details" class="details" style="display: none;">
            <ul>
              <li>Built a fully interactive 3D portfolio website using Three.js and WebGL.</li>
              <li>Incorporated seamless navigation, dynamic backgrounds, and a responsive design.</li>
              <li>Showcased projects, skills, and academic details with smooth animations.</li>
            </ul>
            <p>Technologies: Three.js, React.js, WebGL, JavaScript</p>
          </div>
        </div>

        <div class="project-box" style="animation-delay: 1.8s;">
          <h3>🤖 Chatbot | MERN Stack</h3>
          <button class="toggle-button" data-target="chatbot-details">📖 Know More</button>
          <div id="chatbot-details" class="details" style="display: none;">
            <ul>
              <li>Developed a chatbot application using the MERN stack.</li>
              <li>Implemented user authentication and a conversational AI engine with Node.js.</li>
              <li>Integrated MongoDB for storing chat history and session management.</li>
            </ul>
            <p>Technologies: MongoDB, Express.js, React.js, Node.js</p>
          </div>
        </div>
      </div>

      <div class="buttons" style="margin-top: 20px; text-align: center;">
        <button id="next-button" class="button">Next 👉</button>
        <button id="previous-button" class="button">⬅️ Back</button>
      </div>
    `,
    },



    academics: {
        background: academicsImage,
        content: `
        <h2>🎓 Academic Journey</h2>
      <div class="academic-box" style="animation-delay: 0s;">
      <h3>🏛️Vellore Institute of Technology</h3>
      <p><strong>Degree:</strong> Bachelor of Technology in Computer Science (2021 – 2025)</p>
    <p><strong>GPA:</strong> 8.29</p>
    </div>
    <div class="academic-box" style="animation-delay: 0.3s;">
      <h3>🏫City International School</h3>
      <p><strong>Class XII:</strong> Completed in 2020</p>
    <p><strong>Percentage:</strong> 74.4%</p>
    </div>
    <div class="academic-box" style="animation-delay: 0.6s;">
      <h3>🏫Bishop's Co-Ed School Pune</h3>
      <p><strong>Class X:</strong> Completed in 2018</p>
    <p><strong>Percentage:</strong> 85.5%</p>
    </div>
      <button id="next-button">Next 👉</button>
      <button id="previous-button">⬅️ Back</button>
    `,
    },
    contact: {
        background: contactImage,
        content: `
        <div id="contact-content" style="background: url('your-image-path.jpg') no-repeat center center; background-size: cover; padding: 50px 20px; color: white;">
  <h2 style="text-align: center; color: #ffffff; font-size: 2rem; margin-bottom: 30px;">📞 Get in Touch</h2>

  <div class="contact-box" style="animation-delay: 0s; background: rgba(0, 0, 0, 0.6); border-radius: 10px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); transition: all 0.3s ease-in-out;">
    <h3 style="color: #FFD700; font-size: 1.5rem;">📱 Phone</h3>
    <p style="font-size: 1.2rem;">+91 9370094054</p>
  </div>

  <div class="contact-box" style="animation-delay: 0.3s; background: rgba(0, 0, 0, 0.6); border-radius: 10px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); transition: all 0.3s ease-in-out;">
    <h3 style="color: #FFD700; font-size: 1.5rem;">📧 Email</h3>
    <p style="font-size: 1.2rem;">
      <a href="mailto:garvitajhawar10@gmail.com" target="_blank" style="color: #fff; text-decoration: underline;">
        garvitajhawar10@gmail.com
      </a>
    </p>
  </div>

  <div class="contact-box" style="animation-delay: 0.6s; background: rgba(0, 0, 0, 0.6); border-radius: 10px; padding: 20px; margin-bottom: 20px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); transition: all 0.3s ease-in-out;">
    <h3 style="color: #FFD700; font-size: 1.5rem;">🔗 LinkedIn</h3>
    <p style="font-size: 1.2rem;">
      <a href="https://www.linkedin.com/in/garvita-jhanwar-289414233" target="_blank" style="color: #fff; text-decoration: underline;">
        Visit LinkedIn Profile
      </a>
    </p>
  </div>

  <div class="contact-box" style="animation-delay: 0.9s; background: rgba(0, 0, 0, 0.6); border-radius: 10px; padding: 20px; margin-bottom: 30px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); transition: all 0.3s ease-in-out;">
    <h3 style="color: #FFD700; font-size: 1.5rem;">🐙 GitHub</h3>
    <p style="font-size: 1.2rem;">
      <a href="https://github.com/Garvita1602" target="_blank" style="color: #fff; text-decoration: underline;">
        Visit GitHub Profile
      </a>
    </p>
  </div>
      <button id="next-button">Next 👉</button>
      <button id="previous-button">⬅️ Back</button>

    `,
    },
    exit: {
        background: exitImage,
        content: `
      <h2>Thank You for Stopping By! 🌟</h2>
      <p>It was a pleasure having you explore this portfolio. I hope it gave you a glimpse of my journey, skills, and aspirations.</p>
      <p>If you'd like to collaborate, connect, or simply say hello, feel free to reach out through the contact links provided.</p>
     
      <blockquote style="font-size: 1.2rem; color: #FFD700; margin-bottom: 30px; opacity: 0; animation: fadeIn 1s 1s forwards;">
      <em>"Remember, the best is yet to come—stay inspired and keep growing! 🚀"</em>
    </blockquote>

      <button id="restart-button">🔄 Start Over</button>
      <button id="previous-button">⬅️ Go Back</button>
    `,
    },


};

function addThunderAndDimEffects() {
    const dimOverlay = document.getElementById('dim-overlay');
    const thunderOverlay = document.getElementById('thunder-overlay');

    setInterval(() => {
        // Dim Effect
        dimOverlay.style.background = 'rgba(0, 0, 0, 0.5)';
        setTimeout(() => {
            dimOverlay.style.background = 'rgba(0, 0, 0, 0)';
        }, 500);

        // Thunder Flash
        setTimeout(() => {
            thunderOverlay.style.opacity = 1;
            setTimeout(() => {
                thunderOverlay.style.opacity = 0;
            }, 200);
        }, Math.random() * 300);
    }, 4000); // Effect every 4 seconds
}


// Trigger the thunder and dim effects
document.addEventListener('DOMContentLoaded', addThunderAndDimEffects);


const sectionOrder = ["initial", "about", "skills", "projects", "academics", "contact", "exit"];

// Set Background for Body
function setBackground(section) {
    const { background } = sections[section];
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
}

// Show Content and Set Background
function showContent(section) {
    const { content } = sections[section];
    const contentDiv = document.getElementById("content");

    // Update content
    contentDiv.innerHTML = content;
    contentDiv.style.display = "block";

    // Set background for the section
    setBackground(section);

    // Determine current index in the section order
    const currentIndex = sectionOrder.indexOf(section)

    // Add navigation button event listeners
    const nextButton = document.getElementById("next-button");
    const previousButton = document.getElementById("previous-button");
    const restartButton = document.getElementById("restart-button");

    if (nextButton && currentIndex < sectionOrder.length - 1) {
        nextButton.innerHTML = "Next 👉";
        nextButton.addEventListener("click", () => {
            showContent(sectionOrder[currentIndex + 1]);
        });
    }

    if (previousButton && currentIndex > 0) {
        previousButton.innerHTML = "⬅️ Back";
        previousButton.addEventListener("click", () => {
            showContent(sectionOrder[currentIndex - 1]);
        });
    }

    if (restartButton) {
        restartButton.innerHTML = "🔄 Start Over";
        restartButton.addEventListener("click", () => {
            showContent("initial");
        });
    }

}

// Add event listener for "Know More" buttons
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("toggle-button")) {
        const targetId = event.target.getAttribute("data-target");
        const detailsElement = document.getElementById(targetId);

        if (detailsElement) {
            const isVisible = detailsElement.style.display === "block";
            detailsElement.style.display = isVisible ? "none" : "block";
        }
    }
});

// Initial Setup
showContent("initial");