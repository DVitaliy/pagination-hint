#!/bin/bash

patterns="value1,value2,value3"
title="Same test @value2 and more text"

IFS=',' read -ra pattern_array <<< "$patterns"

pattern_found=false

for pattern in "${pattern_array[@]}"; do
    if [[ $title == *"$pattern"* ]]; then
        echo "Паттерн '$pattern' найден в заголовке."
        pattern_found=true
        break
    fi
done

if [ "$pattern_found" = false ]; then
    echo "Ни один паттерн не был найден в заголовке."
fi