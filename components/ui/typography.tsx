import { ReactNode } from "react";

export function TypographyH1({ children }: { children?: ReactNode }) {
  return (
    <h1 className="text-center text-5xl font-bold leading-none tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
      {children}
    </h1>
  );
}

export function TypographyLead({ children }: { children?: ReactNode }) {
  return (
    <p className="max-w-[750px] text-center text-md text-muted-foreground md:text-xl">
      {children}
    </p>
  );
}
