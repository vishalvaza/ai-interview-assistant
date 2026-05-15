# AI Interview Assistant

AI Interview Assistant is a full-stack AI-powered interview simulation platform that analyzes resumes, generates personalized interview questions, evaluates candidate responses, and produces AI-generated interview reports.

The project demonstrates practical AI orchestration using local and hybrid LLM pipelines with a modern full-stack architecture.

---

# Features

- Resume upload and parsing
- AI-powered resume intelligence extraction
- Dynamic interview question generation
- Personalized interview flow based on candidate expertise
- AI evaluation engine for candidate responses
- Communication and technical scoring
- AI-generated interview summary and feedback
- Local-first architecture with Ollama integration
- Privacy-focused design (no persistent resume storage)

---

# Tech Stack

## Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Zustand
- Axios
- Framer Motion

## Backend

- FastAPI
- Python
- Ollama
- Llama 3
- PyMuPDF
- python-docx

---

# Architecture Overview

```text
Frontend (Next.js)
        ↓
FastAPI Backend
        ↓
Resume Intelligence Engine
        ↓
Interview Blueprint Generator
        ↓
AI Evaluation Engine
        ↓
AI Interview Report
```

---

# AI Pipeline

## 1. Resume Intelligence Extraction

The uploaded resume is analyzed using an LLM pipeline to extract:

- candidate role
- years of experience
- skills
- technologies
- domains
- strengths
- focus areas
- interview difficulty level

---

## 2. Interview Blueprint Generation

The system dynamically generates interview questions based on:

- candidate experience
- technical expertise
- technologies used
- resume complexity

---

## 3. AI Evaluation Engine

Candidate responses are evaluated for:

- technical understanding
- communication quality
- clarity
- problem-solving ability
- overall interview performance

---

# Project Goals

This project was built to explore:

- AI orchestration systems
- local LLM workflows
- adaptive interview generation
- AI-powered evaluation pipelines
- full-stack AI application architecture

---

# Screenshots

## Landing Page

![alt text](https://github.com/vishalvaza/ai-interview-assistant/blob/main/screenshot/LandingHeroPage.jpg?raw=true)

## Resume Upload

![alt text](https://github.com/vishalvaza/ai-interview-assistant/blob/main/screenshot/UploadPage.jpg?raw=true)

## Question Preparation

![alt text](https://github.com/vishalvaza/ai-interview-assistant/blob/main/screenshot/Prepare.jpg?raw=true)

## Generates Resume Intelligence

![alt text](https://github.com/vishalvaza/ai-interview-assistant/blob/main/screenshot/ResumeIntelligence.jpg?raw=true)

## Interview Blueprint

![alt text](https://github.com/vishalvaza/ai-interview-assistant/blob/main/screenshot/InterviewBlueprintPlan.jpg?raw=true)

## Interview Questions

![alt text](https://github.com/vishalvaza/ai-interview-assistant/blob/main/screenshot/QnAPage.jpg?raw=true)

---

# Installation

## Clone Repository

```bash
git clone https://github.com/your-username/ai-interview-assistant.git
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

---

# Backend Setup

```bash
cd backend

python -m venv venv
```

Activate virtual environment:

### Windows

```bash
.\venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://localhost:8000
```

---

# Ollama Setup

Install Ollama:

https://ollama.com/

Pull model:

```bash
ollama pull llama3
```

Run model:

```bash
ollama run llama3
```

---

# API Endpoints

| Endpoint | Description |
|---|---|
| `/api/resume/upload` | Upload and parse resume |
| `/api/resume/analyze` | Generate resume intelligence |
| `/api/interview/blueprint` | Generate interview questions |
| `/api/interview/evaluate-session` | Generate AI interview report |

---

# Privacy

This project is designed with a privacy-first approach.

- resumes are processed temporarily
- no persistent storage is used
- session data remains in-memory during runtime

---

# Future Improvements

- communication intelligence engine
- coding interview mode
- real-time voice interviews
- adaptive difficulty engine
- multi-round interviews
- progress dashboard
- recruiter analytics

---

# Challenges Solved

- AI orchestration across multiple pipelines
- resume intelligence extraction
- dynamic interview generation
- structured LLM JSON parsing
- session-level AI evaluation
- local-first LLM integration

---

# License

MIT License

---

# Author

Vishal Vaza

LinkedIn: https://www.linkedin.com/in/vishal-vaza-19459946
GitHub: https://github.com/vishalvaza
Email: vishalvaza@gmail.com
