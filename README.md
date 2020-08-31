# Beer BnB

## 팀원

### Front-End

1. 황연욱
2. 이조은
3. 최예흠

### Back-End

1. 고지원
2. 김해준

## :ocean: git flow

### 1.git clone 하기(git clone 해당 repoURL)

- 참고 - 폴더 안에 clone 받고 싶다면 해당 폴더 디렉토리로 이동(cd) 후 clone

### 2.branch 생성 후 이동

branch 생성 - git branch feature/본인이름
branch 이동 - git checkout feature/본인이름
:rotating_light: 참고 - clone을 받게 되면 현재 branch 위치가 master 위치이기 때문에 본인만의 branch를 생성 후 이동하여 본인 branch에서만 작업을 진행

### 3.본인 작업이 완료 되었다면 add,commit,push를 하기 전에 github master branch 변경 내용 확인 하기

### 4.변경 내용이 있다면

master branch로 이동(git checkout master)
변경된 폴더 pull 하기(git pull origin master)
본인 branch로 이동(git checkout feature/본인이름)
master branch로 merge하기(git merge master) 후 5번

### 5.변경내용이 없다면 스테이징 하기(git add .) ,commit 하기(git commit -m “commit message(간단한 작업 내용)“)

git push 하기(git push origin feature/본인이름)꼭 git branch로 본인 branch인지 확인하기

### 6.github repo에서 PR쓰기
