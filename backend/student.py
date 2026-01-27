from fastapi import APIRouter, HTTPException, status, Depends
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from CRUD import create_student_profile, update_user_verification, StudentProfile, User
from login import get_current_active_user, UserPublic

router = APIRouter()

@router.post("/student/profile", response_model=StudentProfile)
async def create_profile(profile: StudentProfile, current_user: User = Depends(get_current_active_user)):
    # Ensure the profile is linked to the current user
    # We might want to enforce student_id matches current_user.id or username
    # Assuming student_id in profile refers to the user's ID
    
    # Check if user is actually a student
    if current_user.role != "student":
         raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Only students can create a student profile"
        )

    # Overwrite user_id with current user's ID to ensure security
    profile.user_id = str(current_user.id)
    
    # Create the profile
    new_profile = create_student_profile(profile)
    
    # Update user verification status
    update_user_verification(current_user.username, True)
    
    return new_profile
