import React from 'react'

export const Display = ({ balls, strikes }) => {
    return (
        <div className="display" data-testid="display">
            <h1>Display</h1>
            <span data-testid="strikes">strikes: {strikes}</span>
            <span data-testid="balls">balls: {balls}</span>
        </div>
    )
}