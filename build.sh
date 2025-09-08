#!/bin/bash

mkdir -p dist
rm -rf dist/*
cp src/index.js dist
cp src/styles.css dist
cp package.json dist
