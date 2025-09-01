import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export function AboutSection() {
  const skills = [
    "JavaScript",
    "React",
    "Vue.js",
    "Node.js",
    "React Native",
    "Next.js & Nuxt.js",
    "Java",
    "Firebase",
    "MySQL",
    "MongoDB",
    "AWS",
    "Git",
    "Tailwind",
    "GraphQL",
    "Redux",
  ];

  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-foreground mb-4 text-3xl font-bold sm:text-4xl">
            01. About Me
          </h2>
          <div className="bg-primary mx-auto h-1 w-20"></div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Hello! I'm Emmanuel, a passionate full stack software developer
              with a love for creating digital solutions that make a difference.
              Over the years, I've worked on a variety of projects that have
              shaped my expertise in modern web technologies.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I focus on building efficient, scalable applications—whether
              designing responsive user interfaces, developing robust backends,
              or connecting systems in meaningful ways. When I'm not coding, you
              can find me exploring new technologies, creating apps for my
              community, or sharing time with friends and family.
            </p>

            <div className="pt-4">
              <h3 className="text-foreground mb-4 text-xl font-semibold">
                Technologies I work with:
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:pl-8">
            <Card noBackground className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center justify-center">
                  <Image
                    src="/emmanuel-high.jpg"
                    alt="Emmanuel Garcia"
                    width={1200}
                    height={1200}
                    className="h-auto max-w-full object-cover shadow-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
