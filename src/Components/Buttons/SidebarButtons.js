import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { data } from '../../Utils/PagesData';

/**
 * Maps over {@link pages} to create a list group item for each route.
 * @returns `<ListGroupItem>` for every route in {@link routes}.
 */
export const SidebarButtons = ({ onClick }) =>
  data.map(
    ({ path, icon, title }, idx) =>
      path !== 'home' && (
        <Link to={`/${path}`} key={idx} className='btn-nav' onClick={onClick}>
          <p className='nav-text ms-1 mt-3 text-nowrap'>
            <FontAwesomeIcon icon={icon} size='lg' />
            <span className='fw-bold ms-3'>{title}</span>
          </p>
        </Link>
      )
  );
