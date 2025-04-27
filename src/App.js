import React, { useState, useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typewriter } from 'react-simple-typewriter';

const githubPhoto = "https://avatars.githubusercontent.com/u/108261929?v=4";


function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Quickbites – Food Ordering Platform",
      desc: "A full-stack food delivery app with user authentication, cart functionality, Stripe payment integration, admin panel for order management, and real-time status updates.",
      tech: "ReactJS, Tailwind CSS, Node.js, Express.js, MongoDB, Multer, Stripe",
      github: "https://github.com/ayushshrivastava/QuickBites" // Replace with your actual repo URL
    },
    {
      title: "ChatWave – Real-time Chat Application",
      desc: "A socket.io-based chat app with real-time messaging, unread message tracking, online user status, Google authentication, and a responsive UI.",
      tech: "ReactJS, Tailwind CSS, Node.js, Express.js, MongoDB, Socket.IO, Redux",
      github: "https://github.com/ayushshrivastava/ChatWave" // Replace with your actual repo URL
    },
    {
      title: "Noughts and Crosses – Multiplayer Game",
      desc: "An interactive multiplayer Tic-Tac-Toe game built with real-time gameplay support, user sessions, and turn-based logic using WebSockets.",
      tech: "ReactJS, Node.js, Socket.IO, Express",
      github: "https://github.com/ayushshrivastava/Noughts-and-Crosses" // Replace with your actual repo URL
    },
    {
      title: "Driving Coupon Acceptance Analysis",
      desc: "A data analysis project using Python to explore factors influencing coupon acceptance, including visualization, statistical summaries, and probability modeling.",
      tech: "Python, Pandas, Matplotlib, Seaborn, NumPy",
      github: "https://github.com/ayushshrivastava/Coupon_acceptance" // Replace with your actual repo URL
    },
    {
      title: "Nextalk – Video Conferencing Platform",
      desc: "Developed a video conferencing platform featuring real-time communication, meeting scheduling, recording, and personalized meeting rooms using Next.js and TypeScript.",
      tech: "Next.js, TypeScript, Clerk (for authentication), Socket.io",
      github: "https://github.com/ayushshrivastava/Nextalk"
    },
    {
      title: "VitalCare – Healthcare Management System",
      desc: "A full-stack healthcare management system for scheduling appointments, maintaining patient records, and managing healthcare providers, built with Next.js and Appwrite.",
      tech: "Next.js, Appwrite, TypeScript, Tailwind CSS, Twilio",
      github: "https://github.com/ayushshrivastava/VitalCare"
    },
    {
      title: "Hand Gesture Volume Control",
      desc: "An innovative project that allows users to control volume using hand gestures, built with computer vision using Python and OpenCV.",
      tech: "Python, OpenCV, Computer Vision",
      github: "https://github.com/ayushshrivastava/Hand_Gesture_Volume_Control"
    }
  ];
  

  const [showScreenshots, setShowScreenshots] = useState(false);
  const sectionStyle = (dark, light) => ({ background: darkMode ? dark : light, color: darkMode ? '#fff' : '#111' });

  return (
    <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} style={{ transition: "all 0.5s ease-in-out" }}>
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} shadow-sm sticky-top`}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Ayush Shrivastava</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#hero">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#resume">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Toggle Button Moved Inside Navbar */}
        <div className="d-flex align-items-center ms-auto me-3">
          <label className="toggle-switch">
            <input type="checkbox" checked={!darkMode} onChange={toggleTheme} />
            <span className="slider">
              <span className="emoji">{darkMode ? '🌙' : '☀️'}</span>
            </span>
          </label>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="container py-5 hero-section" style={sectionStyle("#0f2027", "#e6f0ff")}>
        <div className="row align-items-center">
          {/* Left Side - Text Content */}
          <div className="col-md-6" data-aos="fade-right">
            <h1 className="display-4 fw-bold text-gradient">
              Hi, I'm <span className="highlight-name">Ayush</span> 👋
            </h1>
            <p className="lead fs-4 mt-3">
              <Typewriter
                words={[
                  'Full Stack Developer 🚀',
                  'MERN Stack Enthusiast 🌐',
                  'Node.js | React | MongoDB | Express',
                  'Building Real-time Apps with Socket.IO ⚡',
                  'Data & API-Driven Solutions 📊'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </p>
          </div>

          {/* Right Side - Profile Image */}
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src="/Ayush.png"
              alt="Ayush Shrivastava"
              className="rounded-circle shadow-lg profile-hero"
              width="280"
              height="300"
            />
          </div>
        </div>
      </header>

      {/* About + Skills Section */}
      <section id="about" className="container-fluid py-5" style={sectionStyle("linear-gradient(to right, #2c3e50, #4ca1af)", "linear-gradient(to right, #f0f9ff, #e0f7fa)")}>
        <div className="container">
          <div className="row align-items-center">
            {/* About Me */}
            <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
            <h2 className="mb-3">About Me</h2>
<p style={{ lineHeight: "1.8" }}>
  I'm a dedicated and driven final-year <strong>Master of Computer Applications (MCA)</strong> student at <strong>National Institute of Technology, Raipur</strong>, with a strong academic record and a deep passion for software development.<br /><br />

  I specialize in <strong>full-stack web development</strong>, with hands-on experience building real-world projects using technologies like <strong>React.js</strong>, <strong>Node.js</strong>, <strong>Express.js</strong>, <strong>MongoDB</strong>, <strong>Tailwind CSS</strong>, and more. My expertise lies in developing scalable backend systems, building secure RESTful APIs, and creating responsive user interfaces.<br /><br />

  During my internship at <strong>ZetaCoding Innovative Solution</strong>, I developed a <strong>Subscriber Tracking System API</strong> with advanced features like rate limiting, bot protection, and automated email reminders—enhancing subscription management and billing efficiency.<br /><br />

  I'm a consistent problem solver with over <strong>550+ questions solved on LeetCode</strong> and <strong>250+ on GeeksforGeeks</strong>. I'm constantly learning, exploring modern tools, and looking for opportunities to contribute to impactful projects and collaborative teams. 🚀
</p>

            </div>


            {/* Skills */}
            <div id='skills' className="col-md-6 text-center" data-aos="fade-left">
              <h2 className="mb-4">Skills</h2>
              <div className="d-flex flex-wrap justify-content-center gap-4 fs-1 px-3 skills-wrapper">

                {/* Programming Languages */}
                <div>
                  <h5 className="fw-bold mb-3">🧠 Programming Languages</h5>
                  <div className="d-flex flex-wrap gap-4 fs-1">
                    <i className="devicon-cplusplus-plain colored skill-icon" data-title="C++"></i>
                    <i className="devicon-python-plain colored skill-icon" data-title="Python"></i>
                    <i className="devicon-javascript-plain colored skill-icon" data-title="JavaScript"></i>
                  </div>
                </div>

                {/* Frameworks & Libraries */}
                <div>
                  <h5 className="fw-bold mb-3">🔧 Frameworks & Libraries</h5>
                  <div className="d-flex flex-wrap gap-4 fs-1">
                  <i className="devicon-react-original colored skill-icon" data-title="ReactJS"></i>
                  <i className="devicon-redux-original colored skill-icon" data-title="Redux"></i>
                  <i className="devicon-nodejs-plain colored skill-icon" data-title="Node.js"></i>
                  <i className="devicon-express-original colored skill-icon" data-title="Express.js"></i>
                  <i className="devicon-bootstrap-plain colored skill-icon" data-title="Bootstrap"></i>
                  <i className="devicon-tailwindcss-plain colored skill-icon" data-title="Tailwind CSS"></i>
                  <i className="devicon-nextjs-original colored skill-icon" data-title="Next.js"></i>
                  <i className="devicon-typescript-plain colored skill-icon" data-title="TypeScript"></i>
                  <i className="devicon-react-plain colored skill-icon" data-title="React Context API"></i>
                  </div>
                </div>

                {/* Databases */}
                <div>
                  <h5 className="fw-bold mb-3">🛢️ Databases</h5>
                  <div className="d-flex flex-wrap gap-4 fs-1">
                    <i className="devicon-mysql-plain colored skill-icon" data-title="MySQL"></i>
                    <i className="devicon-mongodb-plain colored skill-icon" data-title="MongoDB"></i>
                  </div>
                </div>

                {/* Tools & DevOps */}
                <div>
                  <h5 className="fw-bold mb-3">☁️ Tools & DevOps</h5>
                  <div className="d-flex flex-wrap gap-4 fs-1">
                    <i className="devicon-git-plain colored skill-icon" data-title="Git"></i>
                    <i className="devicon-github-original colored skill-icon" data-title="GitHub"></i>
                    <i className="devicon-docker-plain colored skill-icon" data-title="Docker"></i>
                    <span className="skill-icon" data-title="Vercel">
                      <img src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" alt="Vercel" width="40" height="40" />
                    </span>
                    <span className="skill-icon" data-title="Netlify">
                      <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="Netlify" width="40" height="40" />
                    </span>
                    <span className="skill-icon" data-title="AWS">
                      <img src="https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" alt="AWS" width="40" height="40" />
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="container-fluid py-5 text-center"
        style={{
          background: darkMode
            ? "linear-gradient(to right, #232526, #414345)"
            : "linear-gradient(to right, #e0f7fa, #f0f9ff)",
          color: darkMode ? "#f1f1f1" : "#0a0a0a",
        }}
      >
        <h2 className="mb-4" data-aos="fade-down">
          📄 <span style={{ borderBottom: "2px solid #00d4ff" }}>My Resume</span>
        </h2>
        <p className="lead mb-4 px-3" data-aos="fade-up">
          A quick snapshot of my experience, skills, and tech journey — neatly packed into a single document.
        </p>
        <a
          href="https://drive.google.com/file/d/1HdsCtZyD8Ku-h9mfN4Yd1g6MFyf2cmKW/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className={`btn btn-lg px-5 py-3 fw-semibold ${
            darkMode ? 'btn-outline-info' : 'btn-outline-dark'
          } shadow-sm`}
          style={{
            borderRadius: "30px",
            letterSpacing: "1px",
            transition: "all 0.3s ease-in-out",
          }}
          data-aos="zoom-in"
        >
          <i className="bi bi-file-earmark-person-fill me-2"></i> View Resume
        </a>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-5" style={sectionStyle("#000000", "#f5f5f5")}>
        <h2 className="text-center mb-4" data-aos="fade-down">Projects</h2>
        <div className="row">
          {projects.map((proj, idx) => (
            <div className="col-md-4 mb-4" key={idx} data-aos="fade-up">
              <div className={`card h-100 ${darkMode ? 'bg-dark text-white border-light' : 'bg-white text-dark border-dark'} card-hover`}>
                <div className="card-body">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.desc}</p>
                  <p><strong>Tech:</strong> {proj.tech}</p>
                  <a href={proj.github} className={`btn btn-outline-${darkMode ? 'light' : 'dark'}`} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>




      {/* Contact Section */}
      <section id="contact" className="container-fluid py-5" style={sectionStyle("#141e30", "#d0eaff")}>
        <h2 className="text-center mb-5 animate__animated animate__fadeInDown">📬 Get in Touch</h2>

        {/* Contact Details */}
        <div className="container mb-5" data-aos="fade-up">
          <div className={`row justify-content-center p-4 rounded-4 shadow-lg ${darkMode ? 'bg-dark text-white' : 'bg-white text-dark'}`}>
            <div className="col-md-10">
              <div className="row row-cols-1 row-cols-md-2 g-4 text-start">

                {/* GitHub */}
                <div className="col d-flex align-items-center gap-3">
                  <i className="bi bi-github fs-3"></i>
                  <div>
                    <strong>GitHub</strong>
                    <br />
                    <a href="https://github.com/ayushshrivastava" target="_blank" rel="noreferrer" className="text-decoration-none text-reset">
                      github.com/ayushshrivastava
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="col d-flex align-items-center gap-3">
                  <i className="bi bi-linkedin fs-3"></i>
                  <div>
                    <strong>LinkedIn</strong>
                    <br />
                    <a href="https://www.linkedin.com/in/ayush-shrivastava-09754a249/" target="_blank" rel="noreferrer" className="text-decoration-none text-reset">
                    ayush-shrivastava
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="col d-flex align-items-center gap-3">
                  <i className="bi bi-envelope-fill fs-3"></i>
                  <div>
                    <strong>Email</strong>
                    <br />
                    <a href="mailto:ayushshrivastava840@gmail.com" className="text-decoration-none text-reset">
                      ayushshrivastava840@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="col d-flex align-items-center gap-3">
                  <i className="bi bi-geo-alt-fill fs-3"></i>
                  <div>
                    <strong>Location</strong>
                    <br />
                    Faridabad, Haryana, India 🇮🇳
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form  */}
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className={`p-4 rounded shadow ${darkMode ? "bg-dark text-white" : "bg-white text-dark"}`} data-aos="zoom-in">
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLScxh6qpFb0TlGMyvZW03AYZrJyx0Fo0TsFibgXagguwzU8t9A/formResponse"
                method="POST"
                target="_blank"
              >
                <div className="form-floating mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="entry.1791844630"
                    placeholder="Your Name"
                    required
                  />
                  <label htmlFor="name"><i className="bi bi-person-fill me-2"></i>Name</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="entry.14260939"
                    placeholder="name@example.com"
                    required
                  />
                  <label htmlFor="email"><i className="bi bi-envelope-fill me-2"></i>Email address</label>
                </div>
                <div className="form-floating mb-4">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    name="entry.1122207592"
                    style={{ height: '150px' }}
                    required
                  ></textarea>
                  <label htmlFor="message"><i className="bi bi-chat-text-fill me-2"></i>Your Message</label>
                </div>
                <div className="text-center">
                  <button type="submit" className={`btn btn-lg btn-outline-${darkMode ? 'light' : 'dark'} px-5`}>
                    <i className="bi bi-send me-2"></i>Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Leetcode Activity Section */}
      <section
        className={`container py-5 text-center ${darkMode ? 'bg-dark text-white' : 'bg-light text-dark'}`}
        id="Leetcode"
      >
        <h2 className="mb-4" data-aos="fade-down">📈 Leetcode Activity</h2>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
          {/* <img
            src={`/Leetcode1.png`}
            alt="Leetcode Streak"
            className="img-fluid"
            width="400"
          /> */}
          <img
            src={`/Leetcode2.png`}
            alt="Badges"
            className="img-fluid"
            style={{ width: '300px' }}
          />
          <img
            src={`/Leetcode3.png`}
            alt="GitHub Streak"
            className="img-fluid"
            style={{ width: '450px', height: '250px' }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-secondary text-light' : 'bg-light text-dark'} py-4 mt-5`}>
        <div className="container text-center">
          <div className="mb-3">
            <a href="https://github.com/ayushshrivastava" target="_blank" rel="noreferrer" className="mx-3 text-reset">
              <i className="bi bi-github fs-4"></i>
            </a>
            <a href="https://www.linkedin.com/in/ayush-shrivastava-09754a249/" target="_blank" rel="noreferrer" className="mx-3 text-reset">
              <i className="bi bi-linkedin fs-4"></i>
            </a>
          </div>
          <p className="mb-0">© {new Date().getFullYear()} Ayush Shrivastava | Made with 💙 in India</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
