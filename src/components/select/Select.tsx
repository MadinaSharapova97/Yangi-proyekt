import React from 'react'
import styled from 'styled-components'

export default function Select() {
  return (
    <StyledSelect>
        <select>
            <option value="Sinfni tanlang">Sinfni tanlang1 </option>
            <option value="Sinfni tanlang">Sinfni tanlang2</option>
            <option value="Sinfni tanlang">Sinfni tanlang3</option>
        </select>

    </StyledSelect>
  )
}
const StyledSelect = styled.div`
     select{
        border: 1px solid rgba(49, 57, 73, 0.1);
        border-radius: 8px;
        width: 288px;
        height: 56px;
        color: #000;
        option{
          p{
            padding: 20px;
          }

        }
    }
`
