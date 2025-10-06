import logoImage from "@/assets/vetfarm-logo.jpg";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={logoImage} 
              alt="VetFarm Logo" 
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-foreground">VetFarm</h2>
              <p className="text-sm text-muted-foreground">Bengal's most trusted pet care service</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
