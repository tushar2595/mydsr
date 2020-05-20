import React from 'react';
import { Button } from 'antd';
const CustomButton = (props) => {
  return (
    <Button htmlType={props.htmlType} onClick={props.handleClick} >{props.label}</Button>
  )
}
export default CustomButton;