#!/bin/bash

echo running touch
dir=/mnt/code/data

mkdir $dir

touch $dir/$RANDOM
ls $dir
