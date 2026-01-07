"use client";

import { Button } from "@/components/ui/Button";
import { GlassContainer } from "@/components/ui/GlassContainer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

export default function FacultyProfilePage() {
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
                            AV
                        </div>
                        <div>
                            <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', lineHeight: '1.2' }}>Dr. Aditi Verma</h1>
                            <p style={{ fontSize: '1.1rem', color: 'var(--md-sys-color-primary)', fontWeight: 500 }}>Senior Professor</p>
                            <p style={{ fontSize: '0.95rem', color: 'var(--md-sys-color-secondary)' }}>Department of Computer Engineering</p>
                        </div>
                    </div>
                    <Button variant="filled">Edit Profile</Button>
                </header>
            </ScrollReveal>

            {/* Grid Layout */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '1.5rem',
                alignItems: 'start'
            }}>

                {/* Left Column: Education & Personal Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Education Card */}
                    <ScrollReveal width="100%" delay={0.1}>
                        <GlassContainer style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.5rem' }}>🎓</span> Education
                            </h3>
                            <div style={{ display: 'grid', gap: '1.5rem' }}>
                                <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--md-sys-color-outline-variant)' }}>
                                    <div style={{ position: 'absolute', left: '-5px', top: '0', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--md-sys-color-primary)' }}></div>
                                    <h4 style={{ fontWeight: 'bold', fontSize: '1rem' }}>PhD in Computer Science</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--md-sys-color-secondary)' }}>IIT Bombay • 2015</p>
                                    <p style={{ fontSize: '0.85rem', marginTop: '0.25rem', opacity: 0.8 }}>Thesis: Advanced Machine Learning</p>
                                </div>
                                <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--md-sys-color-outline-variant)' }}>
                                    <div style={{ position: 'absolute', left: '-5px', top: '0', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--md-sys-color-primary)' }}></div>
                                    <h4 style={{ fontWeight: 'bold', fontSize: '1rem' }}>M.Tech in CSE</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--md-sys-color-secondary)' }}>COEP, Pune • 2010</p>
                                </div>
                                <div style={{ position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--md-sys-color-outline-variant)' }}>
                                    <div style={{ position: 'absolute', left: '-5px', top: '0', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--md-sys-color-primary)' }}></div>
                                    <h4 style={{ fontWeight: 'bold', fontSize: '1rem' }}>B.E. in Computer Engineering</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--md-sys-color-secondary)' }}>PICT, Pune • 2008</p>
                                </div>
                            </div>
                        </GlassContainer>
                    </ScrollReveal>

                    {/* Personal Details Card */}
                    <ScrollReveal width="100%" delay={0.15}>
                        <GlassContainer style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.5rem' }}>👤</span> Personal Details
                            </h3>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--md-sys-color-secondary)', marginBottom: '0.2rem' }}>Email</label>
                                <div style={{ fontWeight: 500 }}>aditi.verma@pict.edu</div>
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--md-sys-color-secondary)', marginBottom: '0.2rem' }}>Phone</label>
                                <div style={{ fontWeight: 500 }}>+91 98220 12345</div>
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--md-sys-color-secondary)', marginBottom: '0.2rem' }}>Office Location</label>
                                <div style={{ fontWeight: 500 }}>Room 304, F-Building, PICT</div>
                            </div>

                            <div style={{ borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '1.5rem' }}>
                                <h4 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Bio</h4>
                                <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--md-sys-color-on-surface-variant)' }}>
                                    Dr. Aditi Verma is a dedicated educator and researcher with 15+ years of experience. Passionate about AI and student mentoring.
                                </p>
                            </div>
                        </GlassContainer>
                    </ScrollReveal>

                </div>

                {/* Right Column: Attendance, Stats, Research */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* Attendance & Schedule */}
                    <ScrollReveal width="100%" delay={0.2}>
                        <GlassContainer style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.5rem' }}>📅</span> Attendance & Schedule
                            </h3>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem', gap: '3rem' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{
                                        width: '80px', height: '80px', borderRadius: '50%', border: '6px solid var(--md-sys-color-primary)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold'
                                    }}>
                                        92%
                                    </div>
                                    <div style={{ fontSize: '0.8rem', marginTop: '0.5rem', fontWeight: 600 }}>Attendance</div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ fontWeight: 'bold' }}>Current Status:</span> ✅ Active</p>
                                    <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><span style={{ fontWeight: 'bold' }}>Last Leave:</span> 12th Aug</p>
                                    <p style={{ fontSize: '0.9rem' }}><span style={{ fontWeight: 'bold' }}>Next Leave:</span> None</p>
                                </div>
                            </div>

                            <h4 style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Today's Schedule</h4>
                            <div style={{ display: 'grid', gap: '0.75rem' }}>
                                {[
                                    { time: '10:00 AM', event: 'Lecture: Data Structures (TE-A)', type: 'Lecture' },
                                    { time: '11:00 AM', event: 'Lab: ML Lab (BE-B)', type: 'Lab' },
                                    { time: '02:00 PM', event: 'Meeting: Dept Staff', type: 'Meeting' }
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '0.75rem', background: 'rgba(0,0,0,0.03)', borderRadius: '12px' }}>
                                        <div style={{ fontWeight: 'bold', color: 'var(--md-sys-color-primary)', fontSize: '0.9rem', minWidth: '70px' }}>{item.time}</div>
                                        <div style={{ flex: 1 }}>
                                            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.event}</div>
                                            <span style={{
                                                fontSize: '0.75rem', padding: '2px 6px', borderRadius: '4px', verticalAlign: 'middle',
                                                background: item.type === 'Lecture' ? 'rgba(0,0,255,0.1)' : item.type === 'Lab' ? 'rgba(0,128,0,0.1)' : 'rgba(128,0,128,0.1)',
                                                color: item.type === 'Lecture' ? 'blue' : item.type === 'Lab' ? 'green' : 'purple'
                                            }}>{item.type}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassContainer>
                    </ScrollReveal>

                    {/* Key Stats Row (Now only 2 items) */}
                    <ScrollReveal width="100%" delay={0.25}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <GlassContainer style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--md-sys-color-primary)' }}>15+</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-secondary)' }}>Years Exp.</div>
                            </GlassContainer>
                            <GlassContainer style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--md-sys-color-tertiary)' }}>45</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-secondary)' }}>Publications</div>
                            </GlassContainer>
                        </div>
                    </ScrollReveal>

                    {/* Research Interests */}
                    <ScrollReveal width="100%" delay={0.3}>
                        <GlassContainer style={{ padding: '2rem' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ fontSize: '1.5rem' }}>🔬</span> Research Interests
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Neural Networks', 'Computer Vision', 'Educational Tech'].map((tag, i) => (
                                    <span key={i} style={{
                                        padding: '6px 14px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 500,
                                        background: 'var(--md-sys-color-secondary-container)', color: 'var(--md-sys-color-on-secondary-container)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </GlassContainer>
                    </ScrollReveal>
                </div>

            </div>
        </main>
    );
}
