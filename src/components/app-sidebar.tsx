"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
  SquareTerminal,
  ArrowDownUp,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Produk",
      url: "/admin/product/list",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "List Produk",
          url: "/admin/product/list",
        },
        {
          title: "Tambah Produk",
          url: "/admin/product/create",
        },
      ],
    },
    {
      title: "Menejemen Data",
      url: "/admin/product/list",
      icon: ArrowDownUp,
      isActive: true,
      items: [
        {
          title: "List Costumer",
          url: "/admin/costumer",
        },
        {
          title: "List Transaksi",
          url: "/admin/costumer/transaction",
        },
      ],
    },
    // {
    //   title: "Costumer",
    //   url: "/costumer",
    //   icon: SquareTerminal,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "Halaman Costumer",
    //       url: "/costumer",
    //     },
    //   ],
    // },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
