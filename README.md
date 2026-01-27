# Student Portal

This is a full-stack application with a **Next.js** frontend and a **FastAPI** backend.

## Prerequisites

- **Node.js** (v18 or higher)
- **Python** (v3.9 or higher)
- **Git**

## Project Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Godstaf/studentPortal.git
    cd studentPortal
    ```

---

## Backend Setup (FastAPI)

The backend handles authentication and database interactions.

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```

2.  **Create and activate a virtual environment (Optional but Recommended):**
    ```bash
    python -m venv venv
    
    # On macOS/Linux:
    source venv/bin/activate
    
    # On Windows:
    venv\Scripts\activate
    ```

3.  **Install Python Dependencies:**
    You need to install the following packages:
    ```bash
    pip install fastapi uvicorn pymongo certifi python-jose[cryptography] passlib[argon2] multipart
    ```

4.  **Run the Backend Server:**
    Start the FastAPI server on port 8000:
    ```bash
    uvicorn app:app --reload
    ```
    The API should now be running at `http://127.0.0.1:8000`.

---

## Frontend Setup (Next.js)

The frontend provides the user interface.

1.  **Open a new terminal** (keep the backend running in the first one).

2.  **Navigate to the project root:**
    ```bash
    # If you are in backend/, go back up
    cd ..
    ```

3.  **Install Node Dependencies:**
    ```bash
    npm install
    ```

4.  **Run the Frontend Development Server:**
    ```bash
    npm run dev
    ```

5.  **Access the Application:**
    Open your browser and visit [http://localhost:3000](http://localhost:3000).

---

## Troubleshooting

- **CORS Error ("Failed to fetch"):** Ensure the backend is running on port 8000 and the frontend on port 3000.  (This has been configured in `backend/app.py`).
- **Database Connection:** The database connection string is currently hardcoded in `backend/database.py`. Ensure you have internet access to connect to MongoDB Atlas.
