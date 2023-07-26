import React, { createElement } from 'react'

const Button = ({element = 'button',  children,additionalStyle = '', ...props}) => {
  return createElement(element,{
    type: 'button',
    className: '  px-4 py-3 text-sm font-medium ' + additionalStyle,
    ...props
  }, children)
}

export default Button