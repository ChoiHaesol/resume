"use client";

import styled from "styled-components";
import IntroSection from "./intro-section";
import ProfileSection from "./profile-section";

//#region
const Continer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
//#endregion

export default function Home() {
  return (
    <Continer>
      <IntroSection />

      <ProfileSection />
    </Continer>
  );
}
