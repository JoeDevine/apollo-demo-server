#!/bin/bash
set -ue

# Set vars
timestamp="$(date +"%T")"

# Copy file to new timestamped file
cp output.json logs-${timestamp}.json

# Reset output json
rm -f output.json && touch output.json