#!/bin/sh
URL='git@github.com:jinchangz/next-sample.git'
# git remote add origin $URL
# git branch -M main

DATE=$(date)

git add .
git commit -m "${DATE}"
git push -u origin main