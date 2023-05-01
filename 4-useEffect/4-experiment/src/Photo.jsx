import Loading from "./Loading";

function Photo(props) {
  const photo = props.photo;

  console.log("photo component rendered");
  console.log("value of photo is", photo);
  return (
    <div>
      {photo ? (
        <img key={photo.id} src={photo.url} alt={photo.title} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Photo;
