"use client";
import FacultyForm from "./FacultyForm";
import RecruiterForm from "./RecruiterForm";
import { useState } from "react";

export default function FormsLanding() {
  const [active, setActive] = useState<"faculty" | "recruiter" | "">("");

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "48px auto",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 18,
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button
          style={{
            flex: 1,
            background:
              active === "faculty"
                ? "var(--md-sys-color-primary)"
                : "var(--md-sys-color-secondary)",
            color:
              active === "faculty"
                ? "var(--md-sys-color-on-primary)"
                : "var(--md-sys-color-on-secondary)",
            border: 0,
            borderRadius: 20,
            fontWeight: 600,
            padding: "12px 0",
            fontSize: "1.085rem",
            cursor: "pointer",
            transition: "background 0.2s,color 0.2s",
          }}
          onClick={() => setActive("faculty")}
        >
          Faculty
        </button>
        <button
          style={{
            flex: 1,
            background:
              active === "recruiter"
                ? "var(--md-sys-color-primary)"
                : "var(--md-sys-color-secondary)",
            color:
              active === "recruiter"
                ? "var(--md-sys-color-on-primary)"
                : "var(--md-sys-color-on-secondary)",
            border: 0,
            borderRadius: 20,
            fontWeight: 600,
            padding: "12px 0",
            fontSize: "1.085rem",
            cursor: "pointer",
            transition: "background 0.2s,color 0.2s",
          }}
          onClick={() => setActive("recruiter")}
        >
          Recruiter
        </button>
      </div>
      {active === "faculty" && <FacultyForm />}
      {active === "recruiter" && <RecruiterForm />}
      {!active && (
        <div
          style={{
            marginTop: 42,
            color: "var(--md-sys-color-on-background)",
            opacity: 0.7,
            fontSize: "1.1rem",
          }}
        >
          Select a form to begin onboarding
        </div>
      )}
    </div>
  );
}
