# 📄 Google Form Clone Project

## **🎈 프로젝트 소개**

Google의 Google Form을 Clone해서 만들어보는 프로젝트입니다.

해당 프로젝트는 원래 AWS 환경에서 누구나 접근할 수 있도록 도메인을 구입하여 적용하는 방향으로 기획되었으나, 지속적인 관리가 어렵기에 누구나 커스텀하여 사용할 수 있도록 README를 작성하게 되었습니다.

## **👐🏻 개발 과정**

- 1차 개발 (2021년 7월) : 페이지 및 기능 기획 및 1차 구현

- 2차 개발 (2022년 3월) : README 내용 정리 및 디자인 수정

- 3차 개발 (예정) : 코드 리팩터링

## **📌 세부 기능**

### 0. **메인 화면**

![Home](https://user-images.githubusercontent.com/47960777/156674902-3e95aefe-9110-4f26-87f3-9ddf45a6b91a.png)

폼을 만드는 버튼과 폼을 불러오는 버튼으로 최소한의 디자인으로 구성되어있습니다.

### 1. Form 생성

![Make Form](https://user-images.githubusercontent.com/47960777/156674922-554d8468-1efa-4e29-8e23-6a25da442f4c.png)

기본적으로 구글폼과 비슷한 느낌을 유지하려고 했습니다. 원래 폰트는 기본 폰트였지만, 배달의 민족 DOHYEON 체를 사용해보고 싶어서 2차 개발 시 적용해보았습니다.

원래 구글폼의 종류는 상당히 다양합니다. 그 중 단답형 질문(텍스트), 체크박스(중복체크), 객관식 질문(단일 선택) 유형으로만 구성을 해보았습니다.

|                                                   단답형 질문 폼                                                    |                                                       체크박스 폼                                                       |                                                    객관식 질문 폼                                                    |
| :-----------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: |
| ![text form](https://user-images.githubusercontent.com/47960777/156675081-d8e069f4-b542-4f74-b28b-b1c1ea14abcd.png) | ![checkbox form](https://user-images.githubusercontent.com/47960777/156675035-d05606be-1755-488d-a8bb-f9a8535082c8.png) | ![radio form](https://user-images.githubusercontent.com/47960777/156675060-a1b305cb-c300-4de2-af1e-f8554e91b87f.png) |

공통적으로 제목과 설명 입력란, [삭제], [필수 체크] 기능이 존재하며, 우측에 해당 질문의 타입을 변경할 수 있습니다.

그리고 각 질문이 포커스 될 때마다 따라오는 옵션바가 있는데, 해당 옵션바를 통해 [질문 추가], [Form 리셋] 을 진행할 수 있습니다.

위의 폼들에 대한 form들을 모두 작성한 뒤 작성된 Form을 어떻게 활용하는지 알아보겠습니다.

### 2. Form 링크 목록

Form을 작성했다면, Main 화면에서 보았던 Form 확인 버튼을 눌렀을 때 활성화가 됩니다.

![Form List](https://user-images.githubusercontent.com/47960777/156675654-f8fdb330-3e92-4904-9970-10361c2fecf7.png)

첫번째 아이콘부터는 [링크 복사], [링크 바로가기], [응답 보기] 기능으로 이루어져있습니다.

[응답 보기]는 다음과 같이 Form에 대해 작성된 응답 리스트를 볼 수 있습니다.

![Response List](https://user-images.githubusercontent.com/47960777/156680498-780b89ce-ed16-47af-92e9-e44e3b0cb761.png)

우측에 링크 아이콘을 클릭하면 아래와 같이 작성된 응답을 확인할 수 있습니다.

![Response Check Form](https://user-images.githubusercontent.com/47960777/156680548-5904a8ba-8410-4125-bd00-09dc87312fcb.png)

### 3. Form 화면 및 Form 작성하기

Form을 만드는 페이지에서 작성을 완료했다면, 2번에서 이야기한 것처럼, 링크를 통해 내가 만든 Form에 접근할 수 있습니다.
|Form 화면 1|Form 화면 2|
| :---: | :---: |
|![Form 1](https://user-images.githubusercontent.com/47960777/156680397-c5cdc146-c462-41fb-af3f-0e9d05999a4e.png)|![Form 2](https://user-images.githubusercontent.com/47960777/156701577-7819780b-7cc2-4274-8cd1-3f3636528e6c.png)|

작성 후에 제출 버튼을 클릭하면, 응답이 제출됩니다.

### 4. Form 작성하기

메인 화면에서 Form 별 응답 리스트에서 결과를 확인할 수 있습니다.

![Response 1](https://user-images.githubusercontent.com/47960777/156680548-5904a8ba-8410-4125-bd00-09dc87312fcb.png)

## **📌 프로젝트 적용 방법**

프로젝트를 어떻게 실행시키는 지에 대해 정리해보았습니다.

### git clone

`npm`이 설치되어있다는 가정 하에 진행하겠습니다.

1. 먼저 해당 프로젝트를 clone 한 뒤, root 위치에서 `npm install`을 진행해줍니다.

```
git clone https://github.com/jeeseongmin/clone-google-form.git

cd clone-google-form

npm install
```

그러면 `node_modules`가 생성되고, 패키지 다운로딩이 진행됩니다.

이후에 `npm start`로 프로젝트가 실행되는 것을 볼 수 있습니다. 하지만 여기까지만 하게되면 화면만 볼 수 있을 뿐, 실제로 Form을 만들고 저장하고 불러오는 것이 동작하지 않습니다.

### Firebase 정보 가져오기

Form 생성, 저장, 열기를 진행하려면 데이터베이스가 반드시 필요합니다.

해당 프로젝트는 `Firebase 데이터베이스인 firestore`를 사용하였습니다.

[src]-[firebase.js] 파일을 보시면 다음과 같습니다.

```
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
});

const db = firebaseApp.firestore();

export { db, firebaseApp, firebase };

```

firebase의 정보는 보안상의 이유로 노출되면 안되기 때문에 `.env 파일`에서 가져오게 되어있고, `.env 파일`은 github 상에 업로드 하지 않습니다.

Github에는 .env 파일이 현재 ignore 처리가 되어있지만, `.env 파일`의 위치는 다음과 같습니다.

```
root
├── src
│   └── ...
├── public
│   └── ...
├── ...
└── .env
```

위에 보이는 위치에 다음과 같이 .env 파일을 생성하시면 됩니다.

```
REACT_APP_FIREBASE_KEY = "something"
REACT_APP_authDomain = "something"
REACT_APP_projectId = "seomthing"
REACT_APP_storageBucket = "seomthing"
REACT_APP_messagingSenderId = "something"
REACT_APP_appId = "something"
```

그런데 아직은 제대로 된 정보가 입력되지 않은 상황입니다.

그렇기 때문에 .env 파일의 `"something"`을 채우기 위해 `firebase console`에서 로그인 후 데이터베이스를 생성한 뒤, 정보를 붙여넣으면 됩니다. (firebase 내용은 하단에 작성)

### Firebase console 이용

### 1. Firebase 프로젝트 생성하기

[firebase console](https://console.firebase.google.com/u/0/)
사이트에 로그인하여 접속한 뒤에 Firebase 프로젝트를 생성합니다.

![firebase console main](https://user-images.githubusercontent.com/47960777/156704537-37e38fea-fd48-4ed1-9334-eb18667879ad.png)

프로젝트 이름, 애널리틱스 체크 안함을 진행하게 되면 하나의 Firebase 프로젝트가 생성됩니다.

### 2. Firestore Database

프로젝트가 생성되었다면, 웹 추가와 데이터베이스 생성을 진행해줍니다.

**(1) 웹 추가**

아래 화면처럼 메인 화면 중간에 `</>` 로 보이는 웹 아이콘을 클릭해줍니다.
![웹 추가](https://user-images.githubusercontent.com/47960777/156705082-5417bbe2-8a7f-4e92-8a70-5cb5e39ae116.png)

닉네임은 원하시는 대로 작성 후에, 설정되어있는 그대로 진행해주시면 됩니다.

그러면 다음과 같이 정상적으로 웹 프로젝트가 생성되는 것을 확인할 수 있습니다.

아래 보이는 SDK 설정 및 구성에서 보이는 코드가 위에서 언급한 `firebase.js`의 모양과 같은 것을 볼 수 있습니다.

이제 아래 코드에서 보이는 정보들을 `.env 파일`에 하나씩 옮겨주면 됩니다. (이름이 다를 수 있기 때문에 비슷해 보이는 이름과 매칭해서 적어줍니다.)

주의할 점 : 원래는 이렇게 사진으로도 공개하면 프로젝트를 누구나 접근할 수 있게 됩니다. 해당 프로젝트는 삭제할 예정입니다.

|                                                     프로젝트 설정 1                                                      |                                                     프로젝트 설정 2                                                      |
| :----------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------: |
| ![프로젝트 설정1](https://user-images.githubusercontent.com/47960777/156705270-f511790d-9b15-40b7-b8e1-881c00d70438.png) | ![프로젝트 설정2](https://user-images.githubusercontent.com/47960777/156705290-95ed8c71-0480-4fe3-87b2-4c53a5008d36.png) |

**(2) Firestore Database 생성**

이제 [Firestore Database]라는 메뉴에서 데이터베이스를 생성해줍니다.

세부 과정은

**(1) Cloud Firestore의 보안 규칙 -> 프로덕션 모드에서 시작**

**(2) Cloud Firestore 위치 설정 -> 그대로 확인 설정**

그러면 Database가 정상적으로 생성되는 것을 볼 수 있습니다.

|                                                      Firestore 화면 1                                                      |                                                      Firestore 화면 2                                                      |
| :------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------: |
| ![Firestore 화면 1](https://user-images.githubusercontent.com/47960777/156704689-5f3b173e-7ebc-4409-a99e-cd3892bff83d.png) | ![Firestore 화면 2](https://user-images.githubusercontent.com/47960777/156704942-be85a425-f2fc-4117-b97a-4439a9e89500.png) |

[규칙]도 다음과 같이 `false -> true`로 수정해줘야 합니다.

|                                                      규칙 설정 1                                                      |                                                      규칙 설정 2                                                      |
| :-------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------: |
| ![규칙 설정 1](https://user-images.githubusercontent.com/47960777/156704994-ff3f22fc-a5d5-465f-9d75-69731d8676f7.png) | ![규칙 설정 2](https://user-images.githubusercontent.com/47960777/156705031-8c52bda8-d5c2-4164-b9eb-79a76c8d87f7.png) |

위와 같이 모두 적용했다면, Form이 정상적으로 생성, 저장, 불러오기, 작성하기가 가능해집니다.

## **2차 개발 코멘트** (2022.03.04)

위 프로젝트는 `2021년 여름 Ringle Bootcamp`에서 진행된 과정 가운데 하나입니다.

사실 반년 정도 지난 지금 코드를 돌아봤을 때, 처음 개발을 시작한 사람의 코드처럼 프로젝트의 구조나 섬세함이 떨어지는 것을 확인하고는 부끄럽게 여겨졌습니다.

하지만 웃긴 것은 처음 코드를 작성할 당시에만 해도 구글폼을 비슷하게 구현해본다는 사실 하나만으로 설렜고, 기분이 상당히 좋았다는 것입니다. 그리고는 하나하나 정리해보고 싶다는 결심과는 달리 진행상황을 따라가지 못하는 실력때문에 완성시키지 못한 채로 그 시간을 지나게 되었습니다.

지금와서 프로젝트를 다시 정리해본 이유는 단지 `막연하게 따라가기 벅차다고만 생각했던 코드를 다시 제대로 건드려보았을 때 어떤 기분일지` 가 궁금했기 때문이었습니다.

일단은 코드의 구조나 디테일을 건드리지는 않았지만, 모든 기능이 완벽하게 돌아갈 수 있도록, 그리고 누구나 이 repository를 보고 제 프로젝트의 의도와 기능들을 이해할 수 있도록 `README 파일`을 작성하는 데에 의의를 두었습니다.

당연한 말이지만, 점점 경험이 쌓일 수록 같은 코드를 바라보는 시각이 달라진다는 것을 느낀 순간 굉장히 보람이 있었고 재밌다는 생각이 들었습니다.

다음 3차 개발 때에는 다음 사항들을 도전해볼 예정입니다.

- `구글폼의 다른 기능들을 추가해보기`

- `코드의 구조를 깔끔하게 정리해보기`

그리고 또한 아직 부끄럽게 놓여져있는 다른 Clone project들(Gmail, Calendar) 또한 제대로 정리해볼 예정입니다.
