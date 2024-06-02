import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./dragphoto.css";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop({handleChange}) {

  return (
    <>
    <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes} /></>
  );
}

export default DragDrop;