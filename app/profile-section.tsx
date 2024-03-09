import React from "react";
import { Divider, SectionTitle } from "./styles";
import styled from "styled-components";

const Container = styled.div`
  p > span {
    color: rgba(155, 155, 155, 1);
    fill: rgba(155, 155, 155, 1);
  }
`;

const ProfileSection = () => {
  return (
    <Container>
      <SectionTitle>👩 Profile</SectionTitle>

      <p>👶 1995년 7월 10일 출생</p>

      <p>
        👨‍🎓 서일대학교 시스템경영과 졸업 <span>(2015.03 - 2017.02)</span>
      </p>

      <p>
        🏫 대원여자고등학교 졸업 <span>(2011.03 - 2014.02)</span>
      </p>

      <Divider />
    </Container>
  );
};

export default ProfileSection;