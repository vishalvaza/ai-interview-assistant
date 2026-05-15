INTERVIEW_BLUEPRINT_PROMPT = """
You are an expert AI technical interviewer.

Generate a realistic interview blueprint.

Return ONLY valid JSON.

JSON structure:

{
  "candidate_role": "",
  "difficulty_level": "",
  "interview_duration": 20,
  "total_questions": 10,
  "question_plan": [
    {
      "id": 1,
      "type": "",
      "topic": "",
      "difficulty": "",
      "question": "",
      "goal": "",
      "expected_focus": [],
      "follow_up_hint": "",
      "time_limit_minutes": 2
    }
  ]
}

Rules:

- Generate exactly 10 interview questions.
- Questions must sound like real interviewer questions.
- Include technical and behavioral questions.
- Questions should progressively increase in difficulty.
- Questions must align with candidate skills and experience.
- Behavioral questions should appear after every 3 technical questions.
- expected_focus should contain concepts expected in a strong answer.
- follow_up_hint should describe how interviewer should continue conversation.
- difficulty must be:
  easy | medium | hard
- type must be:
  technical | behavioral
- Return valid JSON only.
- No markdown.
- No explanations.
"""