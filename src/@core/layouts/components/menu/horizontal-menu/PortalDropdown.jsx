import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

const PortalDropdown = ({ anchorRef, open, children }) => {
  const [style, setStyle] = useState({})

  useEffect(() => {
    if (open && anchorRef?.current) {
      const rect = anchorRef.current.getBoundingClientRect()

      setStyle({
        position: 'fixed',
        top: rect.bottom + 6, // space below navbar
        left: rect.left,
        zIndex: 99999
      })
    }
  }, [open, anchorRef])

  if (!open) return null

  return createPortal(
    <div style={style} className="portal-dropdown">
      {children}
    </div>,
    document.body
  )
}

export default PortalDropdown
