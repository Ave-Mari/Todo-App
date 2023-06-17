import React from 'react';
import { Wrapper } from './FilterButtons.styles'

export default function FilterButtons({showAll, showActive, showCompleted}) {  

  return (
    <Wrapper>
        <button onClick={showAll}>All</button>
        <button onClick={showActive}>Active</button>
        <button onClick={showCompleted}>Completed</button>
    </Wrapper>
  )
}
