#!/bin/bash
git add .
echo 'Please write a message for the commit'
read message
git commit -m "$message"
git push origin main
