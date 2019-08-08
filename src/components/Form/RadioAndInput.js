import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Radio, Input } from 'antd';
import isEqual from 'lodash/isEqual';

class RadioAndInput extends Component {
  static getDerivedStateFromProps(nextProps, preState) {
    if (isEqual(nextProps.value, preState.value)) {
      return null;
    }
    return {
      ...(nextProps.value || {}),
    };
  }

  constructor(props) {
    super(props);

    const value = props.value || {};
    this.state = {
      value: value.value || null,
      text: value.text || '',
    };
  }

  onChange = e => {
    const { value, type } = e.target;
    if (type === 'text') {
      this.setState({ text: value });
      this.triggerChange({ text: value });
    } else {
      this.setState({ value });
      if (value === '异常' || value === '其他') {
        this.triggerChange({ value });
      } else {
        this.triggerChange({ value, text: '' });
      }
    }
  };

  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    const { onChange } = this.props;
    if (onChange) {
      // 返回{status, dec}
      onChange(Object.assign({}, this.state, changedValue));
    }
  };

  render() {
    const { value, text } = this.state;
    const { options } = this.props;
    return (
      <div>
        <Radio.Group onChange={this.onChange} value={value}>
          {options.map(item => (
            <Radio key={item.value} value={item.value}>{item.label}</Radio>
          ))}
        </Radio.Group>
        {value === '异常' || value === '其他' ? (
          <Input style={{ width: '120px' }} value={text} onChange={this.onChange} />
        ) : null}
      </div>
    );
  }
}

RadioAndInput.propTypes = {
  options: PropTypes.array,
};

RadioAndInput.defaultProps = {
  options: [
    {
      label: '正常',
      value: '正常',
    },
    {
      label: '异常',
      value: '异常',
    },
  ],
};

export default RadioAndInput;
