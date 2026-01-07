"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GlassContainer } from "@/components/ui/GlassContainer";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Mock Data
interface Student {
  id: string;
  name: string;
  rollNo: string;
  department: string;
  year: string;
  email: string;
  phone: string;
  approvalStatus: 'Pending' | 'Approved' | 'Rejected';
  internshipDomain?: string;
  companyName?: string;
  duration?: string;
  category: 'Internship' | 'Fees' | 'Assignment' | 'Other';
  shortDescription: string;
  detailedDescription: string;
  documents: string[];
  cgpa: number;
  attendance: number;
  personalDetails: {
    dob: string;
    address: string;
    bloodGroup: string;
  };
  totalApprovals: number;
}

const INITIAL_STUDENTS: Student[] = [
  {
    id: '1', name: 'Aarav Patel', rollNo: '31101', department: 'Computer Engineering', year: 'TE',
    category: 'Internship',
    shortDescription: 'Internship completion verification',
    detailedDescription: 'Requesting verification for 6-month web development internship at TechCorp. Certificate attached.',
    documents: ['internship_cert.pdf', 'offer_letter.pdf'],
    internshipDomain: 'Web Development', companyName: 'TechCorp', duration: '6 Months',
    approvalStatus: 'Pending', email: 'aarav.p@example.com', phone: '+91 98765 43210',
    cgpa: 9.2, attendance: 88, personalDetails: { dob: '12/08/2003', address: 'Shivajinagar, Pune', bloodGroup: 'O+' }, totalApprovals: 4
  },
  {
    id: '2', name: 'Ishita Sharma', rollNo: '31102', department: 'Information Technology', year: 'BE',
    category: 'Fees',
    shortDescription: 'Tuition fee installment approval',
    detailedDescription: 'Requesting approval to pay the remaining tuition fees in two installments due to family medical emergency.',
    documents: ['medical_report.jpg', 'income_certificate.pdf'],
    approvalStatus: 'Approved', email: 'ishita.s@example.com', phone: '+91 98765 43211',
    cgpa: 8.9, attendance: 92, personalDetails: { dob: '05/11/2002', address: 'Kothrud, Pune', bloodGroup: 'A+' }, totalApprovals: 7
  },
  {
    id: '3', name: 'Rohan Gupta', rollNo: '31103', department: 'EnTC', year: 'TE',
    category: 'Assignment',
    shortDescription: 'Late submission for CNS Assignment',
    detailedDescription: 'I was participating in the State Level Hackathon during the submission window. Requesting acceptance of late submission.',
    documents: ['hackathon_cert.pdf', 'assignment_3.pdf'],
    internshipDomain: 'Embedded Systems', companyName: 'IoTech', duration: '6 Months',
    approvalStatus: 'Pending', email: 'rohan.g@example.com', phone: '+91 98765 43212',
    cgpa: 7.8, attendance: 75, personalDetails: { dob: '22/03/2003', address: 'Viman Nagar, Pune', bloodGroup: 'B+' }, totalApprovals: 2
  },
  {
    id: '4', name: 'Meera Singh', rollNo: '31104', department: 'Computer Engineering', year: 'SE',
    category: 'Internship',
    shortDescription: 'Internship verification',
    detailedDescription: 'Completed 2 month summer internship.',
    documents: ['cert.pdf'],
    internshipDomain: 'App Development', companyName: 'SoftSol', duration: '2 Months',
    approvalStatus: 'Approved', email: 'meera.s@example.com', phone: '+91 98765 43213',
    cgpa: 8.5, attendance: 82, personalDetails: { dob: '14/01/2003', address: 'Hadapsar, Pune', bloodGroup: 'AB+' }, totalApprovals: 3
  },
  {
    id: '5', name: 'Vikram Malhotra', rollNo: '31105', department: 'Information Technology', year: 'TE',
    category: 'Fees',
    shortDescription: 'Scholarship deduction application',
    detailedDescription: 'Application for EBC scholarship deduction from final fees.',
    documents: ['ebc_form.pdf'],
    approvalStatus: 'Rejected', email: 'vikram.m@example.com', phone: '+91 98765 43214',
    cgpa: 9.5, attendance: 95, personalDetails: { dob: '30/09/2004', address: 'Bibwewadi, Pune', bloodGroup: 'O-' }, totalApprovals: 5
  },
  {
    id: '6', name: 'Ananya Desai', rollNo: '31106', department: 'EnTC', year: 'BE',
    category: 'Internship',
    shortDescription: 'Internship verification',
    detailedDescription: 'VLSI Design internship verification request.',
    documents: ['completion_letter.pdf'],
    internshipDomain: 'VLSI Design', companyName: 'ChipMasters', duration: '6 Months',
    approvalStatus: 'Pending', email: 'ananya.d@example.com', phone: '+91 98765 43215',
    cgpa: 8.1, attendance: 79, personalDetails: { dob: '18/07/2003', address: 'Katraj, Pune', bloodGroup: 'B-' }, totalApprovals: 1
  },
  {
    id: '7', name: 'Kabir Joshi', rollNo: '31107', department: 'Computer Engineering', year: 'SE',
    category: 'Other',
    shortDescription: 'Bonafide certificate request',
    detailedDescription: 'Need bonafide certificate for passport renewal.',
    documents: [],
    internshipDomain: 'AI/ML', companyName: 'BrainyA', duration: '3 Months',
    approvalStatus: 'Approved', email: 'kabir.j@example.com', phone: '+91 98765 43216',
    cgpa: 7.4, attendance: 65, personalDetails: { dob: '02/12/2002', address: 'Camp, Pune', bloodGroup: 'A-' }, totalApprovals: 0
  },
];

