"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

const HeroSection = styled.section`
  padding: 0;
  position: relative;
  overflow: hidden;
`;

const HeroBg = styled.div`
  background-image: url("/img/Banner.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
`;

const HeroOverlay = styled.div`
  background-color: hsla(0, 0%, 83.14%, 0.32);
  width: 100%;
  height: 100%;
  padding: 3rem 1rem;

  @media (min-width: 992px) {
    padding: 5rem 2rem;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const HeroText = styled.div`
  text-align: left;
`;

const HeroTagline = styled.p`
  color: #5a7c64;
  font-weight: 600;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

const HeroTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 800;
  color: #2e2e2e;
  line-height: 1.3;
  text-transform: capitalize;
  margin-bottom: 2rem;
  font-size: 2.25rem;

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: #f86061;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: #da4e4e;
  }

  img {
    margin-left: 0.5rem;
  }
`;

const HeroImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
`;

export default function Hero() {
  return (
    <HeroSection id="hero">
      <HeroBg>
        <HeroOverlay>
          <HeroContent>
            <HeroText>
              <HeroTagline>100% Natural Food</HeroTagline>
              <HeroTitle>
                Choose The Best Healthier Way Of Life
              </HeroTitle>
              <HeroButton href="#">
                Explore Now
                <Image
                  src="/img/btn-arrow-icon.png"
                  alt="Arrow Icon"
                  width={24}
                  height={24}
                />
              </HeroButton>
            </HeroText>
            {/* <HeroImageWrapper>
              <Image
                src="/img/Banner.jpg"
                alt="Healthy Food Banner"
                width={800}
                height={800}
              />
            </HeroImageWrapper> */}
          </HeroContent>
        </HeroOverlay>
      </HeroBg>
    </HeroSection>
  );
}
