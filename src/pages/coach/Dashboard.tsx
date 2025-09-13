import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, 
  Target, 
  MapPin, 
  Search, 
  Filter, 
  Users, 
  TrendingUp,
  Award,
  Calendar,
  BarChart3,
  Eye,
  Star
} from "lucide-react";

const CoachDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedSport, setSelectedSport] = useState("");

  // Mock athlete data
  const athletes = [
    {
      id: 1,
      name: "Ravi Kumar",
      age: 17,
      location: "Mumbai, Maharashtra",
      sport: "Cricket",
      aiScore: 85,
      rank: "Top 5%",
      lastActive: "2 days ago",
      viewCount: 23,
      tests: 7
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 16,
      location: "Delhi, Delhi",
      sport: "Athletics",
      aiScore: 78,
      rank: "Top 15%",
      lastActive: "1 day ago",
      viewCount: 18,
      tests: 5
    },
    {
      id: 3,
      name: "Arjun Singh",
      age: 18,
      location: "Bangalore, Karnataka",
      sport: "Football",
      aiScore: 82,
      rank: "Top 8%",
      lastActive: "4 hours ago",
      viewCount: 31,
      tests: 9
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Target className="h-6 w-6 text-secondary" />
              <span className="text-lg font-semibold">Project Pragati</span>
            </div>
            <Badge className="bg-primary text-primary-foreground">
              <Shield className="h-3 w-3 mr-1" />
              Coach Portal
            </Badge>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-muted-foreground">Coach: Rajesh Patel</span>
            <Button variant="outline" size="sm">Settings</Button>
            <Link to="/">
              <Button variant="outline" size="sm">Sign Out</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Talent Discovery Dashboard</h1>
          <p className="text-muted-foreground">Discover and connect with exceptional athletes across India</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Athletes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">2,847</div>
              <p className="text-sm text-success mt-1">+127 this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">High Potential</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">284</div>
              <p className="text-sm text-muted-foreground mt-1">AI Score 80+</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">States Covered</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">28</div>
              <p className="text-sm text-muted-foreground mt-1">All India coverage</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Recent Assessments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">156</div>
              <p className="text-sm text-muted-foreground mt-1">This week</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="discovery" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="discovery">Talent Discovery</TabsTrigger>
            <TabsTrigger value="map">Geographic Map</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="discovery" className="space-y-6">
            {/* Search and Filters */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Search className="h-5 w-5" />
                  <span>Search & Filter Athletes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by name or location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="punjab">Punjab</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={selectedSport} onValueChange={setSelectedSport}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Sport" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cricket">Cricket</SelectItem>
                      <SelectItem value="athletics">Athletics</SelectItem>
                      <SelectItem value="football">Football</SelectItem>
                      <SelectItem value="badminton">Badminton</SelectItem>
                      <SelectItem value="basketball">Basketball</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="hero">
                    <Filter className="h-4 w-4 mr-2" />
                    Apply Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Athlete Results */}
            <div className="grid gap-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Discovered Athletes</h2>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>Showing {athletes.length} results</span>
                </div>
              </div>

              <div className="grid gap-4">
                {athletes.map((athlete) => (
                  <Card key={athlete.id} className="shadow-card hover:shadow-achievement transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <div>
                              <h3 className="text-lg font-semibold">{athlete.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {athlete.age} years • {athlete.location}
                              </p>
                            </div>
                            <Badge className="bg-success text-success-foreground">
                              {athlete.sport}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            <div>
                              <div className="text-sm text-muted-foreground">AI Potential Score</div>
                              <div className="text-2xl font-bold text-secondary">{athlete.aiScore}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Performance Rank</div>
                              <div className="text-lg font-semibold text-success">{athlete.rank}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Tests Completed</div>
                              <div className="text-lg font-semibold">{athlete.tests}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Profile Views</div>
                              <div className="text-lg font-semibold text-primary">{athlete.viewCount}</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col space-y-2 ml-6">
                          <Button variant="coach" size="sm">
                            <Eye className="h-4 w-4 mr-2" />
                            View Profile
                          </Button>
                          <Button variant="outline" size="sm">
                            <Star className="h-4 w-4 mr-2" />
                            Shortlist
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                          Last active: {athlete.lastActive}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Available for contact
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="map" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Geographic Talent Map</span>
                </CardTitle>
                <CardDescription>
                  Interactive map showing athlete distribution across India
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Interactive Map Coming Soon</h3>
                    <p className="text-muted-foreground">
                      Visual representation of athlete locations with color-coded AI potential scores
                    </p>
                  </div>
                </div>
                
                {/* Map Legend */}
                <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-3">Map Legend</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-destructive rounded-full"></div>
                      <span>90+ AI Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-secondary rounded-full"></div>
                      <span>80-89 AI Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-success rounded-full"></div>
                      <span>70-79 AI Score</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 bg-primary rounded-full"></div>
                      <span>Below 70</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Talent Distribution</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Exceptional (90+)</span>
                      <span className="text-sm font-medium">12 athletes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">High Potential (80-89)</span>
                      <span className="text-sm font-medium">184 athletes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Promising (70-79)</span>
                      <span className="text-sm font-medium">892 athletes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Developing (Below 70)</span>
                      <span className="text-sm font-medium">1,759 athletes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Regional Insights</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Maharashtra</span>
                      <span className="text-sm font-medium">478 athletes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Karnataka</span>
                      <span className="text-sm font-medium">312 athletes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Delhi</span>
                      <span className="text-sm font-medium">298 athletes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Punjab</span>
                      <span className="text-sm font-medium">287 athletes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CoachDashboard;