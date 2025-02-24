"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Building2, Users, Briefcase, LineChart, Bell, Settings } from "lucide-react"

const sidebarNavItems = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LineChart,
  },
  {
    title: "Startups",
    href: "/dashboard/startups",
    icon: Building2,
  },
  {
    title: "Investors",
    href: "/dashboard/investors",
    icon: Users,
  },
  {
    title: "Freelancers",
    href: "/dashboard/freelancers",
    icon: Briefcase,
  },
  {
    title: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2 p-4">
      {sidebarNavItems.map((item) => {
        const Icon = item.icon
        return (
          <Link key={item.href} href={item.href}>
            <Button
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn("w-full justify-start gap-2", pathname === item.href && "bg-muted")}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Button>
          </Link>
        )
      })}
    </nav>
  )
}

