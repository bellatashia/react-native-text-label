import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  textStyle: {
    color: "black",
  },
};

const Label = ({
  fontSize, bold, italic, style, children,
}) => (
  <Text
    style={[
      styles.textStyle,
      fontSize ? { fontSize } : {},
      { fontWeight: bold ? 'bold' : 'normal' },
      { fontStyle: italic ? 'italic' : 'normal' },
      style,
    ]}
    allowFontScaling={false}
  >
    {children}
  </Text>
);

export default Label;

const styleShape = PropTypes.objectOf(PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
]));

Label.propTypes = {
  fontSize: PropTypes.number.isRequired,
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOfType([styleShape, PropTypes.arrayOf(styleShape)]),
};

Label.defaultProps = {
  bold: false,
  italic: false,
  style: {},
};
