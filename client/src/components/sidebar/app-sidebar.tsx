
import ContentSidebar from "@/components/sidebar/content-sidebar"
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SquareChartGantt } from "lucide-react"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="bg-accent-foreground text-accent h-11">
        <SidebarMenu>
          <SidebarMenuItem className="gap-2 flex align-middle items-center justify-start">
            <SquareChartGantt className="sizes-full shrink-0" />
            <span className="text-xl font-semibold">CostFlow</span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <ContentSidebar />
      <SidebarRail />

      <SidebarFooter>
        <span className="text-xs opacity-80 text-center">V.1.0.0</span>
      </SidebarFooter>
    </Sidebar>
  )
}
