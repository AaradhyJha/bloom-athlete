import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Video, 
  BarChart3, 
  Target,
  Zap,
  Activity,
  CheckCircle
} from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";

const AssessmentProcessing = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  
  const [progress, setProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);

  const processingStages = [
    {
      id: 0,
      name: "Video Upload & Validation",
      description: "Uploading and validating video quality",
      icon: Video,
      duration: 2000
    },
    {
      id: 1,
      name: "Pose Detection & Tracking",
      description: "Analyzing body movement and pose estimation",
      icon: Target,
      duration: 3000
    },
    {
      id: 2,
      name: "Biomechanical Analysis",
      description: "Computing joint angles and movement patterns",
      icon: Activity,
      duration: 4000
    },
    {
      id: 3,
      name: "Performance Metrics",
      description: "Calculating speed, power, and technique scores",
      icon: Zap,
      duration: 3000
    },
    {
      id: 4,
      name: "AI Scoring & Insights",
      description: "Generating personalized performance insights",
      icon: Brain,
      duration: 2000
    },
    {
      id: 5,
      name: "Report Generation",
      description: "Creating detailed analysis report",
      icon: BarChart3,
      duration: 2000
    }
  ];

  useEffect(() => {
    let currentProgress = 0;
    let stageIndex = 0;

    const processStages = () => {
      if (stageIndex < processingStages.length) {
        const stage = processingStages[stageIndex];
        setCurrentStage(stageIndex);
        
        const stageProgress = setInterval(() => {
          currentProgress += 100 / (stage.duration / 100);
          setProgress(Math.min(currentProgress, (stageIndex + 1) * (100 / processingStages.length)));
          
          if (currentProgress >= (stageIndex + 1) * (100 / processingStages.length)) {
            clearInterval(stageProgress);
            stageIndex++;
            
            if (stageIndex < processingStages.length) {
              setTimeout(processStages, 500);
            } else {
              // Processing complete, navigate to results
              setTimeout(() => {
                navigate(`/athlete/assessment/results/${testId}`);
              }, 1000);
            }
          }
        }, 100);
      }
    };

    processStages();
  }, [testId, navigate]);

  return (
    <div className="min-h-screen bg-gradient-data flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Brain className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold mb-4">AI Analysis in Progress</h1>
          <p className="text-xl text-muted-foreground">
            Our advanced AI is analyzing your performance. This usually takes 2-3 minutes.
          </p>
          <Badge className="mt-4 bg-secondary text-secondary-foreground">
            Processing your {testId?.replace('-', ' ')} assessment
          </Badge>
        </div>

        {/* Progress Card */}
        <Card className="shadow-hero mb-8">
          <CardContent className="p-8">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            {/* Current Stage */}
            <div className="space-y-4">
              {processingStages.map((stage, index) => {
                const IconComponent = stage.icon;
                const isActive = index === currentStage;
                const isCompleted = index < currentStage;
                
                return (
                  <div
                    key={stage.id}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                      isActive 
                        ? 'bg-secondary/10 border-2 border-secondary/30' 
                        : isCompleted 
                        ? 'bg-success/5 border border-success/20' 
                        : 'bg-muted/30 border border-border'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isActive 
                        ? 'bg-secondary text-secondary-foreground animate-pulse' 
                        : isCompleted 
                        ? 'bg-success text-success-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        <IconComponent className="h-6 w-6" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        isActive ? 'text-secondary' : isCompleted ? 'text-success' : 'text-foreground'
                      }`}>
                        {stage.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {stage.description}
                      </p>
                    </div>
                    
                    {isActive && (
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Fun Facts */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <h3 className="font-semibold mb-4 text-center">Did You Know?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-2">12,000+</div>
                <p>Body keypoints analyzed per second</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-2">99.2%</div>
                <p>Pose detection accuracy rate</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">28</div>
                <p>Different biomechanical metrics calculated</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-2">0.1s</div>
                <p>Temporal resolution for movement analysis</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AssessmentProcessing;