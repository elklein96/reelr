if pgrep -q mongod; then
    echo running;
else
    mongod;
fi

exit 0;