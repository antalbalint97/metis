/**
 * Photos of the studio for the Rólunk page.
 *
 * They rotate in the slideshow of the studio card, in this order; the first
 * one is shown first. To add a new photo (e.g. a selfie with a guest), put an
 * optimized JPEG (max 1600px on the long edge, no EXIF) into
 * /public/images/studio/ and append an entry here.
 */
export type StudioPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional short caption shown over the bottom of the photo, e.g. the guest's name and the date. */
  caption?: string;
  /** Optional CSS object-position when the default centered crop cuts the wrong part. */
  position?: string;
};

export const STUDIO_PHOTOS: StudioPhoto[] = [
  {
    src: "/images/studio/studio-kamera.jpg",
    alt: "A Metis stúdió a kamera mögül, meleg esti fényben: a kamera kijelzőjén a két fotel, a mikrofonok és a laptop a Metis logóval.",
    width: 1600,
    height: 1200,
    caption: "A kamera mögül: így néz ki a stúdió felvétel előtt.",
  },
  {
    src: "/images/studio/studio-szemben.jpg",
    alt: "A stúdió szemből: két szürke fotel egymás felé fordítva, előttük mikrofonállványok, kamera állványon és egy LED-lámpa, a falon három bakelitlemez.",
    width: 1200,
    height: 1600,
    caption: "Két fotel, két mikrofon, egy kamera.",
    position: "50% 35%",
  },
  {
    src: "/images/studio/studio-oldalrol.jpg",
    alt: "A stúdió oldalról: a fotelek, a dohányzóasztal alatt sólámpa, előtérben a LED-lámpa és a kamera állványa.",
    width: 1200,
    height: 1600,
    caption: "Itt mennek a forgatások.",
    position: "50% 40%",
  },
];
