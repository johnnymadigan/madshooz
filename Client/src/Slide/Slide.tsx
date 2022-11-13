import './Slide.scss';

interface Props {
    set: Array<any>
}

function Slide(props: Props) {

    // Duplicate set to give the illusion the slider is infinite
    return (
        <>
        <div className="position-relative overflow-hidden animate-wrapper" style={{height: "100px"}}>
            <div className="d-flex position-absolute animate">
                {SlideSet(props.set)}
                {SlideSet(props.set)}
            </div>
        </div>
        </>
    );
}

function SlideSet(set: Array<any>) {
    return (
        <>
        <div className="d-flex justify-content-around w-50">
        {set.map(e =>
            <a href="#"><img src={`/img/${e.modelName}.png`} alt="" /></a>
        )}
        </div>
        </>
    );
}

export default Slide;
