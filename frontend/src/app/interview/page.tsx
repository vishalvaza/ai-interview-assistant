"use client";

import { Navbar } from "@/components/layout/navbar";

import { InterviewScreen } from "@/components/interview/interview-screen";

export default function InterviewPage() {

  return (
    <main className="min-h-screen">

      <Navbar />

      <section className="px-6 py-24">

        <InterviewScreen />

      </section>

    </main>
  );
}