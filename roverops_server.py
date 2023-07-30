from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path

app = FastAPI()

# Mount static files
app.mount("/static", StaticFiles(directory="roverops/static"), name="static")

# Endpoint for the main page
@app.get("/")
def read_root():
    return FileResponse(Path("roverops/templates/index.html"))
