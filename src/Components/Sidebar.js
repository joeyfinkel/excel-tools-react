import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Nav, Image, Stack } from 'react-bootstrap';

import { SidebarButton } from './Buttons/SidebarButton';
import logo from '../Images/navigation/Logo.svg';
import '../Styles/Components/Button.css';
import '../Styles/Components/Sidebar.css';

/**
 * Creates the sidebar with routing.
 * @returns The applications sidebar with routing.
 */
export const Sidebar = () => (
  <div className='w-100 h-100'>
    <div className='position-relative'>
      <Nav
        className='sidebar flex-column position-fixed mw-100 vh-100 overflow-hidden float-start zindex-fixed row'
        variant='pills'
        // fill
      >
        <div className='col mw-100 ms-2'>
          <section className='row mx-auto'>
            <Link to='/'>
              <Image fluid src={logo} />
            </Link>
          </section>
          <Stack className='d-flex flex-column mw-100 mt-5 ms-3'>
            <SidebarButton />
          </Stack>
        </div>
      </Nav>
    </div>
    <Outlet />
  </div>
);

// const newSidebar = () => (
//   <Nav vertical>
//     <SidebarButton />
//     <Outlet />
//   </Nav>
// );
