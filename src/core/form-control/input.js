import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

import {callFunc, hasValue} from 'basic-helper';
import Icon from '../icon';

export default class Input extends Component {
  constructor(props) {
    super(props);

    const {defaultValue, value} = props;

    this.isControl = props.hasOwnProperty('value');
    this.value = this.isControl ? value : defaultValue;

    this.state = {
      viewClass: this.value ? 'has-val' : 'normal',
      stateVal: this.value
    }
  }
  changeText(val) {

  }
  addForceClass() {
    this.setState({
      viewClass: 'forcing'
    });
  }
  delForceClass() {
    this.setState({
      viewClass: hasValue(this.getValue()) ? 'has-val' : 'normal'
    });
  }
  focus() {
    this.refs.iconInput.focus();
  }
  select() {
    this.refs.iconInput.select();
  }
  getValue() {
    return this.isControl ? this.props.value : this.state.stateVal;
  }
  changeVal(val, elem) {
    if(this.isControl) {
      this.setState({
        stateVal: val
      });
    }
    callFunc(this.props.onChange)(val, elem);
  }
  render() {
    const {
      icon, placeholder, inputBtnConfig, type,
      className = 'form-control', children,
      onFocus, onBlur, onChange,
    } = this.props;
    const {viewClass = ''} = this.state;
    const value = this.getValue();

    const hasIcon = !!icon;

    const iconDOM = hasIcon ? (
      <Icon type={icon}/>
    ) : null;
    const titleDOM = (
      <span className="title">
        {iconDOM}
        <span className="text">{placeholder}</span>
      </span>
    );
    const inputBtnDOM = inputBtnConfig ? (
      <span
        className={"input-btn btn flat " + inputBtnConfig.className}
        onClick={() => {
          inputBtnConfig.action(this.refs.iconInput)
        }}>
        {inputBtnConfig.text}
      </span>
    ) : null;

    return (
      <div className={`input-control ${viewClass}${hasIcon ? ' has-icon' : ''}${inputBtnConfig ? ' has-btn' : ''}`}>
        <div className="input-con">
          <span className="input-group">
            {titleDOM}
            <input
              placeholder=""
              type={type}
              className={className}
              value={value}
              onFocus={e => {
                this.addForceClass();
                callFunc(onFocus)(e);
              }}
              onBlur={e => {
                this.delForceClass();
                callFunc(onBlur)(e);
              }}
              onChange={e => {
                const val = e.target.value;
                this.changeVal(val, e.target);
              }}
              ref="iconInput"
            />
          </span>
          {inputBtnDOM}
        </div>
        {children}
      </div>
    )
  }
}
Input.propTypes = {
  icon: PropTypes.string,
  inputProps: PropTypes.object,
  inputBtnConfig: PropTypes.object,
}
