"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FormInput } from "@/components/ui/FormInput";

export default function FacultyForm() {
  const [form, setForm] = useState({
    institution: "",
    department: "",
    designation: "",
    email: "",
    profileLink: "",
    experience: "",
  });
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    for (const [k, v] of Object.entries(form)) {
      if (!v) {
        setError("Please fill all required fields.");
        return;
      }
    }
    setError("");
    // TODO: API call or further action here
    alert("Faculty form submitted!\n" + JSON.stringify(form, null, 2));
  }

  return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <FormInput
            label="Institution Name"
            name="institution"
            required
            value={form.institution}
            onChange={handleChange}
          />
          <FormInput
            label="Department"
            name="department"
            required
            value={form.department}
            onChange={handleChange}
          />
          <FormInput
            label="Designation (Professor, Assistant Prof, Lecturer)"
            name="designation"
            required
            value={form.designation}
            onChange={handleChange}
          />
          <FormInput
            type="email"
            label="Official Email ID"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
          />
          <FormInput
            label="Faculty Profile Page Link"
            name="profileLink"
            required
            value={form.profileLink}
            onChange={handleChange}
          />
          <FormInput
            label="Years of Experience"
            name="experience"
            type="number"
            min="0"
            required
            value={form.experience}
            onChange={handleChange}
          />
          {error && (
            <div
              style={{ color: "var(--md-sys-color-error)", marginBottom: 10 }}
            >
              {error}
            </div>
          )}
          <Button
            type="submit"
            variant="filled"
            style={{ width: "100%", marginTop: 8 }}
          >
            Submit
          </Button>
        </form>
      
  );
}
