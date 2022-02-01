import { Link, Outlet } from 'react-router-dom';
import { SidebarButton } from './Buttons/SidebarButton';
import { Image } from 'react-bootstrap';
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
      <nav className='sidebar position-fixed mw-100 vh-100 overflow-hidden float-start zindex-fixed row'>
        <div className='col mw-100 ms-2'>
          <section className='row mx-auto'>
            <Link to='/'>
              <Image fluid src={logo} />
            </Link>
          </section>
          <section className='d-flex flex-column mw-100 mt-5 ms-3'>
            <SidebarButton />
          </section>
        </div>
      </nav>
    </div>
    <Outlet />
  </div>
);
