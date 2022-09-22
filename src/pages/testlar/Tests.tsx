import React from 'react'
import { Link } from 'react-router-dom'
import Select from '../../components/select/Select'
import { StyledTests } from './TestStyle'

export default function Tests() {
  return (
    <StyledTests>
      <div className="container">
        <div className='selects'>
          <Select />
          <Select />
          <Select />
          <Select />
        </div>

      </div>

      <div className='tests'>
        <div className="container">
          <h1>Eng so'ngi testlar</h1>
          <div className='card_tests'>
            <section>
              <h3>Sinflar bo‘yicha aralash testlar</h3>
              <p>20.12.2021 / 30 ta savol / 65.25%</p>
            </section>
            <button type='button'><Link to='test_start'>Boshlash</Link></button>
          </div>
          <div className='card_tests'>
            <section>
              <h3>Sinflar bo‘yicha aralash testlar</h3>
              <p>20.12.2021 / 30 ta savol / 65.25%</p>
            </section>
            <button type='button'>Boshlash</button>
          </div>
          <div className='card_tests'>
            <section>
              <h3>Sinflar bo‘yicha aralash testlar</h3>
              <p>20.12.2021 / 30 ta savol / 65.25%</p>
            </section>
            <button type='button'>Boshlash</button>
          </div>
          <div className='card_tests'>
            <section>
              <h3>Sinflar bo‘yicha aralash testlar</h3>
              <p>20.12.2021 / 30 ta savol / 65.25%</p>
            </section>
            <button type='button'>Boshlash</button>
          </div>
          <div className='btn'>
            <button type='button'>Yana</button>
          </div>

        </div>

      </div>
    </StyledTests>
  )
}
