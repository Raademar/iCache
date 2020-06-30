import React from 'react'

const FolderIcon = (props: any) => {
  const { style, fill } = props
  return (
    <svg style={style} width="20" height="16" viewBox="0 0 20 16">
      <path
        d="M8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2H10L8 0Z"
        fill={fill}
      />
    </svg>
  )
}

export default FolderIcon
