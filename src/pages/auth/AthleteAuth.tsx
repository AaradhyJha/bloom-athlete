import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Target, Phone, Mail, User, ArrowLeft, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const AthleteAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneSubmit = () => {
    if (phone.length === 10) {
      setShowOtpInput(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-data flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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
          <Badge className="bg-secondary text-secondary-foreground mb-2">
            <Trophy className="h-4 w-4 mr-1" />
            Athlete Portal
          </Badge>
        </div>

        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Welcome, Athlete!</CardTitle>
            <CardDescription>
              Start your journey to sports excellence with AI-powered assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="phone" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="phone">Phone Login</TabsTrigger>
                <TabsTrigger value="google">Google Sign-in</TabsTrigger>
              </TabsList>
              
              <TabsContent value="phone" className="space-y-4">
                {!showOtpInput ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your 10-digit mobile number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-10"
                          maxLength={10}
                        />
                      </div>
                    </div>
                    <Button 
                      onClick={handlePhoneSubmit}
                      className="w-full" 
                      variant="hero"
                      disabled={phone.length !== 10}
                    >
                      Send OTP
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center text-sm text-muted-foreground">
                      OTP sent to +91 {phone}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="otp">Enter OTP</Label>
                      <Input
                        id="otp"
                        type="text"
                        placeholder="6-digit OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength={6}
                        className="text-center text-lg tracking-widest"
                      />
                    </div>
                    <Button 
                      className="w-full" 
                      variant="achievement"
                      disabled={otp.length !== 6}
                    >
                      Verify & Continue
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full text-sm"
                      onClick={() => setShowOtpInput(false)}
                    >
                      Change Phone Number
                    </Button>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="google" className="space-y-4">
                <Button className="w-full" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Continue with Google
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  Quick and secure authentication with your Google account
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="text-xs text-muted-foreground text-center">
                By continuing, you agree to our{" "}
                <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                {" "}and{" "}
                <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mt-8 space-y-4">
          <div className="text-center text-sm font-medium text-muted-foreground">
            What you get with Project Pragati:
          </div>
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>AI-powered performance analysis</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span>Detailed progress tracking</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Connect with verified coaches</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AthleteAuth;