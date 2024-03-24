"use client";

import {
  TypographyH1,
  TypographyLead,
  TypographyMuted,
} from "@/components/ui/typography";
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
import { motion } from "framer-motion";

export default function Home() {
  const [encryptInput, setEncryptInput] = useState("");
  const [encryptedHash, setEncryptedHash] = useState("");

  const onChangeEncryptInput = (value: string) => {
    setEncryptInput(value);
  };

  const onEncrypt = () => {
    setEncryptedHash(sha256(encryptInput));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <main className="min-h-screen min-w-full relative flex flex-col items-center justify-center px-4 sm:px-10 pt-10 dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-zinc-700/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[980px] mx-auto flex flex-col items-center gap-4 z-10"
      >
        <motion.div variants={itemVariants}>
          <TypographyH1>
            <Balancer>Encreept is a better way for SHA-256 hashing</Balancer>
          </TypographyH1>
        </motion.div>
        <motion.div variants={itemVariants}>
          <TypographyLead>
            With Encreept, you don't need to hire a hacker to hashing your
            plaintext using the SHA-256 algorithm.
          </TypographyLead>
        </motion.div>
        <motion.div
          className="w-full max-w-[600px] mt-4"
          variants={itemVariants}
        >
          <Card className="w-full ">
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
                    description:
                      "Your hash valued has been copied to clipboard",
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
        </motion.div>
      </motion.section>
      <footer className="py-8 sm:py-0 sm:absolute sm:bottom-8 z-10">
        <HoverCard>
          <HoverCardTrigger>
            <TypographyMuted>
              Made possible by Naqib Hishamuddin
            </TypographyMuted>
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
