from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path

app = FastAPI()
favicon_ico = "roverops/static/img/favicon.ico"


# Mount static files
app.mount("/static", StaticFiles(directory="roverops/static"), name="static")

# Endpoint for the main page
@app.get("/")
def read_root():
    return FileResponse(Path("roverops/templates/index.html"))

# Endpoint for the favicon
# Should load the favicon.ico file from the icons folder within the static folder
@app.get("/favicon.ico")
def read_favicon():
    return FileResponse(Path(favicon_ico))