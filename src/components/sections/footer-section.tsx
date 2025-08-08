"use client";

import { Icons } from "@/components/icons";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useMediaQuery } from "@/hooks/use-media-query";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function FooterSection() {
  const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between p-10">
        {/* Left Side - Keep as is but fix branding */}
        <div className="flex flex-col items-start justify-start gap-y-5 max-w-xs mx-0">
          <Link href="/" className="flex items-center gap-2">
            <Icons.logo className="size-8" />
            <p className="text-xl font-semibold text-primary">GoVola</p>
          </Link>
          <p className="tracking-tight text-muted-foreground font-medium">
            {siteConfig.hero.description}
          </p>
          <div className="flex items-center gap-2 dark:hidden">
            <Icons.soc2 className="size-12" />
            <Icons.hipaa className="size-12" />
            <Icons.gdpr className="size-12" />
          </div>
          <div className="dark:flex items-center gap-2 hidden">
            <Icons.soc2Dark className="size-12" />
            <Icons.hipaaDark className="size-12" />
            <Icons.gdprDark className="size-12" />
          </div>
        </div>
        
        {/* Right Side - Simple version without displacing hover effects */}
        <div className="pt-5 md:pt-0 md:text-right">
          <div className="flex flex-col gap-y-3">
            <p className="text-sm text-muted-foreground">
              Built by the Vola.ro team in Bucharest, Romania
            </p>
            <div className="flex flex-wrap gap-2 md:justify-end text-sm">
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="text-muted-foreground">·</span>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <a 
              href="mailto:hello@govola.ro" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              hello@govola.ro
            </a>
            <p className="text-xs text-muted-foreground mt-2">
              © 2025 Vola.ro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full h-48 md:h-64 relative mt-24 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            text={tablet ? "GoVola" : "Content That Travels"}
            fontSize={tablet ? 70 : 90}
            className="h-full w-full"
            squareSize={2}
            gridGap={tablet ? 2 : 3}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
    </footer>
  );
}