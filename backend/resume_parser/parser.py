import fitz
from docx import Document

def parse_pdf(file_path: str) -> str:
    text = ""

    pdf = fitz.open(file_path)

    for page in pdf:
        text += page.get_text()

    return text

def parse_docx(file_path: str) -> str:
    doc = Document(file_path)

    return "\n".join(
        [paragraph.text for paragraph in doc.paragraphs]
    )