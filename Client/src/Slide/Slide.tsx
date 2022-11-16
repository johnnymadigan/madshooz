import './Slide.scss';
import SlideRow from './SlideRow';
import { ShoeDto } from '../Shared/types';

interface SlideProps { shoes: ShoeDto[] }

function Slide(props: SlideProps) {
    return (
        <div className="position-relative overflow-hidden animate-wrapper" style={{height: "100px"}}>
            <div className="d-flex position-absolute animate">
                {/* Duplicate set to give the illusion of an infinite slider */}
                {SlideRow(props.shoes)}
                {SlideRow(props.shoes)}
            </div>
        </div>
    );
}

export default Slide;
