
import { SidebarInset, SidebarProvider as Provider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";


const SidebarProvider = ({ children }: { children: ReactNode }) => {
	return (
		<Provider>
			<AppSidebar />
			<SidebarInset>
				<header className="flex h-11 shrink-0 items-center gap-2 border-b px-4">
					<SidebarTrigger className="-ml-1" />
					<Separator
						orientation="vertical"
						className="mr-2 data-[orientation=vertical]:h-4"
					/>
				</header>

				{children}

			</SidebarInset>


		</Provider >
	)
}

export default SidebarProvider;
