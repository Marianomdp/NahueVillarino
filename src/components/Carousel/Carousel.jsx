import "@coreui/coreui/dist/css/coreui.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Carousel = () => {
  return (
    <div style={{ marginTop: "60px" }}>
      <CCarousel controls transition="crossfade">
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={
              "https://res.cloudinary.com/dmqsnjyfq/image/upload/v1684877189/luna_edvvji.png"
            }
            alt="Twilight"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={
              "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4f5cf4156824703.636db291cbaba.jpg"
            }
            alt="Specials"
          />
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src={
              "https://mir-s3-cdn-cf.behance.net/project_modules/1400/72ff6b157219493.6374f9ffb54e6.jpg"
            }
            alt="Nature"
          />
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default Carousel;
