"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Action handler for contact form
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="bg-zinc-950 py-16 lg:py-24 border-t border-zinc-900">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Column: Intro */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Let's Connect
              </h2>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed max-w-lg">
                I'm currently looking for new opportunities in software engineering, VR development, and hardware architecture. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex gap-4">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-750 transition-colors"
                aria-label="GitHub Profile"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
                </svg>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-750 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <Card className="border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we work together?"
                  required
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-950/50 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                />
              </div>

              <Button type="submit" className="w-full flex items-center justify-center gap-2">
                Send Message <span>→</span>
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
