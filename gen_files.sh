#!/bin/bash
 
special_content=$5
prefix=$4
for ((i=0;i<$1;i++))
do
    fname=$(pwd)/$prefix-$i.txt
    dd if=/dev/urandom of=$fname bs=$2 count=$3
    echo $special_content >> $fname
done