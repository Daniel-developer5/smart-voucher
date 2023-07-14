if [[ "$OSTYPE" == "linux-gnu"* ]]; then
  if [ -d "build" ]; then
    rm -rf build;
  fi

  mkdir build;
  cp *.html main.js images css -r build;
fi