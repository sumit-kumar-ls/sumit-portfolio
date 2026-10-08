import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Github, MessageSquare } from 'lucide-react';
import { profileData } from '../data/profileData';

export const ContactSection = ({ githubUrl }) => {
  const [copied, setCopied] = useState(false);
  const { email, heading, subheading, availabilityText } = profileData.contact;

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5 bg-[#0c0d11]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
          05 // Get In Touch
        </div>

        <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-6 font-sans">
          {heading}
        </h2>

        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          {subheading}
        </p>

        {/* Contact Interactive Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm max-w-2xl mx-auto space-y-8 shadow-2xl shadow-black/50">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="p-4 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
              <Mail className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">Direct Email Address</span>
            <span className="text-lg sm:text-2xl font-mono font-bold text-white tracking-tight break-all">
              {email}
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* Copy Button */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-white font-medium text-sm transition-all duration-200"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-mono text-xs">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gray-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            {/* Direct Mailto */}
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/20"
            >
              <Send className="w-4 h-4" />
              <span>Send Email</span>
            </a>

            {/* GitHub if present */}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/10 text-white font-medium text-sm transition-all duration-200"
              >
                <Github className="w-4 h-4 text-gray-400" />
                <span>GitHub Profile</span>
              </a>
            )}
          </div>

          {/* Availability note */}
          <div className="pt-4 border-t border-white/5 text-xs text-gray-500 font-mono flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{availabilityText}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
