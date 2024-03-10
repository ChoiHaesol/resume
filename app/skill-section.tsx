import React from "react";
import styled from "styled-components";
import { Divider, SectionTitle } from "./styles";
import { motion } from "framer-motion";
import { variants } from "@/util/aninmate";

//#region
const Container = styled(motion.div)`
  p {
    font-weight: 600;
  }
`;
//#endregion

const SkillSection = () => {
  return (
    <Container
      variants={variants}
      initial="out"
      whileInView="in"
      viewport={{ once: true }}
    >
      <SectionTitle>🛠️ Skills</SectionTitle>
      <p>
        Next.js, TypeScript, React, HTML/CSS, JavaScript, Styled Component,
        Tailwind CSS, Git
      </p>
      <Divider />
    </Container>
  );
};

export default SkillSection;
