"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Misccard() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Don't force yourself to take pictures when you travel somewhere. Let them flow to you. Look at the scenery, absorb it. Try to imagine the possible shots, and which type will capture the essence you wish to portray. Be creative. Use the surroundings to get something unique. Sometimes, edits are necessary to bring life to your click. Lastly, always remember. Learning photography is an everlasting process. There is always something to learn.",
    name: "Soumil",
    title: "Let it flow",
  },
  {
    quote:
      "Enough talks send pics now ;)",
      name: "Soumil",
    title: "A beautiful whatsapp",
  },
  {
    quote: "Capture the love in photos",
    name: "Roshan",
    title: "Passion",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
