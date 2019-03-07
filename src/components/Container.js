import React from 'react'




const Container = ({ addVisitors, numOfVisitors, resetVisitors }) => {
    const secondChance = () => {

        if (window.confirm('Are you sure you want to reset the number of Visitors?')) {resetVisitors();}

    }

    return (
        <div className="container">
            <h1>Number of Visitors : <span>{numOfVisitors}</span></h1>
            <div className="btns">
                <button className="btn blue lighten-2" onClick={addVisitors}>Add</button>
                <button className="btn blue lighten-2" onClick={secondChance}>Reset</button>
            </div>
        </div>
    )
}

export default Container

