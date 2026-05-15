"use client";

import { useState } from "react";

import { useInterviewStore } from "@/stores/interview-store";

export function InterviewScreen() {

  const {
    blueprint,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    addMessage,
    messages,
  } = useInterviewStore();

  const [answer, setAnswer] =
    useState("");

  const currentQuestion =
    blueprint.question_plan[
      currentQuestionIndex
    ];

  const handleSubmit = async () => {

    if (!currentQuestion) {

        return (

            <div className="mx-auto max-w-4xl">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">

                <h2 className="text-4xl font-bold">
                Interview Completed
                </h2>

                <p className="mt-4 text-white/60">
                Your AI interview session has ended successfully.
                </p>

            </div>

            </div>
        );
    }

    if (!answer.trim()) return;

    addMessage({
      role: "assistant",
      content: currentQuestion.question,
    });

    addMessage({
      role: "user",
      content: answer,
    });

    setAnswer("");

    setTimeout(() => {

      setCurrentQuestionIndex(
        currentQuestionIndex + 1
      );

    }, 1000);
  };

  return (
    <div className="mx-auto max-w-4xl">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <div className="mb-6 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-bold">
              AI Interview Session
            </h2>

            <p className="mt-2 text-white/60">
              Answer naturally and clearly.
            </p>

          </div>

          <div className="rounded-full bg-white/10 px-4 py-2 text-sm">

            Question {
              currentQuestionIndex + 1
            }
            /10

          </div>

        </div>

        <div className="rounded-2xl border border-white/10 bg-black/20 p-6">

          <p className="text-sm text-white/50">
            {currentQuestion.topic}
          </p>

          <h3 className="mt-3 text-2xl font-semibold leading-relaxed">

            {currentQuestion.question}

          </h3>

        </div>

        <div className="mt-8">

          <textarea
            value={answer}
            onChange={(e) =>
              setAnswer(e.target.value)
            }
            placeholder="Type your answer..."
            className="h-40 w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none"
          />

          <button
            onClick={handleSubmit}
            className="mt-4 rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
          >

            Submit Answer

          </button>

        </div>

      </div>

    </div>
  );
}