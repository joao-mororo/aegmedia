import React from 'react'

const SocialButton = ({ children, as = 'button', href, onClick }) => {
    const As = as

    return (
        <As
            onClick={onClick}
            href={href}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </As>
    )
}

export default SocialButton