tmux \
    new-session \
    split-pane "npx webpack;"\
    split-pane -h "node ./build/server.js;"


