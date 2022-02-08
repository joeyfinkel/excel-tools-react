import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { pages } from '../../Utils/Pages';

/**
 * Maps over {@link pages} to create a list group item for each route.
 * @returns `<ListGroupItem>` for every route in {@link routes}.
 */
export const SidebarButton = () =>
  pages.map(
    ({ path, icon, title }, idx) =>
      path !== 'home' && (
        <Link to={`/${path}`} className='btn-nav'>
          <p className='nav-text ms-1 mt-4 text-nowrap'>
            <FontAwesomeIcon icon={icon} />
            <span className='fw-bold ms-3'>{title}</span>
          </p>
        </Link>
      )
  );
