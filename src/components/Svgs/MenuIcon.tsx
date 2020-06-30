import React from 'react'

const MenuIcon = (props: any) => {
  const { style, fill } = props

  return (
    <svg style={style} width="4" height="15" viewBox="0 0 4 15">
      <path
        d="M2 3.75C3.1 3.75 4 2.90625 4 1.875C4 0.84375 3.1 0 2 0C0.9 0 0 0.84375 0 1.875C0 2.90625 0.9 3.75 2 3.75ZM2 5.625C0.9 5.625 0 6.46875 0 7.5C0 8.53125 0.9 9.375 2 9.375C3.1 9.375 4 8.53125 4 7.5C4 6.46875 3.1 5.625 2 5.625ZM2 11.25C0.9 11.25 0 12.0938 0 13.125C0 14.1562 0.9 15 2 15C3.1 15 4 14.1562 4 13.125C4 12.0938 3.1 11.25 2 11.25Z"
        fill={fill}
      />
    </svg>
  )
}

export default MenuIcon