export default function FacultyDashboardPage() {
  const [students, setStudents] = useState<Student[]>(INITIAL_STUDENTS);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [approvalFilter, setApprovalFilter] = useState<'Pending' | 'Approved' | 'Rejected'>('Pending');
  const [showAllStudents, setShowAllStudents] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const totalStudents = students.length;
  const pendingApprovals = students.filter(s => s.approvalStatus === 'Pending').length;
  const verifiedInternships = students.filter(s => s.approvalStatus === 'Approved' && s.category === 'Internship').length;

  // Filter Logic for All Students Directory
  const filteredDirectory = students.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.department.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const displayedStudents = showAllStudents ? filteredDirectory : filteredDirectory.slice(0, 6);

  const handleApproval = (id: string, status: 'Approved' | 'Rejected') => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, approvalStatus: status } : s));
  };

  const selectedStudent = students.find(s => s.id === selectedStudentId);

  return (
    <main style={{ padding: '2rem 24px', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh' }}>
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <h1 style={{ fontWeight: 'bold', fontSize: '2.5rem', lineHeight: '1.2' }}>Dr. Aditi Verma</h1>
                <Button variant="outlined" onClick={() => router.push('/facultyprofile')} style={{ padding: '6px 12px', fontSize: '0.85rem' }}>View Profile</Button>
              </div>
              <p style={{ fontSize: '1.1rem', color: 'var(--md-sys-color-primary)', fontWeight: 500 }}>Senior Professor</p>
              <p style={{ fontSize: '0.95rem', color: 'var(--md-sys-color-secondary)' }}>Department of Computer Engineering</p>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Faculty Dashboard</h2>
            <p style={{ fontSize: '1.0rem', color: 'var(--md-sys-color-secondary)' }}>
              Verify student internships and view records.
            </p>
          </div>
        </header>
      </ScrollReveal>

      {/* Stats Section */}
      <ScrollReveal width="100%" delay={0.1}>
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          <Card variant="elevated">
            <h3 style={{ fontSize: '1rem', color: 'var(--md-sys-color-secondary)', marginBottom: '0.5rem' }}>Total Students</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--md-sys-color-on-surface)' }}>{totalStudents}</div>
          </Card>
          <Card variant="elevated">
            <h3 style={{ fontSize: '1rem', color: 'var(--md-sys-color-secondary)', marginBottom: '0.5rem' }}>Pending Approvals</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--md-sys-color-error)' }}>{pendingApprovals}</div>
          </Card>
          <Card variant="elevated">
            <h3 style={{ fontSize: '1rem', color: 'var(--md-sys-color-secondary)', marginBottom: '0.5rem' }}>Students with Completed Internships</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--md-sys-color-primary)' }}>{verifiedInternships}</div>
          </Card>
        </section>
      </ScrollReveal>

      {/* Approval Section with Filters */}
      <ScrollReveal width="100%" delay={0.2}>
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '8px', height: '32px', background: 'var(--md-sys-color-tertiary)', borderRadius: '4px' }}></span>
            Approval Section
          </h2>

          {/* Filter Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div
              onClick={() => setApprovalFilter('Pending')}
              style={{
                cursor: 'pointer', padding: '1.5rem', borderRadius: '16px',
                background: approvalFilter === 'Pending' ? 'var(--md-sys-color-primary-container)' : 'var(--md-sys-color-surface)',
                color: approvalFilter === 'Pending' ? 'var(--md-sys-color-on-primary-container)' : 'var(--md-sys-color-on-surface)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', transition: 'all 0.2s',
                border: approvalFilter === 'Pending' ? '2px solid var(--md-sys-color-primary)' : '2px solid transparent'
              }}
            >
              <div style={{ fontSize: '0.9rem', marginBottom: '0.25rem', opacity: 0.8 }}>Pending Approvals</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{students.filter(s => s.approvalStatus === 'Pending').length}</div>
            </div>

            <div
              onClick={() => setApprovalFilter('Rejected')}
              style={{
                cursor: 'pointer', padding: '1.5rem', borderRadius: '16px',
                background: approvalFilter === 'Rejected' ? 'var(--md-sys-color-error-container)' : 'var(--md-sys-color-surface)',
                color: approvalFilter === 'Rejected' ? 'var(--md-sys-color-on-error-container)' : 'var(--md-sys-color-on-surface)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', transition: 'all 0.2s',
                border: approvalFilter === 'Rejected' ? '2px solid var(--md-sys-color-error)' : '2px solid transparent'
              }}
            >
              <div style={{ fontSize: '0.9rem', marginBottom: '0.25rem', opacity: 0.8 }}>Rejected Approvals</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{students.filter(s => s.approvalStatus === 'Rejected').length}</div>
            </div>

            <div
              onClick={() => setApprovalFilter('Approved')}
              style={{
                cursor: 'pointer', padding: '1.5rem', borderRadius: '16px',
                background: approvalFilter === 'Approved' ? 'var(--md-sys-color-tertiary-container)' : 'var(--md-sys-color-surface)',
                color: approvalFilter === 'Approved' ? 'var(--md-sys-color-on-tertiary-container)' : 'var(--md-sys-color-on-surface)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', transition: 'all 0.2s',
                border: approvalFilter === 'Approved' ? '2px solid var(--md-sys-color-tertiary)' : '2px solid transparent'
              }}
            >
              <div style={{ fontSize: '0.9rem', marginBottom: '0.25rem', opacity: 0.8 }}>Accepted Approvals</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{students.filter(s => s.approvalStatus === 'Approved').length}</div>
            </div>
          </div>

          {/* Filtered List */}
          {students.filter(s => s.approvalStatus === approvalFilter).length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--md-sys-color-secondary)', background: 'rgba(0,0,0,0.02)', borderRadius: '12px' }}>
              No {approvalFilter.toLowerCase()} items found
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {students.filter(s => s.approvalStatus === approvalFilter).map(student => (
                <motion.div layoutId={`approval-${student.id}`} key={student.id}>
                  <GlassContainer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.25rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{student.name}</h3>
                        <span style={{
                          fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px', fontWeight: 600,
                          background: student.category === 'Internship' ? 'rgba(0, 0, 255, 0.1)' :
                            student.category === 'Fees' ? 'rgba(0, 128, 0, 0.1)' : 'rgba(128, 0, 128, 0.1)',
                          color: student.category === 'Internship' ? 'blue' :
                            student.category === 'Fees' ? 'green' : 'purple'
                        }}>
                          {student.category}
                        </span>
                      </div>
                      <p style={{ color: 'var(--md-sys-color-on-surface)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
                        {student.shortDescription}
                      </p>
                      <p style={{ color: 'var(--md-sys-color-secondary)', fontSize: '0.8rem' }}>
                        {student.rollNo} • {student.year}
                      </p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      {/* Direct Actions for Pending */}
                      {student.approvalStatus === 'Pending' && (
                        <>
                          <Button variant="outlined" onClick={(e) => { e.stopPropagation(); handleApproval(student.id, 'Rejected'); }}>Reject</Button>
                          <Button variant="filled" onClick={(e) => { e.stopPropagation(); handleApproval(student.id, 'Approved'); }}>Approve</Button>
                        </>
                      )}
                      {student.approvalStatus === 'Rejected' && (
                        <Button variant="outlined" onClick={(e) => { e.stopPropagation(); handleApproval(student.id, 'Approved'); }}>Re-Approve</Button>
                      )}
                      {student.approvalStatus === 'Approved' && (
                        <div style={{ padding: '0.5rem 1rem', background: 'rgba(0, 200, 0, 0.1)', color: 'green', borderRadius: '8px', fontWeight: 'bold' }}>Verified</div>
                      )}

                      {/* Arrow Button to View Details */}
                      <Button variant="glass" style={{ padding: '0.5rem', borderRadius: '50%', minWidth: 'auto', width: '40px', height: '40px' }} onClick={() => setSelectedStudentId(student.id)}>
                        ➔
                      </Button>

                    </div>
                  </GlassContainer>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </ScrollReveal>




      {/* All Students Directory Section */}
      <ScrollReveal width="100%" delay={0.3}>
        <section style={{ marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.75rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ width: '8px', height: '32px', background: 'var(--md-sys-color-secondary)', borderRadius: '4px' }}></span>
              All Students
            </h2>
            {students.length > 6 && (
              <Button variant="glass" onClick={() => setShowAllStudents(!showAllStudents)}>
                {showAllStudents ? 'Show Less' : 'View More'}
              </Button>
            )}
          </div>

          {/* Search/Filter Bar (Visible when expanded) */}
          <AnimatePresence>
            {showAllStudents && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginBottom: 0 }}
                animate={{ height: 'auto', opacity: 1, marginBottom: '2rem' }}
                exit={{ height: 0, opacity: 0, marginBottom: 0 }}
                style={{ overflow: 'hidden' }}
              >
                <input
                  type="text"
                  placeholder="Search by Name or Department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%', padding: '1rem', borderRadius: '12px', border: 'none',
                    background: 'var(--md-sys-color-surface-variant)', color: 'var(--md-sys-color-on-surface)',
                    fontSize: '1rem', outline: 'none'
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {displayedStudents.map(student => (
              <motion.div
                key={student.id}
                layoutId={`directory-${student.id}`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedStudentId(student.id)}
                style={{ cursor: 'pointer' }}
              >
                <GlassContainer style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', height: '100%' }}>
                  <div style={{
                    width: '50px', height: '50px', borderRadius: '50%', flexShrink: 0,
                    background: 'var(--md-sys-color-primary-container)', color: 'var(--md-sys-color-on-primary-container)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem'
                  }}>
                    {student.name.charAt(0)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.2rem' }}>{student.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-secondary)', marginBottom: '0.1rem' }}>{student.rollNo}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--md-sys-color-secondary)', opacity: 0.8 }}>{student.department} • {student.year}</p>
                  </div>
                </GlassContainer>
              </motion.div>
            ))}
          </div>
          {displayedStudents.length === 0 && (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--md-sys-color-secondary)' }}>
              No students found matching your search.
            </div>
          )}
        </section>
      </ScrollReveal>

      {/* Student Details Modal */}
      <AnimatePresence>
        {selectedStudentId && selectedStudent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudentId(null)}
              style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 40
              }}
            />
            <div style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 50, pointerEvents: 'none'
            }}>
              <motion.div
                layoutId={selectedStudentId}
                style={{
                  width: '90%', maxWidth: '600px', maxHeight: '85vh', overflowY: 'auto',
                  background: 'var(--md-sys-color-surface)', borderRadius: '24px', padding: '2rem',
                  pointerEvents: 'auto', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              >
                <Button
                  variant="glass"
                  onClick={() => setSelectedStudentId(null)}
                  style={{
                    position: 'absolute', top: '1rem', right: '1rem', minWidth: 'auto',
                    padding: '8px', borderRadius: '50%', width: '36px', height: '36px', zIndex: 10
                  }}
                >
                  ✕
                </Button>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '1.5rem' }}>
                  <div style={{
                    width: '80px', height: '80px', borderRadius: '50%', background: 'var(--md-sys-color-primary-container)',
                    color: 'var(--md-sys-color-on-primary-container)', fontSize: '2rem', fontWeight: 'bold',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    {selectedStudent.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <h2 style={{ fontSize: '1.75rem', marginBottom: '0.2rem' }}>{selectedStudent.name}</h2>
                      <span style={{
                        fontSize: '0.8rem', padding: '4px 10px', borderRadius: '20px',
                        background: 'var(--md-sys-color-secondary-container)', color: 'var(--md-sys-color-on-secondary-container)'
                      }}>
                        ⭐ {selectedStudent.totalApprovals} Total Approvals
                      </span>
                    </div>
                    <p style={{ color: 'var(--md-sys-color-secondary)', fontSize: '0.95rem' }}>
                      {selectedStudent.rollNo} • {selectedStudent.department} • {selectedStudent.year}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                  {/* Academic Performance Section */}
                  <div style={{ background: 'rgba(0,0,0,0.02)', padding: '1.5rem', borderRadius: '16px' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--md-sys-color-primary)' }}>Academic Performance</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
                      <div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--md-sys-color-secondary)' }}>CGPA</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{selectedStudent.cgpa}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', color: 'var(--md-sys-color-secondary)', marginBottom: '0.5rem' }}>Attendance</div>
                        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{selectedStudent.attendance}%</div>
                        <div style={{ width: '100%', height: '6px', background: '#ddd', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{
                            width: `${selectedStudent.attendance}%`, height: '100%',
                            background: selectedStudent.attendance >= 75 ? 'green' : 'orange'
                          }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Current Application Details */}
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      Current Application
                      <span style={{
                        fontSize: '0.8rem', padding: '2px 8px', borderRadius: '6px', fontWeight: 600,
                        background: 'rgba(0,0,0,0.05)', color: 'var(--md-sys-color-on-surface)'
                      }}>{selectedStudent.category}</span>
                    </h3>

                    <div style={{ marginBottom: '1rem' }}>
                      <p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>{selectedStudent.shortDescription}</p>
                      <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--md-sys-color-on-surface-variant)' }}>{selectedStudent.detailedDescription}</p>
                    </div>

                    {selectedStudent.category === 'Internship' && (
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem', background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
                        <div><span style={{ color: '#666', fontSize: '0.85rem' }}>Company:</span> <div style={{ fontWeight: 500 }}>{selectedStudent.companyName}</div></div>
                        <div><span style={{ color: '#666', fontSize: '0.85rem' }}>Role:</span> <div style={{ fontWeight: 500 }}>{selectedStudent.internshipDomain}</div></div>
                        <div><span style={{ color: '#666', fontSize: '0.85rem' }}>Duration:</span> <div style={{ fontWeight: 500 }}>{selectedStudent.duration}</div></div>
                      </div>
                    )}

                    <div>
                      <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Attached Documents:</div>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {selectedStudent.documents.map((doc, i) => (
                          <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem',
                            padding: '6px 10px', background: 'white', borderRadius: '6px', border: '1px solid #ddd'
                          }}>
                            📄 {doc}
                          </div>
                        ))}
                        {selectedStudent.documents.length === 0 && <span style={{ color: '#999', fontSize: '0.9rem' }}>No documents</span>}
                      </div>
                    </div>
                  </div>

                  {/* Personal Details */}
                  <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--md-sys-color-secondary)' }}>Personal Details</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.95rem' }}>
                      <div><span style={{ color: '#666' }}>Email:</span> <br />{selectedStudent.email}</div>
                      <div><span style={{ color: '#666' }}>Phone:</span> <br />{selectedStudent.phone}</div>
                      <div><span style={{ color: '#666' }}>DOB:</span> <br />{selectedStudent.personalDetails.dob}</div>
                      <div><span style={{ color: '#666' }}>Blood Group:</span> <br />{selectedStudent.personalDetails.bloodGroup}</div>
                      <div style={{ gridColumn: 'span 2' }}><span style={{ color: '#666' }}>Address:</span> <br />{selectedStudent.personalDetails.address}</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                  {selectedStudent.approvalStatus === 'Pending' && (
                    <>
                      <Button variant="outlined" onClick={() => { handleApproval(selectedStudent.id, 'Rejected'); setSelectedStudentId(null); }}>Reject Request</Button>
                      <Button variant="filled" onClick={() => { handleApproval(selectedStudent.id, 'Approved'); setSelectedStudentId(null); }}>Approve Request</Button>
                    </>
                  )}
                  {selectedStudent.approvalStatus === 'Rejected' && (
                    <Button variant="outlined" onClick={() => { handleApproval(selectedStudent.id, 'Approved'); setSelectedStudentId(null); }}>Re-Evaluate (Approve)</Button>
                  )}
                  {selectedStudent.approvalStatus === 'Approved' && (
                    <div style={{ alignSelf: 'center', color: 'green', fontWeight: 'bold' }}>Application Verified</div>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

    </main >
  );
}
