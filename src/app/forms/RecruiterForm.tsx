"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FormInput } from "@/components/ui/FormInput";

export default function RecruiterForm() {
  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    jobTitle: "",
    workEmail: "",
    companyWeb: "",
    companySize: "",
    domains: "",
    linkedin: "",
  });
  const [error, setError] = useState("");

  function isAllowedWorkEmail(email: string) {
    if (!email) return false;
    const blocked = [/gmail\.com$/i, /yahoo\.com$/i];
    return !blocked.some((re) => re.test(email));
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (
      !(
        form.fullName &&
        form.companyName &&
        form.jobTitle &&
        form.workEmail &&
        form.companyWeb
      )
    ) {
      setError("Please fill all required fields.");
      return;
    }
    if (!isAllowedWorkEmail(form.workEmail)) {
      setError("Please use your work email (Gmail/Yahoo not allowed)");
      return;
    }
    setError("");
    // TODO: API action here
    alert("Recruiter form submitted!\n" + JSON.stringify(form, null, 2));
  }
  return (
    <div style={{ maxWidth: 420, margin: "48px auto" }}>
      <Card variant="filled">
        <h2 style={{ fontWeight: 600, fontSize: "1.7rem", marginBottom: 12 }}>
          Recruiter Onboarding
        </h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Full name"
            name="fullName"
            required
            value={form.fullName}
            onChange={handleChange}
          />
          <FormInput
            label="Company name"
            name="companyName"
            required
            value={form.companyName}
            onChange={handleChange}
          />
          <FormInput
            label="Job title (HR, Founder, Recruiter)"
            name="jobTitle"
            required
            value={form.jobTitle}
            onChange={handleChange}
          />
          <FormInput
            type="email"
            label="Work email"
            name="workEmail"
            required
            value={form.workEmail}
            onChange={handleChange}
            error={
              form.workEmail && !isAllowedWorkEmail(form.workEmail)
                ? "Please use your work email."
                : undefined
            }
          />
          <FormInput
            label="Company website or LinkedIn"
            name="companyWeb"
            required
            value={form.companyWeb}
            onChange={handleChange}
          />
          <FormInput
            label="Company size (optional)"
            name="companySize"
            value={form.companySize}
            onChange={handleChange}
          />
          <FormInput
            label="Hiring domains (optional - Tech, Sales, Core, etc.)"
            name="domains"
            value={form.domains}
            onChange={handleChange}
          />
          <FormInput
            label="LinkedIn profile (optional)"
            name="linkedin"
            value={form.linkedin}
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
      </Card>
    </div>
  );
}
