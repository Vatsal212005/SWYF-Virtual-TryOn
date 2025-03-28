import { useState, FormEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Shirt, ShoppingBag, Camera, Upload, Loader2, Smartphone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";

interface CatalogItem {
  id: string;
  name: string;
  image: string;
  type: string;
}

interface CatalogData {
  shirts: CatalogItem[];
  pants: CatalogItem[];
}

const TryOn = () => {
  const [topwear, setTopwear] = useState("0");
  const [pant, setPant] = useState("0");
  const [modelImage, setModelImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [useCamera, setUseCamera] = useState(false);
  const [catalogData, setCatalogData] = useState<CatalogData | null>(null);
  const [isLoadingCatalog, setIsLoadingCatalog] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchCatalog();
    
    // Check if user is on a mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      setIsMobile(mobileRegex.test(userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const fetchCatalog = async () => {
    try {
      setIsLoadingCatalog(true);
      const response = await fetch('/api/catalog');
      const data = await response.json();
      setCatalogData(data);
    } catch (error) {
      console.error("Error fetching catalog:", error);
      toast({
        title: "Error",
        description: "Failed to load the clothing catalog. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingCatalog(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (topwear === "0" && pant === "0") {
      toast({
        title: "Selection required",
        description: "Please select at least one item to try on",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Call the Flask API
      const response = await fetch('/api/tryon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          shirt: topwear,
          pant: pant,
          use_camera: useCamera
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        if (data.redirect) {
          // For camera-based try-on, redirect to the camera page
          window.location.href = data.url;
          return;
        }
        
        setModelImage(data.image_url);
        toast({
          title: "Try-on complete",
          description: "Your virtual try-on has been generated successfully",
        });
      } else {
        throw new Error(data.error || "An unknown error occurred");
      }
    } catch (error) {
      console.error("Error in try on process:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate virtual try-on",
        variant: "destructive"
      });
      
      // For demo purposes, still show a preview
      setModelImage("/static/assets/demo-tryon.jpg");
    } finally {
      setIsLoading(false);
    }
  };

  const redirectToWannaAR = () => {
    window.location.href = "https://wanna-clothes.ar.wanna.fashion/";
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {isMobile && (
          <div className="mb-8">
            <Card className="shadow-lg backdrop-blur-sm bg-primary/10 border-primary">
              <CardContent className="pt-6 pb-6">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Smartphone className="h-12 w-12 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Enhanced Mobile Experience</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Try our enhanced AR clothing try-on service optimized for mobile devices
                    </p>
                  </div>
                  <Button 
                    onClick={redirectToWannaAR} 
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Launch AR Try-On
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Virtual Try-On Experience</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            See exactly how clothes will look on you with our AI-powered virtual fitting room.
          </p>
          <Link to="/catalog" className="mt-4 inline-flex items-center text-primary hover:underline">
            <Upload className="h-4 w-4 mr-2" /> Browse or add clothes to your catalog
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Controls */}
          <Card className="shadow-lg backdrop-blur-sm bg-white/5 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Try On Clothes
              </CardTitle>
              <CardDescription>
                Select items from our collection to see how they look on a model
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Tabs defaultValue="outfit" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="outfit">Complete Outfit</TabsTrigger>
                    <TabsTrigger value="individual">Individual Items</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="outfit" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="topwear" className="flex items-center gap-2">
                        <Shirt className="h-4 w-4" /> Select Topwear
                      </Label>
                      <Select value={topwear} onValueChange={setTopwear}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topwear" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Select a topwear</SelectItem>
                          {isLoadingCatalog ? (
                            <SelectItem value="loading" disabled>
                              <div className="flex items-center">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Loading shirts...
                              </div>
                            </SelectItem>
                          ) : (
                            catalogData?.shirts.map((shirt) => (
                              <SelectItem key={shirt.id} value={shirt.id}>
                                {shirt.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pant" className="flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4" /> Select Pants
                      </Label>
                      <Select value={pant} onValueChange={setPant}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select pants" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Select pants</SelectItem>
                          {isLoadingCatalog ? (
                            <SelectItem value="loading" disabled>
                              <div className="flex items-center">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Loading pants...
                              </div>
                            </SelectItem>
                          ) : (
                            catalogData?.pants.map((pant) => (
                              <SelectItem key={pant.id} value={pant.id}>
                                {pant.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2 pt-2">
                      <Switch
                        id="camera-mode"
                        checked={useCamera}
                        onCheckedChange={setUseCamera}
                      />
                      <Label htmlFor="camera-mode" className="flex items-center gap-2">
                        <Camera className="h-4 w-4" /> Use webcam for live try-on
                      </Label>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="individual" className="pt-4">
                    <div className="flex items-center justify-center h-40 bg-accent/10 rounded-lg">
                      <p className="text-muted-foreground text-sm">
                        Coming soon! Try individual clothing items separately.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Separator />
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isLoading || (topwear === "0" && pant === "0")}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      {useCamera ? (
                        <>
                          <Camera className="mr-2 h-4 w-4" />
                          Start Camera Try-On
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-2 h-4 w-4" />
                          Generate Virtual Try-On
                        </>
                      )}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Right side - Preview */}
          <Card className="shadow-lg backdrop-blur-sm bg-white/5 border-accent/20">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                See how selected items look on a model
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg overflow-hidden">
                <AspectRatio ratio={3/4} className="bg-accent/10">
                  {modelImage ? (
                    <img 
                      src={modelImage} 
                      alt="Virtual try-on preview" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="text-center p-8">
                        {useCamera ? (
                          <>
                            <Camera className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                            <p className="text-muted-foreground">
                              Click "Start Camera Try-On" to launch the webcam experience
                            </p>
                          </>
                        ) : (
                          <>
                            <Sparkles className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
                            <p className="text-muted-foreground">
                              Select clothes and click "Generate" to see the virtual try-on result
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </AspectRatio>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TryOn; 