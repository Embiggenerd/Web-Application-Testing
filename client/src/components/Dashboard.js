import React from 'react'

export const Dashboard = ({ setStrikes, setBalls, balls, strikes }) => {
    const handleAddBall = () => {
        setBalls(balls + 1)
    }

    const handleAddStrike = () => {
        setStrikes(strikes + 1)
    }

    return (
        <div className="dashboard" data-testid="dashboard">
            <h1>Dashboard</h1>
            <button onClick={handleAddStrike}>Strike</button>
            <button onClick={handleAddBall}>Ball</button>
        </div>
    )
}