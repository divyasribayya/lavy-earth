"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 520px;
  background-image: url("/hero/banner.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const HeroOverlay = styled.div`
  width: 100%;
  min-height: 520px;
  // background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem 1rem;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const LeftNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 2rem;
  @media (max-width: 900px) {
    flex-direction: row;
    margin: 0 0 1.5rem 0;
    gap: 1rem;
  }
`;

const NavCircle = styled.div`
  width: 48px;
  height: 48px;
  background: #ffa800;
  color: #fff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
`;

const HeroText = styled.div`
  flex: 1;
  min-width: 320px;
`;

const HeroTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  color: #222;
  line-height: 1.2;
  font-size: 2.1rem;
  margin-bottom: 1.2rem;
  @media (min-width: 768px) {
    font-size: 2.7rem;
  }
`;

const Highlight = styled.span`
  color: #ffa800;
`;

const SubHeading = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: #222;
  margin-bottom: 2rem;
`;

const HeroImageWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 320px;
  max-width: 600px;
`;

const SpiceImage = styled(Image)`
  border-radius: 1.5rem;
  width: 100%;
  height: auto;
  max-width: 600px;
`;

const SVGOverlay = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

export default function Hero() {
  return (
    <HeroSection id="hero">
      <HeroOverlay>
        <HeroContent>
          {/* <LeftNav>
            <NavCircle>01</NavCircle>
            <NavCircle>02</NavCircle>
            <NavCircle>03</NavCircle>
            <NavCircle>04</NavCircle>
          </LeftNav> */}
          <HeroText>
            <HeroTitle>
              Leading <Highlight>Exporter</Highlight> &<br />
              <Highlight>Supplier Of High Quality</Highlight>
            </HeroTitle>
            <SubHeading>Spices.</SubHeading>
          </HeroText>
          <HeroImageWrapper>
            {/* <SpiceImage
              src="/about/spice.png"
              alt="Spices"
              width={600}
              height={350}
              priority
            /> */}
            <SVGOverlay viewBox="0 0 600 350">
              {/* Top circle and line */}
              <line x1="180" y1="70" x2="90" y2="30" stroke="#fff" strokeWidth="5" />
              <circle cx="90" cy="30" r="48" fill="none" stroke="#fff" strokeWidth="8" />
              {/* Bottom circle and line */}
              <line x1="400" y1="260" x2="520" y2="320" stroke="#fff" strokeWidth="5" />
              <circle cx="520" cy="320" r="48" fill="none" stroke="#fff" strokeWidth="8" />
            </SVGOverlay>
          </HeroImageWrapper>
        </HeroContent>
      </HeroOverlay>
    </HeroSection>
  );
}
