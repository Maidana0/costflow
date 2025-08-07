import { Calendar, Home, Inbox, Search, Settings, UserCog, UserPen, UserPlus, Users, UserSearch, UserX } from "lucide-react"



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


export const userNavMenuItems = [
  {
    title: "Bassic Settings",
    items: bassicsItems
  },
]

export const adminNavMenuItems = [
  ...userNavMenuItems,
  {
    title: "Users Settings",
    items: userItems,
  },
]

