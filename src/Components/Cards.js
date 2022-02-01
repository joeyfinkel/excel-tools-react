import React from 'react';
import { Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { pages } from '../Utils/Pages';
import { CardElement } from './CardCol';

export const Cards = ({ templateType }) => (
  // <Container>
  <Row xl={6} className='mt-5 ms-5'>
    {pages.map(
      ({ path, title, cardProps }, idx) =>
        path !== 'home' &&
        cardProps.map(({ homeText, tutorialText }) => {
          // If on the tutorials page, don't show the tutorials card
          if (templateType === 'tutorials')
            return (
              title !== 'Tutorials' && (
                <CardElement
                  key={idx}
                  path={path}
                  title={title}
                  text={tutorialText}
                />
              )
            );

          return (
            <CardElement key={idx} path={path} title={title} text={homeText} />
          );
        })
    )}
    <Outlet />
  </Row>
  // </Container>
);
