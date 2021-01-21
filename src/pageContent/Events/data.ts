export interface SectionInfo {
  id: string;
  data: EventData;
  options: EventOptions;
}

export interface EventData {
  name: string;
  description: string;
  url: string;
  imageSrc: string;
}

interface EventOptions {
  flip: boolean;
  strips: StripData[];
}

export interface StripData {
  color: "red" | "blue" | "yellow";
  col: [number, number];
  row: [number, number];
  style?: string;
}

const eventData = {
  "pinus-ori": {
    name: "PINUS Orientation",
    description:
      "Our very own annual freshman orientation programme that welcomes Indonesian \
      freshmen while providing a platform to foster friendship amongst PINUSians.",
    imageSrc: "/assets/images/pinus-ori.jpg",
    url: "/events/pinus-ori",
  },
  nusantaraku: {
    name: "Nusantaraku",
    description:
      "A closing to PINUS Orientation, a freshmen-led initiative to plan a day's \
      worth of events that coincides with Indonesia’s Independence Day.",
    imageSrc: "/assets/images/nusantaraku.jpg",
    url: "/events/nusantaraku",
  },
  popi: {
    name: "Pekan Olahraga Pelajar Indonesia",
    description:
      "Pekan Olahraga Pelajar Indonesia (POPI) is an annual student-led sporting \
      event aiming to bring together Indonesian students in Singapore. Hosted by \
      PINUS, for Indonesian students in Singapore",
    imageSrc: "/assets/images/popi.jpg",
    url: "/events/popi",
  },
  mkp: {
    name: "Misi Kami Peduli",
    description:
      "Misi Kami Peduli (MKP) is a community service project which aims to empower \
      underprivileged Indonesian communities. MKP's projects focus on three key \
      pillars: Education, Community Empowerment and Technology to alleviate the \
      socio-economic challenges in the local communities.",
    imageSrc: "/assets/images/mkp.jpg",
    url: "/events/mkp",
  },
  nuansa: {
    name: "NUANSA",
    description:
      "Through contemporary musical theatre, NUANSA Cultural Productions attempt to \
      showcase the beauty and diversity of Indonesian cultures. It consistently \
      endeavors to bring the audience through an immersive journey by ensuring the \
      cultural authenticity and artistic integrity of its shows and events.",
    imageSrc: "/assets/images/nuansa-2.jpg",
    url: "/events/nuansa",
  },
};

export const sections: Array<SectionInfo> = [
  {
    id: "pinus-ori",
    data: eventData["pinus-ori"],
    options: {
      flip: false,
      strips: [
        { color: "yellow", col: [1, 4], row: [1, 4] },
        {
          color: "red",
          col: [1, 12],
          row: [2, 4],
          style: `mt-10 lg:mt-5 ml-10 lg:ml-3`,
        },
      ],
    },
  },
  {
    id: "nusantaraku",
    data: eventData["nusantaraku"],
    options: {
      flip: true,
      strips: [
        {
          color: "red",
          col: [1, 12],
          row: [3, 4],
          style: `-ml-20 lg:-ml-3`,
        },
        {
          color: "blue",
          col: [1, 12],
          row: [2, 4],
          style: `mt-10 -ml-20 lg:-ml-3`,
        },
      ],
    },
  },
  {
    id: "popi",
    data: eventData["popi"],
    options: {
      flip: false,
      strips: [
        {
          color: "yellow",
          col: [1, 12],
          row: [2, 5],
          style: `mt-5 lg:mt-0 ml-20 lg:ml-3`,
        },
      ],
    },
  },
  {
    id: "mkp",
    data: eventData["mkp"],
    options: {
      flip: false,
      strips: [
        {
          color: "red",
          col: [1, 12],
          row: [2, 4],
          style: `mt-10 lg:mt-5 -ml-10 lg:-ml-3`,
        },
      ],
    },
  },
  {
    id: "nuansa",
    data: eventData["nuansa"],
    options: {
      flip: true,
      strips: [
        {
          color: "blue",
          col: [1, 12],
          row: [2, 4],
          style: `mt-10 lg:mt-5 -ml-20 lg:-ml-5`,
        },
      ],
    },
  },
];
