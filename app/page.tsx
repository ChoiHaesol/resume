"use client";

import styled from "styled-components";
import IntroSection from "./intro-section";
import ProfileSection from "./profile-section";
import CareerSection from "./career-section";
import SkillSection from "./skill-section";
import EducationSection from "./education-section";
import CertificateSection from "./certificate-section";

//#region
const Continer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 80px 0;
`;
//#endregion

export default function Home() {
  return (
    <Continer>
      <IntroSection />

      <ProfileSection />

      <CareerSection />

      <SkillSection />

      <EducationSection />

      <CertificateSection />
    </Continer>
  );
}
