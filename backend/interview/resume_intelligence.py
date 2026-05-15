import json
import re

from llm.ollama_client import client

from prompts.resume_analysis_prompt import (
    RESUME_ANALYSIS_PROMPT,
)

MODEL_NAME = "llama3"

async def analyze_resume(resume_text: str):

    response = client.chat(
        model=MODEL_NAME,
        messages=[
            {
                "role": "system",
                "content": RESUME_ANALYSIS_PROMPT,
            },
            {
                "role": "user",
                "content": resume_text[:12000],
            },
        ],
        options={
            "temperature": 0.2,
        }
    )

    content = response["message"]["content"]

    print("========== RAW RESPONSE ==========")
    print(content)

    cleaned = re.sub(
        r"```json|```",
        "",
        content
    ).strip()

    try:

        analysis = json.loads(cleaned)

        years = analysis.get(
            "years_of_experience",
            0
        )

        if years <= 2:
            seniority = "junior"

        elif years <= 5:
            seniority = "mid-level"

        else:
            seniority = "senior"

        analysis["seniority"] = seniority
        analysis["difficulty_level"] = seniority

        return analysis

    except Exception as e:

        print("========== JSON ERROR ==========")
        print(cleaned)
        print(e)

        return {
            "role": "Unknown",
            "years_of_experience": 0,
            "skills": [],
            "technologies": [],
            "domains": [],
            "summary": "AI analysis failed.",
            "strengths": [],
            "focus_areas": [],
            "seniority": "mid-level",
            "difficulty_level": "mid-level"
        }