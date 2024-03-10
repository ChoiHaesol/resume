"use client";

// import Image from "next/image";
import React from "react";
import styled from "styled-components";
import profile from "@/public/profile.jpg";
import { Divider, SectionTitle } from "./styles";
import Image from "next/image";
import { variants } from "@/util/aninmate";
import { motion } from "framer-motion";

//#region

const Title = styled.h1`
  font-weight: 700;
  line-height: 1.2;
  font-size: 40px;
`;

const IntroductionWrapper = styled.div`
  display: flex;
  gap: 46px;
`;

const Introduction = styled.div``;

const Description = styled.p`
  white-space: pre-wrap;
  word-break: break-word;
`;

const LinkWrapper = styled.div`
  margin: 16px 0;
`;

const LinkItem = styled.p`
  margin: 8px 0;
`;
//#endregion

const IntroSection = () => {
  return (
    <motion.div
      variants={variants}
      initial="out"
      whileInView="in"
      viewport={{ once: true }}
    >
      <Title>최해솔 (Choi Haesol)</Title>

      <IntroductionWrapper>
        <Image src={profile} alt="test" width={250} />

        <Introduction>
          <SectionTitle>안녕하세요. 개발자 최해솔 입니다.</SectionTitle>
          <Description>
            4년차 프론트엔드 개발자로 다양한 프로젝트 경험을 통해 웹
            애플리케이션의 사용자 인터페이스를 개발하고, 사용자 경험을
            향상시키는 업무를 수행해왔습니다. 협업과 효율적인 코드 작성을
            중요시하며 항상 새로운 도전에 열려있습니다.
          </Description>

          <LinkWrapper>
            <LinkItem>📞 01048096804</LinkItem>
            <LinkItem>
              ✉️ <a href="mailto:enfzls1212@gmail.com">enfzls1212@gmail.com</a>
            </LinkItem>
            <LinkItem>
              🐱 <a href="https://github.com/ChoiHaesol">Github</a>
            </LinkItem>
            <LinkItem>
              🏠 <a href="https://velog.io/@doryyy/posts">Blog</a>
            </LinkItem>
          </LinkWrapper>
        </Introduction>
      </IntroductionWrapper>
      <Divider />
    </motion.div>
  );
};

export default IntroSection;
