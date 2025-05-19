import React from "react";
import Masonry from "react-masonry-css";
import "./MasonryGallery.css";

const images = [
  "https://www.pdcenterlv.com/wp-content/uploads/2023/07/salon-workers-doing-1024x791.jpg",
  "https://images.prestigeonline.com/wp-content/uploads/sites/9/2023/09/25161021/shutterstock_1482331337-copy-1350x900.jpg",
  "https://cdn1.treatwell.net/images/view/v2.i13762573.w720.h480.xEF0BF30E/",
  "https://img.freepik.com/premium-photo/beautiful-brunette-working-as-hairdresser-cuts-ends-client-s-hair-beauty-salon_323316-4857.jpg",
  "https://img.freepik.com/premium-photo/hairdresser-working-beauty-salon_274689-9030.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqVlbyh1J49lgVKgh7WcTmtFaYu3gfRbxRdSecUo31gB8sp15euEroeiaQovn_eZ7FLU&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3DOsqUrqez7Wd0EZfbdd2y95yohogwbBBtO0vWpsEKhXz148B9pFXUTUlDe3bJJpIMI&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCkTmNlJ11-V88iUA7XN2FGK4dcA-G_WWwUB_VVPubYNqMI32_cFUfE1l_fZC8zXrYr4&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxCkTmNlJ11-V88iUA7XN2FGK4dcA-G_WWwUB_VVPubYNqMI32_cFUfE1l_fZC8zXrYr4&usqp=CAU",
  "https://content.jdmagicbox.com/comp/raichur/r6/9999p8532.8532.230201223601.l3r6/catalogue/perfection-salon-raichur-beauty-parlours-3v7fo2496x.jpg",
  "https://media.istockphoto.com/id/1497806504/photo/hair-styling-in-beauty-salon-woman-does-her-hair-in-modern-beauty-salon-woman-stylist-dries.jpg?s=612x612&w=0&k=20&c=3dO_HWS8WvSGNbGmxTsqK70vZMGqM2REnbVJG09YnmI=",
];

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const MasonryGallery = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">We Style</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, index) => (
          <div key={index} className="masonry-item">
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="img-fluid rounded"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default MasonryGallery;
