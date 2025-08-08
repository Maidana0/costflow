"use client"
import { SidebarContent } from "@/components/ui/sidebar"
import NavGroup from "./nav-group"
import menuItems from "./menu-items"

const ContentSidebar = () => {
  return (
    <SidebarContent className="gap-1">
      <NavGroup items={menuItems.navigation} header="Navigation" />
      <NavGroup items={menuItems.admin} header="Admin" />
    </SidebarContent>
  )
}

export default ContentSidebar
