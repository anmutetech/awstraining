#!/bin/bash
PICTURES=$(ls *jpg)
DATE=$(date +%F)
# Looping through the directory for pictures
for PICTURE in $PICTURES
do
        echo "Renaming ${PICTURE} to ${DATE}-${PICTURE}"
        mv ${PICTURE} ${DATE}-${PICTURE}
done