import React from "react"
import { API } from "../../backend";


const ImageHelper=({product})=>{
   const imageurl=product?
   `${API}/product/photo/${product._id}`
   :`https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?cs=srgb&dl=three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.jpg&fm=jpg`;
    return(
    <div className="rounded border border-success p-2">
            <img
            src={imageurl}
            alt="photo"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
              className="mb-3 rounded"
            />
    </div>
    );
}

export default ImageHelper;
