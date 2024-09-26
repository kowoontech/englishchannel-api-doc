#!/bin/bash

# 파일들이 있는 디렉토리로 이동
cd ./src/1_admin-api/01_user

# 09_*.js부터 50_*.js까지의 파일을 1씩 증가시켜 변경
for file in {09..50}_*.js; do
    # 숫자 추출
    num=$(echo "$file" | grep -o '^[0-9]\+')
    # 새 숫자 계산
    new_num=$(printf "%02d" $((num + 1)))
    # 새 파일명 생성
    new_file="${new_num}_${file#*_}"
    # 파일명 변경
    echo "Renaming $file to $new_file"
    mv "$file" "$new_file"
done
