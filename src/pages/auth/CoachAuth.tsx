import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Target, Mail, User, ArrowLeft, Shield, Users, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const CoachAuth = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    experience: "",
    certification: "",
    description: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-data flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-smooth mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Target className="h-8 w-8 text-secondary" />
            <span className="text-2xl font-bold">Project Pragati</span>
          </div>
          <Badge className="bg-primary text-primary-foreground mb-2">
            <Shield className="h-4 w-4 mr-1" />
            Coach Verification Portal
          </Badge>
        </div>

        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Coach Registration</CardTitle>
            <CardDescription>
              Join our network of verified sports professionals and discover exceptional talent
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Verification Process Alert */}
            <Alert className="border-primary/20 bg-primary/5">
              <Clock className="h-4 w-4" />
              <AlertDescription>
                <strong>Manual Verification Required:</strong> All coach applications undergo thorough 
                review by our team. Verification typically takes 2-3 business days.
              </AlertDescription>
            </Alert>

            {/* Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@organization.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization">Organization/Affiliation *</Label>
                <Input
                  id="organization"
                  placeholder="e.g., Sports Authority of India, State Cricket Association"
                  value={formData.organization}
                  onChange={(e) => handleInputChange("organization", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Input
                    id="experience"
                    type="number"
                    placeholder="5"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="certification">Key Certification</Label>
                  <Input
                    id="certification"
                    placeholder="e.g., Level 2 Cricket Coach, SAI Certified"
                    value={formData.certification}
                    onChange={(e) => handleInputChange("certification", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Professional Background *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your coaching experience, achievements, and why you want to join Project Pragati..."
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  rows={4}
                />
              </div>
            </div>

            <Button 
              className="w-full" 
              variant="coach"
              size="lg"
            >
              Submit Application for Review
            </Button>

            {/* Testing bypass */}
            <div className="mt-4">
              <Link to="/coach/dashboard">
                <Button variant="secondary" className="w-full" size="sm">
                  Skip to Dashboard (Testing)
                </Button>
              </Link>
            </div>

            {/* Login for existing coaches */}
            <div className="text-center pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">
                Already have a verified account?
              </p>
              <Button variant="outline" className="w-full">
                <Shield className="h-4 w-4 mr-2" />
                Coach Login
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Verification Benefits */}
        <div className="mt-8 space-y-4">
          <div className="text-center text-sm font-medium text-muted-foreground">
            Benefits of verified coach status:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Access to talent discovery map</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Advanced athlete filtering tools</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Detailed performance analytics</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-success" />
              <span>Direct athlete communication</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachAuth;