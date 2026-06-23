"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Mail, MapPin, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";
import FormField from "@/components/ui/FormField";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const initialForm = { name: "", email: "", subject: "", message: "" };

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-accent-purple",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
    color: "text-accent-cyan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "u-saicharan-yadav",
    href: personalInfo.linkedin,
    color: "text-accent-purple",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "sai-charan-2722",
    href: personalInfo.github,
    color: "text-accent-cyan",
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Oops! Something went wrong. Please email me directly.");
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY },
      );
      toast.success("Message sent! I'll get back to you within 24 hours. 🚀");
      setForm(initialForm);
    } catch {
      toast.error("Oops! Something went wrong. Please email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader index="06. contact" title="Let's" accent="Connect" />

      <p className="mx-auto mb-12 max-w-xl text-center text-text-secondary">
        I&apos;m currently open to mid-level and senior frontend/full-stack
        roles. Got a project, opportunity, or just want to say hello? Drop me a
        message.
      </p>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
        {/* Left: contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2"
        >
          <h3 className="text-xl font-semibold text-white font-display">
            Get In Touch
          </h3>

          <div className="mt-6 flex flex-col gap-5">
            {contactItems.map((c) => {
              const Icon = c.icon;
              const body = (
                <>
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-purple/10">
                    <Icon size={18} className={c.color} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wide text-text-muted">
                      {c.label}
                    </p>
                    <p className="break-words text-sm text-text-secondary transition group-hover:text-white">
                      {c.value}
                    </p>
                  </div>
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4"
                >
                  {body}
                </a>
              ) : (
                <div key={c.label} className="group flex items-start gap-4">
                  {body}
                </div>
              );
            })}
          </div>

          {/* Social icons row */}
          <div className="mt-8 flex gap-4">
            {[
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-subtle bg-background-tertiary text-accent-purple-light transition-all hover:border-accent-purple/40 hover:bg-gradient-subtle"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="space-y-5 lg:col-span-3"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField
              label="Name"
              name="name"
              placeholder="Sai Charan"
              required
              value={form.name}
              onChange={handleChange}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <FormField
            label="Subject"
            name="subject"
            placeholder="Let's work together"
            required
            value={form.subject}
            onChange={handleChange}
          />
          <FormField
            label="Message"
            name="message"
            type="textarea"
            rows={5}
            placeholder="Tell me about your project or opportunity..."
            required
            value={form.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={sending}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/30 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {sending ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Sending...
              </>
            ) : (
              <>
                Send Message <Send size={18} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
