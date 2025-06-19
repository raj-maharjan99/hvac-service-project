import {
  Phone,
  Mail,
  MapPin,
  Star,
  Shield,
  Clock,
  Users,
  Wrench,
  Snowflake,
  Wind,
  Gauge,
  CheckCircle,
  Award,
  ThermometerSun,
} from "lucide-react";

export const navTitle = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Service",
    path: "/service",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

export const services = [
  {
    icon: <ThermometerSun className="h-8 w-8" />,
    title: "HVAC Installation",
    description:
      "Professional installation of energy-efficient heating and cooling systems",
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "AC & Heater Repair",
    description:
      "Fast, reliable repair services to get your system running smoothly",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Preventive Maintenance",
    description:
      "Regular maintenance to extend your system's life and efficiency",
  },
  {
    icon: <Wind className="h-8 w-8" />,
    title: "Indoor Air Quality",
    description:
      "Improve your home's air quality with advanced filtration systems",
  },
  {
    icon: <Gauge className="h-8 w-8" />,
    title: "Energy-Efficient Upgrades",
    description:
      "Upgrade to eco-friendly systems that save money and the environment",
  },
  {
    icon: <Snowflake className="h-8 w-8" />,
    title: "Thermostat Installation",
    description:
      "Smart thermostat installation for optimal comfort and savings",
  },
];

export const features = [
  {
    icon: <Clock className="h-6 w-6" />,
    title: "24/7 Emergency Service",
    description: "Available when you need us most",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Licensed & Insured",
    description: "Fully certified HVAC professionals",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Experienced Team",
    description: "Years of expertise in Houston climate",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "Satisfaction Guaranteed",
    description: "100% satisfaction on all services",
  },
];

export const serviceOptions = [
  { id: 1, name: "Select Service" },
  { id: 2, name: "AC Repair" },
  { id: 3, name: "Heater Repair" },
  { id: 4, name: "Installation" },
  { id: 5, name: "Maintenance" },
];
