import React from "react";

const SimpleCounter = ()=>{
    return(
        <>
        <div className="row d-flex justify-content-evenly py-4 bg-dark px-5">
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">
                <i class="fa-regular fa-clock"></i>
            </div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">0</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">0</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">0</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">0</div>
            <div className="col-1 bg-dark display-3 text-white text-center border border-2 border-secondary rounded fw-bolder">0</div>
        </div>


        </>
    )
}

export default SimpleCounter;