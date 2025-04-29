
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Users, Calendar, Eye, FileText } from 'lucide-react';

// Mock data for dashboard statistics
const stats = [
  { 
    title: "Website Visitors", 
    value: "1,274", 
    change: "+12%", 
    trend: "up", 
    description: "vs. last week" 
  },
  { 
    title: "Project Views", 
    value: "432", 
    change: "+8%", 
    trend: "up", 
    description: "vs. last week" 
  },
  { 
    title: "Inquiry Submissions", 
    value: "24", 
    change: "-3%", 
    trend: "down", 
    description: "vs. last week" 
  },
  { 
    title: "User Engagement", 
    value: "67%", 
    change: "+5%", 
    trend: "up", 
    description: "vs. last week" 
  },
];

const recentMessages = [
  { id: 1, name: "John Smith", email: "john@example.com", subject: "Project Inquiry", date: "2 hours ago", read: false },
  { id: 2, name: "Sarah Johnson", email: "sarah@example.com", subject: "Service Quote", date: "5 hours ago", read: true },
  { id: 3, name: "Mike Anderson", email: "mike@example.com", subject: "Renovation Question", date: "1 day ago", read: true },
  { id: 4, name: "Emma Wilson", email: "emma@example.com", subject: "Commercial Project", date: "2 days ago", read: false },
];

const recentProjects = [
  { id: 1, name: "Downtown Office Complex", views: 125, inquiries: 8, status: "In Progress" },
  { id: 2, name: "Riverside Apartments", views: 93, inquiries: 5, status: "Completed" },
  { id: 3, name: "Retail Shopping Center", views: 78, inquiries: 2, status: "Planning" },
];

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                </div>
                <div className={`rounded-full p-2 ${stat.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {stat.trend === 'up' ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                </div>
              </div>
              <p className={`text-xs flex items-center mt-2 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Messages */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
            <CardDescription>Your latest contact form submissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map(message => (
                <div key={message.id} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium">{message.name}</h4>
                      {!message.read && <span className="ml-2 h-2 w-2 rounded-full bg-tayseer-orange"></span>}
                    </div>
                    <p className="text-sm text-muted-foreground">{message.subject}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{message.date}</span>
                </div>
              ))}
              <div className="mt-2">
                <a href="/admin/messages" className="text-sm text-tayseer-orange hover:underline">View all messages</a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Projects */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Projects</CardTitle>
            <CardDescription>Projects with the most views</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentProjects.map(project => (
                <div key={project.id} className="flex items-center justify-between border-b pb-3">
                  <div>
                    <h4 className="font-medium">{project.name}</h4>
                    <p className="text-sm text-muted-foreground">{project.status}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-xs">
                      <Eye className="mr-1 h-3 w-3" />
                      <span>{project.views} views</span>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <FileText className="mr-1 h-3 w-3" />
                      <span>{project.inquiries} inquiries</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-2">
                <a href="/admin/projects" className="text-sm text-tayseer-orange hover:underline">View all projects</a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4">
            <a href="/admin/projects/new" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Add New Project
            </a>
            <a href="/admin/services/new" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Add New Service
            </a>
            <a href="/admin/media/upload" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Upload Media
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
