import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Nav, Image, Stack } from 'react-bootstrap';

import { SidebarButtons } from './Buttons/SidebarButtons';

import logo2 from '../Images/navigation/EDS Logo 1.svg';

import '../Styles/Components/Button.css';
import '../Styles/Components/Sidebar.css';

/**
 * Creates the sidebar with routing.
 * @returns The applications sidebar with routing.
 */
export const Sidebar = ({ onClick }) => (
  <div className='w-100 h-100'>
    <div className='position-relative'>
      <Nav
        className='sidebar flex-column position-fixed vh-100 overflow-hidden float-start zindex-fixed row'
        variant='pills'
      >
        <div className='col mw-100 ms-2'>
          <Stack className='d-flex flex-column mw-100 mt-2 ms-3'>
            <Link
              to='/'
              className='btn-nav home'
              onClick={() => {
                document.title = 'EDS Tools';
              }}
            >
              <p className='nav-text underline ms-1 mt-3 text-nowrap'>
                <Image fluid src={logo2} className='logo' />
                <span className='fw-bold ms-3'>EDS Tools</span>
              </p>
            </Link>
            <SidebarButtons onClick={onClick} />
          </Stack>
        </div>
      </Nav>
    </div>
    <Outlet />
  </div>
);
