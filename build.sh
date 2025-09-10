#!/bin/bash

rm -rf dist

# Compile TypeScript
tsc

# Copy styles
cp src/styles.css dist
