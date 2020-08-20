#!/bin/bash

clojure -m cljs.main -d "target/public/cljs-out" -c "the-bet.core"
cp target/public/cljs-out/main.js resources/public/js/main.js
