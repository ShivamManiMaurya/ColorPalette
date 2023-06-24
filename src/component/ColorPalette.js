import { useState } from "react";
import { CompactPicker, GithubPicker } from "react-color";

function ColorPalette() {
    const [color, setColor] = useState("000000");

    const handleChangeComplete = (color) => {
        setColor(color.hex);
    };

    const bgStyle = {
        backgroundColor: color,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div className="App" style={bgStyle}>
            <GithubPicker
                color={color}
                onChangeComplete={handleChangeComplete}
            />
        </div>
    );
}

export default ColorPalette;
