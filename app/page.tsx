"use client";

import { TypographyH1, TypographyLead } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Balancer from "react-wrap-balancer";
import { sha256 } from "js-sha256";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [encryptInput, setEncryptInput] = useState("");
  const [encryptedHash, setEncryptedHash] = useState("");

  const onChangeEncryptInput = (value: string) => {
    setEncryptInput(value);
  };

  const onEncrypt = () => {
    setEncryptedHash(sha256(encryptInput));
  };

  return (
    <main className="flex flex-col justify-center min-h-screen items-center px-6 py-12">
      <section className="w-full max-w-[980px] mx-auto flex flex-col items-center gap-4">
        <TypographyH1>
          <Balancer>Encreept is a better way for SHA-256 hashing</Balancer>
        </TypographyH1>
        <TypographyLead>
          With Encreept, you don't need to hire a hacker to hashing your
          plaintext using the SHA-256 algorithm.
        </TypographyLead>
        <Card className="w-full max-w-[600px] mt-4">
          <CardContent className="space-y-2 pt-4">
            <div className="space-y-1">
              <Label htmlFor="encryptInput">Input</Label>
              <Textarea
                id="encryptInput"
                placeholder="Enter your value"
                value={encryptInput}
                onChange={(e) => onChangeEncryptInput(e.currentTarget.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="encryptOutput">Output</Label>
              <Textarea disabled id="encryptOutput" value={encryptedHash} />
            </div>
          </CardContent>
          <CardFooter className="space-x-4">
            <Button onClick={onEncrypt}>Hash</Button>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(encryptedHash);
                toast("Copy Successfully", {
                  description: "Your hash valued has been copied to clipboard",
                  action: {
                    label: "Close",
                    onClick: () => undefined,
                  },
                });
              }}
              variant="outline"
            >
              Copy Value
            </Button>
          </CardFooter>
        </Card>
      </section>
      <footer className="mt-8 sm:absolute sm:bottom-8">
        <HoverCard>
          <HoverCardTrigger className="text-xs">
            Made possible by Naqib Hishamuddin
          </HoverCardTrigger>
          <HoverCardContent className="text-xs">
            By the time of writing, this website was made because I couldn't
            find the site Vivishen used for hashing code.
          </HoverCardContent>
        </HoverCard>
      </footer>
    </main>
  );
}
