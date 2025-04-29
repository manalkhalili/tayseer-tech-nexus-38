
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Image,
  Mail,
  Users,
  Settings,
  LogOut,
  BarChart2
} from 'lucide-react';
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider
} from '@/components/ui/sidebar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const location = useLocation();
  
  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    window.location.href = '/admin/login';
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center px-2">
              <Link to="/" className="flex items-center">
                <img src="/lovable-uploads/5ff76fb1-f0b4-4556-9464-820a5130a055.png" alt="Logo" className="h-12 object-contain" />
              </Link>
              <div className="ml-2 text-lg font-semibold">Admin Panel</div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  as={Link} 
                  to="/admin/dashboard" 
                  isActive={location.pathname === '/admin/dashboard'}
                >
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  as={Link} 
                  to="/admin/projects" 
                  isActive={location.pathname.startsWith('/admin/projects')}
                >
                  <FileText />
                  <span>Projects</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  as={Link} 
                  to="/admin/services" 
                  isActive={location.pathname.startsWith('/admin/services')}
                >
                  <Users />
                  <span>Services</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  as={Link} 
                  to="/admin/media" 
                  isActive={location.pathname.startsWith('/admin/media')}
                >
                  <Image />
                  <span>Media Library</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  as={Link} 
                  to="/admin/analytics" 
                  isActive={location.pathname.startsWith('/admin/analytics')}
                >
                  <BarChart2 />
                  <span>Analytics</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  as={Link} 
                  to="/admin/messages" 
                  isActive={location.pathname.startsWith('/admin/messages')}
                >
                  <Mail />
                  <span>Messages</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  as={Link} 
                  to="/admin/settings" 
                  isActive={location.pathname.startsWith('/admin/settings')}
                >
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton onClick={handleLogout}>
                  <LogOut />
                  <span>Logout</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1 overflow-auto">
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
