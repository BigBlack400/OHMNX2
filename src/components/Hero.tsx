import React from "react";
import { prisma } from "@/lib/prisma";
import { HeroClient } from "./HeroClient";

export const Hero = async () => {
  const contents = await prisma.content.findMany();
  const contentMap = contents.reduce((acc, curr) => {
    acc[curr.key] = curr.value;
    return acc;
  }, {} as Record<string, string>);

  const heroTitle = contentMap["heroTitle"] || "Revolutionize Your Sales. Empower Your Team.";
  const heroSubtitle = contentMap["heroSubtitle"] || "Streamline your sales process with AI-powered automation, predictive insights, and tools built to connect your business to the world.";
  const collabText = contentMap["collabText"] || "Seamless Collaboration+";

  return <HeroClient title={heroTitle} subtitle={heroSubtitle} collabText={collabText} />;
};
