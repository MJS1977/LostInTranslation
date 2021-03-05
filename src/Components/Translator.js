import React, { useState } from "react";

function Translator() {
    //state for form input
    const [formInputValue, setFormInputValue] = useState("")
    //array for translation characters. Maps 1:1 to image paths (e.g. for input b we want b.png)
    const [imagePaths, setImagePaths] = useState([])

    //handling form submission
    const handleSubmit = (evt) => {
        //prevent page refresh 
        evt.preventDefault()
        //if local stoarge has no translations add current one
        //translations are saved as a string, each translation is seperated with ';' 
        if (localStorage.getItem('translates') === null) {
            localStorage.setItem('translates', formInputValue);
            //else get the translations and add a new one
        } else {
            let translates = localStorage.getItem('translates')
            //split translations in an array
            let translateArray = translates.split(";")
            //max history of translations is 10. Remove the oldest one if history is full.
            if (translateArray.length > 9) {
                translateArray.shift();
                translates = translateArray.join(";")
            }
            //add new translation, use ';' as seperator
            translates += ";" + formInputValue
            localStorage.setItem('translates', translates);
        }
        //clear form input and displayed translations
        setFormInputValue("");
        setImagePaths([]);
        //console.log(localStorage.getItem("translates"))
    }

    //on every (character) input set setFormInputValue as the value in input field and add each individual character to imagePaths array 
    const onChange = (evt) => {
        let val = evt.target.value;
        setFormInputValue(val);
        setImagePaths([...val.toLowerCase()]);
    }

    //for testing, clears localstorage
    const clearLocalData = () => {
        localStorage.removeItem("translates")
    }

    //for each character in imagePaths array construct a <img>, use the character as path value, e.g.
    //character b maps to 'resources/signimgs/b.png'
    const listImages = imagePaths.map((imagePath) =>
        <img src={'../resources/signimgs/' + imagePath + '.png'} alt={imagePath}></img>
    );

    return (
        <div className="Translator">
            <div id="textbox">
                <span id="textelement">I translate words from english to sign language</span>
                <br></br>
                <span id="textelement2">By pressing 'save' the translation will be saved to your user account. Visit the profile section to see your last 10 queries</span>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formInputValue} onChange={onChange} />
                <input type="submit" value="Save translation" />
            </form>
            <button onClick={clearLocalData}>clear</button>
            {imagePaths &&
                <div>{listImages}</div>
            }

        </div>
    );
}

export default Translator;