from fastapi import FastAPI
from login import router as auth_router
from register import router as register_router

app = FastAPI()

app.include_router(auth_router)
app.include_router(register_router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Student Portal API"}


