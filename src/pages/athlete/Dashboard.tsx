import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  User, 
  Trophy, 
  Target, 
  TrendingUp, 
  Calendar, 
  Video, 
  BarChart3,
  Award,
  MapPin,
  Clock,
  Plus
} from "lucide-react";

const AthleteDashboard = () => {
  const [aiPotentialScore] = useState(78);

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
            <Badge variant="secondary">Athlete Portal</Badge>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button variant="outline" size="sm">Sign Out</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Ravi!</h1>
          <p className="text-muted-foreground">Track your progress and continue your athletic assessment journey</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">AI Potential Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <div className="text-3xl font-bold text-secondary">{aiPotentialScore}</div>
                <Badge variant="secondary" className="text-xs">+5 this week</Badge>
              </div>
              <Progress value={aiPotentialScore} className="mt-3" />
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Assessments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">7</div>
              <p className="text-sm text-muted-foreground mt-1">Completed tests</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Performance Rank</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">Top 15%</div>
              <p className="text-sm text-muted-foreground mt-1">In your age group</p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Scout Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">23</div>
              <p className="text-sm text-muted-foreground mt-1">Profile views</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="assessments" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="assessments">Assessments</TabsTrigger>
                <TabsTrigger value="progress">Progress</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="assessments" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Assessment Tests</h2>
                  <Link to="/athlete/assessment/select">
                    <Button variant="hero">
                      <Plus className="h-4 w-4 mr-2" />
                      New Assessment
                    </Button>
                  </Link>
                </div>

                <div className="grid gap-4">
                  <Card className="shadow-card hover:shadow-achievement transition-smooth">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Video className="h-8 w-8 text-secondary" />
                          <div>
                            <CardTitle>Sprint Speed Test</CardTitle>
                            <CardDescription>40-meter sprint analysis</CardDescription>
                          </div>
                        </div>
                        <Badge className="bg-success text-success-foreground">Completed</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Time</div>
                          <div className="font-semibold">5.2 seconds</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Score</div>
                          <div className="font-semibold text-secondary">82/100</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Date</div>
                          <div className="font-semibold">Nov 15, 2024</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Target className="h-8 w-8 text-primary" />
                          <div>
                            <CardTitle>Agility Test</CardTitle>
                            <CardDescription>Cone weaving assessment</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">Recommended</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Test your lateral movement and direction change capabilities
                      </p>
                      <Link to="/athlete/assessment/record/agility">
                        <Button variant="achievement" className="w-full">
                          Start Assessment
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="shadow-card">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Trophy className="h-8 w-8 text-success" />
                          <div>
                            <CardTitle>Vertical Jump Test</CardTitle>
                            <CardDescription>Power and explosiveness measurement</CardDescription>
                          </div>
                        </div>
                        <Badge variant="outline">Available</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Measure your jumping ability and lower body power
                      </p>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="progress" className="space-y-6">
                <h2 className="text-2xl font-bold">Progress Tracking</h2>
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Performance Timeline</CardTitle>
                    <CardDescription>Your improvement over the last 6 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-secondary rounded-full"></div>
                          <div>
                            <div className="font-medium">Sprint Speed Improvement</div>
                            <div className="text-sm text-muted-foreground">5.6s → 5.2s (7% faster)</div>
                          </div>
                        </div>
                        <TrendingUp className="h-5 w-5 text-success" />
                      </div>
                      <div className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-success rounded-full"></div>
                          <div>
                            <div className="font-medium">AI Potential Score</div>
                            <div className="text-sm text-muted-foreground">65 → 78 (+13 points)</div>
                          </div>
                        </div>
                        <TrendingUp className="h-5 w-5 text-success" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <h2 className="text-2xl font-bold">Performance Analytics</h2>
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle>Detailed Metrics</CardTitle>
                    <CardDescription>AI-powered insights into your athletic performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Speed & Acceleration</span>
                          <span className="font-medium">85%</span>
                        </div>
                        <Progress value={85} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Agility & Coordination</span>
                          <span className="font-medium">72%</span>
                        </div>
                        <Progress value={72} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Power & Explosiveness</span>
                          <span className="font-medium">68%</span>
                        </div>
                        <Progress value={68} />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Endurance</span>
                          <span className="font-medium">79%</span>
                        </div>
                        <Progress value={79} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Athlete Profile</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Age:</span>
                  <span className="font-medium">17 years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Location:</span>
                  <span className="font-medium">Mumbai, Maharashtra</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sport:</span>
                  <span className="font-medium">Cricket, Athletics</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Height:</span>
                  <span className="font-medium">5'8"</span>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Edit Profile
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <div className="text-sm">
                    <div className="font-medium">Sprint test completed</div>
                    <div className="text-muted-foreground">2 days ago</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <div className="text-sm">
                    <div className="font-medium">Profile viewed by coach</div>
                    <div className="text-muted-foreground">3 days ago</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="text-sm">
                    <div className="font-medium">AI score improved</div>
                    <div className="text-muted-foreground">1 week ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-secondary text-secondary-foreground">🏃‍♂️</Badge>
                  <div className="text-sm">
                    <div className="font-medium">Speed Demon</div>
                    <div className="text-muted-foreground">Top 10% in sprint tests</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-success text-success-foreground">📈</Badge>
                  <div className="text-sm">
                    <div className="font-medium">Rising Star</div>
                    <div className="text-muted-foreground">Consistent improvement</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleteDashboard;