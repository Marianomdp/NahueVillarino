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
              "https://res.cloudinary.com/dnj3a7mfg/image/upload/v1685684571/202460719_vqn32h.jpg"
            }
            alt="Bariloche"
          />
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div style={{ maxWidth: "100%", maxHeight: "100vh" }}>
          <CImage
            className="d-block w-100 h-100"
            style={{ objectFit: "contain" }}
            src={
              "https://res.cloudinary.com/dnj3a7mfg/image/upload/v1685159617/Web%20Orden/Landscapes/Itacoatiara%20-%20Brasil/DSC_5487_aazyqj.jpg"
            }
            alt="Monkey"
          />
        </div>
      </CCarouselItem>
      <CCarouselItem>
        <div style={{ maxWidth: "100%", maxHeight: "100vh" }}>
          <CImage
            className="d-block w-100 h-100"
            style={{ objectFit: "contain" }}
            src={
              "https://res.cloudinary.com/dnj3a7mfg/image/upload/v1685159621/Web%20Orden/Landscapes/Itaipu%20-%20Brasil/DSC_8289_Fin_de_Tarde_Itaipu_usvmiq.jpg"
            }
            alt="Brasil"
          />
        </div>
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carousel;
