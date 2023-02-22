import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://twitter.com", icon: "fab fa-twitter" },
  { id: 2, href: "https://facebook.com", icon: "fab fa-facebook" },
  { id: 3, href: "https://linkedin.com", icon: "fab fa-linkedin" },
  { id: 4, href: "https://instagram.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea vel earum molestias.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Soufflé icing soufflé gummies tart gummi bears wafer brownie bonbon. Halvah ice cream danish pudding icing.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Jelly topping pudding brownie tiramisu apple pie fruitcake dessert bear claw. Bonbon croissant pudding.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    data: "Aug 26th, 2023",
    title: "Tibet Adventure",
    info: "Curabitur sed purus non quam tristique eleifend id nec est. Aenean erat ante, bibendum id ligula sed, rutrum scelerisque tortor. Donec elementum enim bibendum pulvinar fermentum. Aliquam interdum quam sit amet dolor tincidunt blandit",
    location: "Tibet",
    duration: 6,
    price: 4800,
  },
  {
    id: 2,
    image: tour2,
    data: "Mar 26th, 2023",
    title: "Papua New Guinea",
    info: "Curabitur sed purus non quam tristique eleifend id nec est. Aenean erat ante, bibendum id ligula sed, rutrum scelerisque tortor. Donec elementum enim bibendum pulvinar fermentum. Aliquam interdum quam sit amet dolor tincidunt blandit",
    location: "New Guinea",
    duration: 5,
    price: 3500,
  },
  {
    id: 3,
    image: tour3,
    data: "Jan 26th, 2023",
    title: "City of Lights Hongkong",
    info: "Curabitur sed purus non quam tristique eleifend id nec est. Aenean erat ante, bibendum id ligula sed, rutrum scelerisque tortor. Donec elementum enim bibendum pulvinar fermentum. Aliquam interdum quam sit amet dolor tincidunt blandit",
    location: "Hongkong",
    duration: 5,
    price: 5900,
  },
];
