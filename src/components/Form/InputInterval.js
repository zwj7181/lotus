/**
 * input 区间输入
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import isEqual from 'lodash/isEqual';

class InputInterval extends Component {
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
      min: value.min,
      max: value.max,
    };
  }

  onChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
    this.triggerChange({ [id]: value });
  };

  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    const { onChange } = this.props;
    if (onChange) {
      // 返回{min, max}
      onChange(Object.assign({}, this.state, changedValue));
    }
  };

  render() {
    const { min, max } = this.state;
    const { suffix, placeholder, width, style, ...rest } = this.props;
    return (
      <div>
        <Input.Group compact style={{ width: 'auto' }}>
          <Input
            id="min"
            style={{ width, textAlign: 'center', ...style }}
            placeholder={placeholder.min}
            value={min}
            onChange={this.onChange}
          />
          <Input
            style={{
              width: 30,
              borderLeft: 0,
              pointerEvents: 'none',
              backgroundColor: '#fff',
            }}
            placeholder={placeholder.separator}
            disabled
          />
          <Input
            id="max"
            style={{ width, textAlign: 'center', borderLeft: 0, ...style }}
            placeholder={placeholder.max}
            value={max}
            onChange={this.onChange}
          />
        </Input.Group>
        {suffix ? <span style={{ margin: '0 8px' }}>{suffix}</span> : null}
      </div>
    );
  }
}

InputInterval.propTypes = {
  width: PropTypes.number,
  inputStyle: PropTypes.object,
  placeholder: PropTypes.object,
};

InputInterval.defaultProps = {
  width: 100,
  inputStyle: {},
  placeholder: {
    min: 'Minimum',
    max: 'Maximum',
    separator: '~',
  },
};

export default InputInterval;
