import React from 'react'

const OptionButton = ({ children, onClick }) => {
    return (
        <button onClick={onClick}>{children}</button>
    )
}

export default OptionButton