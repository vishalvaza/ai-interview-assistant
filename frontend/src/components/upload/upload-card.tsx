"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { motion } from "framer-motion";
import { UPLOAD_STAGES } from "@/constants/upload-stages";

import {
  uploadResume,
  analyzeResume,
  generateBlueprint,
} from "@/services/resume-service";

import { useInterviewStore } from "@/stores/interview-store";

export function UploadCard() {

  const {
    setAnalysis,
    setUploading,
    isUploading,
    uploadStage,
    setUploadStage,
    setBlueprint,
    setAppStage,
  } = useInterviewStore();

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {

      const file = acceptedFiles[0];

      if (!file) return;

      try {

        setUploading(true);

        /*
         * STEP 1
         * Upload Resume
         */

        setUploadStage(
          UPLOAD_STAGES.UPLOADING
        );

        setAppStage("processing");

        const uploadResult =
          await uploadResume(file);

        /*
         * STEP 2
         * Resume Analysis
         */

        setUploadStage(
          UPLOAD_STAGES.ANALYZING
        );

        const analysis =
          await analyzeResume(
            uploadResult.text
          );

        setAnalysis(analysis);

        /*
         * STEP 3
         * Blueprint Generation
         */

        setUploadStage(
          UPLOAD_STAGES.QUESTIONS
        );

        const blueprint =
          await generateBlueprint(
            analysis
          );

        setBlueprint(blueprint);
        setAppStage("completed");

      } catch (error) {

        console.error(error);

        setUploadStage(
          UPLOAD_STAGES.FAILED
        );

      } finally {

        setUploading(false);

        setTimeout(() => {
          setUploadStage("");
        }, 1000);
      }
    },
    [
      setAnalysis,
      setBlueprint,
      setUploading,
      setUploadStage,
    ]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
        ".docx",
      ],
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-2xl"
    >

      {isUploading ? (

        <div className="rounded-3xl border border-white/10 bg-white/5 p-16 text-center backdrop-blur-xl">

          <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-white/10 border-t-white" />

          <h2 className="mt-8 text-2xl font-semibold">
            {uploadStage}
          </h2>

          <p className="mt-3 text-white/60">
            The AI interviewer is preparing a personalized interview experience for you.
          </p>

        </div>

      ) : (

        <div
          {...getRootProps()}
          className={`animate-pulse rounded-3xl border border-white/10 bg-white/5 p-16 text-center backdrop-blur-xl transition hover:bg-white/10 ${
            isDragActive
              ? "border-white/30"
              : ""
          }`}
        >

          <input {...getInputProps()} />

          <div className="flex flex-col items-center gap-6">

            <div className="rounded-full bg-white/10 p-5">
              <Upload className="h-10 w-10 text-white/80" />
            </div>

            <div>

              <h2 className="text-2xl font-semibold">
                Upload Your Resume
              </h2>

              <p className="mt-2 text-white/60">
                Drag and drop your PDF or DOCX resume
              </p>

            </div>

          </div>

        </div>

      )}

    </motion.div>
  );
}