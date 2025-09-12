import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Users, TrendingUp, Award, MapPin, Video, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sports.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Target className="h-8 w-8 text-secondary" />
            <span className="text-xl font-bold text-foreground">Project Pragati</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/features" className="text-muted-foreground hover:text-foreground transition-smooth">Features</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-smooth">About</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-smooth">Contact</Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Link to="/auth/athlete">
              <Button variant="ghost">Athlete Login</Button>
            </Link>
            <Link to="/auth/coach">
              <Button variant="coach">Coach Portal</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <Badge className="mb-6 bg-secondary/20 text-secondary border-secondary/30">
              AI-Powered Sports Assessment
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Democratizing Sports
              <span className="block text-secondary">Talent Discovery</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Empowering young athletes across India with AI-driven biomechanical analysis. 
              No barriers, no bias—just pure talent recognition through cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/auth/athlete">
                <Button size="lg" variant="hero" className="text-lg px-8 py-4">
                  Start Your Assessment
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/auth/coach">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Discover Talent
                  <Users className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-data">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Revolutionary Sports Technology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI-powered platform combines biomechanical analysis, computer vision, and machine learning 
              to provide objective talent assessment for the next generation of Indian athletes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-achievement transition-smooth transform hover:-translate-y-2">
              <CardHeader>
                <Video className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>AI Video Analysis</CardTitle>
                <CardDescription>
                  Advanced computer vision analyzes your athletic performance in real-time, 
                  measuring biomechanics, form, and technique with scientific precision.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-achievement transition-smooth transform hover:-translate-y-2">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-success mb-4" />
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>
                  Get detailed insights into speed, agility, strength, and coordination with 
                  comprehensive performance dashboards and progress tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-achievement transition-smooth transform hover:-translate-y-2">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Geographic Discovery</CardTitle>
                <CardDescription>
                  Interactive talent mapping allows scouts to discover promising athletes 
                  across India, breaking down geographical barriers to opportunity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-achievement transition-smooth transform hover:-translate-y-2">
              <CardHeader>
                <Award className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Objective Assessment</CardTitle>
                <CardDescription>
                  Eliminate bias and subjectivity. Our AI provides fair, data-driven 
                  evaluations based purely on athletic performance and potential.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-achievement transition-smooth transform hover:-translate-y-2">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-success mb-4" />
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Monitor improvement over time with detailed analytics, personalized 
                  insights, and benchmarking against peer performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="shadow-card hover:shadow-achievement transition-smooth transform hover:-translate-y-2">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Talent Pipeline</CardTitle>
                <CardDescription>
                  Connect talented athletes with coaches, scouts, and sporting organizations 
                  through our verified professional network.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">10,000+</div>
              <div className="text-primary-foreground/80">Athletes Assessed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">28</div>
              <div className="text-primary-foreground/80">States Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-primary-foreground/80">Verified Coaches</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">95%</div>
              <div className="text-primary-foreground/80">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Discover Your Potential?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of aspiring athletes who have already taken the first step 
            towards achieving their sporting dreams with Project Pragati.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth/athlete">
              <Button size="lg" variant="achievement" className="text-lg px-8 py-4">
                Begin Assessment
                <Target className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/learn-more">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Target className="h-6 w-6 text-secondary" />
                <span className="text-lg font-semibold">Project Pragati</span>
              </div>
              <p className="text-muted-foreground">
                Revolutionizing sports talent discovery through AI-powered assessment technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/features" className="hover:text-foreground transition-smooth">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-foreground transition-smooth">Pricing</Link></li>
                <li><Link to="/api" className="hover:text-foreground transition-smooth">API</Link></li>
                <li><Link to="/support" className="hover:text-foreground transition-smooth">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Athletes</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/how-it-works" className="hover:text-foreground transition-smooth">How It Works</Link></li>
                <li><Link to="/tests" className="hover:text-foreground transition-smooth">Assessment Tests</Link></li>
                <li><Link to="/success-stories" className="hover:text-foreground transition-smooth">Success Stories</Link></li>
                <li><Link to="/faq" className="hover:text-foreground transition-smooth">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Coaches</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/coach-portal" className="hover:text-foreground transition-smooth">Portal Access</Link></li>
                <li><Link to="/verification" className="hover:text-foreground transition-smooth">Get Verified</Link></li>
                <li><Link to="/analytics" className="hover:text-foreground transition-smooth">Analytics</Link></li>
                <li><Link to="/partnerships" className="hover:text-foreground transition-smooth">Partnerships</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Project Pragati. Empowering Indian sports talent through AI technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;