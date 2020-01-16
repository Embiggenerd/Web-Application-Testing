import React from 'react'

export const Display = ({ balls, strikes, outs, innings }) => {
    return (
        <div className="display" data-testid="display">
            <h1>Display</h1>
            <span data-testid="showStrikes">strikes: {strikes}</span>
            <span data-testid="showBalls">balls: {balls}</span>
            <span data-testid="showOuts">outs: {outs}</span>
            <span data-testid="showBalls">innings: {innings}</span>
        </div>
    )
}