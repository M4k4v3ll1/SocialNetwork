import React, {FC} from 'react';
import iconsSprite from "../assets/img/icons-sprite.svg";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

const Icon: FC<IconPropsType> = ({iconId, width, height, viewBox}) => {
    return (
        <svg width={width || '50'} height={height || '50'} viewBox={viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`}/>
        </svg>
    );
};

export default Icon;