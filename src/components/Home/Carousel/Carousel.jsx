import "@coreui/coreui/dist/css/coreui.min.css";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const Carousel = () => {
  return (
    <CCarousel
      interval={1500}
      controls
      transition="crossfade"
      loop={true}
      style={{
        opacity: 0.8,
        margin: "25px",
      }}
    >
      <CCarouselItem>
        <CImage
          style={{
            objectFit: "contain",
            borderRadius: "2%",
            border: "solid",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          src={
            "https://res.cloudinary.com/dnj3a7mfg/image/upload/v1685684571/202460719_vqn32h.jpg"
          }
          alt="Bariloche"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100 h-100"
          style={{
            objectFit: "contain",
            borderRadius: "2%",
            border: "solid",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          src={
            "https://res.cloudinary.com/dnj3a7mfg/image/upload/v1685159617/Web%20Orden/Landscapes/Itacoatiara%20-%20Brasil/DSC_5487_aazyqj.jpg"
          }
          alt="Monkey"
        />
      </CCarouselItem>
      <CCarouselItem>
        <CImage
          className="d-block w-100 h-100"
          style={{
            objectFit: "contain",
            borderRadius: "2%",
            border: "solid",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          src={
            "https://res.cloudinary.com/dnj3a7mfg/image/upload/v1685159621/Web%20Orden/Landscapes/Itaipu%20-%20Brasil/DSC_8289_Fin_de_Tarde_Itaipu_usvmiq.jpg"
          }
          alt="Brasil"
        />
      </CCarouselItem>
    </CCarousel>
  );
};

export default Carousel;
