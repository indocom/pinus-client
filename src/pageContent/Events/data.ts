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
  rowStart: number;
  rowSpan: number;
  colStart: number;
  colSpan: number;
}

export const events: Array<EventInfo> = [
  {
    id: "pinus-ori",
    name: "PINUS Orientation",
    description:
      "Our very own annual freshman orientation programme that welcomes Indonesian \
      freshmen while providing a platform to foster friendship amongst PINUSians.",
    imageSrc: "/assets/images/blank.jpg",
    url: "/events/pinus-ori",
    options: {
      reverse: false,
      strips: [
        { color: "red", colStart: 1, colSpan: 12, rowStart: 1, rowSpan: 6 },
      ],
    },
  },
  {
    id: "nusantaraku",
    name: "Nusantaraku",
    description:
      "A closing to PINUS Orientation, a freshmen-led initiative to plan a day's \
      worth of events that coincides with Indonesia’s Independence Day.",
    imageSrc: "/assets/images/blank.jpg",
    url: "/events/nusantaraku",
    options: {
      reverse: true,
      strips: [
        { color: "red", colStart: 3, colSpan: 8, rowStart: 2, rowSpan: 2 },
      ],
    },
  },
  {
    id: "popi",
    name: "POPI",
    description:
      "Pekan Olahraga Pelajar Indonesia (POPI) is an annual student-led sporting \
      event aiming to bring together Indonesian students in Singapore. Hosted by \
      PINUS, for Indonesian students in Singapore",
    imageSrc: "/assets/images/blank.jpg",
    url: "/events/popi",
    options: {
      reverse: false,
      strips: [
        { color: "red", colStart: 3, colSpan: 8, rowStart: 2, rowSpan: 2 },
      ],
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
    imageSrc: "/assets/images/blank.jpg",
    url: "/events/mkp",
    options: {
      reverse: false,
      strips: [
        { color: "red", colStart: 3, colSpan: 8, rowStart: 2, rowSpan: 2 },
      ],
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
    imageSrc: "/assets/images/blank.jpg",
    url: "/events/nuansa",
    options: {
      reverse: true,
      strips: [
        { color: "red", colStart: 3, colSpan: 8, rowStart: 2, rowSpan: 2 },
      ],
    },
  },
];
