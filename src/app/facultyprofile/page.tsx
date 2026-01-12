"use client";

import { Button } from "@/components/ui/Button";
import { GlassContainer } from "@/components/ui/GlassContainer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useAuth } from "@/context/AuthContext";
import { Faculty } from "@/context/AuthContext";
import { useState, useEffect } from "react";

export default function FacultyProfilePage() {
    // Mock user for display if not logged in or just for demo, satisfying the strict Faculty interface
    const mockFaculty: Faculty = {
        id: "fac123",
        username: "aditiverma",
        email: "aditi.verma@pict.edu",
        full_name: "Dr. Aditi Verma",
        role: "faculty",
        is_verified: true,
        is_active: true,
        created_at: "2023-01-01",
        institution: "Pune Institute of Computer Technology",
        department: "Computer Engineering",
        designation: "Senior Professor",
        profileLink: "https://pict.edu/faculty/aditi-verma",
        experience: 15
    };

    const { user } = useAuth();
    // In a real app we'd fetch the profile. For now using mock.
    const faculty = mockFaculty; 

    return (
        <main style={{ padding: '2rem 24px', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh', paddingBottom: '4rem' }}>

            {/* Header Section */}
            <ScrollReveal width="100%">
                <header style={{
                    marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'
                }}>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <div style={{
                            width: '100px', height: '100px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--md-sys-color-primary), var(--md-sys-color-tertiary))',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'white', fontSize: '2.5rem', fontWeight: 'bold', boxShadow: '0 10px 30px -10px var(--md-sys-color-primary)'
                        }}>
                            {faculty.full_name.charAt(0)}
                        </div>
                        <div>
                            <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', lineHeight: '1.2' }}>{faculty.full_name}</h1>
                            <p style={{ fontSize: '1.1rem', color: 'var(--md-sys-color-primary)', fontWeight: 500 }}>{faculty.designation}</p>
                            <p style={{ fontSize: '0.95rem', color: 'var(--md-sys-color-secondary)' }}>{faculty.department}</p>
                            <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-secondary)' }}>{faculty.institution}</p>
                        </div>
                    </div>
                    <Button variant="filled">Edit Profile</Button>
                </header>
            </ScrollReveal>

            {/* Details Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '1.5rem',
                alignItems: 'start'
            }}>
                <ScrollReveal width="100%" delay={0.1}>
                    <GlassContainer style={{ padding: '2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '1.5rem' }}>👤</span> Contact & Details
                        </h3>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--md-sys-color-secondary)', marginBottom: '0.2rem' }}>Email</label>
                            <div style={{ fontWeight: 500 }}>{faculty.email}</div>
                        </div>
                        
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--md-sys-color-secondary)', marginBottom: '0.2rem' }}>Experience</label>
                            <div style={{ fontWeight: 500 }}>{faculty.experience} Years</div>
                        </div>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--md-sys-color-secondary)', marginBottom: '0.2rem' }}>Profile Link</label>
                            <a href={faculty.profileLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--md-sys-color-primary)', textDecoration: 'underline' }}>
                                {faculty.profileLink}
                            </a>
                        </div>
                    </GlassContainer>
                </ScrollReveal>

            </div>
        </main>
    );
}
