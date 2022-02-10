import React from 'react';
import PropTypes from 'prop-types';

import { Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import { pages } from '../../Utils/Pages';
import { CardLink } from './CardLink';

const propTypes = {
  /** The type of template the component will be used for. */
  templateType: PropTypes.oneOf(['home', 'tutorials']),
};

export const CardRow = ({ templateType }) => (
  <Row xl={'auto'} className='mx-auto mt-5'>
    {pages.map(
      ({ path, title, cardProps }, idx) =>
        path !== 'home' &&
        cardProps.map(({ homeText, tutorialText }) => {
          // If on the tutorials page, don't show the tutorials card
          if (templateType === 'tutorials')
            return (
              title !== 'Tutorials' && (
                <CardLink
                  key={idx}
                  path={path}
                  title={title}
                  cardText={tutorialText}
                />
              )
            );

          return (
            <CardLink key={idx} path={path} title={title} cardText={homeText} />
          );
        })
    )}
    <Outlet />
  </Row>
);

CardRow.propTypes = propTypes;
