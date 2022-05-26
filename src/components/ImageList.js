import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  //   console.log(props);
  console.log(props.images);
  //VAR 1, VAR 2
  const imagesNew = props.images.map((image) =>
    ///////////////////////////////////////////
    //VAR 3 gg111
    //   const imagesNew = props.images.map((description, id, urls) =>
    ////////////////////////////////////////
    {
      //       //VAR 1 (key in img)
      //       return (
      //         <img key={image.id} src={image.urls.regular} alt={image.decription} />
      //       );
      //     }
      //   );
      //VAR 2 (key in div)
      //     return (
      //       <div key={image.id}>
      //         <img src={image.urls.regular} alt={image.decription} />
      //       </div>
      //     );
      //   });
      //     //VAR 3
      return <ImageCard key={image.id} image={image} />;
    }
  );
  return <div className="image-list">{imagesNew}</div>;
  //return <div>ImageList</div>;
};
export default ImageList;
