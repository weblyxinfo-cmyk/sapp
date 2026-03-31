"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Zadejte jméno"),
  email: z.string().email("Zadejte platný email"),
  phone: z.string().optional(),
  topic: z.string().min(1, "Vyberte téma"),
  message: z.string().min(10, "Zpráva musí mít alespoň 10 znaků"),
});

type FormData = z.infer<typeof schema>;

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: 6,
  display: "block",
};

const inputStyle: React.CSSProperties = {
  border: "1px solid var(--border)",
  borderRadius: 10,
  padding: "14px 16px",
  fontSize: 15,
  width: "100%",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.2s",
};

const errorStyle: React.CSSProperties = {
  fontSize: 12,
  color: "#e53e3e",
  marginTop: 4,
};

const topics = ["Spotřebiče", "Kuchyně", "Servis", "Jiné"];

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      topic: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Něco se pokazilo");
      }

      setSubmitStatus("success");
      reset();
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Něco se pokazilo");
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "var(--navy)";
  };

  const handleBlurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = "var(--border)";
  };

  const nameField = register("name");
  const emailField = register("email");
  const phoneField = register("phone");
  const topicField = register("topic");
  const messageField = register("message");

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {/* Jméno a příjmení */}
        <div>
          <label style={labelStyle} htmlFor="name">
            Jméno a příjmení
          </label>
          <input
            id="name"
            type="text"
            style={inputStyle}
            {...nameField}
            onFocus={handleFocus}
            onBlur={(e) => {
              nameField.onBlur(e);
              handleBlurStyle(e);
            }}
          />
          {errors.name && <p style={errorStyle}>{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label style={labelStyle} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            style={inputStyle}
            {...emailField}
            onFocus={handleFocus}
            onBlur={(e) => {
              emailField.onBlur(e);
              handleBlurStyle(e);
            }}
          />
          {errors.email && <p style={errorStyle}>{errors.email.message}</p>}
        </div>

        {/* Telefon */}
        <div>
          <label style={labelStyle} htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            style={inputStyle}
            {...phoneField}
            onFocus={handleFocus}
            onBlur={(e) => {
              phoneField.onBlur(e);
              handleBlurStyle(e);
            }}
          />
          {errors.phone && <p style={errorStyle}>{errors.phone.message}</p>}
        </div>

        {/* Téma */}
        <div>
          <label style={labelStyle} htmlFor="topic">
            Téma
          </label>
          <select
            id="topic"
            style={{
              ...inputStyle,
              appearance: "none" as const,
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7A99' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 16px center",
              paddingRight: 40,
            }}
            {...topicField}
            onFocus={handleFocus}
            onBlur={(e) => {
              topicField.onBlur(e);
              handleBlurStyle(e);
            }}
          >
            <option value="">Vyberte téma</option>
            {topics.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.topic && <p style={errorStyle}>{errors.topic.message}</p>}
        </div>

        {/* Zpráva */}
        <div>
          <label style={labelStyle} htmlFor="message">
            Vaše zpráva
          </label>
          <textarea
            id="message"
            style={{
              ...inputStyle,
              minHeight: 120,
              resize: "vertical" as const,
            }}
            {...messageField}
            onFocus={handleFocus}
            onBlur={(e) => {
              messageField.onBlur(e);
              handleBlurStyle(e);
            }}
          />
          {errors.message && <p style={errorStyle}>{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-yellow"
          style={{
            width: "100%",
            justifyContent: "center",
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
        >
          {isSubmitting ? "Odesílání..." : "Odeslat zprávu \u2192"}
        </button>

        {/* Status messages */}
        {submitStatus === "success" && (
          <p style={{ fontSize: 14, fontWeight: 600, color: "#38a169", textAlign: "center" }}>
            Zpráva byla úspěšně odeslána!
          </p>
        )}
        {submitStatus === "error" && (
          <p style={{ fontSize: 14, fontWeight: 600, color: "#e53e3e", textAlign: "center" }}>
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
