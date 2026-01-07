"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';
import { motion } from 'framer-motion';
import { useAuth } from '@/context/AuthContext';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const getInitials = (name: string) => {
        return name ? name.charAt(0).toUpperCase() : '?';
    };

    return (
        <>
            <nav className={styles.navbar}>
                <Link href="/" className={styles.logo}>
                    StudentPortal
                </Link>

                <div className={styles.navLinks}>
                    <Link href="/opportunities">
                        <motion.div
                            className={styles.liquidLink}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Opportunities
                        </motion.div>
                    </Link>
                    <Link href="/dashboard">
                        <motion.div
                            className={styles.liquidLink}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Dashboard
                        </motion.div>
                    </Link>
                    <ThemeToggle />
                    {user ? (
                        <div 
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '10px', 
                                cursor: 'pointer' 
                            }}
                            onClick={logout}
                            title="Click to logout"
                        >
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--md-sys-color-primary)',
                                color: 'var(--md-sys-color-on-primary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 'bold',
                                fontSize: '1.2rem'
                            }}>
                                {getInitials(user.full_name)}
                            </div>
                        </div>
                    ) : (
                        <Link href="/login">
                            <Button variant="filled">Login</Button>
                        </Link>
                    )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div className={styles.mobileThemeToggle}>
                        <ThemeToggle />
                    </div>
                    <motion.button
                        className={styles.mobileMenuBtn}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </motion.button>
                </div>
            </nav>

            <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
                <Link href="/opportunities" className={styles.liquidLink} onClick={toggleMenu}>Opportunities</Link>
                <Link href="/dashboard" className={styles.liquidLink} onClick={toggleMenu}>Dashboard</Link>
                <ThemeToggle />
                {user ? (
                    <div onClick={() => { logout(); toggleMenu(); }} style={{ cursor: 'pointer', textAlign: 'center', padding: '10px' }}>
                         Log out ({user.username})
                    </div>
                ) : (
                    <Link href="/login" onClick={toggleMenu}>
                        <Button variant="filled" style={{ width: '100%' }}>Login</Button>
                    </Link>
                )}
            </div>
        </>
    );
};
