"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { LINKS } from "@/lib/constants";

export function AppsSection() {
  const projects = [
    {
      title: "Happy Belly",
      description:
        "Happy Belly is a location-based deals app. Built with Next.js, includes features like user authentication, QR code redemption, real-time deal expiration. Currently live for El Paso, TX.",
      image:
        "https://res.cloudinary.com/milito/image/upload/v1747969923/mypage/happybellyscreen.png",
      technologies: [
        "React Native CLI",
        "Firebase",
        "Google Maps",
        "Javascript",
      ],
      liveUrl: "https://happybelly.app",
      githubUrl: "https://github.com/emmanuel-a-g",
    },
    {
      title: "Addmi E-Commerce & POS",
      description:
        "I worked full stack at Addmi, building features for their e-commerce platform and POS system. I contributed to both frontend and backend, integrated APIs, and collaborated with design to improve the user experience.",
      image:
        "https://res.cloudinary.com/milito/image/upload/v1750830438/mypage/addmicafe_d4sznm.png",
      technologies: ["Vue.js", "Node.js", "GraphQL", "Nuxt.js", "Redux"],
      liveUrl: "https://addmi.com/b/addmi-cafe.-Mj0Zlrus2IVT2S6j44e/store",
      githubUrl: "https://github.com/emmanuel-a-g",
    },
    {
      title: "Netflix Clone",
      description:
        "Netflix is one of the most popular streaming services ever, and this app mirrors the same experience. Build with Vue.js and Javascript, secured with Firebase Auth.",
      image:
        "https://res.cloudinary.com/milito/image/upload/v1663637768/mypage/netflix_y57pei.png",
      technologies: ["Vue.js", "Javascript", "CSS", "Netlify", "Firebase"],
      liveUrl: "https://main--moviesiteclone.netlify.app/login",
      githubUrl: "https://github.com/emmanuel-a-g/netflix-clone",
    },
    {
      title: "DAE Woodshop",
      description:
        "DAE is a workshop that especializes in wood work located in Mexico City. This landing page is the first thing users see before buying a product.",
      image:
        "https://res.cloudinary.com/milito/image/upload/v1663637627/mypage/daeMin_pnq2wk.png",
      technologies: ["Next.js", "Material-UI", "Vercel", "Vanilla CSS"],
      liveUrl: "https://cdmx-xi.vercel.app/",
      githubUrl: "https://github.com/emmanuel-a-g/cdmx",
    },
    {
      title: "Cruza Ya: Upcoming Mobile App",
      description:
        "Real-time border crossing updates, a new and upcoming app for daily usage for the busy traveler.",
      image:
        "https://res.cloudinary.com/milito/image/upload/v1756422958/mypage/cruzayawebsitescreenshot.png",
      technologies: [
        "React Native CLI",
        ,
        "Google Maps",
        "Nativewind",
        "Firebase",
      ],
      liveUrl: "https://cruzaya.com",
      githubUrl: "https://github.com/emmanuel-a-g",
    },
    {
      title: "Happy Belly App",
      description:
        "Available both on App Store and Play Store, Happy Belly – Local Deals will soon be in your city.",
      image:
        "https://res.cloudinary.com/milito/image/upload/v1756431970/mypage/happybellyiosscreen_g8qev7.png",
      technologies: [
        "React Native CLI",
        "Firebase",
        "Google Maps",
        "Javascript",
      ],
      liveUrl:
        "https://apps.apple.com/us/app/happy-belly-local-deals/id6747798295",
      githubUrl: "https://github.com/emmanuel-a-g",
    },
  ];

  return (
    <section id="apps" className="bg-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            02. Featured Apps
          </h2>
          <div className="bg-primary mx-auto mb-6 h-1 w-20"></div>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg text-balance">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and showcases different aspects of my development
            skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary text-xl transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open(LINKS.github, "_blank")}
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
