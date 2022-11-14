export interface ShoeDto {
    name: string;
    price?: number;
    stock?: number;
    modelName: string;
    cameraPos: CameraPos;
}

export interface CameraPos {
    x: number;
    y: number;
    z: number;
}
