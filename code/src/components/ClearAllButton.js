import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/Task'
import styled from 'styled-components/macro'



export const ClearAllButton = () => {

  const dispatch = useDispatch()

  const handleClearAllButtonClick = (props) => {
    dispatch(tasks.actions.removeAllItems(props.item))
  }

  return (

    <Button type="button" onClick={handleClearAllButtonClick}>CLEAR ALL</Button>

    // Could also be written like <Button type="button" onClick{(} => dispatch-function  CLEAR ALL</Button>

  )
}

const Button = styled.button`
  width: 70px;
  height: 20px;
  background-color: #8aa8e9;
  text-align: center;
  border-radius: 5px;
  font-size: 10px;
  font-weight: bold;
  color: white;
  // margin: 5px;
  padding: 3px;
`
