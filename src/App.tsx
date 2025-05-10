
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Figurines from "./pages/Figurines";
import FigurineDetail from "./pages/FigurineDetail";
import Licenses from "./pages/Licenses";
import LicenseDetail from "./pages/LicenseDetail";
import Manufacturers from "./pages/Manufacturers";
import ManufacturerDetail from "./pages/ManufacturerDetail";
import News from "./pages/News";
import ReleasePlanning from "./pages/ReleasePlanning";
import EventDetail from "./pages/EventDetail";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
import Collections from "./pages/Collections";
import CollectionDetail from "./pages/CollectionDetail";
import Stores from "./pages/Stores";
import StoreDetail from "./pages/StoreDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/figurines" element={<Figurines />} />
          <Route path="/figurine/:id" element={<FigurineDetail />} />
          <Route path="/licences" element={<Licenses />} />
          <Route path="/licence/:id" element={<LicenseDetail />} />
          <Route path="/fabricants" element={<Manufacturers />} />
          <Route path="/fabricant/:id" element={<ManufacturerDetail />} />
          <Route path="/news" element={<News />} />
          <Route path="/planning" element={<ReleasePlanning />} />
          <Route path="/evenement/:id" element={<EventDetail />} />
          <Route path="/personnages" element={<Characters />} />
          <Route path="/personnage/:id" element={<CharacterDetail />} />
          <Route path="/gammes" element={<Collections />} />
          <Route path="/gamme/:id" element={<CollectionDetail />} />
          <Route path="/boutiques" element={<Stores />} />
          <Route path="/boutique/:id" element={<StoreDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
