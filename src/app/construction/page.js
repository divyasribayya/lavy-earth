'use client';
import React from "react";
import styled from "styled-components";

const cards = [
  {
    title: "PEB Constructions",
    description: "Precision design and fabrication services.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Machinery Installation",
    description: "Efficient installation of industrial systems.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Civil Constuction",
    description: "Reliable maintenance for long-term durability.",
    image: "https://images.unsplash.com/photo-1503389152951-9c3d0456e86c?auto=format&fit=crop&w=600&q=80",
  },
];

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #e9d5ff 0%, #fff 100%);
  padding: 3rem 1rem;
`;

const Centered = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #374151;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const CardDesc = styled.p`
  color: #6b7280;
`;

export default function ConstructionPage() {
  return (
    <Container>
      <Centered>
        <Heading>Lavy Earth Constructions</Heading>
        <Subtitle>
          Innovative and efficient construction solutions for industrial needs.
        </Subtitle>
        <Grid>
          {cards.map((card, idx) => (
            <Card key={idx}>
              <CardImage src={card.image} alt={card.title} />
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDesc>{card.description}</CardDesc>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Centered>
    </Container>
  );
}
