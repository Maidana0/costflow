import { adminNavMenuItems } from "@/components/sidebar/menu-items"
import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { ChevronDown, LucideIcon } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"

type MenuItem = {
  title: string,
  url: string,
  icon?: LucideIcon,
  isActive?: boolean
}

const ContentSidebar = () => {
  return (
    <SidebarContent className="gap-1">

      {adminNavMenuItems.map((group) => (
        <Collapsible defaultOpen className="group/collapsible" key={group.title}>
          <SidebarGroup >
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                {group.title}
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>

                <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">

                  {group.items.map((item: MenuItem) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url}>
                          {item.icon && <item.icon />}
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </CollapsibleContent>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </Collapsible>

      ))}

    </SidebarContent>
  )
}

export default ContentSidebar
