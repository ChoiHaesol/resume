import React from "react";
import styled from "styled-components";
import { Divider, SectionTitle } from "./styles";

//#region
const Container = styled.div``;

const SectionContent = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  flex-basis: 25%;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin: 24px 0 0;
`;

const Period = styled.p`
  color: rgba(155, 155, 155, 1);
`;

const ListWrapper = styled.div``;

const ListItem = styled.div`
  margin-bottom: 32px;
`;

const Link = styled.a`
  color: rgba(155, 155, 155, 1);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.25;
  margin: 0;
`;

const Tag = styled.p`
  font-weight: 600;
`;
//#endregion

const CareerSection = () => {
  return (
    <Container>
      <SectionTitle>👩‍💻 Career</SectionTitle>

      <SectionContent>
        <TitleWrapper>
          <Title>퍼플웍스</Title>
          <Period>개발팀 (2020.12.07 ~ 재직중 )</Period>
          <p>프론트엔드 개발자</p>
        </TitleWrapper>

        <ListWrapper>
          <ListItem>
            <Link href="https://www.stayfolio.com/">Stayfolio</Link>
            <Period>2021.01 - 2021. 05</Period>
            <p>숙박 예약 사이트</p>
            <p>사용자화면, 관리자화면 일부페이지 개발 및 유지보수</p>
            <Tag>#React #Nextjs #Typescript #Ruby on rails</Tag>
          </ListItem>

          <ListItem>
            <Link href="https://derbystars.com/">Derby Stars</Link>
            <Period>2021.10 - 2022.02</Period>
            <p>NFT기반 게임 사이트</p>
            <p>메인페이지, 마이페이지 개발</p>
            <Tag>#React #Nextjs #Typescript</Tag>
          </ListItem>

          <ListItem>
            <Link href="https://lcm-mint.purpleworks.co.kr">
              Lonely Cat Mafia
            </Link>
            <Period>2022.11 - 2022.12</Period>
            <p>NFT 기반 커뮤니티 사이트</p>
            <p>전체 페이지 개발</p>
            <Tag>#React #Nextjs #Typescript</Tag>
          </ListItem>

          <ListItem>
            <Link href="https://www.kolonsport.com/">코오롱스포츠</Link>
            <Period>2023.01 - 2023.03</Period>
            <p>등산 / 스포츠 의류 쇼핑몰 사이트</p>
            <p>메인페이지 포함 다수 페이지 개발 및 유지보수</p>
            <Tag>#React #Nextjs #Typescript #StyledComponent</Tag>
          </ListItem>

          <ListItem>
            <Link href="https://www.gfore.kr">G/FORE</Link>
            <Period>2023.04 - 2023.05</Period>
            <p>골프 의류 쇼핑몰 사이트</p>
            <p>메인페이지 포함 다수 페이지 개발 및 유지보수</p>
            <Tag>#React #Nextjs #Typescript #StyledComponent</Tag>
          </ListItem>

          <ListItem>
            <Link href="https://www.kolonsport.com/Community">
              코오롱스포츠 - 솟솟커뮤니티
            </Link>
            <Period>2023.05</Period>
            <p>코오롱스포츠 사이트 내 커뮤니티</p>
            <p>커뮤니티페이지, 마이페이지 개발 및 유지보수</p>
            <Tag>#React #Nextjs #Typescript #StyledComponent</Tag>
          </ListItem>

          <ListItem>
            <Link href="https://www.freker.kr/">Freker</Link>
            <Period>2023.06 - 2023.08</Period>
            <p>의류 쇼핑몰 사이트</p>
            <p>메인페이지 포함 다수 페이지 개발 및 유지보수</p>
            <Tag>#React #Nextjs #Typescript #StyledComponent</Tag>
          </ListItem>

          <ListItem>
            <Link href="https://www.re-code.co.kr/">Re;code</Link>
            <Period>2023.10 - 2023.12</Period>
            <p>의류 쇼핑몰 사이트</p>
            <p>메인페이지 포함 다수 페이지 개발 및 유지보수</p>
            <Tag>#React #Nextjs #Typescript #StyledComponent</Tag>
          </ListItem>
        </ListWrapper>
      </SectionContent>

      <Divider />
    </Container>
  );
};

export default CareerSection;
