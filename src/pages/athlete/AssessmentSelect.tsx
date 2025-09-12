import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  Target, 
  Timer, 
  Zap, 
  Activity, 
  Heart,
  Play,
  Info,
  Trophy
} from "lucide-react";
import { Link } from "react-router-dom";

const AssessmentSelect = () => {
  const assessmentTests = [
    {
      id: "sprint",
      name: "40m Sprint Speed Test",
      description: "Measure your acceleration and top speed over 40 meters",
      duration: "30 seconds",
      difficulty: "Beginner",
      icon: Zap,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      recommended: true
    },
    {
      id: "agility",
      name: "Cone Weaving Agility",
      description: "Test lateral movement and direction change capabilities",
      duration: "45 seconds",
      difficulty: "Intermediate",
      icon: Target,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: "vertical-jump",
      name: "Vertical Jump Power",
      description: "Measure explosive power and lower body strength",
      duration: "20 seconds",
      difficulty: "Beginner",
      icon: Trophy,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      id: "balance",
      name: "Single Leg Balance",
      description: "Assess stability and proprioceptive control",
      duration: "60 seconds",
      difficulty: "Advanced",
      icon: Activity,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: "reaction",
      name: "Reaction Time Test",
      description: "Measure visual-motor response speed",
      duration: "2 minutes",
      difficulty: "Intermediate",
      icon: Timer,
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      id: "endurance",
      name: "Cardio Step Test",
      description: "Evaluate cardiovascular fitness and recovery",
      duration: "3 minutes",
      difficulty: "Advanced",
      icon: Heart,
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success text-success-foreground";
      case "Intermediate": return "bg-secondary text-secondary-foreground";
      case "Advanced": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

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
              <Target className="h-6 w-6 text-secondary" />
              <span className="text-lg font-semibold">Assessment Selection</span>
            </div>
          </div>
          <Badge variant="secondary">Choose Your Test</Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Select Your Assessment Test</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our scientifically designed tests to measure different aspects of your athletic performance. 
            Each test uses AI-powered analysis to provide detailed insights.
          </p>
        </div>

        {/* Assessment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {assessmentTests.map((test) => {
            const IconComponent = test.icon;
            return (
              <Card key={test.id} className="shadow-card hover:shadow-achievement transition-smooth transform hover:-translate-y-1 relative">
                {test.recommended && (
                  <div className="absolute -top-3 left-4 z-10">
                    <Badge className="bg-secondary text-secondary-foreground shadow-achievement">
                      Recommended
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className={`w-16 h-16 ${test.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className={`h-8 w-8 ${test.color}`} />
                  </div>
                  <CardTitle className="text-xl">{test.name}</CardTitle>
                  <CardDescription className="text-base">
                    {test.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Timer className="h-4 w-4 text-muted-foreground" />
                      <span>{test.duration}</span>
                    </div>
                    <Badge className={getDifficultyColor(test.difficulty)} variant="secondary">
                      {test.difficulty}
                    </Badge>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link to={`/athlete/assessment/tutorial/${test.id}`} className="flex-1">
                      <Button variant="outline" className="w-full">
                        <Info className="h-4 w-4 mr-2" />
                        Tutorial
                      </Button>
                    </Link>
                    <Link to={`/athlete/assessment/record/${test.id}`} className="flex-1">
                      <Button variant="hero" className="w-full">
                        <Play className="h-4 w-4 mr-2" />
                        Start Test
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Help Section */}
        <Card className="shadow-card bg-gradient-data">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Info className="h-5 w-5 text-primary" />
              <span>Assessment Guidelines</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-secondary">Before You Start</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Ensure good lighting</li>
                  <li>• Clear 3x3 meter space</li>
                  <li>• Wear appropriate sports attire</li>
                  <li>• Have water nearby</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-success">During the Test</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Follow on-screen instructions</li>
                  <li>• Stay within camera frame</li>
                  <li>• Give maximum effort</li>
                  <li>• Complete all repetitions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-primary">After Testing</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• AI analysis takes 2-3 minutes</li>
                  <li>• Results saved automatically</li>
                  <li>• View detailed metrics</li>
                  <li>• Track progress over time</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentSelect;