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
import CreateButton from "./createbutton";

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
    <Sidebar className="flex flex-col h-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <SidebarHeader className="font-bold text-xl px-6 py-4">Video Generator</SidebarHeader>
      <SidebarContent className="flex-grow px-3">
      <SidebarGroup>
        <SidebarGroupContent>
        <SidebarMenu>
            <div className="mb-4 w-full">
            <CreateButton  />
            </div>
          {items.map((item) => (
          <SidebarMenuItem 
            className="h-12 mb-1 rounded-md transition-colors hover:bg-accent" 
            key={item.title}
          >
            <SidebarMenuButton asChild>
            <Link href={item.url} className="flex items-center gap-3 px-4">
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.title}</span>
            </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          ))}
        </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-4 pb-6">
        <div className="p-4 border border-border/40 shadow-sm text-sm flex flex-col gap-3 rounded-lg bg-card">
          <h2 className="font-semibold">Total Usage</h2>
          <Progress value={userDetail.credits * 10} className="h-2" />
          <h2 className="text-xs text-muted-foreground">
            {userDetail.credits} min used of 10 min
          </h2>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
