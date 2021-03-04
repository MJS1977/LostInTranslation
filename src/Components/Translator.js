import React, { useState } from "react";

function Translator() {
    const [value, setValue] = useState("")
    const [images, setImages] = useState([])


    const handleSubmit = (evt) => {
        evt.preventDefault()
        setImages(value.split(""))
        console.log(localStorage.getItem("translates"))
    }

    const onChange = (evt) => {
        setValue(evt.target.value);
        //setImages([...evt.target.value]);
    }

    const listImages = images.map((image) =>
        <img src={'./resources/signimgs/' + image + '.png'} alt={image}></img>
    );

    return (
        <div className="Translator">
            <div id="textbox">
                <span id="textelement">I translate words from english to sign language</span>
                <br></br>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={value} onChange={onChange} />
                <input type="submit" value="Submit" />
            </form>
            {images &&
                <div>{listImages}</div>
            }
        </div>
    );
}

export default Translator;