import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  Popover as BootstrapPopover,
  PopoverBody,
  PopoverHeader,
} from 'react-bootstrap';

const propTypes = {
  header: PropTypes.string,
  children: PropTypes.elementType,
};

const Popover = forwardRef(({ header, children }, ref) => (
  <BootstrapPopover>
    <PopoverHeader>{header}</PopoverHeader>
    <PopoverBody>{children}</PopoverBody>
  </BootstrapPopover>
));

Popover.propTypes = propTypes;

export default Popover;
