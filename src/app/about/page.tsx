import AboutHeaderSection from "@/src/components/sections/AboutHeaderSection";
import MissionSection from "@/src/components/sections/MissionSection";
import ValueSection from "@/src/components/sections/ValueSection";
import React from "react";

export default function about() {
  return (
    <>
      <AboutHeaderSection />
      <MissionSection />
      <ValueSection />
    </>
  );
}
