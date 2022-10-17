import { Thought } from "../models/thought";

const mockedThoughts: Thought[] = [
  {
    text: 'test1',
    author: 'test1',
  },
  {
    text: 'test2',
    author: 'test2',
  }
]

jest.mock('../data/thoughts', () => ({
  thoughts: mockedThoughts
}));

const mockedRandomArrayIndex = 1; // mockedThought2

jest.mock('./util', () => ({
  getRandomArrayIndex: jest.fn(() => mockedRandomArrayIndex)
}));

import { getAllThoughts, getRandomThought } from "./thoughts";

describe('ThoughtsService', () => {
  
  it('should return quote list', () => {
    expect(getAllThoughts()).toEqual(mockedThoughts);
  });

  it('should return quote list', () => {
    expect(getRandomThought()).toEqual(mockedThoughts[1]);
  });

});
