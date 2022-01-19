import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

/**
 * Maps over `routes` to create a list group item for each route.
 * @param {{routes: [{text: string, path: string, icon: IconDefinition}]}}
 * @returns `<ListGroupItem>` for every route in {@link routes}.
 */
export const SidebarButton = ({ routes }) =>
  routes.map(({ path, icon, text }, idx) => (
    <div
      key={idx}
      className='d-flex flex-row justify-content-start bg-transparent border-bottom-0'
    >
      <Link to={path}>
        <p className='nav-text ms-1 mt-4 text-nowrap'>
          <FontAwesomeIcon icon={icon} />
          <span className='fw-bold ms-3'>{text}</span>
        </p>
      </Link>
    </div>
  ));
