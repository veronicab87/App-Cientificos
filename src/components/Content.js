import React from 'react';
import PropTypes from 'prop-types';

function Content({ content }) {
  return <p>{content}</p>;
}

Content.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Content;

