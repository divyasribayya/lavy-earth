'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
`;

const OfferCard = styled.div`
  position: relative;
  flex: 1 1 300px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  padding: 2rem;
  background: ${({ bg }) => `url(${bg}) no-repeat center/cover`};

  @media (max-width: 768px) {
    flex: 1 1 100%;
    height: 260px;
  }
`;

const CardContent = styled.div`
  z-index: 2;
  position: relative;
`;

const Overlay = styled.div`
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

const CardP = styled.p`
  font-family: 'Yellowtail', cursive;
  font-size: 1.8rem;
  color: ${({ color }) => color || '#fff'};
  margin-bottom: 0.5rem;
`;

const CardH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.3;
  color: ${({ color }) => color || '#fff'};
  max-width: 18ch;

  span {
    border-bottom: 4px solid transparent;
    transition: border 0.3s ease;
    &:hover {
      border-color: ${({ borderColor }) => borderColor || '#fff'};
    }
  }
`;

export default function Offer() {
  return (
    <Section id="offer">
      <Wrapper>
        <OfferCard bg="/offer/offer-1-img.png">
          <Overlay />
          <CardContent>
            <CardP>Natural!!</CardP>
            <CardH2>
              <span>Get Garden Fresh Fruits</span>
            </CardH2>
          </CardContent>
        </OfferCard>

        <OfferCard bg="/offer/offer-2-img.png">
          <Overlay />
          <CardContent>
            <CardP color="#6caa8d">Offer!!</CardP>
            <CardH2 color="#1a2f3f" borderColor="#1a2f3f">
              <span>Get 10% off on Vegetables</span>
            </CardH2>
          </CardContent>
        </OfferCard>
      </Wrapper>
    </Section>
  );
}
