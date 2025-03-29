import { useState, useRef, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Camera, Upload, Palette, Scan, RefreshCw } from "lucide-react";
import { toast } from "sonner";

const SkinToneAnalysis = () => {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<{
    tone: string;
    colors: string[];
    description: string;
    recommendedColors?: string[];
    reportImage?: string;
    season?: string;
  } | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check if the file is an image
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file.");
      return;
    }
    
    // Create URL for preview
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
      setResults(null);
    };
    reader.readAsDataURL(file);
  };
  
  const handleCameraCapture = () => {
    toast.info("Camera access feature coming soon!");
  };
  
  const handleAnalyze = async () => {
    if (!image) {
      toast.error("Please upload an image first.");
      return;
    }
    
    setAnalyzing(true);
    
    try {
      // Convert base64 to blob for form data
      const base64Response = await fetch(image);
      const blob = await base64Response.blob();
      
      // Create form data
      const formData = new FormData();
      formData.append('image', blob, 'face_image.jpg');
      
      // Call API
      const response = await fetch('/api/skin-tone-analysis', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      
      if (data.success) {
        setResults({
          tone: data.tone,
          colors: data.colors,
          description: data.description,
          recommendedColors: data.recommendedColors,
          reportImage: data.reportImage,
          season: data.season
        });
        toast.success("Analysis complete!");
      } else {
        throw new Error(data.error || "Analysis failed");
      }
    } catch (error) {
      console.error("Error analyzing skin tone:", error);
      toast.error(error instanceof Error ? error.message : "Failed to analyze skin tone");
    } finally {
      setAnalyzing(false);
    }
  };
  
  const handleReset = () => {
    setImage(null);
    setResults(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  
  return (
    <div className="flex flex-col space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Skin Tone Analyzer</h3>
        <p className="text-foreground/70">
          Upload a well-lit photo of your face to get personalized color recommendations
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <div 
            className={`border-2 border-dashed rounded-lg p-4 h-64 flex flex-col items-center justify-center ${
              image ? 'border-primary' : 'border-border'
            }`}
          >
            {image ? (
              <img 
                src={image} 
                alt="Uploaded face" 
                className="max-h-full max-w-full object-contain rounded"
              />
            ) : (
              <div className="text-center text-foreground/50">
                <Upload className="h-12 w-12 mx-auto mb-4" />
                <p>Upload or capture a photo</p>
              </div>
            )}
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={() => fileInputRef.current?.click()} 
              variant="outline" 
              className="flex-1"
            >
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
            
            <Button 
              onClick={handleCameraCapture} 
              variant="outline" 
              className="flex-1"
            >
              <Camera className="mr-2 h-4 w-4" />
              Capture
            </Button>
          </div>
          
          <div className="flex gap-2">
            <Button 
              onClick={handleAnalyze} 
              className="flex-1 bg-brand-pink hover:bg-brand-pink/90"
              disabled={!image || analyzing}
            >
              {analyzing ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Scan className="mr-2 h-4 w-4" />
                  Analyze
                </>
              )}
            </Button>
            
            <Button 
              onClick={handleReset} 
              variant="outline" 
              className="flex-1"
              disabled={!image}
            >
              Reset
            </Button>
          </div>
        </div>
        
        <div className="bg-accent/20 rounded-lg p-6">
          {results ? (
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Your Results</h4>
              
              <div>
                <p className="font-medium">Skin Tone:</p>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-amber-200 mr-2"></div>
                  <span>{results.tone}</span>
                </div>
              </div>
              
              <div>
                <p className="font-medium mb-2">Your Tone Palette:</p>
                <div className="flex space-x-2">
                  {results.colors.map((color, index) => (
                    <div 
                      key={index} 
                      className="w-10 h-10 rounded-full" 
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
              </div>
              
              <div>
                <p className="font-medium">Description:</p>
                <p className="text-foreground/80 text-sm">{results.description}</p>
              </div>
              
              <div>
                <p className="font-medium mb-2">Recommended Colors:</p>
                <div className="flex flex-wrap gap-2">
                  {(results as any).recommendedColors.map((color: string, index: number) => (
                    <div 
                      key={index} 
                      className="w-8 h-8 rounded" 
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
              </div>
              
              {results.season && (
                <div>
                  <p className="font-medium">Your Color Season:</p>
                  <p className="text-foreground/80">{results.season}</p>
                </div>
              )}
              
              {results.reportImage && (
                <div className="mt-4">
                  <p className="font-medium mb-2">Analysis Report:</p>
                  <img 
                    src={results.reportImage} 
                    alt="Skin tone analysis report" 
                    className="max-w-full rounded border border-border"
                  />
                </div>
              )}
              
              <div className="pt-4">
                <p className="text-sm text-foreground/60 italic">
                  Analysis powered by SkinToneClassifier AI technology for accurate color recommendations.
                </p>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <Palette className="h-12 w-12 text-foreground/30 mb-4" />
              <h4 className="text-lg font-medium">No Analysis Yet</h4>
              <p className="text-sm text-foreground/60 mt-2">
                Upload a photo and click "Analyze" to get your personalized color profile
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkinToneAnalysis;
