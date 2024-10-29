import React from "react";

const SecondsCounter = (props)=>{

    const { digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix } = props

    return(
        <>
        <div className="row d-flex justify-content-evenly py-4 bg-dark px-5">
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">
                <i class="fa-regular fa-clock"></i>
            </div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">{digitOne}</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">{digitTwo}</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">{digitThree}</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">{digitFour}</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">{digitFive}</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">{digitSix}</div>
        </div>
        </>
    )
}

export default SecondsCounter;