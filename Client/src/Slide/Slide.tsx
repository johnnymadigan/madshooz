import React from "react";
import './Slide.scss';

interface Props {
    reverse?: boolean
}

function Slide(props: Props) {

    // Duplicate set to give the illusion the slider is infinite
    return (
        <>
        <div className="position-relative overflow-hidden" style={{height: "100px"}}>
            <div className={`d-flex position-absolute animate ${(props.reverse) ? "reverse" : ""}`}>
                {SlideSet()}
                {SlideSet()}
            </div>
        </div>
        </>
    );
}

function SlideSet() {
    return (
        <>
        <div className="d-flex justify-content-around w-50">
            <a href="#"><img src="/img/yeezy-350-oat.png" alt="" /></a>
            <a href="#"><img src="/img/yeezy-350-oat.png" alt="" /></a>
            <a href="#"><img src="/img/yeezy-350-oat.png" alt="" /></a>
            <a href="#"><img src="/img/yeezy-350-oat.png" alt="" /></a>
        </div>
        </>
    );
}

export default Slide;
