
import { Home, User, Code, Briefcase, GraduationCap, Mail, FolderOpen } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", icon: Home, href: "#hero" },
  { title: "About", icon: User, href: "#about" },
  { title: "Skills", icon: Code, href: "#skills" },
  { title: "Projects", icon: FolderOpen, href: "#projects" },
  { title: "Experience", icon: Briefcase, href: "#experience" },
  { title: "Education", icon: GraduationCap, href: "#education" },
  { title: "Contact", icon: Mail, href: "#contact" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Sidebar className="border-r border-border/40 backdrop-blur-sm bg-background/95">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-semibold text-primary mb-4">
            {!isCollapsed && "Portfolio"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleNavClick(item.href)}
                    tooltip={isCollapsed ? item.title : undefined}
                    className="w-full justify-start hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                  >
                    <item.icon className="h-5 w-5" />
                    {!isCollapsed && <span className="ml-3">{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
