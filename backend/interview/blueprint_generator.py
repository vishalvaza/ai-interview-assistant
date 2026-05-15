import json
import re

from llm.ollama_client import client

from prompts.interview_blueprint_prompt import (
    INTERVIEW_BLUEPRINT_PROMPT,
)

MODEL_NAME = "llama3"

async def generate_interview_blueprint(
    analysis: dict
):

    prompt_input = f"""
    Candidate Role: {analysis.get('role')}

    Skills:
    {analysis.get('skills')}

    Technologies:
    {analysis.get('technologies')}

    Domains:
    {analysis.get('domains')}

    Seniority:
    {analysis.get('seniority')}

    Difficulty:
    {analysis.get('difficulty_level')}
    """

    response = client.chat(
        model=MODEL_NAME,
        messages=[
            {
                "role": "system",
                "content": INTERVIEW_BLUEPRINT_PROMPT,
            },
            {
                "role": "user",
                "content": prompt_input,
            },
        ],
        options={
            "temperature": 0.3,
        }
    )

    content = response["message"]["content"]

    print("========== BLUEPRINT RAW ==========")
    print(content)

    cleaned = re.sub(
        r"```json|```",
        "",
        content
    ).strip()

    try:

        return json.loads(cleaned)

    except Exception as e:

        print("========== BLUEPRINT ERROR ==========")
        print(cleaned)
        print(e)

        return {
            "candidate_role": analysis.get("role"),
            "difficulty_level": analysis.get(
                "difficulty_level"
            ),
            "interview_duration": 20,
            "total_questions": 10,
            "question_plan": []
        }