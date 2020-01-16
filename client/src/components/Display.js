import React from 'react'

export const Display = ({ balls, strikes }) => {
    return (
        <div className="display" data-testid="display">
            <h1>Display</h1>
            <span data-testid="showStrikes">strikes: {strikes}</span>
            <span data-testid="showBalls">balls: {balls}</span>
        </div>
    )
}