'use client'
import { useRef, useState } from "react"
import classes from "./image-picker.module.css"
import Image from "next/image"
export default function ImagePicker ({ label, name}) {
    const [pickedImage , setPickedImage ] = useState()
    const inputImage =  useRef();
    function handlefunction(){
        inputImage.current.click()
    }
    function handlePickerimage(event){
       const file = event.target.files[0] 
       if(!file) {
        setPickedImage (null);
        return
       }
       const fileReader = new FileReader();
       fileReader.onload = () =>{
        setPickedImage (fileReader.result);
       }
       fileReader.readAsDataURL(file);

    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.control}>
             <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {pickedImage && (<Image src={pickedImage} alt="The image selected by user"
                fill />)}
             </div>
                <input 
                 className={classes.input}
                 type = "file" 
                 id={name}
                 accept="image/png , image/jpej"
                 name = {name}
                 ref={inputImage}
                 onChange={handlePickerimage} required
                />
                <button className={classes.button} type="button" onClick={handlefunction}>Pick an image</button>
            </div>
        </div>
    )
}