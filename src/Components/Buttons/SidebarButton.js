import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { pages } from '../../Utils/Pages';

/**
 * Maps over {@link pages} to create a list group item for each route.
 * @returns `<ListGroupItem>` for every route in {@link routes}.
 */
export const SidebarButton = () =>
  pages.map(
    ({ path, icon, title }, idx) =>
      path !== 'home' && (
        <div
          key={idx}
          className='d-flex flex-row justify-content-start bg-transparent border-bottom-0'
        >
          <Link to={`/${path}`}>
            <p className='nav-text ms-1 mt-4 text-nowrap'>
              <FontAwesomeIcon icon={icon} />
              <span className='fw-bold ms-3'>{title}</span>
            </p>
          </Link>
        </div>
      )
  );
