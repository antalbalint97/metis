/**
 * Photos of the studio for the Rólunk page.
 *
 * The first photo is the featured one in the studio card; the rest go into the
 * gallery below it. To add a new photo (e.g. a selfie with a guest), put an
 * optimized JPEG (max 1600px on the long edge, no EXIF) into
 * /public/images/studio/ and append an entry here.
 */
export type StudioPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Optional short caption shown under the photo, e.g. the guest's name and the date. */
  caption?: string;
};

export const STUDIO_PHOTOS: StudioPhoto[] = [
  {
    src: "/images/studio/studio-kamera.jpg",
    alt: "A Metis stúdió a kamera mögül, meleg esti fényben: a kamera kijelzőjén a két fotel, a mikrofonok és a laptop a Metis logóval.",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/studio/studio-szemben.jpg",
    alt: "A stúdió szemből: két szürke fotel egymás felé fordítva, előttük mikrofonállványok, kamera állványon és egy LED-lámpa, a falon három bakelitlemez.",
    width: 1200,
    height: 1600,
    caption: "Két fotel, két mikrofon, egy kamera.",
  },
  {
    src: "/images/studio/studio-oldalrol.jpg",
    alt: "A stúdió oldalról: a fotelek, a dohányzóasztal alatt sólámpa, előtérben a LED-lámpa és a kamera állványa.",
    width: 1200,
    height: 1600,
    caption: "Itt mennek a forgatások.",
  },
];
