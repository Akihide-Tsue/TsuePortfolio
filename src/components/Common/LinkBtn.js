import React from 'react';
import Button from '@material-ui/core/Button';
import './LinkBtn.scss'

const LinkBtn = (props) => {
  const { innerText } = props;
  return (
    <Button variant="contained" >{innerText}</ Button>
  )
}

export { LinkBtn }
