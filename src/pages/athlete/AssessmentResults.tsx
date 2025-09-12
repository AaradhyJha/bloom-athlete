import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Trophy, 
  TrendingUp, 
  Target,
  BarChart3,
  Download,
  Share2,
  Calendar,
  Zap,
  Activity,
  Timer,
  Award,
  Eye
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';

const AssessmentResults = () => {
  const { testId } = useParams();
  
  const [selectedMetric, setSelectedMetric] = useState('speed');

  // Mock data for different visualizations
  const overallScore = 82;
  const performanceData = [
    { time: '0s', speed: 0, acceleration: 0 },
    { time: '1s', speed: 2.1, acceleration: 3.2 },
    { time: '2s', speed: 5.8, acceleration: 4.1 },
    { time: '3s', speed: 8.2, acceleration: 2.8 },
    { time: '4s', speed: 9.1, acceleration: 1.2 },
    { time: '5s', speed: 9.5, acceleration: 0.5 },
  ];

  const radarData = [
    { subject: 'Speed', A: 85, fullMark: 100 },
    { subject: 'Acceleration', A: 78, fullMark: 100 },
    { subject: 'Technique', A: 82, fullMark: 100 },
    { subject: 'Consistency', A: 76, fullMark: 100 },
    { subject: 'Power', A: 88, fullMark: 100 },
    { subject: 'Efficiency', A: 79, fullMark: 100 },
  ];

  const comparisonData = [
    { category: 'Your Performance', value: 82 },
    { category: 'Age Group Average', value: 65 },
    { category: 'Elite Athletes', value: 95 },
  ];

  const biomechanicsData = [
    { joint: 'Knee Angle', optimal: 90, actual: 87, difference: -3 },
    { joint: 'Hip Extension', optimal: 180, actual: 175, difference: -5 },
    { joint: 'Ankle Angle', optimal: 110, actual: 112, difference: 2 },
    { joint: 'Stride Length', optimal: 2.2, actual: 2.1, difference: -0.1 },
  ];

  const pieData = [
    { name: 'Excellent', value: 35, color: '#22c55e' },
    { name: 'Good', value: 40, color: '#f59e0b' },
    { name: 'Needs Work', value: 25, color: '#ef4444' },
  ];

  const COLORS = ['#22c55e', '#f59e0b', '#ef4444'];

  // Test configuration
  const testConfig = {
    sprint: { name: "40m Sprint Speed Test", icon: Zap },
    agility: { name: "Cone Weaving Agility", icon: Target },
    "vertical-jump": { name: "Vertical Jump Power", icon: Trophy },
    balance: { name: "Single Leg Balance", icon: Activity },
    reaction: { name: "Reaction Time Test", icon: Timer },
    endurance: { name: "Cardio Step Test", icon: Activity }
  };

  const currentTest = testConfig[testId as keyof typeof testConfig] || testConfig.sprint;
  const IconComponent = currentTest.icon;

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-success";
    if (score >= 60) return "text-secondary";
    return "text-destructive";
  };

  const getScoreBadge = (score: number) => {
    if (score >= 90) return { text: "Exceptional", variant: "default" as const, bg: "bg-success" };
    if (score >= 80) return { text: "Excellent", variant: "secondary" as const, bg: "bg-secondary" };
    if (score >= 70) return { text: "Good", variant: "outline" as const, bg: "bg-primary" };
    if (score >= 60) return { text: "Average", variant: "outline" as const, bg: "bg-muted" };
    return { text: "Needs Improvement", variant: "destructive" as const, bg: "bg-destructive" };
  };

  const scoreBadge = getScoreBadge(overallScore);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/athlete/dashboard" className="flex items-center text-muted-foreground hover:text-foreground transition-smooth">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
            <div className="flex items-center space-x-2">
              <IconComponent className="h-6 w-6 text-secondary" />
              <span className="text-lg font-semibold">{currentTest.name} Results</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className={`w-20 h-20 ${scoreBadge.bg} rounded-full flex items-center justify-center shadow-achievement`}>
              <span className="text-3xl font-bold text-white">{overallScore}</span>
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold">Assessment Complete!</h1>
              <p className="text-xl text-muted-foreground">Here's your detailed performance analysis</p>
              <Badge className={`mt-2 ${scoreBadge.bg} text-white`}>
                <Award className="h-3 w-3 mr-1" />
                {scoreBadge.text}
              </Badge>
            </div>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our AI has analyzed over 12,000 body keypoints to provide you with comprehensive insights into your athletic performance.
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="shadow-card text-center">
            <CardContent className="p-4">
              <div className={`text-2xl font-bold ${getScoreColor(85)}`}>85</div>
              <div className="text-sm text-muted-foreground">Max Speed</div>
              <div className="text-xs text-success">+12% vs last test</div>
            </CardContent>
          </Card>
          <Card className="shadow-card text-center">
            <CardContent className="p-4">
              <div className={`text-2xl font-bold ${getScoreColor(78)}`}>78</div>
              <div className="text-sm text-muted-foreground">Acceleration</div>
              <div className="text-xs text-secondary">+5% vs average</div>
            </CardContent>
          </Card>
          <Card className="shadow-card text-center">
            <CardContent className="p-4">
              <div className={`text-2xl font-bold ${getScoreColor(82)}`}>82</div>
              <div className="text-sm text-muted-foreground">Technique</div>
              <div className="text-xs text-success">Excellent form</div>
            </CardContent>
          </Card>
          <Card className="shadow-card text-center">
            <CardContent className="p-4">
              <div className={`text-2xl font-bold ${getScoreColor(88)}`}>88</div>
              <div className="text-sm text-muted-foreground">Power Output</div>
              <div className="text-xs text-success">Top 15% in age group</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Analysis</TabsTrigger>
            <TabsTrigger value="biomechanics">Biomechanics</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Performance Timeline */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5" />
                    <span>Performance Timeline</span>
                  </CardTitle>
                  <CardDescription>Speed and acceleration throughout the test</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="speed" stroke="hsl(var(--secondary))" strokeWidth={3} dot={{ fill: "hsl(var(--secondary))" }} />
                      <Line type="monotone" dataKey="acceleration" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))" }} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Radar Chart */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="h-5 w-5" />
                    <span>Performance Radar</span>
                  </CardTitle>
                  <CardDescription>Multi-dimensional performance analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={90} domain={[0, 100]} />
                      <Radar name="Performance" dataKey="A" stroke="hsl(var(--secondary))" fill="hsl(var(--secondary))" fillOpacity={0.3} />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Insights */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="h-5 w-5" />
                  <span>AI Insights & Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-success mb-3">Strengths</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                        <span>Excellent power generation in first 3 seconds</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                        <span>Consistent stride length throughout the sprint</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                        <span>Strong hip extension at push-off phase</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-3">Areas for Improvement</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                        <span>Work on arm swing coordination for better balance</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                        <span>Focus on maintaining speed in final phase</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                        <span>Slight improvement needed in knee drive height</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="detailed" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Movement Quality Breakdown */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Movement Quality Analysis</CardTitle>
                  <CardDescription>Breakdown of technique scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center space-x-4 mt-4">
                    {pieData.map((entry, index) => (
                      <div key={entry.name} className="flex items-center space-x-2 text-sm">
                        <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: COLORS[index] }}></div>
                        <span>{entry.name}: {entry.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Phase Analysis */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Phase-by-Phase Breakdown</CardTitle>
                  <CardDescription>Performance across different sprint phases</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Start Phase (0-10m)</span>
                      <span className="text-sm text-success font-semibold">92/100</span>
                    </div>
                    <Progress value={92} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Excellent reaction time and initial acceleration</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Acceleration (10-20m)</span>
                      <span className="text-sm text-secondary font-semibold">85/100</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Strong power development, consistent form</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Max Speed (20-30m)</span>
                      <span className="text-sm text-success font-semibold">88/100</span>
                    </div>
                    <Progress value={88} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Peak velocity achieved efficiently</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Finish (30-40m)</span>
                      <span className="text-sm text-secondary font-semibold">76/100</span>
                    </div>
                    <Progress value={76} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Speed maintenance could be improved</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="biomechanics" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Joint Angles */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Biomechanical Analysis</CardTitle>
                  <CardDescription>Joint angles and movement efficiency</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {biomechanicsData.map((item, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{item.joint}</span>
                          <Badge variant={Math.abs(item.difference) <= 2 ? "default" : "secondary"}>
                            {item.difference > 0 ? '+' : ''}{item.difference}°
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Optimal: </span>
                            <span className="font-medium">{item.optimal}°</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Actual: </span>
                            <span className="font-medium">{item.actual}°</span>
                          </div>
                        </div>
                        <Progress 
                          value={Math.min(100, (item.actual / item.optimal) * 100)} 
                          className="mt-2 h-2" 
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Heat Map Visualization */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Movement Heat Map</CardTitle>
                  <CardDescription>Body segment activation patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/30 to-success/20 rounded-lg flex items-center justify-center relative overflow-hidden">
                    {/* Simulated heat map overlay */}
                    <div className="absolute inset-0">
                      <div className="absolute top-10 left-1/2 w-8 h-8 bg-secondary/60 rounded-full blur-sm"></div>
                      <div className="absolute top-20 left-1/3 w-12 h-6 bg-destructive/50 rounded-full blur-sm"></div>
                      <div className="absolute top-20 right-1/3 w-12 h-6 bg-destructive/50 rounded-full blur-sm"></div>
                      <div className="absolute top-32 left-1/2 w-6 h-16 bg-success/70 rounded-full blur-sm"></div>
                      <div className="absolute bottom-20 left-1/3 w-10 h-12 bg-secondary/80 rounded-full blur-sm"></div>
                      <div className="absolute bottom-20 right-1/3 w-10 h-12 bg-secondary/80 rounded-full blur-sm"></div>
                      <div className="absolute bottom-8 left-1/4 w-6 h-8 bg-primary/60 rounded-full blur-sm"></div>
                      <div className="absolute bottom-8 right-1/4 w-6 h-8 bg-primary/60 rounded-full blur-sm"></div>
                    </div>
                    
                    <div className="text-center z-10">
                      <Activity className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                      <p className="text-sm text-muted-foreground">Movement intensity visualization</p>
                    </div>
                  </div>
                  
                  {/* Legend */}
                  <div className="mt-4 flex justify-center space-x-4 text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-destructive rounded-full"></div>
                      <span>High Intensity</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-secondary rounded-full"></div>
                      <span>Medium</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span>Low</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Performance Comparison</CardTitle>
                <CardDescription>How you stack up against different groups</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="value" fill="hsl(var(--secondary))" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-12">
          <Link to="/athlete/assessment/select">
            <Button variant="hero" size="lg">
              <Trophy className="h-5 w-5 mr-2" />
              Take Another Test
            </Button>
          </Link>
          <Link to="/athlete/dashboard">
            <Button variant="outline" size="lg">
              <BarChart3 className="h-5 w-5 mr-2" />
              View All Results
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResults;