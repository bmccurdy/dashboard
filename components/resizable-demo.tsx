"use client"

import { useState } from "react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { AccordionDemo } from "@/components/AccordionDemo";
import Link from "next/link"
import { Home, Folder, Settings, ChevronRight, ChevronLeft } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

export function ResizableDemo() {
  const [isBoxOneVisible, setIsBoxOneVisible] = useState(false)

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#003d57] text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">FirstWatch</h1>
      </header>
      
      <div className="flex flex-grow">
        <aside className="w-14 flex-col border-r bg-background hidden sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 py-5 flex-grow">
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Home className="h-4 w-4 transition-all" />
              <span className="sr-only">FirstWatch</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Folder className="h-5 w-5" />
                  <span className="sr-only">Folder One</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Folder One</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Folder className="h-5 w-5" />
                  <span className="sr-only">Folder Two</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Folder Two</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Folder className="h-5 w-5" />
                  <span className="sr-only">Folder Three</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Folder Three</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Folder className="h-5 w-5" />
                  <span className="sr-only">Folder Four</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Folder Four</TooltipContent>
            </Tooltip>
          </nav>
          <nav className="flex flex-col items-center gap-4 px-2 py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </nav>
        </aside>

        <div className="flex-grow flex">
          <ResizablePanelGroup direction="horizontal" className="min-h-[200px]">
            <ResizablePanel defaultSize={100}>
              <ResizablePanelGroup direction="vertical">
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full p-4">

                    <span className="font-semibold">One</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle className="bg-border hover:bg-blue-400 p-0.25" />
                <ResizablePanel defaultSize={50} minSize={8}>
                  <div className="text-lg p-4 pb-0 font-medium">Incident Drill-down</div>
                  <ScrollArea className="flex h-full p-4">
                    <AccordionDemo />
                  </ScrollArea>
                </ResizablePanel>
              </ResizablePanelGroup>
            </ResizablePanel>
            {isBoxOneVisible && (
              <>
                <ResizableHandle className="bg-border hover:bg-blue-400 p-0.25" />
                <ResizablePanel minSize={24} maxSize={40}>
                  <div className="flex h-full p-4">
                    <span className="font-semibold">Three</span>
                  </div>
                </ResizablePanel>
              </>
            )}
          </ResizablePanelGroup>
          <Button
            variant="ghost"
            size="icon"
            className="h-full rounded-none border-l"
            onClick={() => setIsBoxOneVisible(!isBoxOneVisible)}
            aria-label={isBoxOneVisible ? "Hide Box One" : "Show Box One"}
          >
            {isBoxOneVisible ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      <footer className="bg-primary text-primary-foreground p-4">
        <h2 className="text-xl font-semibold">Footer</h2>
      </footer>
    </div>
  )
}
