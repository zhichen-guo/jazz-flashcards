#!/bin/bash

docker container rm svelte-flashcard-template
docker run -it -v .:/app -p 5173:5173 --name svelte-flashcard-template svelte-flashcard-template