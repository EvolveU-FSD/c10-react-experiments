import React, { useState, useEffect } from "react";
import Photo from "./Photo";

const ParentComponent = () => {
  const [photo, setPhoto] = useState(false);
  const [photoNumber, setPhotoNumber] = useState(0);
  useEffect(() => {
    console.log("photoNumber changed");
    const fetchPhoto = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/photos/" + photoNumber
      );
      const data = await res.json();
      console.log("got photo");
      setPhoto(data);
    };
    setPhoto(false);
    if (photoNumber === 0) {
      console.log("photoNumber is 0");
      return;
    }
    console.log("fetching a photo");
    fetchPhoto();
  }, [photoNumber]);
  return (
    <div>
      <button onClick={() => setPhotoNumber(photoNumber + 1)}>Next</button>
      {photoNumber > 0 ? <Photo photo={photo} /> : <p>No photo 0</p>}
    </div>
  );
};

export default ParentComponent;
