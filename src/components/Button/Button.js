import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AntdButton from 'antd/lib/button';
// 引入的包A定义一个别名B
import 'antd/lib/button/style';

class Button extends Component {
  render() {
    const { children, variant, ...rest } = this.props;
    return (
      <AntdButton {...rest}>
        {children}
      </AntdButton>
    );
  }
}


Button.propTypes = {
  variant: PropTypes.string,
};

Button.propTypes = {
  // text(文本按钮)|contained(实心按钮)|outlined(描边按钮)
  variant: 'text',
};

export default Button;
