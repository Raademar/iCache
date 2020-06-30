import React from 'react'

const UserIcon = (props: any) => {
  const { style, fill } = props

  return (
    <svg width="15" height="17" viewBox="0 0 15 17" style={style}>
      <path
        d="M10.8439 4.46154C10.7061 6.36791 9.29703 7.92308 7.75015 7.92308C6.20328 7.92308 4.79175 6.36827 4.6564 4.46154C4.51578 2.47837 5.88687 1 7.75015 1C9.61343 1 10.9845 2.51442 10.8439 4.46154Z"
        stroke="#F4F6F8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75009 10.2308C4.69149 10.2308 1.58719 11.9615 1.01274 15.2284C0.943484 15.6221 1.16075 16 1.56259 16H13.9376C14.3398 16 14.557 15.6221 14.4878 15.2284C13.913 11.9615 10.8087 10.2308 7.75009 10.2308Z"
        stroke="#F4F6F8"
        strokeMiterlimit="10"
      />
    </svg>
  )
}

export default UserIcon
