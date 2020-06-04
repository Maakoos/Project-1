import React from "react";
import Banner from "components/Banner";
import RegisterSection from "components/RegisterSection";
import HostingSection from "components/HostingSection";
import PlanSection from "components/PlanSection";
import AchievementSection from "components/AchievementSection";
import BuilderSection from "components/BuilderSection";
import StartNowSection from "components/StartNowSection";

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
