import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  ArrowLeft, 
  Camera, 
  Play, 
  Square, 
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Target,
  Timer,
  User,
  Video
} from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";

const AssessmentRecord = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [cameraPermission, setCameraPermission] = useState<'granted' | 'denied' | 'prompt'>('prompt');
  const [currentStep, setCurrentStep] = useState<'setup' | 'guide' | 'record' | 'review'>('setup');
  const [recordedBlob, setRecordedBlob] = useState<Blob | null>(null);
  const [countdown, setCountdown] = useState(0);
  const [positionGuidance, setPositionGuidance] = useState('');

  // Test configuration
  const testConfig = {
    sprint: { name: "40m Sprint Speed Test", duration: 10, instructions: "Sprint as fast as possible for 40 meters" },
    agility: { name: "Cone Weaving Agility", duration: 15, instructions: "Weave through cones as quickly as possible" },
    "vertical-jump": { name: "Vertical Jump Power", duration: 8, instructions: "Jump as high as possible" },
    balance: { name: "Single Leg Balance", duration: 30, instructions: "Balance on one leg for as long as possible" },
    reaction: { name: "Reaction Time Test", duration: 60, instructions: "React to visual cues as quickly as possible" },
    endurance: { name: "Cardio Step Test", duration: 180, instructions: "Step up and down at steady pace" }
  };

  const currentTest = testConfig[testId as keyof typeof testConfig] || testConfig.sprint;

  useEffect(() => {
    if (currentStep === 'setup') {
      requestCameraAccess();
    }
  }, [currentStep]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } else {
      setRecordingTime(0);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const requestCameraAccess = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 1280 }, 
          height: { ideal: 720 },
          facingMode: 'user'
        }, 
        audio: true 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraPermission('granted');
      
      // Simulate AI position guidance
      setTimeout(() => {
        setPositionGuidance('Perfect! You are centered in the frame.');
      }, 2000);
      
    } catch (error) {
      setCameraPermission('denied');
    }
  };

  const startCountdown = () => {
    setCurrentStep('guide');
    let count = 3;
    setCountdown(count);
    
    const countdownInterval = setInterval(() => {
      count--;
      setCountdown(count);
      
      if (count === 0) {
        clearInterval(countdownInterval);
        startRecording();
      }
    }, 1000);
  };

  const startRecording = async () => {
    if (!videoRef.current?.srcObject) return;
    
    const stream = videoRef.current.srcObject as MediaStream;
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    
    const chunks: BlobPart[] = [];
    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };
    
    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      setRecordedBlob(blob);
      setCurrentStep('review');
    };
    
    mediaRecorder.start();
    setIsRecording(true);
    setCurrentStep('record');
    
    // Auto-stop after test duration
    setTimeout(() => {
      stopRecording();
    }, currentTest.duration * 1000);
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const retakeRecording = () => {
    setRecordedBlob(null);
    setCurrentStep('setup');
    setRecordingTime(0);
  };

  const submitRecording = () => {
    if (recordedBlob) {
      navigate(`/athlete/assessment/processing/${testId}`);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/athlete/assessment/select" className="flex items-center text-muted-foreground hover:text-foreground transition-smooth">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Selection
            </Link>
            <div className="flex items-center space-x-2">
              <Video className="h-6 w-6 text-secondary" />
              <span className="text-lg font-semibold">{currentTest.name}</span>
            </div>
          </div>
          <Badge className={isRecording ? "bg-destructive text-destructive-foreground" : "bg-success text-success-foreground"}>
            {isRecording ? "Recording" : "Ready"}
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className={`flex items-center space-x-2 ${currentStep === 'setup' ? 'text-secondary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'setup' ? 'bg-secondary text-secondary-foreground' : 'bg-muted'}`}>
                <User className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Setup</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className={`flex items-center space-x-2 ${currentStep === 'guide' ? 'text-secondary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'guide' ? 'bg-secondary text-secondary-foreground' : 'bg-muted'}`}>
                <Target className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Guide</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className={`flex items-center space-x-2 ${currentStep === 'record' ? 'text-secondary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'record' ? 'bg-secondary text-secondary-foreground' : 'bg-muted'}`}>
                <Camera className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Record</span>
            </div>
            <div className="w-8 h-px bg-border"></div>
            <div className={`flex items-center space-x-2 ${currentStep === 'review' ? 'text-secondary' : 'text-muted-foreground'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === 'review' ? 'bg-secondary text-secondary-foreground' : 'bg-muted'}`}>
                <CheckCircle className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium">Review</span>
            </div>
          </div>
          <Progress value={(currentStep === 'setup' ? 25 : currentStep === 'guide' ? 50 : currentStep === 'record' ? 75 : 100)} className="h-2" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Feed */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                  {cameraPermission === 'granted' ? (
                    <>
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Overlay Elements */}
                      <div className="absolute inset-0 pointer-events-none">
                        {/* Position Guide Frame */}
                        <div className="absolute inset-4 border-2 border-secondary border-dashed rounded-lg opacity-60"></div>
                        
                        {/* Countdown */}
                        {countdown > 0 && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <div className="text-6xl font-bold text-white">{countdown}</div>
                          </div>
                        )}
                        
                        {/* Recording Indicator */}
                        {isRecording && (
                          <div className="absolute top-4 right-4 flex items-center space-x-2 bg-destructive text-destructive-foreground px-3 py-1 rounded-full">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium">REC {formatTime(recordingTime)}</span>
                          </div>
                        )}
                        
                        {/* Position Guidance */}
                        {positionGuidance && currentStep === 'setup' && (
                          <div className="absolute bottom-4 left-4 right-4 bg-success/90 text-success-foreground px-4 py-2 rounded-lg text-center">
                            <CheckCircle className="h-4 w-4 inline mr-2" />
                            {positionGuidance}
                          </div>
                        )}
                      </div>
                    </>
                  ) : cameraPermission === 'denied' ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Camera Access Denied</h3>
                        <p className="text-muted-foreground mb-4">Please allow camera access to continue with the assessment</p>
                        <Button onClick={requestCameraAccess} variant="hero">
                          <Camera className="h-4 w-4 mr-2" />
                          Grant Camera Access
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <Camera className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Requesting Camera Access</h3>
                        <p className="text-muted-foreground">Please allow camera permissions when prompted</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Control Buttons */}
                <div className="flex justify-center space-x-4 mt-6">
                  {currentStep === 'setup' && cameraPermission === 'granted' && (
                    <Button variant="hero" size="lg" onClick={startCountdown}>
                      <Play className="h-5 w-5 mr-2" />
                      Start Assessment
                    </Button>
                  )}
                  
                  {currentStep === 'record' && (
                    <Button variant="destructive" size="lg" onClick={stopRecording}>
                      <Square className="h-5 w-5 mr-2" />
                      Stop Recording
                    </Button>
                  )}
                  
                  {currentStep === 'review' && (
                    <div className="flex space-x-4">
                      <Button variant="outline" size="lg" onClick={retakeRecording}>
                        <RotateCcw className="h-5 w-5 mr-2" />
                        Retake
                      </Button>
                      <Button variant="hero" size="lg" onClick={submitRecording}>
                        <CheckCircle className="h-5 w-5 mr-2" />
                        Submit for Analysis
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instructions Panel */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Test Instructions</h3>
                <p className="text-muted-foreground mb-4">{currentTest.instructions}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">{currentTest.duration} seconds</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Current Step:</span>
                    <Badge variant="outline" className="capitalize">{currentStep}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {currentStep === 'setup' && (
              <Alert>
                <Target className="h-4 w-4" />
                <AlertDescription>
                  Position yourself within the dashed frame. Ensure good lighting and wear contrasting clothing for better AI analysis.
                </AlertDescription>
              </Alert>
            )}

            {currentStep === 'guide' && (
              <Alert>
                <Timer className="h-4 w-4" />
                <AlertDescription>
                  Get ready! The recording will start automatically after the countdown. Give your maximum effort.
                </AlertDescription>
              </Alert>
            )}

            {currentStep === 'record' && (
              <Alert className="border-destructive/50 bg-destructive/5">
                <AlertCircle className="h-4 w-4 text-destructive" />
                <AlertDescription>
                  Recording in progress. Stay within the frame and complete the exercise with maximum effort.
                </AlertDescription>
              </Alert>
            )}

            {currentStep === 'review' && (
              <Alert className="border-success/50 bg-success/5">
                <CheckCircle className="h-4 w-4 text-success" />
                <AlertDescription>
                  Recording complete! Review your performance and submit for AI analysis, or retake if needed.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentRecord;