import { create } from "zustand";

interface ResumeData {
  file?: File;
  parsedText?: string;
  skills?: string[];
  role?: string;
  experience?: number;
}

interface InterviewStore {
  resume: ResumeData | null;
  analysis: any;
  isUploading: boolean;
  uploadStage: string;
  blueprint: any;
  appStage: string;
  currentQuestionIndex: number;
  currentQuestion: any;
  interviewStarted: boolean;
  messages: any[];

  setResume: (resume: ResumeData) => void;
  setAnalysis: (analysis: any) => void;
  setUploading: (value: boolean) => void;
  setUploadStage: (stage: string) => void;
  setBlueprint: (blueprint: any) => void;
  setAppStage: (stage: string) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setCurrentQuestion: (question: any) => void;
  setInterviewStarted: (value: boolean) => void;
  addMessage: (message: any) => void;
}

export const useInterviewStore = create<InterviewStore>((set) => ({
  resume: null,
  analysis: null,
  isUploading: false,
  uploadStage: "",
  blueprint: null,
  appStage: "upload",
  currentQuestionIndex: 0,
  currentQuestion: null,
  interviewStarted: false,
  messages: [],

  setResume: (resume) => set({ resume }),

  setAnalysis: (analysis) =>
    set({ analysis }),

  setUploading: (value) =>
    set({ isUploading: value }),

  setUploadStage: (stage) =>
    set({ uploadStage: stage }),

  setBlueprint: (blueprint) =>
    set({ blueprint }),
  
  setAppStage: (stage) =>
    set({ appStage: stage }),

  setCurrentQuestionIndex: (index) => 
    set({currentQuestionIndex: index}),

  setCurrentQuestion: (question) => 
    set({currentQuestion: question}),

  setInterviewStarted: (value) => 
    set({interviewStarted: value}),

  addMessage: (message) => 
    set((state) => ({
        messages: [
        ...state.messages,
        message,
        ],
    })),
}));