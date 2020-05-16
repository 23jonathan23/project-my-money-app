import React from 'react'

import If from '../If/If'

export default props => (
  <If test={!props.hide}>
    <div className='form-group has-feedback'>
      <input
        {...props.input}
        type={props.type}
        placeholder={props.placeholder}
        className='form-control'
        readOnly={props.readOnly}
      />
      <span
        className={`glyphicon glyphicon-${props.icon} form-control-feedback`}
      ></span>
    </div>
  </If>
)
