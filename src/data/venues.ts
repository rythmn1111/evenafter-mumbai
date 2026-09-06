import type { StaticImageData } from "next/image";
import conferenceImage from "@/assets/venue-conference.jpg";
import hackathonImage from "@/assets/venue-hackathon.jpg";

export type Venue = {
  image: StaticImageData;
  name: string;
  address: string;
  directionLink: string;
  pincode: string;
  details?: string[];
};

export const conferenceVenue: Venue = {
  image: conferenceImage,
  name: "Yashwantrao Chavan Centre",
  address: "General Jagannath Bhosle Road, Nariman Point,",
  directionLink: "https://maps.app.goo.gl/8sobRRBJxqF5ueqz6",
  pincode: "400021",
  details: [
    "5 min walk from Vidhan Bhavan Metro Station",
    "Direct metro connectivity from Mumbai Airport",
    "2 km from CST Station - Central Line",
    "1 km from Churchgate Station - Western Line",
    "Short walk to the Marine Drive",
  ],
};

export const hackathonVenue: Venue = {
  image: hackathonImage,
  name: "World Trade Center",
  address: "Ganesh Murti Nagar, Cuffe Parade,",
  directionLink: "https://maps.app.goo.gl/2eV6KSu1RPBnaFXaA",
  pincode: "400005",
  details: [
    "9 min walk from Cuffe Parade Metro Station",
    "Direct metro connectivity from Mumbai Airport",
    "4 km from CST Station – Central Line",
    "3 km from Churchgate Station – Western Line",
    "2 km from the Conference venue",
  ],
};
