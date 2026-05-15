"use client";

interface Props {
  analysis: any;
}

export function ResumeAnalysis({ analysis }: Props) {

  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <h2 className="text-2xl font-semibold">
        Resume Intelligence
      </h2>

      <div className="mt-6 space-y-4">

        <div>
          <p className="text-sm text-white/50">
            Role
          </p>

          <p className="text-lg font-medium">
            {analysis.role}
          </p>
        </div>

        <div>
          <p className="text-sm text-white/50">
            Experience
          </p>

          <p className="text-lg font-medium">
            {analysis.years_of_experience} years
          </p>
        </div>

        <div>
          <p className="text-sm text-white/50">
            Skills
          </p>

          <div className="mt-2 flex flex-wrap gap-2">

            {analysis.skills?.map((skill: string) => (
              <span
                key={skill}
                className="rounded-full bg-white/10 px-3 py-1 text-sm"
              >
                {skill}
              </span>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}