import React from 'react'

export const Dashboard = ({ handleAddBall, handleAddStrike, handleAddHit, handleAddFoul }) => {

    return (
        <div className="dashboard" data-testid="dashboard">
            <h1>Dashboard</h1>
            <button data-testid="addFoul" onClick={handleAddFoul}>Foul</button>
            <button data-testid="addStrike" onClick={handleAddStrike}>Strike</button>
            <button data-testid="addBall" onClick={handleAddBall}>Ball</button>
            <button data-testid="addHit" onClick={handleAddHit}>Hit</button>
        </div>
    )
}