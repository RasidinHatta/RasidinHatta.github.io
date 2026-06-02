import React from "react";
import { AnimatedGroup } from "../animation/AnimatedGroup";
import { AnimatedText } from "../animation/AnimatedText";
import { TypingText } from "../ui/typing-text";
import { Button } from "../ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import Description from "./desctiption";

interface IntroTextProps {
  heading?: string;
  description?: React.ReactNode;
  buttons?: {
    primary: {
      text: string;
      url: string;
    };
    secondary: {
      text: string;
      url: string;
    };
  };
}

const IntroText = ({
  heading = "Rasidin",
  description = <Description />,
  buttons = {
    primary: { text: "Explore Projects", url: "/projects" },
    secondary: { text: "Get in Touch", url: "/contact" },
  },
}: IntroTextProps) => {
  return (
    <AnimatedGroup
      preset="blur-slide"
      className="mx-auto flex flex-col items-start text-left md:mx-auto md:items-center md:text-center lg:max-w-3xl lg:items-start lg:text-left"
    >
      <AnimatedText
        as="h1"
        className="max-w-3xl text-pretty text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl"
      >
        <span className="block">{`I'm ${heading}.`}</span>

        <span className="mt-2 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-muted-foreground">I build as a</span>
          <span className="inline-flex min-w-[18ch] justify-start text-primary">
            <TypingText
              texts={["Full Stack Developer", "Automation Builder"]}
              className="inline-flex whitespace-nowrap font-semibold"
              speed={70}
              deleteSpeed={70}
              pauseDuration={2000}
              loop={true}
              showCursor={true}
              blinkingCursor={false}
              cursor={() => (
                <span className="ml-1 inline-block h-[0.9em] w-1 translate-y-1 rounded-full bg-primary" />
              )}
              cursorClassName=""
            />
          </span>
        </span>
      </AnimatedText>

      {/* Description */}
      <AnimatedText
        as="p"
        className="mb-8 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base lg:text-lg"
        delay={0.12}
      >
        {description}
      </AnimatedText>

      <AnimatedGroup
        preset="slide"
        className="flex flex-col gap-2 sm:flex-row lg:justify-start"
      >
        {buttons.primary && (
          <Button
            asChild
            className="cursor-target w-full rounded-md px-6 sm:w-auto"
          >
            <Link href={buttons.primary.url}>
              {buttons.primary.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
        {buttons.secondary && (
          <Button
            asChild
            variant="outline"
            size="lg"
            className="cursor-target rounded-md bg-background/80 px-6"
          >
            <Link href={buttons.secondary.url}>
              <Mail className="mr-2 h-4 w-4" />
              {buttons.secondary.text}
            </Link>
          </Button>
        )}
      </AnimatedGroup>
    </AnimatedGroup>
  );
};

export default IntroText;
