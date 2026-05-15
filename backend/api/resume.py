import os
import shutil
import uuid

from fastapi import APIRouter, UploadFile, File
from pydantic import BaseModel

from resume_parser.parser import (
    parse_pdf,
    parse_docx,
)

from interview.resume_intelligence import (
    analyze_resume,
)

from interview.blueprint_generator import (
    generate_interview_blueprint,
)

router = APIRouter()

UPLOAD_DIR = "temp_uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)

class ResumeAnalysisRequest(BaseModel):
    text: str

class BlueprintRequest(BaseModel):
    analysis: dict

@router.post("/upload")
async def upload_resume(
    file: UploadFile = File(...)
):

    extension = file.filename.split(".")[-1]

    unique_name = f"{uuid.uuid4()}.{extension}"

    file_path = os.path.join(
        UPLOAD_DIR,
        unique_name
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    extracted_text = ""

    if extension == "pdf":
        extracted_text = parse_pdf(file_path)

    elif extension == "docx":
        extracted_text = parse_docx(file_path)

    os.remove(file_path)

    return {
        "text": extracted_text[:12000]
    }

@router.post("/analyze")
async def analyze_resume_api(
    request: ResumeAnalysisRequest
):

    analysis = await analyze_resume(
        request.text
    )

    return analysis

@router.post("/blueprint")
async def generate_blueprint_api(
    request: BlueprintRequest
):

    blueprint = await generate_interview_blueprint(
        request.analysis
    )

    return blueprint