DIST_TAG=$(node bin/npm-dist-tag)

if [[ $DIST_TAG ]]; then
  npm publish --dist-tag=$DIST_TAG;
fi
