import { Calculator, Calendar, ChartColumn, FlaskConical, Home, Inbox, Package, Search, Settings, UserCog, UserPen, UserPlus, Users, UserSearch, UserX } from "lucide-react"



const bassicsItems = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]


const userItems = [
  {
    title: "View Users",
    url: "#",
    icon: Users
  },
  {
    title: "Search User",
    url: "#",
    icon: UserSearch
  },
  {
    title: "Add User",
    url: "#",
    icon: UserPlus,
  },
  {
    title: "Edit User",
    url: "#",
    icon: UserPen,
  },
  {
    title: "Delete User",
    url: "#",
    icon: UserX,
  },
  {
    title: "Design Roles",
    url: "#",
    icon: UserCog,
  },
]


const adminNavigation = [
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
  }, {
    title: "Dashboard",
    url: "/dashboard",
    icon: ChartColumn
  },
]

export const userNavMenuItems = [
  {
    title: "Bassic Settings",
    items: bassicsItems
  },
]

export const adminNavMenuItems = [
  ...userNavMenuItems,
  {
    title: "Admin Actions",
    items: adminNavigation
  },
  {
    title: "Users Settings",
    items: userItems,
  },
]

