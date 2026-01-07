"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/Button";
import { FormInput } from "@/components/ui/FormInput";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/app/recruiter_dashboard/dashboard.module.css"; // Reuse dashboard styles for consistency

export interface JobData {
    position: string;
    company: string;
    tenure: string;
    location: string;
    salary: string;
    description: string;
}

interface JobFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: JobData) => void;
    initialData?: JobData;
    onDelete?: () => void;
}

export const JobFormModal: React.FC<JobFormModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    initialData,
    onDelete
}) => {
    const isEditMode = !!initialData;

    const [formData, setFormData] = useState<JobData>({
        position: '',
        company: 'TechFlow Industries',
        tenure: '',
        location: '',
        salary: '',
        description: ''
    });

    // Reset or populate form when opening/changing data
    useEffect(() => {
        if (isOpen) {
            if (initialData) {
                setFormData(initialData);
            } else {
                // Reset for new job
                setFormData({
                    position: '',
                    company: 'TechFlow Industries',
                    tenure: '',
                    location: '',
                    salary: '',
                    description: ''
                });
            }
        }
    }, [isOpen, initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
                        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
                    }}
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
                        style={{
                            width: '90%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto',
                            background: 'var(--md-sys-color-surface)', borderRadius: '24px',
                            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', position: 'relative'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className={styles.modalHeader}>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>
                                {isEditMode ? 'Edit Job' : 'Post a New Job'}
                            </h2>
                            <Button
                                variant="glass" onClick={onClose}
                                className={styles.closeButton}
                            >✕</Button>
                        </div>

                        <form className={styles.formGrid} onSubmit={handleSubmit}>
                            <FormInput
                                label="Job Position" name="position" value={formData.position} onChange={handleChange} required placeholder="e.g. Senior Frontend Engineer"
                            />
                            <FormInput
                                label="Company Name" name="company" value={formData.company} onChange={handleChange} required placeholder="e.g. TechFlow Industries"
                            />

                            <FormInput
                                label="Job Tenure" name="tenure" value={formData.tenure} onChange={handleChange} placeholder="e.g. Full-time, Contract" required
                            />

                            <FormInput
                                label="Location" name="location" value={formData.location} onChange={handleChange} placeholder="e.g. Remote, New York, NY" required
                            />

                            <div className={styles.fullWidth}>
                                <FormInput
                                    label="Salary Range" name="salary" value={formData.salary} onChange={handleChange} placeholder="e.g. $120k - $150k"
                                />
                            </div>

                            <div className={styles.fullWidth} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--md-sys-color-on-surface)' }}>Job Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter detailed job description here..."
                                    style={{
                                        padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--md-sys-color-outline)',
                                        background: 'var(--md-sys-color-surface)', color: 'var(--md-sys-color-on-surface)',
                                        minHeight: '150px', resize: 'vertical', fontFamily: 'inherit'
                                    }}
                                />
                            </div>

                            <div className={styles.fullWidth} style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>

                                {isEditMode && onDelete && (
                                    <div style={{ marginRight: 'auto' }}>
                                        <Button type="button" variant="outlined"
                                            style={{ borderColor: 'var(--md-sys-color-error)', color: 'var(--md-sys-color-error)' }}
                                            onClick={() => {
                                                if (confirm("Are you sure you want to delete this job? This action cannot be undone.")) {
                                                    onDelete();
                                                    onClose();
                                                }
                                            }}
                                        >
                                            Delete Job
                                        </Button>
                                    </div>
                                )}

                                <Button type="button" variant="outlined" onClick={onClose}>Cancel</Button>
                                <Button type="submit" variant="filled">
                                    {isEditMode ? 'Save Changes' : 'Post Job'}
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
