import "@coreui/coreui/dist/css/coreui.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Carousel = () => {
  return (
    <CCarousel interval={3000} controls transition="crossfade">
      <CCarouselItem>
        <div style={{ maxWidth: "100%", maxHeight: "100vh" }}>
          <CImage
            className="d-block w-100 h-100"
            style={{ objectFit: "contain" }}
            src={
              "https://res.cloudinary.com/dnj3a7mfg/image/upload/v1685159612/Web%20Orden/Landscapes/Bariloche%20-%20Argentina/NGF_8544_jy51ag.jpg"
            }
            alt="Twilight"
          />
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div style={{ maxWidth: "100%", maxHeight: "100vh" }}>
          <CImage
            className="d-block w-100 h-100"
            style={{ objectFit: "contain" }}
            src={
              "https://res.cloudinary.com/dnj3a7mfg/image/upload/v1685159588/Web%20Orden/Landscapes/Bariloche%20-%20Argentina/NGF_8152_dkjprp.jpg"
            }
            alt="Specials"
          />
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div style={{ maxWidth: "100%", maxHeight: "100vh" }}>
          <CImage
            className="d-block w-100 h-100"
            style={{ objectFit: "contain" }}
            src={
              "https://res.cloudinary.com/dnj3a7mfg/image/upload/v1685159564/Web%20Orden/Landscapes/3%20de%20portada/DSC_4935_gd6brd.jpg"
            }
            alt="Nature"
          />
        </div>
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carousel;
