import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./MainGrid.css";

export default function Section() {
  return (
    <ImageList
      sx={{
        backgroundColor: "black",
        padding: "20px 20px 20px 20px",
        margin: 0,
      }}
      cols={3}
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
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/70ead5165763581.640cfb8914a7e.jpg",
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
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/868c87165764775.640d0378cdc20.jpg",
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
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c03703156997377.63715894cad0e.jpg",
    title: "aca",
  },
];
