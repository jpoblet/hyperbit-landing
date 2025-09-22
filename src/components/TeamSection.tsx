import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

interface TeamSectionProps {
  title?: string;
  subtitle?: string;
  members?: TeamMember[];
}

const TeamSection = ({
  title = "Meet Our Team",
  subtitle = "Experienced professionals dedicated to revolutionizing blockchain technology",
  members = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "Former CTO at BlockTech with 10+ years in blockchain development and cryptography.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Michael Chen",
      position: "CTO",
      bio: "PhD in Distributed Systems, led development teams at major crypto exchanges.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    {
      name: "Aisha Patel",
      position: "Head of Product",
      bio: "Product strategist with experience at fintech startups and blockchain platforms.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=aisha",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      name: "David Rodriguez",
      position: "Lead Developer",
      bio: "Smart contract specialist and core contributor to multiple open-source blockchain projects.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
  ],
}: TeamSectionProps) => {
  return (
    <section className="py-16 px-4 bg-slate-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <Card
              key={index}
              className="bg-slate-800 border-slate-700 overflow-hidden hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300"
            >
              <CardContent className="p-6 flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4 border-2 border-blue-500">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="bg-blue-600">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.position}</p>
                <p className="text-slate-300 text-sm text-center mb-4">
                  {member.bio}
                </p>

                <div className="flex space-x-4 mt-auto">
                  <TooltipProvider>
                    {member.social.twitter && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition-colors"
                          >
                            <Twitter size={20} />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Twitter</p>
                        </TooltipContent>
                      </Tooltip>
                    )}

                    {member.social.linkedin && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition-colors"
                          >
                            <Linkedin size={20} />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>LinkedIn</p>
                        </TooltipContent>
                      </Tooltip>
                    )}

                    {member.social.github && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-blue-400 transition-colors"
                          >
                            <Github size={20} />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </TooltipProvider>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
