import ProfileCard from './components/ProfileCard'
import './App.css'
import { useState } from 'react'
import { FaReact, FaNodeJs, FaMedium, FaBook, FaDesktop, FaPython, FaTerminal, FaShieldAlt, FaTimes } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pythonScripts = [
    {
      name: "Py-crack",
      link: "https://github.com/Anant1711/Py-crack",
      desc: "Python script that cracks md5, sha1, sha256, sha512, and sha224 hashes."
    },
    {
      name: "Py-trap",
      link: "https://github.com/Anant1711/Py-trap",
      desc: "Python script that generates payloads for reverse shells."
    },
    {
      name: "Py-hunt",
      link: "https://github.com/Anant1711/py-hunt",
      desc: "Python script that scans ports, services, and hidden web directories."
    },
    {
      name: "Py-sharing",
      link: "https://github.com/Anant1711/Py-sharing",
      desc: "Python script that enables file sharing between devices over a local network."
    }
  ];

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Section - Profile Card */}
      <div className="w-full lg:w-1/2 h-[500px] lg:h-screen flex items-center justify-center p-4 lg:p-8 relative z-10 bg-white">
        <div className="w-full h-full flex items-center justify-center">
          <ProfileCard
            name="Anant Chauhan"
            title="Software Engineer"
            handle="anantchauhan"
            contactText="Contact Me"
            avatarUrl="/image.jpeg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={true}
            onContactClick={() => window.open('mailto:test@example.com')} // Placeholder or actual link if known
          />
        </div>
      </div>

      {/* Right Section - Content (Scrollable) */}
      <div className="w-full lg:w-1/2 h-screen overflow-y-auto relative z-10 custom-scrollbar">
        <div className="content-container animate-[fadeIn_0.5s_ease-out]">

          {/* HERO */}
          <section>
            <h1>Anant Chauhan</h1>
            <div className="tagline">
              Software Engineer · Automotive Telematics · Full Stack
            </div>
            <p>
              I build reliable, scalable software systems across automotive, web,
              mobile, and cloud platforms — with a strong focus on real-time communication
              and production readiness.
            </p>
          </section>

          {/* ABOUT */}
          <section>
            <h2>About</h2>
            <p className="mb-4">
              I’m a Software Engineer with over 2+ years of experience designing and
              developing production-grade applications in automotive telematics,
              full-stack development, and cloud-native systems.
            </p>
            <p>
              My work focuses on clean architecture, system reliability, and performance.
              I enjoy solving complex problems that operate under real-world constraints
              where correctness, security, and scalability matter.
            </p>
          </section>

          {/* PROFESSIONAL EXPERIENCE */}
          <section>
            <h2>Professional Experience</h2>

            <div className="mb-8">
              <h3>Software Engineer II — Visteon Corporation</h3>
              <p className="text-sm italic mb-4">Pune · July 2023 – Present</p>
              <ul>
                <li>
                  Designed and developed Android-based microservices and system
                  architectures for automotive telematics features including <strong>eCall, bCall, and Remote Vehicle Diagnostics</strong>.
                </li>
                <li>
                  Built secure and efficient data pipelines using <strong>AES encryption and ZSTD compression</strong> to protect and optimize vehicle telemetry data transfer.
                </li>
                <li>
                  Engineered <strong>low-latency MQTT communication</strong>, achieving sub-50 ms response times for real-time vehicle connectivity.
                </li>
                <li>
                  Collaborated with cross-functional and global teams to deliver features showcased at <strong>CES 2024</strong>, contributing to <strong>$30M+ in project revenue</strong>.
                </li>
                <li>
                  Implemented CI/CD pipelines, code reviews, and automated testing practices to ensure high-quality, maintainable, and safety-compliant automotive software.
                </li>
              </ul>
            </div>

            <div className="divider"></div>

            <div className="mb-8">
              <h3>Security Engineer — DigiLocker (Ministry of Electronics & IT)</h3>
              <p className="text-sm italic mb-4">Remote · June 2021 – September 2021</p>
              <ul>
                <li>
                  Identified and remediated security vulnerabilities in government web applications under the Digital India initiative.
                </li>
                <li>
                  Performed security testing using Python and industry-standard security tools to strengthen application defenses.
                </li>
                <li>
                  Worked remotely with government stakeholders, demonstrating strong ownership and independent execution.
                </li>
              </ul>
            </div>
          </section>

          {/* PROJECTS */}
          <section>
            <h2>Projects</h2>
            <div className="projects-grid">

              <div className="clean-card">
                <a href="https://slixoapp.com" target="_blank" rel="noopener noreferrer" className="block hover:no-underline mb-4">
                  <div className="flex justify-between items-start">
                    <h3>Slixo — Salon Booking Platform</h3>
                    <span className="text-gray-400">↗</span>
                  </div>
                  <p className="mb-2">
                    Cross-platform mobile application built with React Native and Node.js,
                    published on the Apple App Store and Google Play Store.
                  </p>
                  <p>
                    Features include real-time booking, authentication, and a clean,
                    user-friendly experience for customers and salon owners.
                  </p>
                </a>
                <div className="flex gap-4 mt-2">
                  <a href="https://apps.apple.com/in/app/slixo-salon-booking-app/id6755047560" target="_blank" rel="noopener noreferrer" className="h-10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-full" />
                  </a>
                  <a href="https://play.google.com/store/apps/details?id=com.anantchauhan.slixo&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="h-10">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-full" />
                  </a>
                </div>
              </div>

              <div className="clean-card flex flex-col">
                <a href="https://anant1711.github.io/AutoLearn/" target="_blank" rel="noopener noreferrer" className="block hover:no-underline flex-1">
                  <div className="flex justify-between items-start">
                    <h3>AutoLearn Studio</h3>
                    <span className="text-gray-400">↗</span>
                  </div>
                  <p className="mb-2">
                    Interactive web-based simulator for automotive communication protocols
                    such as CAN, UDS, and LIN.
                  </p>
                  <p className="mb-4">
                    Built using React, TypeScript, Node.js, and WebSockets to provide a
                    hardware-free, hands-on learning experience.
                  </p>
                </a>
                <div className="flex gap-4 mt-auto">
                  <FaReact size={28} title="React" className="text-[#61DAFB]" />
                  <SiTypescript size={24} title="TypeScript" className="text-[#3178C6]" />
                  <FaNodeJs size={28} title="Node.js" className="text-[#339933]" />
                </div>
              </div>

              <div className="clean-card">
                <a href="https://snapcraft.io/note-cli" target="_blank" rel="noopener noreferrer" className="block hover:no-underline mb-4">
                  <div className="flex justify-between items-start">
                    <h3>note-cli</h3>
                    <span className="text-gray-400">↗</span>
                  </div>
                  <p className="mb-2">
                    Lightweight command-line note-taking tool for Linux users, packaged
                    and distributed globally via Snapcraft.
                  </p>
                  <p>
                    Designed for simplicity, portability, and consistent user experience
                    across Linux distributions.
                  </p>
                </a>
                <a href="https://snapcraft.io/note-cli" target="_blank" rel="noopener noreferrer">
                  <img alt="Get it from the Snap Store" src="https://snapcraft.io/en/dark/install.svg" className="w-[150px]" />
                </a>
              </div>

              <div
                className="clean-card cursor-pointer group flex flex-col"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <FaShieldAlt className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                    <h3>Python Scripts</h3>
                  </div>
                  <span className="text-gray-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                </div>
                <p className="text-sm mb-4 flex-1">
                  A suite of specialized Python scripts for cybersecurity, penetration testing,
                  and local network management.
                </p>
                <div className="flex gap-3 text-[#3776AB] mt-auto">
                  <FaPython size={24} />
                  <FaTerminal size={20} className="mt-0.5" />
                </div>
              </div>

            </div>
          </section>

          {/* SKILLS */}
          <section>
            <h2>Skills</h2>
            <div className="skill-row">
              <p>
                <strong className="text-black">Languages:</strong> JavaScript, TypeScript, Python, Java, Golang, C/C++, Dart, SQL
              </p>
            </div>
            <div className="skill-row">
              <p>
                <strong className="text-black">Frontend & Mobile:</strong> React, React Native, Flutter, HTML, CSS
              </p>
            </div>
            <div className="skill-row">
              <p>
                <strong className="text-black">Backend:</strong> Node.js, Spring Boot, Flask, Django, REST APIs, Microservices
              </p>
            </div>
            <div className="skill-row">
              <p>
                <strong className="text-black">Cloud & DevOps:</strong> AWS, Docker, Kubernetes, CI/CD
              </p>
            </div>
            <div className="skill-row">
              <p>
                <strong className="text-black">Other:</strong> MQTT, Real-Time Systems, GenAI Integration
              </p>
            </div>
          </section>


          {/* PUBLICATIONS & CREATIVE WORKS */}
          <section>
            <h2>Publications & Creative Works</h2>
            <div className="projects-grid">
              <a href="https://notionpress.com/author/1438537" target="_blank" rel="noopener noreferrer" className="clean-card block hover:no-underline">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <FaBook className="text-gray-400" />
                    <h3>Published Books</h3>
                  </div>
                  <span className="text-gray-400">↗</span>
                </div>
                <p className="text-sm">
                  Author of technical guides and creative literature focused on software engineering
                  and security principles.
                </p>
              </a>

              <a href="https://www.vulnhub.com/author/anant-chauhan,757/" target="_blank" rel="noopener noreferrer" className="clean-card block hover:no-underline">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <FaDesktop className="text-gray-400" />
                    <h3>Virtual Machines</h3>
                  </div>
                  <span className="text-gray-400">↗</span>
                </div>
                <p className="text-sm">
                  Developed and published specialized vulnerable and learning VMs for cybersecurity
                  training and capture-the-flag competitions.
                </p>
              </a>

              <a href="https://medium.com/@Infinity_" target="_blank" rel="noopener noreferrer" className="clean-card block hover:no-underline">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <FaMedium className="text-gray-400" />
                    <h3>Medium Blogs</h3>
                  </div>
                  <span className="text-gray-400">↗</span>
                </div>
                <p className="text-sm">
                  Writing about automotive telematics, full-stack development, and my journey
                  navigating the software industry.
                </p>
              </a>
            </div>
          </section>

          {/* FOOTER */}
          <div className="clean-footer">
            <p>
              I’m interested in building dependable systems, solving real-world problems,
              and contributing to teams creating impactful, scalable products.
            </p>
          </div>

        </div>
      </div>

      {/* Python Scripts Modal */}
      {/* Python Scripts Modal - MOBILE RESPONSIVE VERSION */}
      {isModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: window.innerWidth > 640 ? '24px' : '16px',
            zIndex: 100
          }}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: window.innerWidth > 640 ? '24px' : '20px',
              width: '100%',
              maxWidth: '1100px',
              maxHeight: '90vh',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{
              padding: window.innerWidth > 640 ? '32px 40px' : '20px 24px',
              borderBottom: '1px solid #e5e7eb',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: window.innerWidth > 640 ? '16px' : '12px' }}>
                <div style={{
                  padding: window.innerWidth > 640 ? '12px' : '10px',
                  backgroundColor: '#dbeafe',
                  borderRadius: '16px',
                  color: '#2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <FaPython size={window.innerWidth > 640 ? 32 : 24} />
                </div>
                <div>
                  <h2 style={{
                    fontSize: window.innerWidth > 640 ? '28px' : '22px',
                    fontWeight: 'bold',
                    color: '#111827',
                    margin: 0,
                    lineHeight: '1.2'
                  }}>Python Scripts</h2>
                  <p style={{
                    fontSize: window.innerWidth > 640 ? '14px' : '13px',
                    color: '#6b7280',
                    margin: '6px 0 0 0'
                  }}>Cybersecurity & PENTESTING suite</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  padding: '10px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '12px',
                  color: '#9ca3af',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Content */}
            <div style={{
              padding: window.innerWidth > 640 ? '40px' : '24px',
              overflowY: 'auto',
              maxHeight: 'calc(90vh - 140px)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
                gap: window.innerWidth > 640 ? '24px' : '16px',
                maxWidth: '1000px',
                margin: '0 auto'
              }}>
                {pythonScripts.map((script, idx) => (
                  <a
                    key={idx}
                    href={script.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: window.innerWidth > 640 ? '28px' : '20px',
                      borderRadius: window.innerWidth > 640 ? '16px' : '14px',
                      border: idx === 1 ? '2px solid #60a5fa' : '2px solid #e5e7eb',
                      backgroundColor: idx === 1 ? '#eff6ff' : 'white',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      boxShadow: idx === 1 ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#60a5fa';
                      e.currentTarget.style.backgroundColor = '#eff6ff';
                      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      if (idx !== 1) {
                        e.currentTarget.style.borderColor = '#e5e7eb';
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.boxShadow = 'none';
                      } else {
                        e.currentTarget.style.borderColor = '#60a5fa';
                        e.currentTarget.style.backgroundColor = '#eff6ff';
                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                      }
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '12px'
                    }}>
                      <h4 style={{
                        fontSize: window.innerWidth > 640 ? '20px' : '18px',
                        fontWeight: 'bold',
                        color: '#111827',
                        margin: 0,
                        lineHeight: '1.3'
                      }}>{script.name}</h4>
                      <span style={{
                        color: '#9ca3af',
                        fontSize: '18px',
                        flexShrink: 0,
                        marginLeft: '8px'
                      }}>↗</span>
                    </div>
                    <p style={{
                      fontSize: window.innerWidth > 640 ? '15px' : '14px',
                      color: '#4b5563',
                      margin: 0,
                      lineHeight: '1.6'
                    }}>{script.desc}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  )
}

export default App
