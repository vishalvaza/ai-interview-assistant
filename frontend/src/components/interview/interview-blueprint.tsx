"use client";

import Link from "next/link";

interface Props {
  blueprint: any;
}

export function InterviewBlueprint({
  blueprint,
}: Props) {

  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">
            Interview Blueprint
          </h2>

          <p className="mt-2 text-white/60">
            AI-generated interview plan
          </p>

        </div>

        <div className="rounded-full bg-white/10 px-4 py-2 text-sm">

          {blueprint.total_questions} Questions

        </div>

      </div>

      <div className="mt-8 space-y-4">

        {blueprint.question_plan?.map(
          (question: any) => (

            <div
              key={question.id}
              className="rounded-2xl border border-white/10 bg-black/20 p-5"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm capitalize text-white/50">
                    {question.type}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    {question.topic}
                  </h3>

                </div>

                <div className="rounded-full bg-white/10 px-3 py-1 text-sm capitalize">

                  {question.difficulty}

                </div>

              </div>

              <p className="mt-4 text-white/70">
                {question.goal}
              </p>

              {/* {question.question && (

                <div className="mt-4 rounded-xl bg-white/5 p-4">

                  <p className="text-sm text-white/50">
                    Interview Question
                  </p>

                  <p className="mt-2 text-white/90">
                    {question.question}
                  </p>

                </div>

              )} */}

            </div>
          )
        )}

      </div>

      <div className="mt-10 flex justify-center">

        <Link
          href="/interview"
          className="inline-flex rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:opacity-90"
        >

          Start Interview

        </Link>

      </div>

    </div>
  );
}