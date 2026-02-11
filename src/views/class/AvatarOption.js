import React from 'react'

const AvatarOption = ({ data }) => {
  return (
    <div className="d-flex align-items-center gap-1">
      <img
        src={data.image || '/images/placeholder-avatar.png'}
        alt={data.label}
        className="select-avatar"
        onError={(e) => {
          e.target.src = '/images/placeholder-avatar.png'
        }}
      />
      <span>{data.label}</span>
    </div>
  )
}

export default AvatarOption
