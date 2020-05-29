import React from "react";
// import Header from "components/Header";
import MobileNav from "components/MobileNav";
import Banner from "components/Banner";
import RegisterSection from "components/RegisterSection";
import HostingSection from "components/HostingSection";
import PlanSection from "components/PlanSection";

const HomePage = () => (
  <>
    {/* <Header /> */}
    <MobileNav />
    <Banner />
    <RegisterSection />
    <HostingSection />
    <PlanSection />
  </>
);

export default HomePage;
