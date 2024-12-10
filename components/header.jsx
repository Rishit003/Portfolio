import React from 'react'

const header = () => {
  return (
    <header class = 'header container'>
      <nav>
        <ul class = 'header__menu'>
          <li><a href="#about" class = 'header__link'>About</a></li>
          <li><a href="#projects" class = 'header__link'>Projects</a></li>
          <li><a href="#contact" class = 'header__link'>Contact Me</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default header