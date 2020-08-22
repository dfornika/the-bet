#!/bin/bash
set -euo pipefail

cd $(dirname $0)

cd resources/public
git init
echo 'js/compiled/out' > .gitignore
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "git@github.com:dfornika/the-bet.git" master:gh-pages
rm -fr .git
echo "Deployed to https://dfornika.github.io/the-bet"
