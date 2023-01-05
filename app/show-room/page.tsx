"use client";

import { useState } from "react";
import PhotoAlbum from "react-photo-album";
// @ts-ignore
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
// @ts-ignore
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// @ts-ignore
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// @ts-ignore
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// @ts-ignore
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import Container from "../../components/ui/Container";

import gallery from "../../sampledata/gallery";

const ShowRoom = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <Container>
      <div className="mt-12 min-h-[500px]">
        <PhotoAlbum
          photos={gallery}
          layout="rows"
          targetRowHeight={150}
          onClick={(obj) => {
            setIndex(obj?.index);
            setOpen(true);
          }}
        />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={gallery}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        thumbnails={{
          borderRadius: 10,
        }}
      />
    </Container>
  );
};

export default ShowRoom;
