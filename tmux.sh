#!/bin/sh
tmux new-session -s scrummer -d
tmux split-window -h
tmux selectp -t 2
tmux split-window -v
tmux send-keys -t 2 "NODE_ENV='development' npx webpack --watch" Enter
tmux send-keys -t 3 "NODE_ENV='development' npx tsc --p tsconfig.srv.json; NODE_ENV='development' node ./build/server.js" Enter
tmux selectp -t 1
tmux attach-session -t scrummer



