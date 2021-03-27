# Game of Life

## Introduction

This application implements Conway's game of life, which is a set of rules for cellular automata to follow. 

The published website is hosted [here](https://modest-galileo-c232a9.netlify.app/).

You can read about Conway's game of life [here](https://en.wikipedia.org/wiki/Cellular_automaton#History).

## Rules of the game

Each cell of a two-dimensional grid represents an automaton that follows the following four rules:

1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2. Any live cell with two or three live neighbours lives on to the next generation.
3. Any live cell with more than three live neighbours dies, as if by overpopulation.
4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.