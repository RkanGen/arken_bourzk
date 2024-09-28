import React, { useState } from "react";
import { Sun, Moon, Linkedin, Mail } from "lucide-react";

const projects = [
  {
    title: "LLM Powered Dashboard Generator",
    description:
      "Web application using Large Language Models (LLMs) to analyze data and automatically generate insightful visualizations.",
    image: "./images/dashboard.png",
    github: "https://github.com/RkanGen/Smart_Dashboard",
  },
  {
    title: "Machine Learning for Student Performance Prediction",
    description:
      "End-to-end machine learning project with data pipeline, logging, and modular components for efficient data processing and model training on AWS EC2.",
    image: "./images/mlproject.png",
    github: "https://github.com/RkanGen/mlproject",
  },
  {
    title: "AI-Powered Resume Builder",
    description:
      "Application that customizes resumes based on job descriptions using the Groq API, built with FastAPI backend and React frontend.",
    image: "./images/resume.png",
    github: "https://github.com/RkanGen/kai_ai",
  },
  {
    title: "MERN AI Chatbot",
    description:
      "Intelligent assistant leveraging the OpenAI API, built with the MERN stack.",
    image: "./images/mern.png",
    github: "https://github.com/RkanGen/MERN_Ai_Chat_bot",
  },
  {
    title: "Object Detection",
    description:
      "Object Detection Segmentation & Tracking App using YOLO v8 & supervision.",
    image: "./images/segment.png",
    github: "https://github.com/RkanGen/vision_city",
  },
  {
    title: "Q&A Chatbot",
    description: "Multimodal Q&A chatbot using Gemini.",
    image: "./images/gemini.png",
    github: "https://github.com/RkanGen/Q-A-Chatbot-Using-Gemini",
  },
  {
    title: "Task Manager FAST_API ",
    description:
      "Simple task management API built using FastAPI. The API allows you to create, read, update, and delete tasks.",
    image: "./images/fastapi.png",
    github: "https://github.com/RkanGen/Fast_API_App",
  },
  {
    title: " Retreival Augmented Generation System",
    description:
      "System designed to process documents (PDF format), store document embeddings in a Pinecone vector store, and retrieve contextually relevant information using Groq's Llama-3 model for generating answers.",
    image: "./images/rag.png",
    github: "https://github.com/RkanGen/RAG_free",
  },
  {
    title: "AI Voice Chatbot",
    description:
      "This project demonstrates a chatbot that uses advanced AI models for text generation and voice synthesis. It leverages Gemini model for generating conversational text and Hugging Face's Text-to-Speech (TTS) model to produce spoken responses.",
    image: "./images/voice.png",
    github: "https://github.com/RkanGen/AI-Voice-Chatbot",
  },
  {
    title: "Kids Story Generator",
    description:
      "This project is an AI-powered children's story generator that creates a unique short story based on a user-provided theme and generates corresponding illustrations for each paragraph using the latest AI models.",
    image: "./images/story.png",
    github: "https://github.com/RkanGen/Story_Generator",
  },
  {
    title: "Face Analysis App",
    description:
      "This application allows users to analyze an image of a face to detect keypoints, perform segmentation, and recognize the dominant emotion from the facial expression.",
    image: "./images/face.png",
    github: "https://github.com/RkanGen/face_analysis_app",
  },
  {
    title: "OCR & Extractor",
    description:
      "Powerful tool for extracting and analyzing content from PDF files and images. It offers features such as text extraction, table detection, image extraction, and text summarization .",
    image: "./images/ocr.png",
    github: "https://github.com/RkanGen/Extractor-with-Summarization",
  },
  {
    title: "Text to SQl system",
    description:
      "Develop system that allows users to manage an SQLite database using natural language queries. It leverages the Gemini API to convert natural language into SQL queries, providing an intuitive interface for database operations.",
    image: "./images/sql.png",
    github: "https://github.com/RkanGen/Text_to_SQL",
  },
];

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <nav className="p-4 flex justify-between items-center ">
        <h1
          className={`text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600`}
        >
          My Portfolio
        </h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2 rounded-full ${
            darkMode ? "bg-yellow-400" : "bg-gray-700 text-white"
          }`}
        >
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </nav>

      <main className="container mx-auto p-4 flex-grow">
        <h2
          className={`text-xl font-semibold mb-4 ${
            darkMode ? "text-blue-300" : "text-blue-600"
          }`}
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-md overflow-hidden ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <LazyImage
                src={project.image}
                alt={project.title}
                placeholder="./images/placeholder.png" // Placeholder image
                darkMode={darkMode}
              />
              <div className="p-4">
                <h3
                  className={`font-bold mb-2 ${
                    darkMode ? "text-blue-300" : "text-blue-600"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="text-sm mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-4 py-2 rounded ${
                    darkMode
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white transition duration-300`}
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
     
  );
};

      

  
  
      <footer className="mt-auto">
        <div className="bg-gradient-to-r from-purple-900 to-black text-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="mb-4">
              Hi, I m Arken Bourezak.  a dedicated Software Engineer and Data
              Scientist with a passion for Artificial Intelligence and Machine
              Learning. I specialize in building innovative, cutting-edge
              solutions that harness the power of AI to solve real-world
              problems. My work is driven by curiosity and a desire to push the
              boundaries of what s possible with technology. Whether it s
              developing intelligent systems or optimizing data-driven
              processes, I thrive on tackling complex challenges and turning
              them into impactful results. Im eager to bring this passion and
              expertise to projects that make a meaningful difference.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="linkedin.com/in/arken-bourezak-016744209/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:arken.bourezak@enstab.ucar.tn"
                className="text-white hover:text-blue-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
