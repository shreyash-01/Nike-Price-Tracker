FROM python:3.10-slim
WORKDIR /app
RUN pip install fastapi requests_html uvicorn
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
