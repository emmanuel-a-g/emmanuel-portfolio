"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LINKS } from "@/lib/constants";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import type React from "react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setStatusMessage("Your message was sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setStatusMessage(
        (err as Error)?.message || "An error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }

    setTimeout(() => {
      setStatus(null);
      setStatusMessage("");
    }, 6000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            03. Get In Touch
          </h2>
          <div className="bg-primary mx-auto mb-6 h-1 w-20"></div>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-balance">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to say hello, feel
            free to reach out!
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-foreground mb-6 text-2xl font-semibold">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently open to new opportunities and interesting
                projects. If you have a question or just want to say hi, I'll do
                my best to get back to you!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium">Email</h4>
                  <p className="text-muted-foreground">{LINKS.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Available for remote work
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium">Response Time</h4>
                  <p className="text-muted-foreground">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-foreground text-sm font-medium"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-foreground text-sm font-medium"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-foreground text-sm font-medium"
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-foreground text-sm font-medium"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {/* Inline feedback message */}
                {status && (
                  <p
                    className={`mt-2 rounded-md px-4 py-2 text-center text-sm font-medium ${
                      status === "success"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
