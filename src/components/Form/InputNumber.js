import React, { Component } from 'react';
import AntdInputNumber from 'antd/lib/input-number';
import 'antd/lib/input-number/style';

export default class InputNumber extends Component {
  render() {
    const { suffix, ...rest } = this.props;
    return (
      <div>
        <AntdInputNumber {...rest} />
        {suffix ? <span style={{ margin: '0 8px' }}>{suffix}</span> : null}
      </div>
    )
  }
}
