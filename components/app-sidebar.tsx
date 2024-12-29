"use client";
import { CircleUserRound, Home, Inbox, Coins, Settings } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Progress } from "@/components/ui/progress";
import { UserDetailContext } from "@/app/_context/UserDetailContext";
import { useContext } from "react";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/Dashboard",
    icon: Home,
  },
  {
    title: "Buy Credits",
    url: "/buy-credits",
    icon: Coins,
  },
  {
    title: "profile",
    url: "/profile",
    icon: CircleUserRound,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  return (
    <Sidebar className="flex flex-col h-full">
      <SidebarHeader className="font-bold">Video Generator</SidebarHeader>
      <SidebarContent className="flex-grow">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="h-10" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-3 mt-auto">
        <div className="p-3 border text-sm flex flex-col gap-2 absolute bottom-10 rounded-lg w-[90%] ">
          <h2 className="font-bold">Total Usage</h2>

          <Progress value={userDetail.credits * 10} />
          <h2 className="text-xs text-gray-500">
            {userDetail.credits} min used of 10 min
          </h2>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
