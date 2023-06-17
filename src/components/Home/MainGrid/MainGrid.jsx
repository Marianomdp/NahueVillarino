import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./MainGrid.css";
import { useMediaQuery } from "@mui/material";

export default function Section() {
  const isTablet = useMediaQuery("(max-width: 1200px)");
  const isMobile = useMediaQuery("(max-width: 540px)");

  let cols = 3;
  if (isTablet) {
    cols = 2;
  }
  if (isMobile) {
    cols = 1;
  }
  return (
    <ImageList
      sx={{
        backgroundColor: "black",
        padding: "5px",
      }}
      cols={cols}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            className={"bw-to-color"}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/54b986164919601.63fed74d5f356.jpg",
    title: "aca",
  },
  {
    img: "https://res.cloudinary.com/dnj3a7mfg/image/upload/v1685159655/Web%20Orden/Wildlife/NGF_8250_drh4lo.jpg",
    title: "aca",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e94d99165763581.640cfb89187c3.jpg",
    title: "aca",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/87b780165763581.640cfb891a60f.jpg",
    title: "aca",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2deb63165763581.640cfb89159b0.jpg",
    title: "aca",
  },
  {
    img: "https://res.cloudinary.com/dnj3a7mfg/image/upload/v1685678340/Web%20Orden/Wildlife/NGF_4918_tn14su.jpg",
    title: "aca",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/e2dbe3165764775.640d0378cf8a3.jpg",
    title: "aca",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/3e29de165764775.640d0378d68bc.jpg",
    title: "aca",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/544dcb165764775.640d0378d15cc.jpg",
    title: "aca",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/91481b165764775.640d0378d31a8.jpg",
    title: "aca",
  },
  {
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/0a2d87165764775.640d0378ce9cf.jpg",
    title: "aca",
  },
  {
    img: "https://res.cloudinary.com/dnj3a7mfg/image/upload/v1685159588/Web%20Orden/Landscapes/Bariloche%20-%20Argentina/NGF_8152_dkjprp.jpg",
    title: "aca",
  },
];
