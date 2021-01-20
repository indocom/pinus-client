export interface EventInfo {
  id: string;
  name: string;
  description: string;
  url: string;
  imageSrc: string;
  options: EventOptions;
}

interface EventOptions {
  reverse: boolean;
  strips: StripOptions[];
}

export interface StripOptions {
  color: "red" | "blue" | "yellow";
  col: [number, number];
  row: [number, number];
  style?: string;
}

export const events: Array<EventInfo> = [
  {
    id: "pinus-ori",
    name: "PINUS Orientation",
    description:
      "Our very own annual freshman orientation programme that welcomes Indonesian \
      freshmen while providing a platform to foster friendship amongst PINUSians.",
    imageSrc: "/assets/images/pinus-ori.jpg",
    url: "/events/pinus-ori",
    options: {
      reverse: false,
      strips: [],
    },
  },
  {
    id: "nusantaraku",
    name: "Nusantaraku",
    description:
      "A closing to PINUS Orientation, a freshmen-led initiative to plan a day's \
      worth of events that coincides with Indonesia’s Independence Day.",
    imageSrc: "/assets/images/nusantaraku.jpg",
    url: "/events/nusantaraku",
    options: {
      reverse: true,
      strips: [],
    },
  },
  {
    id: "popi",
    name: "POPI",
    description:
      "Pekan Olahraga Pelajar Indonesia (POPI) is an annual student-led sporting \
      event aiming to bring together Indonesian students in Singapore. Hosted by \
      PINUS, for Indonesian students in Singapore",
    imageSrc: "/assets/images/popi.jpg",
    url: "/events/popi",
    options: {
      reverse: false,
      strips: [],
    },
  },
  {
    id: "mkp",
    name: "Misi Kami Peduli",
    description:
      "Misi Kami Peduli (MKP) is a community service project which aims to empower \
      underprivileged Indonesian communities. MKP's projects focus on three key \
      pillars: Education, Community Empowerment and Technology to alleviate the \
      socio-economic challenges in the local communities.",
    imageSrc: "/assets/images/mkp.jpg",
    url: "/events/mkp",
    options: {
      reverse: false,
      strips: [],
    },
  },
  {
    id: "nuansa",
    name: "NUANSA",
    description:
      "Through contemporary musical theatre, NUANSA Cultural Productions attempt to \
      showcase the beauty and diversity of Indonesian cultures. It consistently \
      endeavors to bring the audience through an immersive journey by ensuring the \
      cultural authenticity and artistic integrity of its shows and events.",
    imageSrc: "/assets/images/nuansa-2.jpg",
    url: "/events/nuansa",
    options: {
      reverse: true,
      strips: [],
    },
  },
];
