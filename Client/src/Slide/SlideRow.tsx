import { useState } from "react";
import { Offcanvas, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ShoeDto } from "../Shared/types";
import ShoeCanvas from "./ShoeCanvas";
import './SlideRow.scss';

function SlideRow(shoes: ShoeDto[]) {
    const [ showSidebar, setShowSidebar ] = useState(false);
    const [ sideBarContent, setSideBarContent ] = useState<ShoeDto | null>(null);

    const handleClose = () => setShowSidebar(false);
    const handleShow = (shoe: ShoeDto) => {
        setSideBarContent(shoe)
        setShowSidebar(true);
    }

    return (
        <>
        <div className="d-flex justify-content-around w-50">
            {shoes.map((shoe, i) =>
                <OverlayTrigger
                    key={i}
                    placement="bottom"
                    delay={{ show: 200, hide: 1 }}
                    overlay={
                        <Tooltip>
                            <strong>{shoe.name}</strong>
                        </Tooltip>
                    }
                    >
                    <img
                        alt={shoe.modelName}
                        onClick={() => handleShow(shoe)}
                        src={`./img/${shoe.modelName}.png`}
                        />
                </OverlayTrigger>
            )}
        </div>
        <Offcanvas
            show = {showSidebar}
            onHide = {handleClose}
            placement = {'end'}
            scroll = {true}
            backdrop = {true}
            id = "off-canvas"
            >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <strong>{sideBarContent?.name}</strong>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ShoeCanvas modelName={sideBarContent?.modelName} cameraPos={sideBarContent?.cameraPos} />
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}

export default SlideRow;
