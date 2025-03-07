import React from 'react'
import styled from 'styled-components'

function About() {
  const Button = styled.button`
    background-color: green;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px
    &:hover {
    background-color: blue;
    }
  `
  return (
    <div className='h-screen'>
        <h1>About Us</h1>
        <Button>Click me</Button>
    </div>
  )
}

export default About