# Google Form with React

## 일주일 계획

### 7월 5일 (월)

- AWS Router 53 도메인 구매
- page 및 state 설계
- 기본 UI 구성
- README 파일 작성

### 7월 6일 (화)

- GoogleForm.js 페이지 구성

  1. form UI 구성 및 제목, 설명 작성 부분 생성
  2. form 추가, 수정, 삭제 기능 (text, checkbox, radio 순차적으로 진행)
  3. form 제출 기능 (데이터베이스 저장까지)
  4. form 질문 스위칭 방식 구상
  5. 옵션 간의 스위칭 방식 구상

### 7월 7일 (수)

- 유저가 링크를 받아 폼을 작성할 수 있는 GoogleFormUser.js 페이지 구성

  1. FormUser UI 구성
  2. 새로고침 혹은 뒤로가기 이후에 초기화
  3. form 제출 기능 (데이터베이스 저장까지)

- 유저가 작성한 GoogleForm을 볼 수 있는 FinalGoogleForm.js 페이지 구성

  1. GoogleFormUser와 구성은 동일하지만, input이 미리 채워져있다는 것이 다르다.
  2.

## 기본 레이아웃 구성

### 1. Home.js

루트 페이지

    (1) Form을 생성하는 버튼
    (2) 만들어진 Form list를 확인하는 버튼

### 2. NewGoogleForm.js

작성자가 새로운 폼을 만드는 페이지

    (1) 질문지의 제목을 작성할 수 있는 부분
    (2) 질문지의 질문을 추가, 수정, 삭제할 수 있는 기능
    (3) 만들어진 폼을 제출하는 기능
        - 제출하게 되면, 만들어진 것들이 database에 등록이 된다.
    (4) 질문의 순서도 바꿀 수 있는 기능
    (5) 옵션들 사이의 버튼을 만들어서 두 개의 옵션 간에 위치를 바꾸는 기능

### 3. GoogleFormUser.js

유저들이 링크를 받고 접속하는 페이지

1. url에서 uid를 읽어 db의 질문을 fetch 해온다.
2. 질문을 렌더링한다.

- 유저가 정보를 입력할 수 있어야 한다.
- 새로고침 되면 정보가 날라가야한다.
- `제출`을 누르게 되면 유저가 작성한 정보가 db에 저장되어야 한다.
- db에 저장되는 방식은,

  -

### 4. FinalGoogleForm.js

유저들이 작성한 구글폼을 볼 수 있는 페이지

- form 형식은 그대로, input은 채워져있는 상태로 보여야 한다.
- GoogleFormUser와 거의 비슷하지만, 다른 점은
  - FinalGoogleForm은 기존에 있는 데이터를 불러오는 역할
  - GoogleFormUser는 input을 채워넣어야 하는 역할
- GoogleFormUser와 달리 submit 버튼이 없다.
- 대신에 수정하기를 누르면, 수정할 수 있도록

### 5. GoogleFormReport.js

유저들이 submit 한 기록들을 정리해서 볼 수 있는 부분

- 항목 별 퍼센티지
- 차트
- 그래프

###

## State 구성

대략적인 구상은 다음과 같다.

(1) tree

     ggfom(collection)
    -    RandomUUID(docs)
    -        title (string)
    -        uid (string)
     -       Questions(array)
      -          title
       -         subtitle
        -        questionType (checkbox / text / radio)
         -       uuid

(2) firebase

![firebase](https://media.vlpt.us/images/peration/post/46fe9f28-6baf-4723-8842-86e92c32218f/image.png)

(3) log

```
[
   {
      questionType: "text",
      title: "구글폼 만들기에 오신 분들을 환영 합니다. 제목을 적어주세요.",
      subtitle: "설명을 적어주세요",
      uuid: "125s-1x12f-1cva-1sdf"
   },
   {
      questionType: "checkbox",
      title: "알고 있는 기술들을 모두 선택해주세요"
      subtitle: "조금이라도 알면 선택해주세요",
      uuid: "af12-1ssf2f-d111f-vsdf1"
      options: [
         {text: "react", uuid: "1dsf-kjh12-a1nv-wjsdf"},
         {text: "Node JS", uuid: "2dsf-kjh12-a1nv-wjdsdf"},
         {text: "GraphQL", uuid: "3dsf-8888-19dn-1jsd3"},
      ]
   },
   {
      questionType: "radio",
      title: "제일 잘 알고 있는 기술을 한가지 선택해주세요"
      subtitle: "only one",
      uuid: "1f12-1ssf2f-d111f-vsdf1"
      options: [
         {text: "react", uuid: "2dsf-kjh12-a1nv-wjsdf"},
         {text: "Node JS", uuid: "3dsf-kjh12-a1nv-wjdsdf"},
         {text: "GraphQL", uuid: "4dsf-8888-19dn-1jsd3"},
      ]
   }
]
```

tree를 좀 더 디벨롭해보자면,

     ggfom(collection)
    -    RandomUUID(docs)
    -        uid
    -        title (string)
     -       Questions(array)
      -          title
       -         subtitle
        -        questionType (checkbox / text / radio)
         -       uuid

- 작성자가 질문지를 작성할 때마다 GoogleDocs에 추가(push)가 된다.

```
const submit = () => {
	db
	  .collection('ggfom')
	  .add({
	    uid: uid,
	    questions: questions,
			title: title,
	  })
	  .then((ref) => {
	  })
}
```

- GoogleDocs에 push 후 해당 ID를 참조하여
- 작성자가 질문을 추가하면
