import React from 'react';
import { 
  Container, 
  GridCards,
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Title,
  CardContent,
} from './cards.stitches';

export default function Cards() {
  return (
    <Container>
      <Title>Card Section</Title>
      <GridCards>
        <Card1>
          <CardContent>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
            </p>
          </CardContent>
        </Card1>
        <Card2>
          <CardContent>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
            </p>
          </CardContent>
        </Card2>
        <Card3>
          <CardContent>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
            </p>
          </CardContent>
        </Card3>
        <Card4>
          <CardContent>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
            </p>
          </CardContent>
        </Card4>
        <Card5>
          <CardContent>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
            </p>
          </CardContent>
        </Card5>
        <Card6>
          <CardContent>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
            </p>
          </CardContent>
        </Card6>
      </GridCards>
    </Container>
  );
}
