import React from 'react';

const PaletteFooter = (props) => {
    const { paletteName, emoji } = props;
    return (
        <footer className="Palette-Footer">
            {paletteName}
            <span className="Emoji">
                {emoji}
            </span>
        </footer>
    );
};

export default PaletteFooter;