import React from 'react';
import PropTypes from 'prop-types';

function Footer({ footer }) {
  return <footer>{footer}</footer>;
}

Footer.propTypes = {
  footer: PropTypes.string.isRequired,
};

export default Footer;
