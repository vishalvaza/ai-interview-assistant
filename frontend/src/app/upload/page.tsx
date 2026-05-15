"use client";

import { Navbar } from "@/components/layout/navbar";

import { UploadCard } from "@/components/upload/upload-card";

import { ResumeAnalysis } from "@/components/upload/resume-analysis";

import { InterviewBlueprint } from "@/components/interview/interview-blueprint";

import { useInterviewStore } from "@/stores/interview-store";

export default function UploadPage() {

  const {
    analysis,
    blueprint,
    appStage,
  } = useInterviewStore();

  return (
    <main className="min-h-screen">

      <Navbar />

      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="mb-16 text-center">

            <h1 className="text-5xl font-bold tracking-tight">
              Upload Resume
            </h1>

            <p className="mt-4 text-lg text-white/60">
              Our AI will analyze your experience and prepare a personalized interview.
            </p>

          </div>

          {(appStage === "upload" ||
            appStage === "processing") && (
            <UploadCard />
          )}

          {appStage === "completed" && (
            <>

              <ResumeAnalysis
                analysis={analysis}
              />

              {blueprint && (

                <InterviewBlueprint
                  blueprint={blueprint}
                />

              )}

            </>
          )}

        </div>

      </section>

    </main>
  );
}