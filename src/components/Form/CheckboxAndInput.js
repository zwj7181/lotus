import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Input } from 'antd';

class CheckboxAndInput extends Component {
  static getDerivedStateFromProps(nextProps) {
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null;
  }

  constructor(props) {
    super(props);

    const value = props.value || {};
    this.state = {
      value: value.value || [],
      text: value.text,
    }
  }

  onChange = e => {
    const { value, checked, type } = e.target;
    if (type === 'text') {
      this.setState({ text: value });
      this.triggerChange({ text: value });
    } else {
      const data = this.state.value;
      let text = this.state.text;
      let newValue = [];
      if (checked) {
        // ‘无’与‘其他’与‘...’
        if (value === '无') {
          newValue = ['无'];
          text = '';
        } else {
          newValue = [...data, value];
          const index = data.findIndex(e => e === '无');
          if (index > -1) {
            newValue = [...newValue.slice(0, index), ...newValue.slice(index + 1)];
          }
        }
      } else {
        const index = data.findIndex(e => e === value);
        newValue = [...data.slice(0, index), ...data.slice(index + 1)];
      }
      const changedValue = {
        value: newValue,
        text
      };

      this.setState(changedValue);
      this.triggerChange(changedValue);
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
        {options.map(item => {
          const checked = value.includes(item.value);
          return (
            <Checkbox
              key={item.label}
              value={item.value}
              checked={checked}
              onChange={this.onChange}
              style={{
                marginLeft: 0,
                marginRight: '8px',
              }}
            >
              {item.label}
            </Checkbox>
          );
        })}
        {value.includes('其他') || value.includes('其它') ? <Input style={{ width: '180px' }} value={text} onChange={this.onChange} /> : null}
      </div>
    );
  }
}

CheckboxAndInput.propTypes = {
  options: PropTypes.array,
};

CheckboxAndInput.defaultProps = {
  options: [],
};

export default CheckboxAndInput;
