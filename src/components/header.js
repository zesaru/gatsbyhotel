import React from "react"
import { css } from "@emotion/core"

const header = () => {
  return (
    <header
      css={css`
        background-color: #333;
        padding: 1rem;
        @media (minwidth: 768px) {
          display: flex;
          alignitems: center;
          justify-content: space-between;
        }
      `}
    >
      <div>
        <h1>Hotel Gastsby</h1>
      </div>
    </header>
  )
}

export default header
