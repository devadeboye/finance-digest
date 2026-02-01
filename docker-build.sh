#!/bin/bash

# Define variables for convenience
ECR_URI="671022928530.dkr.ecr.eu-west-2.amazonaws.com/devadeboye/finance-digest"

# Extract version from package.json
VERSION=$(node -p "require('./package.json').version")

# Add Git commit hash for traceability (optional but recommended)
GIT_HASH=$(git rev-parse --short HEAD)
FULL_TAG="$VERSION-$GIT_HASH"

echo "Building version: $VERSION (Git: $GIT_HASH)"

docker buildx build \
  --platform linux/arm64 \
  --provenance=false \
  --sbom=false \
  -t $ECR_URI:$VERSION \
  -t $ECR_URI:$FULL_TAG \
  --push .
