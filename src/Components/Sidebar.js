import { Link, Outlet } from 'react-router-dom';
import { SidebarButton } from './Buttons/SidebarButton';
import {
  faCut,
  faExchangeAlt,
  faBarcode,
  faImage,
  faTimes,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';
import logo from '../Images/navigation/Logo.svg';
import '../Styles/Components/Button.css';
import '../Styles/Components/Sidebar.css';

/**
 * Creates the sidebar with routing.
 * @returns The applications sidebar with routing.
 */
export const Sidebar = () => {
  const routes = [
    {
      text: 'Column remover',
      path: '/column-remover',
      icon: faCut,
    },
    {
      text: 'Sheet merger',
      path: '/sheet-merger',
      icon: faExchangeAlt,
    },
    {
      text: 'Item template',
      path: '/item-template',
      icon: faBarcode,
    },
    {
      text: 'Image template',
      path: '/image-template',
      icon: faImage,
    },
    {
      text: 'Missing data template',
      path: '/missing-data-template',
      icon: faTimes,
    },
    {
      text: 'Tutorials',
      path: '/tutorials',
      icon: faQuestionCircle,
    },
  ];

  return (
    <div className='container'>
      <nav className='sidebar position-fixed mw-100 vh-100 overflow-hidden float-start zindex-fixed row'>
        <div className='col mw-100 ms-2'>
          <section className='row mx-auto'>
            <Link to='/'>
              <Image fluid src={logo} />
            </Link>
          </section>
          <section className='d-flex flex-column mw-100 mt-5 ms-3'>
            <SidebarButton routes={routes} />
          </section>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};
