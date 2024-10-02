import React, {useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function HideNavAndFooter({ children }) {
    const location = useLocation();
    const [showNav, setShowNav] = useState();

    useEffect(() => {
        if(['/admin'].includes(location.pathname)) {
            setShowNav(false);
        }else {
            setShowNav(true);
        }
    }, [location])
  return (
    <div>
        {showNav && children}
    </div>
  )
}

export default HideNavAndFooter