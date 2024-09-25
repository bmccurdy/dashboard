import { ResizableDemo } from "@/components/resizable-demo"
import { TooltipProvider } from "@radix-ui/react-tooltip";
export default function Home() {
  return (
    <div>
      <TooltipProvider>
        <ResizableDemo />
      </TooltipProvider>
    </div>
  );
}
