import React from "react";
import Banner from "components/Banner";
import RegisterSection from "sections/RegisterSection";
import HostingSection from "sections/HostingSection";
import PlanSection from "sections/PlanSection";
import AchievementSection from "sections/AchievementSection";
import BuilderSection from "sections/BuilderSection";
import StartNowSection from "sections/StartNowSection";

const HomePage = () => (
  <>
    <Banner />
    <RegisterSection />
    <HostingSection />
    <PlanSection />
    <AchievementSection />
    <BuilderSection />
    <StartNowSection />
  </>
);

export default HomePage;
