import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const items = [
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/403aa0165763581.640cfb8913b29.jpg",
    altText: "mountains",
    caption: "Twilight",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4f5cf4156824703.636db291cbaba.jpg",
    altText: "food",
    caption: "Specials",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/91481b165764775.640d0378d31a8.jpg",
    altText: "wave",
    caption: "Nature",
  },
];

export class Carrusel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "black",
            }}
          >
            <img
              src={item.src}
              alt={item.altText}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
              }}
            />
          </div>
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default Carrusel;
