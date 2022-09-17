import { thoughts } from "../data/thoughts";
import { Thought } from "../models/thought";
import { getRandomArrayIndex } from "./util";

export function getAllThoughts(): Thought[] {
  return thoughts;
}

export function getRandomThought(): Thought {
  const index = getRandomArrayIndex(thoughts.length);
  return thoughts[index];
}
