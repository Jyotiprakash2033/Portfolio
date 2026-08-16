"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { skillCategories, languages, skillGroups } from "@/data/skills";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("backend");

  // Icon mapping helper
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "database":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case "phone":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case "brain":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case "vrar":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        );
      case "hardware":
        return (
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="skills" className="bg-zinc-950 py-16 lg:py-24 border-t border-zinc-900">
      <Container>
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Core Competencies & Skills
          </h2>
        </div>

        {/* Categories Tab Bar */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 mb-8">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`group flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all duration-300 ${
                  isActive
                    ? "bg-zinc-900 border-zinc-700 text-blue-400"
                    : "bg-zinc-900/40 border-zinc-800/80 text-zinc-400 hover:border-zinc-700 hover:text-white"
                }`}
              >
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                  isActive ? "bg-blue-500/10 text-blue-400" : "bg-zinc-800/50 text-zinc-400 group-hover:text-white"
                }`}>
                  {renderIcon(cat.icon)}
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Skills Display */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Left Card: Languages */}
          <Card className="border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-6">Languages</h3>
            <div className="space-y-6">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-zinc-300">{lang.name}</span>
                    <span className="font-mono text-zinc-500">{lang.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-800/50 rounded-full overflow-hidden border border-zinc-800">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Right Card: Skills Groups */}
          <Card className="border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  {group.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-zinc-800/50 border border-zinc-700/30 px-3 py-1 text-xs font-medium text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Card>
        </div>
      </Container>
    </section>
  );
}
