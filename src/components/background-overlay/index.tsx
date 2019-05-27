import React, { ReactNode } from 'react';

import './index.css';

interface Props {
    children?: ReactNode
}

const BackgroundOverlay: React.FC = (props: Props) => {
    return (
        <div className="background_overlay__wrapper">
            {props.children}
        </div>
    );
}

export default BackgroundOverlay;