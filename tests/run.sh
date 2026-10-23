#!/bin/bash
# Stux.Group Services - runs the test suite (Node's built-in test runner, nothing to install).
# Usage: bash tests/run.sh
set -e
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR/.."
exec node --test tests/*.test.js
