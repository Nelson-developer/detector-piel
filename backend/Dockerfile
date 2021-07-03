FROM python:3.8.5

WORKDIR /code

COPY . .

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python3", "app.py"]