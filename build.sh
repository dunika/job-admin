#!/bin/sh

rm -rf dist

babel src --out-dir dist --presets es2015,stage-0

ldconfig

echo "Done!"