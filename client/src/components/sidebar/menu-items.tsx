import { Calculator, ChartColumn, FlaskConical, Home, Package, Settings, Users } from "lucide-react"


const itemsNavigation = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ChartColumn
  },
  {
    title: "Raw Materials",
    url: "#",
    icon: Package
  },
  {
    title: "Product Creator",
    url: "#",
    icon: FlaskConical
  }, {
    title: "Production Calculator",
    url: "#",
    icon: Calculator
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

const menuItems = {
  navigation: itemsNavigation,
  admin: [
    {
      title: "Users",
      url: "#",
      icon: Users,
    }
  ],
}


export default menuItems;