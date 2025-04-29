
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Eye, Edit, Trash2, Search, Filter } from 'lucide-react';

// Mock project data
const initialProjects = [
  {
    id: 1,
    name: "Downtown Office Complex",
    location: "New York, NY",
    status: "In Progress",
    startDate: "2024-01-15",
    endDate: "2025-03-30",
    thumbnail: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=300&h=200",
  },
  {
    id: 2,
    name: "Riverside Apartments",
    location: "Chicago, IL",
    status: "Completed",
    startDate: "2023-05-10",
    endDate: "2024-02-28",
    thumbnail: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&w=300&h=200",
  },
  {
    id: 3,
    name: "Retail Shopping Center",
    location: "Los Angeles, CA",
    status: "Planning",
    startDate: "2024-07-01",
    endDate: "2026-01-15",
    thumbnail: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&w=300&h=200",
  },
  {
    id: 4,
    name: "Community Hospital Addition",
    location: "Dallas, TX",
    status: "In Progress",
    startDate: "2023-10-20",
    endDate: "2025-06-30",
    thumbnail: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=300&h=200",
  },
  {
    id: 5,
    name: "Urban Mixed-Use Development",
    location: "Seattle, WA",
    status: "Planning",
    startDate: "2024-09-15",
    endDate: "2027-03-01",
    thumbnail: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?auto=format&fit=crop&w=300&h=200",
  },
];

const AdminProjects = () => {
  const [projects, setProjects] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(initialProjects);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    const filtered = projects.filter(project => 
      project.name.toLowerCase().includes(query) || 
      project.location.toLowerCase().includes(query) ||
      project.status.toLowerCase().includes(query)
    );
    
    setFilteredProjects(filtered);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const updatedProjects = projects.filter(project => project.id !== id);
      setProjects(updatedProjects);
      setFilteredProjects(updatedProjects.filter(project => 
        project.name.toLowerCase().includes(searchQuery) || 
        project.location.toLowerCase().includes(searchQuery) ||
        project.status.toLowerCase().includes(searchQuery)
      ));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button as={Link} to="/admin/projects/new">
          Add New Project
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Project Management</CardTitle>
          <div className="flex items-center gap-4 mt-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-8"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Timeline</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.length > 0 ? (
                  filteredProjects.map(project => (
                    <TableRow key={project.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img 
                            src={project.thumbnail} 
                            alt={project.name} 
                            className="h-10 w-14 object-cover rounded"
                          />
                          <span className="font-medium">{project.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>{project.location}</TableCell>
                      <TableCell>
                        <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                          project.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                          project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' : 
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>Start: {new Date(project.startDate).toLocaleDateString()}</div>
                          <div>End: {new Date(project.endDate).toLocaleDateString()}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="icon" as={Link} to={`/portfolio#project-${project.id}`}>
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" as={Link} to={`/admin/projects/${project.id}/edit`}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleDelete(project.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                      No projects found matching your search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminProjects;
