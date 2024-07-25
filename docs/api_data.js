define({ "api": [
  {
    "type": "get",
    "url": "/admin/v1/options",
    "title": "01. 공통 옵션 목록 조회",
    "description": "<p>어드민 옵션에 필요한 데이터 목록 조회<br/> 강사 목록<br/> 상담사 목록</p>",
    "version": "1.0.0",
    "name": "admin_getOptions",
    "group": "1._Admin_API_>_0._공통_API",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/options?fields=TEACHERS'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "fields",
            "description": "<p>조회할 옵션 (,로 복수 가능)<br/></p> <ul> <li>TEACHERS:담당강사 목록</li> <li>CONSULTANTS:상담사 목록</li> <li>MEMBER_CONSULTATION_TYPES:회원 상담 구분 목록</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "teachers",
            "description": "<p>담당강사 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teachers.value",
            "description": "<p>담당강사 키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teachers.label",
            "description": "<p>담당강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "consultants",
            "description": "<p>상담사 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultants.value",
            "description": "<p>상담사 키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultants.label",
            "description": "<p>상담사명</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "memberConsultationTypes",
            "description": "<p>회원 상담 구분 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "memberConsultationTypes.value",
            "description": "<p>회원 상담 구분 키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "memberConsultationTypes.label",
            "description": "<p>회원 상담 구분명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n {\n    \"teachers\": [\n        {\n            \"value\": \"500982\",\n            \"label\": \"강사수정222\"\n        },\n        {\n            \"value\": \"M1400118325784523\",\n            \"label\": \"한가영\"\n        }\n    ],\n    \"consultants\": [\n        {\n            \"value\": \"U1370839971594082\",\n            \"label\": \"채인숙\"\n        },\n        {\n            \"value\": \"U1629938464848865\",\n            \"label\": \"신원준2\"\n        }\n    ],\n    \"memberConsultationTypes\": [\n        {\n            \"value\": \"COURSE_REGISTRATION\",\n            \"label\": \"수강등록\"\n        },\n        {\n            \"value\": \"PROGRESS\",\n            \"label\": \"진도\"\n        }\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/00_common/01_get_options.js",
    "groupTitle": "1._Admin_API_>_0._공통_API"
  },
  {
    "type": "post",
    "url": "/admin/v1/login",
    "title": "02. 로그인",
    "description": "<p>어드민 로그인<br/> 모든 API 요청의 header에 Login-Profile=test 를 넣으면 로그인 우회<br/> Token은 각 요청 Header에 Authorization으로 넣어주시면 됩니다. (Bearer 이런거 없이 토큰만)</p>",
    "version": "1.0.0",
    "name": "admin_login",
    "group": "1._Admin_API_>_0._공통_API",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/login' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"type\": \"A\",\n    \"id\": \"123123123123@naver.com\",\n    \"password\": \"1111\"\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>로그인 유형 (T: 강사, A:운영자)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>로그인 아이디</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>비밀번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": \"M1568918323745589\",\n    \"name\": \"test\",\n    \"token\": \"1234567890\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/00_common/02_login.js",
    "groupTitle": "1._Admin_API_>_0._공통_API"
  },
  {
    "type": "post",
    "url": "/admin/v1/logout",
    "title": "03. 로그아웃",
    "description": "<p>어드민 로그아웃</p>",
    "version": "1.0.0",
    "name": "admin_logout",
    "group": "1._Admin_API_>_0._공통_API",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/logout'",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/00_common/03_logout.js",
    "groupTitle": "1._Admin_API_>_0._공통_API"
  },
  {
    "type": "delete",
    "url": "/admin/v1/users/{id}/levelTests/{testId}",
    "title": "33. 레벨테스트 삭제",
    "description": "<p>회원관리 &gt; 상세조회 &gt; 테스트탭 <br/> id : 1028151  / testId : 6118</p>",
    "version": "1.0.0",
    "name": "admin_User_DELETE_LevelTest",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/users/1028151/levelTests/6118'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "testId",
            "description": "<p>테스트 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/33_delete_user_levelTest.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "delete",
    "url": "/admin/v1/users/notes/{id}",
    "title": "28. 비고 삭제",
    "description": "<p>회원관리 &gt; 예약 &gt; 예약등록 &gt; TIP</p>",
    "version": "1.0.0",
    "name": "admin_User_Note",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/users/notes/2610931'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>비고식별키</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/28_delete_user_notes.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/levelTests",
    "title": "31. 레벨 테스트 등록",
    "description": "<p>회원관리 &gt; 회원 상세 조회 &gt; 테스트 탭 <br/> 없는 데이터가 많으니 id : 1028151 사용해주세요<br/> &quot;Content-Type&quot;은 파일이 있어서 &quot;multipart/form-data&quot;로 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_creatLevelTest",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/users/1028151/levelTests' \\\n-H \"Content-Type: multipart/form-data\" \\\n-F \"note=테스트4\" \\\n-F \"interviewer=TEST999\" \\\n-F \"studyType=NONE\" \\\n-F \"studyType=EC\" \\\n-F \"studyTypeEtc=TEST4\" \\\n-F \"consonants=R\" \\\n-F \"consonants=G\" \\\n-F \"vowels=D\" \\\n-F \"vowels=J\" \\\n-F \"clarity=10\" \\\n-F \"intonation=20\" \\\n-F \"vocabulary=30\" \\\n-F \"verbsTense=10 \" \\\n-F \"agreement=10\" \\\n-F \"prepositions=10\" \\\n-F \"articles=40 \" \\\n-F \"plurals=30\" \\\n-F \"others=10\" \\\n-F \"comprehension=10\" \\\n-F \"confidence=20\" \\\n-F \"recommendedLevel=R2\" \\\n-F \"recommendedLevel=R3\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "testStartTime",
            "description": "<p>테스트일시(시작) (yyyy-mm-dd HH:mm:ss)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "interviewer",
            "description": "<p>interviewer Interviewer</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "lbt",
            "description": "<p>LBT 테스트결과</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "rbt",
            "description": "<p>RBT 테스트결과</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "obt",
            "description": "<p>OBT</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "testIp",
            "description": "<p>TEST IP</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>첨부파일</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>특이사항</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "purpose",
            "description": "<p>Purpose of Study</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "studyType",
            "description": "<p>What kind of English do you want to study and learn?<br/> [NONE: 선택 없음 , EC: English Conversation,<br/> BE: Business English ,TS:Toeic Speaking , I:Interview ,ETC: ETC]<br></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "familyBackground",
            "description": "<p>Family Background</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "usageType",
            "description": "<p>Company or School</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "occupation",
            "description": "<p>Occupation</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "spareTime",
            "description": "<p>Spare Time</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Travel",
            "description": "<p>Abroad</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "futurePlans",
            "description": "<p>Future Plans</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "consonants",
            "description": "<p>consonants <br/> [NONE : 선택 안함, R , L, P, F, B, V, Z, SH, EZH, CH, G, TTH, TH]<br/></p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "vowels",
            "description": "<p>vowels [NONE:선택안함, A,B,C,D,E,F,G,H,I,J,K,L,M,N]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "clarity",
            "description": "<p>Clarity(10:hard to understand ,20:average ,30:easy to understand)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "intonation",
            "description": "<p>Intonation(10:very Korean ,20:a bit Korean,30:acceptable ,40:near native)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "vocabulary",
            "description": "<p>Vocabulary(10:very limited ,20:limited ,30:average ,40:above average ,50:extensive)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "verbsTense",
            "description": "<p>Verbs tense(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "agreement",
            "description": "<p>Agreement(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "prepositions",
            "description": "<p>Prepositions(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "articles",
            "description": "<p>Articles(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "plurals",
            "description": "<p>Plurals(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "others",
            "description": "<p>Others(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "strongPoint",
            "description": "<p>strongPoint</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "weakPoint",
            "description": "<p>weakPoint</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "comprehension",
            "description": "<p>Comprehension How much does learner understand<br/> (10:almost nothing ,20:some parts ,30:most parts ,40:almost everything ,50:everything)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "confidence",
            "description": "<p>Confidence(10:completely lacking ,20:lacking ,30:average ,40:above average,50:very confident)</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "recommendedLevel",
            "description": "<p>Recommended Level [NONE(선택안함), R2, R3,R4,R5,R6,R6,R7,R8,R9,ETC]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "recommendedLevelEtc",
            "description": "<p>Etc 이유</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/31_create_user_levelTest.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users",
    "title": "03. 회원 등록",
    "description": "<p>회원관리 &gt; 회원 등록</p>",
    "version": "1.0.0",
    "name": "admin_createUser",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/users' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"name\": \"테스터\",\n    \"firstNameEn\": \"Ster\",\n    \"lastNameEn\": \"Te\",\n    \"nickname\": \"별명스\",\n    \"textbook\": \"왕초보 1권\",\n    \"loginId\": \"test12346\",\n    \"email\": \"test12345@naver.com\",\n    \"isReceiveEmail\": true,\n    \"password\": \"11111\",\n    \"gender\": \"M\",\n    \"phone\": \"02-1111-2222\",\n    \"phoneType\": \"H\",\n    \"cellPhone\": \"010-1234-5678\",\n    \"isReceiveSms\": true,\n    \"isOfficeWorker\": true,\n    \"company\": \"남산회사\",\n    \"position\": \"대리\",\n    \"note\": \"놈놈놈\",\n    \"isActive\": true,\n    \"zipcode\": \"12345\",\n    \"address\": \"서울시 중구\",\n    \"detailedAddress\": \"남산타워\",\n    \"addressType\": \"C\",\n    \"joinPath\": \"ONLINE\",\n    \"languages\": [\"EN\", \"KR\", \"ETC\"],\n    \"etcLanguage\": \"아랍어\",\n    \"languageSkills\": [{\"languageTest\": \"TOEIC\", \"score\": \"900점이상\"}, {\"languageTest\": \"HKC\", \"score\": \"만점\"}],\n    \"foreignCountry\": \"호주\",\n    \"foreignPeriod\": \"1년\",\n    \"foreignPurpose\": \"여행\",\n    \"coursePurposes\": [\"STUDY_ABROAD\", \"DEVELOPMENT\"]\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "firstNameEn",
            "description": "<p>영문 이름(이름)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "lastNameEn",
            "description": "<p>영문 이름(성)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>닉네임</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "textbook",
            "description": "<p>교재</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "loginId",
            "description": "<p>아이디</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "isReceiveEmail",
            "description": "<p>이메일 수신 여부</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>비밀번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>성별 (M:남, F:여)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>유선전화</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "phoneType",
            "description": "<p>유선전화 유형 (H:자택, C:직장)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cellPhone",
            "description": "<p>휴대전화번호</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "isReceiveSms",
            "description": "<p>SMS 수신 여부</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "isOfficeWorker",
            "description": "<p>직장인 여부</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>직장/학교</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>직책/학과</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>특이사항</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "isActive",
            "description": "<p>활동 여부</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "zipcode",
            "description": "<p>우편번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>주소</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "detailedAddress",
            "description": "<p>상세 주소</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "addressType",
            "description": "<p>주소 유형 (H:자택, C:직장)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "joinPath",
            "description": "<p>가입 경로 ( SIGN:간판, ONLINE:온라인검색, RECOMMEND:지인추천, FAN:부채, LEAFLET:3단리플릿, SUBWAY:지하철광고, ALLIANCE:기업제휴,  ETC: 기타)</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": true,
            "field": "languages",
            "description": "<p>학습희망언어 목록 (EN:영어, CN:중국어, JP:일본어, KR:한국어, ETC:기타)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "etcLanguage",
            "description": "<p>학습희망언어 기타</p>"
          },
          {
            "group": "Body",
            "type": "Object[]",
            "optional": true,
            "field": "languageSkills",
            "description": "<p>외국어실력 목록</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "languageSkills.languageTest",
            "description": "<p>외국어시험 (SJPT, HKC, TOEIC, TSC, TOEIC-S, OPIc, 기타)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "languageSkills.score",
            "description": "<p>외국어시험 점수 (900점이상, 800-900점, ...)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "foreignCountry",
            "description": "<p>외국거주경험 국가명</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "foreignPeriod",
            "description": "<p>외국거주경험 기간</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "foreignPurpose",
            "description": "<p>외국거주경험 목적</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": true,
            "field": "coursePurposes",
            "description": "<p>수강의 목적 (STUDY_ABROAD:유학, TEST:시험, EMPLOYMENT:취업, WORK:업무, DEVELOPMENT:자기계발)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/03_create_user.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/consultations",
    "title": "17. 회원 상담 등록",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 상담 탭</p>",
    "version": "1.0.0",
    "name": "admin_createUserConsultation",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/users/M1374063899995477/consultations' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"consultationDate\": \"2024-01-01 09:00\",\n    \"type\": \"ETC\",\n    \"details\": \"기타 상담\"\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "consultationDate",
            "description": "<p>상담일시 (yyyy-MM-dd HH:mm)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>구분 (COURSE_REGISTRATION: 수강등록, PROGRESS: 진도, LESSON: 레슨, RESERVATION: 예약, CLASS_CONTENT: 수업내용, TEACHER: 강사, ETC: 기타)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>상담내용</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "topFixedYn",
            "description": "<p>상단고정 [체크:Y 아닐시 N]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "fontBoldYn",
            "description": "<p>상담 내용 굵게 [체크:Y 아닐시 N]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "backgroundColor",
            "description": "<p>배경색 [10:배경색 없음, 20:주황색, 30:노랑색, 40형광색]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/17_create_user_consultation.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/notes",
    "title": "25. 비고등록",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; TIP(비고)</p>",
    "version": "1.0.0",
    "name": "admin_createUserNote",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/users/ataraxia22/notes' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n     \"courseId\" : 28074,\n     \"content\" : \"TEST12\"\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>과정 회원 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "courseId",
            "description": "<p>강의 식별키(오른쪽에 있는 과정의 식별키와 일치)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>비고 내용</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/25_create_user_notes.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/orders/products",
    "title": "22. 회원 주문 상품 등록 (주문 등록)",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 상담 탭</p>",
    "version": "1.0.0",
    "name": "admin_createUserOrderProduct",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/users/M1374063899995477/orders/products' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"productId\": \"P1350556710397836\",\n    \"months\": 3,\n    \"quantity\": 12,\n    \"teacherId\": \"M1400118325784523\",\n    \"assistantTeacherId\": \"M1695013438115743\",\n    \"discountAmount\": 100,\n    \"billingAmount\": 54900\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "orderId",
            "description": "<p>주문 번호 (기존 주문에 주문 추가시)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>상품 식별키</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "months",
            "description": "<p>설정 개월</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "quantity",
            "description": "<p>설정 횟수</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "teacherId",
            "description": "<p>담임 강사 식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "assistantTeacherId",
            "description": "<p>부담임 강사 식별키</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "isRetake",
            "description": "<p>등록 구분 (신규: false, 재등록: true)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "retakeTeacherId",
            "description": "<p>재등록 대상 강사 식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "retakeNote",
            "description": "<p>재등록 사유</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "discountAmount",
            "description": "<p>할인 금액</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "billingAmount",
            "description": "<p>청구 금액</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "productOption",
            "description": "<p>상품 옵션</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>주문 식별키 (신규 주문은 새로 생성된 식별키, 기존 주문은 기존 주문의 식별키 그대로)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n {\n    \"orderId\": \"O1717904811849755\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/22_create_user_order_product.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/reservations",
    "title": "09. 예약 등록",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; 일정 체크 후 저장 id: M1699689011700418 사용해주세요 스케줄 출력이 된다면 courseId : 75127 로 하고 scheduleIds를 넘겨주세요.<br/> 스케줄 출력이 안된다면 REQUEST 참고해서 넣어주세요</p>",
    "version": "1.0.0",
    "name": "admin_createUserReservations",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/users/M1699689011700418/reservations' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"courseId\": 75127,\n    \"scheduleIds\": [7913176, 7913177, 7913180]\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "courseId",
            "description": "<p>예약할 과정 식별키</p>"
          },
          {
            "group": "Body",
            "type": "Number[]",
            "optional": false,
            "field": "scheduleIds",
            "description": "<p>예약할 담임강사 또는 부담임강사 스케줄 식별키 목록</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/09_create_user_reservations.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "delete",
    "url": "/admin/v1/users/{id}",
    "title": "21. 회원 삭제",
    "description": "<p>회원관리 &gt; 기본 탭</p>",
    "version": "1.0.0",
    "name": "admin_deleteUser",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/users/M1701411293447353'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/21_delete_user.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "delete",
    "url": "/admin/v1/users/{id}/consultations/{consultationId}",
    "title": "36. 회원 상담 삭제",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 상담 탭</p>",
    "version": "1.0.0",
    "name": "admin_deleteUserConsultation",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/users/M1374063899995477/consultations/6651'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "Number",
            "optional": false,
            "field": "consultationId",
            "description": "<p>상담 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/36_delete_user_consultation.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/levelTests/{testId}",
    "title": "30. 레벨테스트 상세조회",
    "description": "<p>회원관리 &gt; 회원  상세 조회 &gt; 테스트 탭 <br/> 없는 데이터가 많으니 id : 1028151 , testId : 6145 사용해주세요 <br/></p>",
    "version": "1.0.0",
    "name": "admin_getLevelTest",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/1028151/levelTests/6145'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "Number",
            "optional": false,
            "field": "LevelTest",
            "description": "<p>식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "levelTest",
            "description": "<p>LevelTest 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "levelTest.id",
            "description": "<p>테스트 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.testStartTime",
            "description": "<p>테스트일시(시작) (yyyy-mm-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.testEndTime",
            "description": "<p>테스트일시(끝)(yyyy-mm-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.interviewer",
            "description": "<p>Interviewer</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.lbt",
            "description": "<p>LBT 테스트결과</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.rbt",
            "description": "<p>RBT 테스트결과</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.obt",
            "description": "<p>OBT</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.testIp",
            "description": "<p>TEST IP</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.file",
            "description": "<p>첨부파일명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.originalFile",
            "description": "<p>실제 파일명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.fileUrl",
            "description": "<p>첨부파일 다운로드 URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.note",
            "description": "<p>특이사항</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.purpose",
            "description": "<p>Purpose of Study</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.studyType",
            "description": "<p>What kind of English do you want to study and learn?<br/> (사용x , 아래 studyType 사용해주세요)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.studyTypeEtc",
            "description": "<p>ETC 이유</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.familyBackground",
            "description": "<p>Family Background</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.usageType",
            "description": "<p>Company or School</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.occupation",
            "description": "<p>Occupation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.spareTime",
            "description": "<p>Spare Time</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.Travel",
            "description": "<p>Abroad</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.futurePlans",
            "description": "<p>Future Plans</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.consonants",
            "description": "<p>consonants(사용x, 아래 consonants 사용해주세요)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.vowels",
            "description": "<p>vowels(사용x, 아래 vowels 사용해주세요)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.clarity",
            "description": "<p>clarity (10:hard to understand ,20:average ,30:easy to understand)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.intonation",
            "description": "<p>intonation (10:very Korean ,20:a bit Korean,30:acceptable ,40:near native)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.vocabulary",
            "description": "<p>vocabulary (10:very limited ,20:limited ,30:average ,40:above average ,50:extensive)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.verbsTense",
            "description": "<p>verbsTense (10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.agreement",
            "description": "<p>agreement (10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.prepositions",
            "description": "<p>prepositions (10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.articles",
            "description": "<p>articles (10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.plurals",
            "description": "<p>plurals (10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.others",
            "description": "<p>others (10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.strongPoint",
            "description": "<p>strongPoint</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.weakPoint",
            "description": "<p>weakPoint</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.comprehension",
            "description": "<p>Comprehension How much does learner understand <br/> (10:almost nothing ,20:some parts ,30:most parts ,40:almost everything ,50:everything)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.confidence",
            "description": "<p>confidence (10:completely lacking ,20:lacking ,30:average ,<br/>40:above average,50:very confident)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.recommendedLevel",
            "description": "<p>Recommended Level(사용x 아래 recommendedLevel 사용해주세요 )</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.recommendedLevelEtc",
            "description": "<p>Etc 이유</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "recommendedLevel",
            "description": "<p>Recommended Level (선택X:0, 순서대로&gt; 10,20,30,40,50,60,70,80,90)</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "vowels",
            "description": "<p>vowels(선택X: 10 / 순서대로 20,30,40,50,60,70,80,90,100,110,120,130,140,150)</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "consonants",
            "description": "<p>consonants(선택 X:0, 순서대로 &gt; 10,20,30,40,50,60,70,80,90,100,110,120,130 )</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "studyType",
            "description": "<p>studyType(선택X :0/ 순서대로 10,20,30,40,50)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": 6118,\n    \"userId\": null,\n    \"testStartTime\": null,\n    \"testEndTime\": null,\n    \"interviewer\": \"TEST\",\n    \"lbt\": null,\n    \"rbt\": null,\n    \"obt\": null,\n    \"testIp\": null,\n    \"file\": \"1720341620662_다운로드.jpeg\",\n    \"fileUrl\": \"http://localhost:8080/file/download/1720341620662_다운로드.jpeg/다운로드.jpeg\",\n    \"note\": null,\n    \"purpose\": null,\n    \"studyType\": null,\n    \"studyTypeEtc\": \"TEST4\",\n    \"familyBackground\": null,\n    \"usageType\": null,\n    \"occupation\": null,\n    \"spareTime\": null,\n    \"travelAbroad\": null,\n    \"futurePlans\": null,\n    \"consonants\": null,\n    \"vowels\": null,\n    \"clarity\": \"E\",\n    \"intonation\": \"VK\",\n    \"vocabulary\": \"AA\",\n    \"verbsTense\": \"NEVER\",\n    \"agreement\": \"NEVER\",\n    \"prepositions\": \"NEVER\",\n    \"articles\": \"NEVER\",\n    \"plurals\": \"NEVER\",\n    \"others\": \"NEVER\",\n    \"strongPoint\": null,\n    \"weakPoint\": null,\n    \"comprehension\": \"AE\",\n    \"confidence\": \"CL\",\n    \"comments\": null,\n    \"recommendedLevel\": null,\n    \"recommendedLevelEtc\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/30_get_user_levelTest.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}",
    "title": "02. 회원 기본정보 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 기본 탭</p>",
    "version": "1.0.0",
    "name": "admin_getUser",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/14011'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키 (이름 옆에 표시)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "firstNameEn",
            "description": "<p>영문 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "lastNameEn",
            "description": "<p>영문 성</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>닉네임</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "textbook",
            "description": "<p>교재</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginId",
            "description": "<p>아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isReceiveEmail",
            "description": "<p>이메일 수신 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>성별 (M:남, F:여)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>유선전화</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "phoneType",
            "description": "<p>유선전화 구분 (H:자택, C:직장)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cellPhone",
            "description": "<p>휴대전화</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isReceiveSms",
            "description": "<p>SMS 수신 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isOfficeWorker",
            "description": "<p>직장인 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>직장/학교</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>직책/학과</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>특이사항</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createDateTime",
            "description": "<p>등록일</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>상태 (활동 여부)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "zipcode",
            "description": "<p>우편번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>주소</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "detailedAddress",
            "description": "<p>상세주소</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "addressType",
            "description": "<p>주소 구분 (H:자택, C:직장)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "joinPath",
            "description": "<p>가입 경로 (SIGN:간판, ONLINE:온라인검색, RECOMMEND:지인추천, FAN:부채, LEAFLET:3단리플릿, SUBWAY:지하철광고, ALLIANCE:기업제휴, ETC:기타)</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "languages",
            "description": "<p>학습 희망 언어 목록 (EN:영어, CN:중국어, JP:일본어, KR:한국어, ETC:기타)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "etcLanguage",
            "description": "<p>기타 학습 희망 언어</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "languageSkills",
            "description": "<p>외국어 실력 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "languageSkills.languageTest",
            "description": "<p>외국어 시험 (SJPT:SJPT, HKC:HKC, TOEIC:TOEIC, TSC:TSC, TOEIC_S:TOEIC-S, OPIC:OPIc, ETC:기타)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "languageSkills.score",
            "description": "<p>점수</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "foreignCountry",
            "description": "<p>외국 거주 경험 국가명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "foreignPeriod",
            "description": "<p>외국 거주 경험 기간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "foreignPurpose",
            "description": "<p>외국 거주 경험 목적</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "coursePurposes",
            "description": "<p>수강 목적 목록 (STUDY_ABROAD:유학, TEST:시험, EMPLOYMENT:취업, WORK:업무, DEVELOPMENT:자기개발)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": \"rosyeos\",\n    \"name\": \"RE:김미경\",\n    \"firstNameEn\": \"Mikyung\",\n    \"lastNameEn\": \"Kim\",\n    \"nickname\": \"Cathy Kim\",\n    \"textbook\": \"SPEAK YOUR MIND 1\",\n    \"loginId\": \"mkkim@eosi.kr\",\n    \"email\": \"mkkim@eosi.kr\",\n    \"isReceiveEmail\": false,\n    \"gender\": \"F\",\n    \"phone\": \"\",\n    \"phoneType\": \"H\",\n    \"cellPhone\": \"fCH710Q/N+d9L7co4axhXQ==\",\n    \"isReceiveSms\": true,\n    \"isOfficeWorker\": false,\n    \"company\": \"대표이사, 고문님지인\",\n    \"position\": \"\",\n    \"note\": \"▣ 고정예약자 : 11월>월/수 오후 8시 랜덤 원어민 PT (원어민 선생님 수업 선호하심/Erin,Alex선호)  LDF 메일발송 필요 X 16보7060  47거5732 33조 8332 39마3200\",\n    \"createDateTime\": \"2007-04-03T00:00:00\",\n    \"isActive\": true,\n    \"zipcode\": \"152-848\",\n    \"address\": \"서울 구로구 구로3동\",\n    \"detailedAddress\": \"184-1 우림e-Biz2차 202호\",\n    \"addressType\": \"H\",\n    \"joinPath\": \"LEAFLET\",\n    \"languages\": [\n        \"EN\"\n    ],\n    \"languageSkills\": [\n        {\n            \"languageTest\": \"SJPT\",\n            \"score\": null\n        },\n        {\n            \"languageTest\": \"HKC\",\n            \"score\": null\n        },\n        {\n            \"languageTest\": \"TOEIC\",\n            \"score\": null\n        },\n        {\n            \"languageTest\": \"TSC\",\n            \"score\": null\n        },\n        {\n            \"languageTest\": \"ETC\",\n            \"score\": null\n        },\n        {\n            \"languageTest\": \"TOEIC_S\",\n            \"score\": null\n        },\n        {\n            \"languageTest\": \"OPIC\",\n            \"score\": null\n        }\n    ],\n    \"foreignCountry\": \"\",\n    \"foreignPeriod\": \"\",\n    \"foreignPurpose\": \"\",\n    \"coursePurposes\": [\n        \"WORK\",\n        \"DEVELOPMENT\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "404",
            "optional": false,
            "field": "admin-api-0200",
            "description": "<p>USER_NOT_FOUND</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "USER_NOT_FOUND",
          "content": "HTTP/1.1 404\n{\n    \"code\": \"admin-api-0200\",\n    \"message\": \"사용자를 찾을 수 없습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/02_get_user.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/consultations/{consultationId}",
    "title": "34. 회원 상담 상세 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 상담 탭</p>",
    "version": "1.0.0",
    "name": "admin_getUserConsultation",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1374063899995477/consultations/6651'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "Number",
            "optional": false,
            "field": "consultationId",
            "description": "<p>상담 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>상담 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultationDate",
            "description": "<p>상담날짜 (yyyy-mm-dd HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>구분</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>상담내용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>상담직원 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "topFixedYn",
            "description": "<p>상단고정 [체크:Y 아닐시 N]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fontBoldYn",
            "description": "<p>상담 내용 굵게 [체크:Y 아닐시 N]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "backgroundColor",
            "description": "<p>배경색 [10:배경색 없음, 20:주황색, 30:노랑색, 40형광색]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n {\n     \"id\": 6651,\n     \"consultationDate\": \"2013-08-16 07:00\",\n     \"type\": \"ETC\",\n     \"details\": \"정세진 학생과 쌍둥이 자매.고3이며 대입 수시 면접 준비로 주2회 수업 나옴. 승무원 학교 갈 예정임.\",\n     \"createdBy\": \"U1370415306178081\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/34_get_user_consultation.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/courses/{courseId}",
    "title": "11. 회원 수강 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 수강 탭</p>",
    "version": "1.0.0",
    "name": "admin_getUserCourse",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1672401688362469/courses/75615'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "Number",
            "optional": false,
            "field": "courseId",
            "description": "<p>수강 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>수강 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>언어</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>수강명</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lessonCount",
            "description": "<p>레슨횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "assignmentCount",
            "description": "<p>배정횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "remainCount",
            "description": "<p>잔여횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "countChangeReason",
            "description": "<p>레슨횟수 변경시사유</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>수강기간 시작일 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>수강기간 종료일 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "dateChangeReason",
            "description": "<p>수강기간 변경시사유</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacherId",
            "description": "<p>담임강사 실별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "assistantTeacherId",
            "description": "<p>부담임강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdOn",
            "description": "<p>등록일 (yyyy-mm-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>상태 (WAITING: 대기, NORMAL: 정상, CANCEL: 취소)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": 75615,\n    \"language\": \"영어\",\n    \"name\": \"PTG (주2회 3개월)\",\n    \"lessonCount\": 50.0,\n    \"assignmentCount\": 0.0,\n    \"remainCount\": 50.0,\n    \"countChangeReason\": \"수강권추가구매\",\n    \"startDate\": \"2023-12-30\",\n    \"endDate\": \"2024-12-29\",\n    \"dateChangeReason\": \"어플 사용을 위해 수강시작일 임시변경\",\n    \"teacherId\": \"M1695013438115743\",\n    \"assistantTeacherId\": \"M1681990831501448\",\n    \"createdOn\": \"2023-12-30 14:32:36\",\n    \"status\": \"NORMAL\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/11_get_user_course.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/ldfs/{ldfId}",
    "title": "24. 회원 LDF 상세 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; LDF 탭</p>",
    "version": "1.0.0",
    "name": "admin_getUserLdf",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http:localhost:8080/admin/v1/users/M1672193890143260/ldfs/288497'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "LDF",
            "description": "<p>식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Long",
            "optional": false,
            "field": "id",
            "description": "<p>ldf 식별키 (이름 옆에 표시)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lesson",
            "description": "<p>lesson</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>수업일  (yyyy-mm-dd (EEE))</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>수업시작시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>수업끝나는시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacherName",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentSp",
            "description": "<p>Stress and Pronunciation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentV",
            "description": "<p>Vocabulary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentSg",
            "description": "<p>Sentence Structure &amp; Grammar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentC",
            "description": "<p>Comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n     \"id\": 288497,\n     \"lesson\": \"Jan. 2nd\",\n     \"date\": \"2023-01-02 (Mon)\",\n     \"startTime\": \"08:30\",\n     \"endTime\": \"09:00\",\n     \"teacherName\": \"임정은\",\n     \"contentSp\": \"<p><span style=\\\"font-size: 20px\\\">impressed- 감명받은</span></p> <p><span style=\\\"font-size: 20px\\\">tired- 피곤한</span></p> <p><span style=\\\"font-size: 20px\\\">freshman- 1학년, 신입사원</span></p> <p><span style=\\\"font-size: 20px\\\">popular- 인기있는</span></p> <p><span style=\\\"font-size: 20px\\\">each other-&nbsp;</span><span style=\\\"font-size: 20px\\\">서로 서로&nbsp;</span></p> <p><span style=\\\"font-size: 20px\\\">outgoing- 외향적인</span></p> <p><span style=\\\"font-size: 20px\\\">hardworking- 성실한</span></p> <p><span style=\\\"font-size: 20px\\\">mutual- 서로의</span></p>\",\n     \"contentV\": \"<p><span style=\\\"font-size: 20px\\\">&nbsp; socialize- 어울리다</span></p> <p><span style=\\\"font-size: 20px\\\">hit it off- 죽이 잘 맞다</span></p> <p><span style=\\\"font-size: 20px\\\">blow me away- 놀라게하다</span></p> <p><span style=\\\"font-size: 20px\\\">life time partner- 평생동반자</span></p> <p><span style=\\\"font-size: 20px\\\">manage- (겨우) 해내다</span></p> <p><span style=\\\"font-size: 20px\\\">conflict-갈등</span></p>\",\n     \"contentSg\": \"<p>&nbsp;</p>\",\n     \"contentC\": \"<p>&nbsp;</p>\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/24_get_user_ldf.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/notes/{noteId}",
    "title": "26. 비고 상세 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; TIP(비고)</p>",
    "version": "1.0.0",
    "name": "admin_getUserNote",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http:localhost:8080/admin/v1/users/M1537176724121409/notes/2610803'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "Number",
            "optional": true,
            "field": "noteId",
            "description": "<p>식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>비고 내용</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"content\": \"2020-01-30 19:00 수업을 결석처리\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/26_get_user_notes.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/reservations/{reservationId}",
    "title": "14. 회원 예약 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 학습 탭</p>",
    "version": "1.0.0",
    "name": "admin_getUserReservation",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1427783489308244/reservations/1366328'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "Number",
            "optional": false,
            "field": "reservationId",
            "description": "<p>예약 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>예약 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>수업일 (yyyy-MM-dd (EEE))</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>수업시작시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>수업종료시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendanceStatus",
            "description": "<p>출결 (Y: 출석, N: 결석, R: 예약)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courseName",
            "description": "<p>과정명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "report",
            "description": "<p>학사보고서</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": 1366328,\n    \"date\": \"2018-03-05 (Mon)\",\n    \"startTime\": \"08:00\",\n    \"endTime\": \"08:30\",\n    \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n    \"attendanceStatus\": \"Y\",\n    \"report\": \"1:1 inter 17(done) 두번째 다이얼로그 마무리. 주요표현들을 모두 잘기억하고계심.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/14_get_user_reservation.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/consultations",
    "title": "16. 회원 상담 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 상담 탭</p>",
    "version": "1.0.0",
    "name": "admin_listUserConsultations",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1374063899995477/consultations'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "consultations",
            "description": "<p>상담 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "consultations.id",
            "description": "<p>상담 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultations.consultationDate",
            "description": "<p>상담일시 (yyyy-mm-dd HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultations.type",
            "description": "<p>구분</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultations.details",
            "description": "<p>상담내용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultations.creatorName",
            "description": "<p>상담직원</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"consultations\": [\n        {\n            \"id\": 6651,\n            \"consultationDate\": \"2013-08-16 07:00\",\n            \"type\": \"기타\",\n            \"details\": \"정세진 학생과 쌍둥이 자매.고3이며 대입 수시 면접 준비로 주2회 수업 나옴. 승무원 학교 갈 예정임.\",\n            \"creatorName\": \"권정민\"\n        },\n        {\n            \"id\": 10895,\n            \"consultationDate\": \"2013-11-18 19:00\",\n            \"type\": \"예약\",\n            \"details\": \"12월 부터 오전 9:30 고정예약 요청하심.\",\n            \"creatorName\": \"채인숙\"\n        },\n        {\n            \"id\": 13209,\n            \"consultationDate\": \"2014-01-06 10:00\",\n            \"type\": \"예약\",\n            \"details\": \"Christoph 강사랑 예약 피해달라 부탁 하심. \",\n            \"creatorName\": \"권정민\"\n        },\n        {\n            \"id\": 13429,\n            \"consultationDate\": \"2014-01-08 10:00\",\n            \"type\": \"기타\",\n            \"details\": \"12월 8회 커피 상품권 드림.\",\n            \"creatorName\": \"권정민\"\n        },\n        {\n            \"id\": 18817,\n            \"consultationDate\": \"2014-05-12 11:30\",\n            \"type\": \"예약\",\n            \"details\": \"Juan 강사와 예약 피할것.\",\n            \"creatorName\": \"권정민\"\n        },\n        {\n            \"id\": 21055,\n            \"consultationDate\": \"2014-06-26 19:00\",\n            \"type\": \"예약\",\n            \"details\": \"당분간 다른 일정으로 사정이 생겨서 수업 못나온다고 함. 이번주 토요일 수업 먼저 취소해달라고 했고, 수강 기간 & 횟수 확인 요청. 수강 기간도 3주 정도 남았고, 수업도 7회 남았으니 방문해서 홀딩 서류 작성하고 방학 중의 일정이 끝나면 다시 수업할 수 있도록 할 것을 권유. 일단 알겠다고 함\",\n            \"creatorName\": \"편효린\"\n        },\n        {\n            \"id\": 21788,\n            \"consultationDate\": \"2014-07-09 12:00\",\n            \"type\": \"기타\",\n            \"details\": \"월드컵 이벤트 당첨 1회 추가해드림.\",\n            \"creatorName\": \"권정민\"\n        },\n        {\n            \"id\": 26914,\n            \"consultationDate\": \"2014-10-30 12:00\",\n            \"type\": \"예약\",\n            \"details\": \"예약하시고 계속 결석 하심.당분간 수업 오시기 힘드실 것 같다 말씀 하시며,홀딩 원하심. 겨울방학 12월중순부터 다시 컴백하시겠다 하심.\",\n            \"creatorName\": \"권정민\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/16_list_user_consultations.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/courses/{courseId}/histories",
    "title": "13. 회원 수강관리이력 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 수강 탭</p>",
    "version": "1.0.0",
    "name": "admin_listUserCourseHistories",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1672401688362469/courses/75615/histories'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "Number",
            "optional": false,
            "field": "courseId",
            "description": "<p>수강 식별키</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "optional": true,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 이력 수</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "page",
            "description": "<p>조회할 페이지</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>이력 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.id",
            "description": "<p>이력 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.modifiedOn",
            "description": "<p>날짜 (yyyy-mm-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.modifierName",
            "description": "<p>처리자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.type",
            "description": "<p>구분</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalCount",
            "description": "<p>전체 이력 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>현재 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 이력 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>전체 페이지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startPage",
            "description": "<p>페이징 영역에 노출될 첫 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endPage",
            "description": "<p>페이징 영역에 노출될 마지막 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>전 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>다음 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFirst",
            "description": "<p>첫 페이징 영역 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLast",
            "description": "<p>마지막 페이징 영역 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 3817438,\n            \"modifiedOn\": \"2023-12-30 14:35:53\",\n            \"modifierName\": \"손진\",\n            \"type\": \"변경\",\n            \"content\": \"레슨횟수 : 54.0 -&gt; 50(수강권추가구매)<br>수강시작일 : 2024-01-06 -&gt; 2023-12-30(어플 사용을 위해 수강시작일 임시변경)<br>수강종료일 : 2024-04-05 -&gt; 2024-12-29(어플 사용을 위해 수강시작일 임시변경)\"\n        },\n        {\n            \"id\": 3817435,\n            \"modifiedOn\": \"2023-12-30 14:32:36\",\n            \"modifierName\": \"손진\",\n            \"type\": \"주문\",\n            \"content\": \"PTG (주2회 3개월)/54회\"\n        }\n    ],\n    \"totalCount\": 2,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 1,\n    \"endPage\": 1,\n    \"hasNext\": false,\n    \"hasPrev\": false,\n    \"isFirst\": true,\n    \"isLast\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/13_list_user_course_histories.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/courses",
    "title": "04. 회원 과정(수강) 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 과정 정보<br/> 회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; 과정 정보<br/> 회원관리 &gt; 회원 목록 조회 &gt; 수강 탭<br/></p>",
    "version": "1.0.0",
    "name": "admin_listUserCourses",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1672401688362469/courses?status=VALID'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "status",
            "description": "<p>조회할 수강 상태 (VALID: 기본 조회, ATTENDING: 수강중, WAITING: 대기중, COMPLETE: 수강완료, REFUND: 환불)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 과정 수</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "page",
            "description": "<p>조회할 페이지</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>과정 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.id",
            "description": "<p>과정 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.name",
            "description": "<p>과정명</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.lessonCount",
            "description": "<p>레슨횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.assignmentCount",
            "description": "<p>배정횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.remainCount",
            "description": "<p>잔여횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.startDate",
            "description": "<p>수강기간 시작일 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.endDate",
            "description": "<p>수강기간 종료일 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.teacherId",
            "description": "<p>담임강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.teacherName",
            "description": "<p>담임강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "list.assistantTeacherId",
            "description": "<p>부담임강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "list.assistantTeacherName",
            "description": "<p>부담임강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.createDate",
            "description": "<p>등록일 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>상태</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalCount",
            "description": "<p>전체 과정 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>현재 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 과정 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>전체 페이지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startPage",
            "description": "<p>페이징 영역에 노출될 첫 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endPage",
            "description": "<p>페이징 영역에 노출될 마지막 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>전 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>다음 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFirst",
            "description": "<p>첫 페이징 영역 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLast",
            "description": "<p>마지막 페이징 영역 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 75615,\n            \"name\": \"PTG (주2회 3개월)/50.0회\",\n            \"lessonCount\": 50.0,\n            \"assignmentCount\": 0.0,\n            \"remainCount\": 50.0,\n            \"startDate\": \"2023-12-30\",\n            \"endDate\": \"2024-12-29\",\n            \"teacherId\": \"M1695013438115743\",\n            \"teacherName\": \"서안나\",\n            \"assistantTeacherId\": \"M1681990831501448\",\n            \"assistantTeacherName\": \"정지은\",\n            \"createDate\": \"2023-12-30\",\n            \"status\": \"정상\"\n        },\n        {\n            \"id\": 73912,\n            \"name\": \"PTM (주2회 3개월)/26.0회\",\n            \"lessonCount\": 26.0,\n            \"assignmentCount\": 26.0,\n            \"remainCount\": 0.0,\n            \"startDate\": \"2023-07-19\",\n            \"endDate\": \"2024-01-28\",\n            \"teacherId\": \"M1400118325784523\",\n            \"teacherName\": \"한가영\",\n            \"assistantTeacherId\": \"M1657064932771055\",\n            \"assistantTeacherName\": \"김나래\",\n            \"createDate\": \"2023-07-19\",\n            \"status\": \"정상\"\n        },\n        {\n            \"id\": 72884,\n            \"name\": \"PTM (주2회 3개월)/26.0회\",\n            \"lessonCount\": 26.0,\n            \"assignmentCount\": 26.0,\n            \"remainCount\": 0.0,\n            \"startDate\": \"2023-04-11\",\n            \"endDate\": \"2023-07-20\",\n            \"teacherId\": \"M1660267538951028\",\n            \"teacherName\": \"Adam\",\n            \"assistantTeacherId\": \"M1679893566676420\",\n            \"assistantTeacherName\": \"Daniel\",\n            \"createDate\": \"2023-03-31\",\n            \"status\": \"정상\"\n        },\n        {\n            \"id\": 71840,\n            \"name\": \"NEW PT 24회 3개월/24.0회\",\n            \"lessonCount\": 24.0,\n            \"assignmentCount\": 24.0,\n            \"remainCount\": 0.0,\n            \"startDate\": \"2023-01-09\",\n            \"endDate\": \"2023-04-08\",\n            \"teacherId\": \"M1523939117926947\",\n            \"teacherName\": \"Airin\",\n            \"assistantTeacherId\": \"M1660267538951028\",\n            \"assistantTeacherName\": \"Adam\",\n            \"createDate\": \"2022-12-30\",\n            \"status\": \"정상\"\n        }\n    ],\n    \"totalCount\": 4,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 1,\n    \"endPage\": 1,\n    \"hasNext\": false,\n    \"hasPrev\": false,\n    \"isFirst\": true,\n    \"isLast\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/04_list_user_courses.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/ldfs",
    "title": "23. 회원 LDF 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; LDF 탭</p>",
    "version": "1.0.0",
    "name": "admin_listUserLdfs",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1654741178072018/ldfs",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "date",
            "description": "<p>날짜 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 LDF 수</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "page",
            "description": "<p>조회할 페이지</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>LDF 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.id",
            "description": "<p>예약 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.date",
            "description": "<p>수업일  (yyyy-mm-dd (EEE))</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.startTime",
            "description": "<p>수업시작시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.endTime",
            "description": "<p>수업종료시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.courseName",
            "description": "<p>강의명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.content",
            "description": "<p>콘텐츠</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.teacherName",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.attendanceStatus",
            "description": "<p>출석여부(출석/ 결석/ 예약) 출석 시 등록 버튼 출력.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.ldfId",
            "description": "<p>LDF 파일 유무 (파일이 있을 시 LDF 식별키/없을 시 NULL)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>현재 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 회원 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>전체 페이지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startPage",
            "description": "<p>페이징 영역에 노출될 첫 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endPage",
            "description": "<p>페이징 영역에 노출될 마지막 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>전 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>다음 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFirst",
            "description": "<p>첫 페이징 영역 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLast",
            "description": "<p>마지막 페이징 영역 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 2533960,\n            \"date\": \"2023-07-27 (Thu)\",\n            \"startTime\": \"15:00\",\n            \"endTime\": \"15:30\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": null,\n            \"email\": \"gone93z@naver.com\"\n        },\n        {\n            \"id\": 2533961,\n            \"date\": \"2023-07-27 (Thu)\",\n            \"startTime\": \"15:30\",\n            \"endTime\": \"16:00\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": 333965,\n            \"email\": \"gone93z@naver.com\"\n        },\n        {\n            \"id\": 2502187,\n            \"date\": \"2023-07-21 (Fri)\",\n            \"startTime\": \"16:30\",\n            \"endTime\": \"17:00\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": null,\n            \"email\": \"gone93z@naver.com\"\n        },\n        {\n            \"id\": 2502186,\n            \"date\": \"2023-07-21 (Fri)\",\n            \"startTime\": \"16:00\",\n            \"endTime\": \"16:30\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": null,\n            \"email\": \"gone93z@naver.com\"\n        },\n        {\n            \"id\": 2502184,\n            \"date\": \"2023-07-14 (Fri)\",\n            \"startTime\": \"16:00\",\n            \"endTime\": \"16:30\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": null,\n            \"email\": \"gone93z@naver.com\"\n        },\n        {\n            \"id\": 2502185,\n            \"date\": \"2023-07-14 (Fri)\",\n            \"startTime\": \"16:30\",\n            \"endTime\": \"17:00\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": 331048,\n            \"email\": \"gone93z@naver.com\"\n        },\n        {\n            \"id\": 2502181,\n            \"date\": \"2023-07-26 (Wed)\",\n            \"startTime\": \"16:30\",\n            \"endTime\": \"17:00\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"결석\",\n            \"ldfId\": null,\n            \"email\": \"gone93z@naver.com\"\n        },\n        {\n            \"id\": 2502180,\n            \"date\": \"2023-07-26 (Wed)\",\n            \"startTime\": \"16:00\",\n            \"endTime\": \"16:30\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"결석\",\n            \"ldfId\": null,\n            \"email\": \"gone93z@naver.com\"\n        },\n        {\n            \"id\": 2502179,\n            \"date\": \"2023-07-19 (Wed)\",\n            \"startTime\": \"16:30\",\n            \"endTime\": \"17:00\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": 332036,\n            \"email\": \"gone93z@naver.com\"\n        },\n        {\n            \"id\": 2502178,\n            \"date\": \"2023-07-19 (Wed)\",\n            \"startTime\": \"16:00\",\n            \"endTime\": \"16:30\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": null,\n            \"email\": \"gone93z@naver.com\"\n        }\n    ],\n    \"totalCount\": 94,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 10,\n    \"endPage\": 10,\n    \"hasNext\": false,\n    \"isFirst\": true,\n    \"isLast\": true,\n    \"hasPrev\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/23_list_user_ldf.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/notes",
    "title": "10. 회원 비고 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; TIP <br/> modifiedBy null일 시에는 createdOn와 creatorName 출력 <br/> modifiedBy null이 아닐 시에는 modifiedOn, modifierName 출력</p>",
    "version": "1.0.0",
    "name": "admin_listUserNotes",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/ataraxia22/notes?courseId=28071",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
            "field": "courseId",
            "description": "<p>수강 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>비고 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>비고 내용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modifiedOn",
            "description": "<p>수정일시 (yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdOn",
            "description": "<p>등록일시 (yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modifierName",
            "description": "<p>수정자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "creatorName",
            "description": "<p>등록자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modifiedBy",
            "description": "<p>등록자 식별키</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n[\n\n    {\n        \"id\": 2666892,\n        \"content\": \"노화선T 불호\",\n        \"modifiedOn\": \"2020-03-24 19:53:19\",\n        \"modifierName\": \"배시현\",\n        \"createdOn\": \"2020-03-24 19:53:19\",\n        \"creatorName\": \"배시현\"\n    },\n    {\n        \"id\": 2658891,\n        \"content\": \"Erin 불호\",\n        \"modifiedOn\": \"2020-03-17 11:14:23\",\n        \"modifierName\": \"배규리\",\n        \"createdOn\": \"2020-03-17 11:14:23\",\n        \"creatorName\": \"배규리\"\n    },\n    {\n        \"id\": 2657874,\n        \"content\": \"6:00pm 월 Brett TT, 수 Erin TT\",\n        \"modifiedOn\": \"2020-03-16 14:06:30\",\n        \"modifierName\": \"배시현\",\n        \"createdOn\": \"2020-03-16 14:06:30\",\n        \"creatorName\": \"배시현\"\n    },\n    {\n        \"id\": 2642209,\n        \"content\": \"노화선 T 불호\",\n        \"modifiedOn\": \"2020-02-26 13:26:43\",\n        \"modifierName\": \"신희진\",\n        \"createdOn\": \"2020-02-26 13:26:43\",\n        \"creatorName\": \"신희진\"\n    }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/10_list_user_notes.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/orders",
    "title": "19. 회원 주문 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_listUserOrder",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1374063899995477/orders/O1374064016311096'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>주문 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>주문 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "supplyAmount",
            "description": "<p>공급가액 합계</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "discountAmount",
            "description": "<p>할인액 합계</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "billingAmount",
            "description": "<p>실청구금액 합계</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "refundAmount",
            "description": "<p>환불금액 합계</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orderProducts",
            "description": "<p>주문 상세 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderProducts.id",
            "description": "<p>주문 상세 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orderProducts.amount",
            "description": "<p>공급가액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orderProducts.discountAmount",
            "description": "<p>할인액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orderProducts.billingAmount",
            "description": "<p>실청구금액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orderProducts.refundAmount",
            "description": "<p>환불금액</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderProducts.productType",
            "description": "<p>분류</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderProducts.createdOn",
            "description": "<p>주문일시 (yyyy-MM-dd HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderProducts.orderType",
            "description": "<p>구분</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderProducts.retake",
            "description": "<p>등록구분</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": \"O1374064016311096\",\n    \"supplyAmount\": 1320000,\n    \"discountAmount\": 264000,\n    \"billingAmount\": 1056000,\n    \"refundAmount\": 0,\n    \"orderProducts\": [\n        {\n            \"id\": \"I1374064016316423\",\n            \"name\": \"PTG (주2회 3개월)/3개월/24회\",\n            \"amount\": 1320000,\n            \"discountAmount\": 264000,\n            \"billingAmount\": 1056000,\n            \"refundAmount\": 0,\n            \"productType\": \"과정\",\n            \"createdOn\": \"2013-07-17 21:26\",\n            \"orderType\": \"신규\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/19_get_user_order.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/orders",
    "title": "18. 회원 주문 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_listUserOrders",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1374063899995477/orders'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "order",
            "description": "<p>주문 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order.id",
            "description": "<p>주문 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order.supplyAmount",
            "description": "<p>공급가액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order.discountAmount",
            "description": "<p>할인액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order.billingAmount",
            "description": "<p>주문금액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order.paymentAmount",
            "description": "<p>매출액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order.receivableAmount",
            "description": "<p>미수금</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order.createdOn",
            "description": "<p>주문일시 (yyyy-MM-dd HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order.creatorName",
            "description": "<p>처리자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "order.orderProductName",
            "description": "<p>상품명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"order\": [\n        {\n            \"id\": \"O1374064016311096\",\n            \"supplyAmount\": 1320000,\n            \"discountAmount\": 264000,\n            \"billingAmount\": 1056000,\n            \"paymentAmount\": 1056000,\n            \"receivableAmount\": 0,\n            \"createdOn\": \"2013-07-17 21:26\",\n            \"creatorName\": \"김현희\",\n            \"orderProductName\": \"PTG (주2회 3개월)/3개월/24회\"\n        },\n        {\n            \"id\": \"O1380100895273346\",\n            \"supplyAmount\": 1320000,\n            \"discountAmount\": 264000,\n            \"billingAmount\": 1056000,\n            \"paymentAmount\": 1056000,\n            \"receivableAmount\": 0,\n            \"createdOn\": \"2013-09-25 18:21\",\n            \"creatorName\": \"김현희\",\n            \"orderProductName\": \"PTG (주2회 3개월)/3개월/24회\"\n        },\n        {\n            \"id\": \"O1389141061183888\",\n            \"supplyAmount\": 1320000,\n            \"discountAmount\": 264000,\n            \"billingAmount\": 1056000,\n            \"paymentAmount\": 1056000,\n            \"receivableAmount\": 0,\n            \"createdOn\": \"2014-01-08 09:31\",\n            \"creatorName\": \"권정민\",\n            \"orderProductName\": \"PTG (주2회 3개월)/3개월/24회\"\n        },\n        {\n            \"id\": \"O1396685391422969\",\n            \"supplyAmount\": 1320000,\n            \"discountAmount\": 264000,\n            \"billingAmount\": 1056000,\n            \"paymentAmount\": 1056000,\n            \"receivableAmount\": 0,\n            \"createdOn\": \"2014-04-05 17:09\",\n            \"creatorName\": \"김현희\",\n            \"orderProductName\": \"PTG (주2회 3개월)/3개월/24회\"\n        },\n        {\n            \"id\": \"O1407978923393461\",\n            \"supplyAmount\": 1320000,\n            \"discountAmount\": 264000,\n            \"billingAmount\": 1056000,\n            \"paymentAmount\": 1056000,\n            \"receivableAmount\": 0,\n            \"createdOn\": \"2014-08-14 10:15\",\n            \"creatorName\": \"권정민\",\n            \"orderProductName\": \"PTG (주2회 3개월)/3개월/24회\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/18_list_user_orders.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/reservations",
    "title": "05. 회원 예약 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭<br/> 회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; 최근 5회 수강현황<br/> 회원관리 &gt; 회원 목록 조회 &gt; 학습 탭</p>",
    "version": "1.0.0",
    "name": "admin_listUserReservations",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1427783489308244/reservations?courseId=52506'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "courseId",
            "description": "<p>과정 식별키</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "dateFrom",
            "description": "<p>수업일 검색 ~부터 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "dateTo",
            "description": "<p>수업일 검색 ~까지 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "yearMonth",
            "description": "<p>수업월 검색 (yyyy-mm)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "date",
            "description": "<p>수업일 검색 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "excludeCancel",
            "description": "<p>true: 취소 미포함, false: 포함 (default false)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "excludeAttendance",
            "description": "<p>true: 출결완료 미포함, false: 포함 (default false)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 예약 수</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "page",
            "description": "<p>조회할 페이지</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>예약 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.id",
            "description": "<p>예약 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.teacherName",
            "description": "<p>강사</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.lessonType",
            "description": "<p>수업</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.date",
            "description": "<p>수업일 (yyyy-mm-dd (EEE))</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.startTime",
            "description": "<p>수업시작시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.endTime",
            "description": "<p>수업종료시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.attendanceStatus",
            "description": "<p>출결</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.modifierName",
            "description": "<p>처리직원</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.modifiedOn",
            "description": "<p>처리일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.courseName",
            "description": "<p>과정명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.report",
            "description": "<p>학사보고서</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalCount",
            "description": "<p>전체 예약 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>현재 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 예약 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>전체 페이지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startPage",
            "description": "<p>페이징 영역에 노출될 첫 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endPage",
            "description": "<p>페이징 영역에 노출될 마지막 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>전 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>다음 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFirst",
            "description": "<p>첫 페이징 영역 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLast",
            "description": "<p>마지막 페이징 영역 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 1366328,\n            \"teacherName\": \"송예희\",\n            \"lessonType\": \"PT\",\n            \"date\": \"2018-03-05 (Mon)\",\n            \"startTime\": \"08:00\",\n            \"endTime\": \"08:30\",\n            \"attendanceStatus\": \"출석\",\n            \"modifierName\": \"김조희\",\n            \"modifiedOn\": \"2018-02-23\",\n            \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n            \"report\": \"1:1 inter 17(done) 두번째 다이얼로그 마무리. 주요표현들을 모두 잘기억하고계심.\"\n        },\n        {\n            \"id\": 1366327,\n            \"teacherName\": \"Brett\",\n            \"lessonType\": \"PT\",\n            \"date\": \"2018-03-05 (Mon)\",\n            \"startTime\": \"07:30\",\n            \"endTime\": \"08:00\",\n            \"attendanceStatus\": \"출석\",\n            \"modifierName\": \"김조희\",\n            \"modifiedOn\": \"2018-02-23\",\n            \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n            \"report\": \"FT about his weekend and how his daughters are doing and what kind of alcohol he drinks when he goes out.\"\n        },\n        {\n            \"id\": 1366322,\n            \"teacherName\": \"Jason\",\n            \"lessonType\": \"PT\",\n            \"date\": \"2018-03-02 (Fri)\",\n            \"startTime\": \"08:00\",\n            \"endTime\": \"08:30\",\n            \"attendanceStatus\": \"출석\",\n            \"modifierName\": \"김조희\",\n            \"modifiedOn\": \"2018-02-23\",\n            \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n            \"report\": \"Ft  Talked about a custom cabinet he had made in honor of his mother who passed away.\"\n        },\n        {\n            \"id\": 1366321,\n            \"teacherName\": \"송예희\",\n            \"lessonType\": \"PT\",\n            \"date\": \"2018-03-02 (Fri)\",\n            \"startTime\": \"07:30\",\n            \"endTime\": \"08:00\",\n            \"attendanceStatus\": \"출석\",\n            \"modifierName\": \"김조희\",\n            \"modifiedOn\": \"2018-02-23\",\n            \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n            \"report\": \"1:1 inter 17(#2) 17.2 스크립트 연습. 주요 표현의 의미 확인하고, 발음과 억양 연습. \"\n        },\n        {\n            \"id\": 1359079,\n            \"teacherName\": \"Brett\",\n            \"lessonType\": \"PT\",\n            \"date\": \"2018-02-21 (Wed)\",\n            \"startTime\": \"08:00\",\n            \"endTime\": \"08:30\",\n            \"attendanceStatus\": \"출석\",\n            \"modifierName\": \"김조희\",\n            \"modifiedOn\": \"2018-02-14\",\n            \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n            \"report\": \"FT about his recent holiday and certain Korean traditions as well.\"\n        },\n        {\n            \"id\": 1342251,\n            \"teacherName\": \"Brett\",\n            \"lessonType\": \"PT\",\n            \"date\": \"2018-02-28 (Wed)\",\n            \"startTime\": \"08:00\",\n            \"endTime\": \"08:30\",\n            \"attendanceStatus\": \"출석\",\n            \"modifierName\": \"김조희\",\n            \"modifiedOn\": \"2018-01-18\",\n            \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n            \"report\": \"Ft about shamans and fortune tellers in Korea and experiences of the supernatural and metaphysical.\"\n        },\n        {\n            \"id\": 1342250,\n            \"teacherName\": \"송예희\",\n            \"lessonType\": \"PT\",\n            \"date\": \"2018-02-28 (Wed)\",\n            \"startTime\": \"07:30\",\n            \"endTime\": \"08:00\",\n            \"attendanceStatus\": \"출석\",\n            \"modifierName\": \"김조희\",\n            \"modifiedOn\": \"2018-01-18\",\n            \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n            \"report\": \"1:1 inter 17(#2) 17.1까지만 진행. 주요 표현의 의미와 확장적 의미 확인하고 예문만들어봄. 자연스러운 억양과 발음 연습.  * next: 1:1 inter 17(#3) \"\n        },\n        {\n            \"id\": 1342246,\n            \"teacherName\": \"Brett\",\n            \"lessonType\": \"PT\",\n            \"date\": \"2018-02-26 (Mon)\",\n            \"startTime\": \"07:30\",\n            \"endTime\": \"08:00\",\n            \"attendanceStatus\": \"출석\",\n            \"modifierName\": \"김조희\",\n            \"modifiedOn\": \"2018-01-18\",\n            \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n            \"report\": \"FT about his nephew passing the medical bar exam and giving gifts overseas.\"\n        },\n        {\n            \"id\": 1342247,\n            \"teacherName\": \"송예희\",\n            \"lessonType\": \"PT\",\n            \"date\": \"2018-02-26 (Mon)\",\n            \"startTime\": \"08:00\",\n            \"endTime\": \"08:30\",\n            \"attendanceStatus\": \"출석\",\n            \"modifierName\": \"김조희\",\n            \"modifiedOn\": \"2018-01-18\",\n            \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n            \"report\": \"1:1 inter 17(#1) 랭귀지박스까지만 진행. 주말에 있으셨던 일과 현사무실 구조 등 설명. 담시간에 17과 끝내기로함. \"\n        },\n        {\n            \"id\": 1342242,\n            \"teacherName\": \"송예희\",\n            \"lessonType\": \"PT\",\n            \"date\": \"2018-02-21 (Wed)\",\n            \"startTime\": \"07:30\",\n            \"endTime\": \"08:00\",\n            \"attendanceStatus\": \"출석\",\n            \"modifierName\": \"김조희\",\n            \"modifiedOn\": \"2018-01-18\",\n            \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n            \"report\": \"Free talking about his two daughters\"\n        }\n    ],\n    \"totalCount\": 38,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 4,\n    \"endPage\": 4,\n    \"hasNext\": false,\n    \"hasPrev\": false,\n    \"isFirst\": true,\n    \"isLast\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/05_list_user_reservations.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/schedules/by-date",
    "title": "08. 회원 날짜별 스케줄 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; 주별<br/> 조회할 기간의 6:00~23:30 까지의 스케줄을 조회한다.</p>",
    "version": "1.0.0",
    "name": "admin_listUserSchedulesByDate",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1699689011700418/schedules/by-date?dateFrom=2024-01-24&dateTo=2024-01-31&teacherId=M1661138591404520&assistantTeacherId=M1657064932771055'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "dateFrom",
            "description": "<p>조회할 날짜 ~부터 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "dateTo",
            "description": "<p>조회할 날짜 ~까지 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "teacherId",
            "description": "<p>조회할 담임강사 식별키</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "assistantTeacherId",
            "description": "<p>조회할 부담임 강사 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedules",
            "description": "<p>스케줄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.date",
            "description": "<p>날짜 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.time",
            "description": "<p>시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "schedules.teacherScheduleId",
            "description": "<p>담임강사 스케줄 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.teacherStatus",
            "description": "<p>담임강사 예약 상태 (NONE:스케줄 없음, USERS:조회 대상 회원의 예약, AVAILABLE:예약 가능, FULL:예약 매진)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "schedules.assistantTeacherScheduleId",
            "description": "<p>부담임강사 스케줄 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.assistantTeacherStatus",
            "description": "<p>부담임강사 예약 상태 (NONE:스케줄 없음, USERS:조회 대상 회원의 예약, AVAILABLE:예약 가능, FULL:예약 매진)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedules.teachers",
            "description": "<p>강사 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.teachers.id",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.teachers.name",
            "description": "<p>강사명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"schedules\": [\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"06:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"06:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"07:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"07:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"08:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"08:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"09:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"09:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"10:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"10:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"11:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"11:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"12:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"12:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"13:00\",\n            \"teacherScheduleId\": 9211805,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210911,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"13:30\",\n            \"teacherScheduleId\": 9211988,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210914,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"14:00\",\n            \"teacherScheduleId\": 9211985,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210917,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"14:30\",\n            \"teacherScheduleId\": 9211982,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210920,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"15:00\",\n            \"teacherScheduleId\": 9211979,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210923,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"15:30\",\n            \"teacherScheduleId\": 9211976,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210926,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"16:00\",\n            \"teacherScheduleId\": 9211973,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210929,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"16:30\",\n            \"teacherScheduleId\": 9211970,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210932,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"17:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"17:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"18:00\",\n            \"teacherScheduleId\": 9211880,\n            \"teacherStatus\": \"FULL\",\n            \"assistantTeacherScheduleId\": 9210860,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"18:30\",\n            \"teacherScheduleId\": 9211883,\n            \"teacherStatus\": \"FULL\",\n            \"assistantTeacherScheduleId\": 9210857,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"19:00\",\n            \"teacherScheduleId\": 9211886,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210851,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"19:30\",\n            \"teacherScheduleId\": 9211889,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210848,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"20:00\",\n            \"teacherScheduleId\": 9211892,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210845,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"20:30\",\n            \"teacherScheduleId\": 9211895,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210854,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"21:00\",\n            \"teacherScheduleId\": 9211898,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210842,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"21:30\",\n            \"teacherScheduleId\": 9211901,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210839,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"22:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"22:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"23:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-24\",\n            \"time\": \"23:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"06:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"06:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"07:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"07:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"08:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"08:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"09:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"09:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"10:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"10:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"11:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"11:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"12:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"12:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"13:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210956,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"13:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210953,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"14:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210950,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"14:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210947,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"15:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210944,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"15:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210941,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"16:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210938,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"16:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210935,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"17:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"17:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"18:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210863,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"18:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210866,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"19:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210869,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"19:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210872,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"20:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210875,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"20:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210878,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"21:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210881,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"21:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9210884,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"22:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"22:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"23:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-25\",\n            \"time\": \"23:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"06:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"06:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"07:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"07:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"08:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"08:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"09:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"09:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"10:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"10:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"11:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"11:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"12:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"12:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"13:00\",\n            \"teacherScheduleId\": 9211808,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210959,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"13:30\",\n            \"teacherScheduleId\": 9211946,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210962,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"14:00\",\n            \"teacherScheduleId\": 9211943,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210965,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"14:30\",\n            \"teacherScheduleId\": 9211940,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210968,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"15:00\",\n            \"teacherScheduleId\": 9211937,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210971,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"15:30\",\n            \"teacherScheduleId\": 9211934,\n            \"teacherStatus\": \"FULL\",\n            \"assistantTeacherScheduleId\": 9210974,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"16:00\",\n            \"teacherScheduleId\": 9211931,\n            \"teacherStatus\": \"FULL\",\n            \"assistantTeacherScheduleId\": 9210977,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"16:30\",\n            \"teacherScheduleId\": 9211928,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210980,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"17:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"17:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"18:00\",\n            \"teacherScheduleId\": 9211925,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210908,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"18:30\",\n            \"teacherScheduleId\": 9211922,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210905,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"19:00\",\n            \"teacherScheduleId\": 9211919,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210902,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"19:30\",\n            \"teacherScheduleId\": 9211916,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210899,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"20:00\",\n            \"teacherScheduleId\": 9211913,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210896,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"20:30\",\n            \"teacherScheduleId\": 9211910,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210893,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"21:00\",\n            \"teacherScheduleId\": 9211907,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210890,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"21:30\",\n            \"teacherScheduleId\": 9211904,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210887,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"22:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"22:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"23:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-26\",\n            \"time\": \"23:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"06:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"06:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"07:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"07:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"08:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"08:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"09:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"09:30\",\n            \"teacherScheduleId\": 9211991,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210983,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"10:00\",\n            \"teacherScheduleId\": 9211994,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210986,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"10:30\",\n            \"teacherScheduleId\": 9211997,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210989,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"11:00\",\n            \"teacherScheduleId\": 9212000,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210992,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"11:30\",\n            \"teacherScheduleId\": 9212003,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210995,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"12:00\",\n            \"teacherScheduleId\": 9212006,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9210998,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"12:30\",\n            \"teacherScheduleId\": 9212009,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211001,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"13:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": 9211004,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"13:30\",\n            \"teacherScheduleId\": 9212012,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"14:00\",\n            \"teacherScheduleId\": 9212015,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211007,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"14:30\",\n            \"teacherScheduleId\": 9212018,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211010,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"15:00\",\n            \"teacherScheduleId\": 9212021,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211013,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"15:30\",\n            \"teacherScheduleId\": 9212024,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211016,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"16:00\",\n            \"teacherScheduleId\": 9212027,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211019,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"16:30\",\n            \"teacherScheduleId\": 9212030,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211022,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"17:00\",\n            \"teacherScheduleId\": 9212033,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211025,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"17:30\",\n            \"teacherScheduleId\": 9212036,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211028,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"18:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"18:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"19:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"19:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"20:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"20:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"21:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"21:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"22:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"22:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"23:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-27\",\n            \"time\": \"23:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"06:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"06:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"07:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"07:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"08:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"08:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"09:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"09:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"10:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"10:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"11:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"11:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"12:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"12:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"13:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"13:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"14:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"14:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"15:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"15:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"16:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"16:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"17:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"17:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"18:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"18:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"19:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"19:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"20:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"20:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"21:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"21:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"22:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"22:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"23:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-28\",\n            \"time\": \"23:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"06:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"06:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"07:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"07:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"08:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"08:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"09:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"09:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"10:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"10:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"11:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"11:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"12:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"12:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"13:00\",\n            \"teacherScheduleId\": 9212039,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"13:30\",\n            \"teacherScheduleId\": 9212048,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"14:00\",\n            \"teacherScheduleId\": 9212051,\n            \"teacherStatus\": \"FULL\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"14:30\",\n            \"teacherScheduleId\": 9212054,\n            \"teacherStatus\": \"FULL\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"15:00\",\n            \"teacherScheduleId\": 9212057,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"15:30\",\n            \"teacherScheduleId\": 9212060,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"16:00\",\n            \"teacherScheduleId\": 9212063,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"16:30\",\n            \"teacherScheduleId\": 9212066,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"17:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"17:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"18:00\",\n            \"teacherScheduleId\": 9212111,\n            \"teacherStatus\": \"FULL\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"18:30\",\n            \"teacherScheduleId\": 9212114,\n            \"teacherStatus\": \"FULL\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"19:00\",\n            \"teacherScheduleId\": 9212117,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"19:30\",\n            \"teacherScheduleId\": 9212120,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"20:00\",\n            \"teacherScheduleId\": 9212123,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"20:30\",\n            \"teacherScheduleId\": 9212126,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"21:00\",\n            \"teacherScheduleId\": 9212129,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"21:30\",\n            \"teacherScheduleId\": 9212132,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"22:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"22:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"23:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-29\",\n            \"time\": \"23:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"06:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"06:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"07:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"07:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"08:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"08:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"09:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"09:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"10:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"10:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"11:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"11:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"12:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"12:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"13:00\",\n            \"teacherScheduleId\": 9212042,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211031,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"13:30\",\n            \"teacherScheduleId\": 9212087,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211034,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"14:00\",\n            \"teacherScheduleId\": 9212084,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211037,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"14:30\",\n            \"teacherScheduleId\": 9212081,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211040,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"15:00\",\n            \"teacherScheduleId\": 9212078,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211043,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"15:30\",\n            \"teacherScheduleId\": 9212075,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211046,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"16:00\",\n            \"teacherScheduleId\": 9212072,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211049,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"16:30\",\n            \"teacherScheduleId\": 9212069,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211052,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"17:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"17:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"18:00\",\n            \"teacherScheduleId\": 9212156,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211055,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"18:30\",\n            \"teacherScheduleId\": 9212153,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211058,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"19:00\",\n            \"teacherScheduleId\": 9212150,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211061,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"19:30\",\n            \"teacherScheduleId\": 9212147,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211064,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"20:00\",\n            \"teacherScheduleId\": 9212144,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211067,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"20:30\",\n            \"teacherScheduleId\": 9212138,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211070,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"21:00\",\n            \"teacherScheduleId\": 9212141,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211073,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"21:30\",\n            \"teacherScheduleId\": 9212135,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211076,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"22:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"22:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"23:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-30\",\n            \"time\": \"23:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"06:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"06:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"07:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"07:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"08:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"08:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"09:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"09:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"10:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"10:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1695013438115743\",\n                    \"name\": \"서안나\"\n                },\n                {\n                    \"id\": \"M1594795852631377\",\n                    \"name\": \"Steven\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"11:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"11:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"12:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"12:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"13:00\",\n            \"teacherScheduleId\": 9212045,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211124,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"13:30\",\n            \"teacherScheduleId\": 9212090,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211121,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"14:00\",\n            \"teacherScheduleId\": 9212093,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211118,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"14:30\",\n            \"teacherScheduleId\": 9212096,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211115,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"15:00\",\n            \"teacherScheduleId\": 9212099,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211112,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"15:30\",\n            \"teacherScheduleId\": 9212102,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211109,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"16:00\",\n            \"teacherScheduleId\": 9212105,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211106,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"16:30\",\n            \"teacherScheduleId\": 9212108,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211103,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"17:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"17:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"18:00\",\n            \"teacherScheduleId\": 9212159,\n            \"teacherStatus\": \"FULL\",\n            \"assistantTeacherScheduleId\": 9211100,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"18:30\",\n            \"teacherScheduleId\": 9212162,\n            \"teacherStatus\": \"FULL\",\n            \"assistantTeacherScheduleId\": 9211097,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1400118325784523\",\n                    \"name\": \"한가영\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"19:00\",\n            \"teacherScheduleId\": 9212165,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211094,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"19:30\",\n            \"teacherScheduleId\": 9212168,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211091,\n            \"assistantTeacherStatus\": \"AVAILABLE\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1657064932771055\",\n                    \"name\": \"김나래\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"20:00\",\n            \"teacherScheduleId\": 9212171,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211088,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"20:30\",\n            \"teacherScheduleId\": 9212174,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211085,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"21:00\",\n            \"teacherScheduleId\": 9212177,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211082,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"21:30\",\n            \"teacherScheduleId\": 9212180,\n            \"teacherStatus\": \"AVAILABLE\",\n            \"assistantTeacherScheduleId\": 9211079,\n            \"assistantTeacherStatus\": \"FULL\",\n            \"teachers\": [\n                {\n                    \"id\": \"M1681990831501448\",\n                    \"name\": \"정지은\"\n                },\n                {\n                    \"id\": \"M1691559227102239\",\n                    \"name\": \"Sadie\"\n                },\n                {\n                    \"id\": \"M1661138591404520\",\n                    \"name\": \"최태연\"\n                },\n                {\n                    \"id\": \"M1487640799950353\",\n                    \"name\": \"Alex\"\n                },\n                {\n                    \"id\": \"M1698204875465368\",\n                    \"name\": \"Olivia\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"22:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"22:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"23:00\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        },\n        {\n            \"date\": \"2024-01-31\",\n            \"time\": \"23:30\",\n            \"teacherScheduleId\": null,\n            \"teacherStatus\": \"NONE\",\n            \"assistantTeacherScheduleId\": null,\n            \"assistantTeacherStatus\": \"NONE\",\n            \"teachers\": []\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/08_list_user_schedules_by_date.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/schedules/by-time",
    "title": "07. 회원 시간별 스케줄 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; 일별<br/> 조회할 날짜의 6:00~23:30 까지의 스케줄을 조회한다.</p>",
    "version": "1.0.0",
    "name": "admin_listUserSchedulesByTime",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1699689011700418/schedules/by-time?date=2024-01-31'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "date",
            "description": "<p>조회할 날짜 (yyyy-MM-dd)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedules",
            "description": "<p>스케줄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.time",
            "description": "<p>시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedules.reservations",
            "description": "<p>예약 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "schedules.reservations.scheduleId",
            "description": "<p>예약 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.teacherId",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.teacherName",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.status",
            "description": "<p>예약 상태 (NONE:스케줄 없음, USERS:조회 대상 회원의 예약, AVAILABLE:예약 가능, FULL:예약 매진)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"schedules\": [\n        {\n            \"time\": \"06:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"06:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"07:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9206435,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9209951,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9214349,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"07:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9206438,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9209954,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9214394,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"08:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9206441,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9209957,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9214400,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"08:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9206444,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9209960,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9214397,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"09:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9206447,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9209963,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9214403,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"09:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9206450,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9209966,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9214409,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"10:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9206453,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9209969,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9214406,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"10:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9206456,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9209972,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9214412,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"11:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"11:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"12:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"12:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"13:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207800,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211124,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9212045,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213197,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9208892,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"13:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207797,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211121,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9212090,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213332,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9208889,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"14:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207794,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211118,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9212093,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213329,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9208886,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"14:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207791,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211115,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9212096,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213326,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9208883,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"15:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207788,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211112,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9212099,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213323,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9208880,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"15:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207785,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211109,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9212102,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213320,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9208877,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"16:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207782,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211106,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9212105,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213317,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9208874,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"16:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207779,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211103,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9212108,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"17:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"17:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213272,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9208826,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"18:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207776,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211100,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9212159,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": 9206963,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213275,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9214463,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9208829,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"18:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207773,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211097,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9212162,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": 9206966,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213278,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9214466,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9208832,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"19:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207770,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211094,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9212165,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9206969,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213281,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9214469,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9208835,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"19:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207767,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211091,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9212168,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9206972,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213284,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9214472,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9208838,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"20:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207764,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211088,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": 9212171,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9206975,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213287,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9214475,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9208841,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"20:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207761,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211085,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": 9212174,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9206978,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213290,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9214478,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9208844,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"21:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207758,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"USERS\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211082,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": 9212177,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9206981,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213293,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9214481,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9208847,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"21:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": 9207755,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"USERS\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9211079,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"FULL\"\n                },\n                {\n                    \"scheduleId\": 9212180,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9206984,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": 9213296,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9214484,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": 9208850,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"AVAILABLE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"22:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"22:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"23:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"23:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1657064932771055\",\n                    \"teacherName\": \"김나래\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1661138591404520\",\n                    \"teacherName\": \"최태연\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1681990831501448\",\n                    \"teacherName\": \"정지은\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1594795852631377\",\n                    \"teacherName\": \"Steven\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1487640799950353\",\n                    \"teacherName\": \"Alex\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1698204875465368\",\n                    \"teacherName\": \"Olivia\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1691559227102239\",\n                    \"teacherName\": \"Sadie\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1693558129675151\",\n                    \"teacherName\": \"Tyler\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/07_list_user_schedules_by_time.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users",
    "title": "01. 회원 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회<br/> 모든 파라미터는 안넘기면 전체<br/> 전체가 명시되어 있는 셀렉트박스는 &quot;ALL&quot;을 넘겨도 전체</p>",
    "version": "1.0.0",
    "name": "admin_listUsers",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users?createDateFrom=2023-01-01&createDateTo=2023-12-31&page=1&registerType=REGISTERED&status=ACTIVE&teacherId=M1594795852631377&courseStatus=NOT_ATTENDING&expireType=EXPIRED&remainingType=NOT_REMAINING'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": true,
            "field": "createDateFrom",
            "description": "<p>가입일자 검색 ~부터 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "createDateTo",
            "description": "<p>가입일자 검색 ~까지 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "registerType",
            "description": "<p>등록구분 (ALL: 전체, REGISTERED: 등록회원, UNREGISTERED: 미등록회원)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "status",
            "description": "<p>상태 (ALL: 전체, ACTIVE: 활동, INACTIVE: 비활동)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "teacherId",
            "description": "<p>담당강사 ID</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "courseStatus",
            "description": "<p>수강상태 (ALL: 전체, ATTENDING: 수강중, NOT_ATTENDING: 비수강중, WAITING: 대기중)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "expireType",
            "description": "<p>만료구분 (ALL: 전체, EXPIRED: 만료됨, NOT_EXPIRED: 만료안됨)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "remainingType",
            "description": "<p>잔여구분 (ALL: 전체, REMAINING: 잔여있음, NOT_REMAINING: 잔여없음)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 회원 수</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "search",
            "description": "<p>검색 선택 (ALL: 전체 , name: 이름, loginId: 아이디, email: 이메일, company: 회사/직장명, phone: 전화번호, cellPhone: 휴대전화번호)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "keyword",
            "description": "<p>검색어</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "page",
            "description": "<p>조회할 페이지</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "order",
            "description": "<p>정렬 선택</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "direction",
            "description": "<p>정렬 방향 (ASD: 오름차순, DESC: 내림차순)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>회원 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.createDate",
            "description": "<p>가입일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.cellPhone",
            "description": "<p>휴대전화번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "list.company",
            "description": "<p>회사/직장명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "list.expirationDate",
            "description": "<p>만료일</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.remainingCount",
            "description": "<p>잔여횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalCount",
            "description": "<p>전체 회원 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>현재 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 회원 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>전체 페이지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startPage",
            "description": "<p>페이징 영역에 노출될 첫 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endPage",
            "description": "<p>페이징 영역에 노출될 마지막 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>전 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>다음 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFirst",
            "description": "<p>첫 페이징 영역 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLast",
            "description": "<p>마지막 페이징 영역 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": \"9049\",\n            \"name\": \"황순안\",\n            \"email\": \"1028151@naver.com\",\n            \"cellPhone\": \"gOI7YKz4khanfsIk9Wc/Wg==\",\n            \"company\": \"필립스\",\n            \"createDate\": \"2007-03-10\"\n        },\n        {\n            \"id\": \"9048\",\n            \"name\": \"trial\",\n            \"email\": \"\",\n            \"cellPhone\": \"\",\n            \"company\": \"\",\n            \"createDate\": \"2007-03-12\"\n        },\n        {\n            \"id\": \"9047\",\n            \"name\": \"신혜정(6)\",\n            \"email\": \"Jung81@hanmail.net\",\n            \"cellPhone\": \"ir6AWdZaG3cyl7iaLn/vWA==\",\n            \"company\": \"\",\n            \"createDate\": \"2007-03-14\"\n        },\n        {\n            \"id\": \"9046\",\n            \"name\": \"이경란(6)\",\n            \"email\": \"1028238@naver.com\",\n            \"cellPhone\": \"bzsxKc8rSfi0SYlKEK4V6g==\",\n            \"company\": \"\",\n            \"createDate\": \"2007-03-14\"\n        },\n        {\n            \"id\": \"9045\",\n            \"name\": \"이영진(6)\",\n            \"email\": \"1028792@naver.com\",\n            \"cellPhone\": \"AH7uYqBQ9U4QqYCICnQrLw==\",\n            \"company\": \"(주)이원이앤씨\",\n            \"createDate\": \"2007-04-13\"\n        },\n        {\n            \"id\": \"9044\",\n            \"name\": \"함형택\",\n            \"email\": \"1029034@naver.com\",\n            \"cellPhone\": \"AToyr1ia+3AnDeBFeCY/TQ==\",\n            \"company\": \"\",\n            \"createDate\": \"2007-04-27\"\n        },\n        {\n            \"id\": \"9043\",\n            \"name\": \"신용다\",\n            \"email\": \"1029325@naver.com\",\n            \"cellPhone\": \"OTglatIm5cwqIVr6O78A7g==\",\n            \"company\": \"대한공인중개사무소\",\n            \"createDate\": \"2007-05-11\"\n        },\n        {\n            \"id\": \"9042\",\n            \"name\": \"노하형(6)\",\n            \"email\": \"1029458@naver.com\",\n            \"cellPhone\": \"PGRRhMsscaV0lUxnhBEmcg==\",\n            \"company\": \"\",\n            \"createDate\": \"2007-05-21\"\n        },\n        {\n            \"id\": \"9041\",\n            \"name\": \"이영재(6)\",\n            \"email\": \"hanilceo@hanilworld.com\",\n            \"cellPhone\": \"Vi9mlIAjWtm05JWVKNlRqA==\",\n            \"company\": \"한일월드(주)\",\n            \"createDate\": \"2007-05-25\"\n        },\n        {\n            \"id\": \"9040\",\n            \"name\": \"문경하\",\n            \"email\": \"biomoon88@naver.com\",\n            \"cellPhone\": \"AXAzEvHSnhNUdZbhAS/Ckg==\",\n            \"company\": \"\",\n            \"createDate\": \"2007-05-29\"\n        }\n    ],\n    \"totalCount\": 4899,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 490,\n    \"endPage\": 10,\n    \"hasNext\": true,\n    \"hasPrev\": false,\n    \"isFirst\": true,\n    \"isLast\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/01_list_users.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/levelTests",
    "title": "29. 레벨 테스트 목록",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt;  회원 상세 조회&gt; 테스트탭</p>",
    "version": "1.0.0",
    "name": "admin_list_LevelTest",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/1028151/levelTests'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "levelTest",
            "description": "<p>레벨 테스트 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.id",
            "description": "<p>레벨 테스트 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.testStartTime",
            "description": "<p>시험일자 (yyyy-mm-dd HH:mm:ss)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"levelTest\": [\n        {\n            \"id\": \"6112\",\n            \"testStartTime\": \"2022-01-12 12:22\"\n        },\n        {\n            \"id\": \"6114\",\n            \"testStartTime\": \"2022-01-13 12:22\"\n        },\n        {\n            \"id\": \"6115\",\n            \"testStartTime\": \"2022-01-14 12:22\"\n        },\n        {\n            \"id\": \"6116\",\n            \"testStartTime\": \"2022-01-17 12:22\"\n        },\n        {\n            \"id\": \"6117\",\n            \"testStartTime\": \"2022-01-18 12:22\"\n        },\n        {\n            \"id\": \"6118\",\n            \"testStartTime\": \"2022-01-19 12:22\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/29_list_user_levelTest.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}/levelTests/{testId}",
    "title": "32. 레벨테스트 수정",
    "description": "<p>회원관리 &gt; 회원 상세 조회 &gt; 테스트 탭<br/> id : 1028151  / testId: 6145 <br/> &quot;Content-Type&quot;은 파일이 있어서 &quot;multipart/form-data&quot;로 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_updateLevelTest",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/users/1028151/levelTests/6118'\n-H \"Content-Type: multipart/form-data\" \\\n-F \"note=테스트4\" \\\n-F \"interviewer=TEST999\" \\\n-F \"studyType=NONE\" \\\n-F \"studyType=EC\" \\\n-F \"studyTypeEtc=TEST4\" \\\n-F \"consonants=R\" \\\n-F \"consonants=G\" \\\n-F \"vowels=D\" \\\n-F \"vowels=J\" \\\n-F \"clarity=10\" \\\n-F \"intonation=20\" \\\n-F \"vocabulary=30\" \\\n-F \"verbsTense=10 \" \\\n-F \"agreement=10\" \\\n-F \"prepositions=10\" \\\n-F \"articles=40 \" \\\n-F \"plurals=30\" \\\n-F \"others=10\" \\\n-F \"comprehension=10\" \\\n-F \"confidence=20\" \\\n-F \"recommendedLevel=R2\" \\\n-F \"recommendedLevel=R3\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "Number",
            "optional": false,
            "field": "testId",
            "description": "<p>레벨 테스트 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "testStartTime",
            "description": "<p>테스트일시(시작) (yyyy-mm-dd HH:mm:ss)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "interviewer",
            "description": "<p>interviewer Interviewer</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "lbt",
            "description": "<p>LBT 테스트결과</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "rbt",
            "description": "<p>RBT 테스트결과</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "obt",
            "description": "<p>OBT</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "testIp",
            "description": "<p>TEST IP</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>첨부파일</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "isDeleteFile",
            "description": "<p>첨부파일 삭제 여부</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>특이사항</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "purpose",
            "description": "<p>Purpose of Study</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "studyType",
            "description": "<p>What kind of English do you want to study and learn?<br/> [NONE: 선택 없음 , EC: English Conversation,<br/> BE: Business English ,TS:Toeic Speaking , I:Interview ,ETC: ETC]<br></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "familyBackground",
            "description": "<p>Family Background</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "usageType",
            "description": "<p>Company or School</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "occupation",
            "description": "<p>Occupation</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "spareTime",
            "description": "<p>Spare Time</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "Travel",
            "description": "<p>Abroad</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "futurePlans",
            "description": "<p>Future Plans</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "consonants",
            "description": "<p>consonants <br/> [NONE : 선택 안함, R , L, P, F, B, V, Z, SH, EZH, CH, G, TTH, TH]<br/></p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "vowels",
            "description": "<p>vowels [NONE:선택안함, A,B,C,D,E,F,G,H,I,J,K,L,M,N]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "clarity",
            "description": "<p>Clarity(10:hard to understand ,20:average ,30:easy to understand)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "intonation",
            "description": "<p>Intonation(10:very Korean ,20:a bit Korean,30:acceptable ,40:near native)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "vocabulary",
            "description": "<p>Vocabulary(10:very limited ,20:limited ,30:average ,40:above average ,50:extensive)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "verbsTense",
            "description": "<p>Verbs tense(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "agreement",
            "description": "<p>Agreement(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "prepositions",
            "description": "<p>Prepositions(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "articles",
            "description": "<p>Articles(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "plurals",
            "description": "<p>Plurals(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "others",
            "description": "<p>Others(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "strongPoint",
            "description": "<p>strongPoint</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "weakPoint",
            "description": "<p>weakPoint</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "comprehension",
            "description": "<p>Comprehension How much does learner understand<br/> (10:almost nothing ,20:some parts ,30:most parts ,40:almost everything ,50:everything)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "confidence",
            "description": "<p>Confidence(10:completely lacking ,20:lacking ,30:average ,40:above average,50:very confident)</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "recommendedLevel",
            "description": "<p>Recommended Level [NONE(선택안함), R2, R3,R4,R5,R6,R6,R7,R8,R9,ETC]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "recommendedLevelEtc",
            "description": "<p>Etc 이유</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/32_update_user_levelTest.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}",
    "title": "20. 회원 수정",
    "description": "<p>회원관리 &gt; 기본 탭</p>",
    "version": "1.0.0",
    "name": "admin_updateUser",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/users/M1701411293447353' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"name\": \"테스터\",\n    \"firstNameEn\": \"Ster\",\n    \"lastNameEn\": \"Te\",\n    \"nickname\": \"별명스\",\n    \"textbook\": \"왕초보 1권\",\n    \"loginId\": \"test12346\",\n    \"email\": \"test12345@naver.com\",\n    \"isReceiveEmail\": true,\n    \"password\": \"11111\",\n    \"gender\": \"M\",\n    \"phone\": \"02-1111-2222\",\n    \"phoneType\": \"H\",\n    \"cellPhone\": \"010-1234-5678\",\n    \"isReceiveSms\": true,\n    \"isOfficeWorker\": true,\n    \"company\": \"남산회사\",\n    \"position\": \"대리\",\n    \"note\": \"놈놈놈\",\n    \"isActive\": true,\n    \"zipcode\": \"12345\",\n    \"address\": \"서울시 중구\",\n    \"detailedAddress\": \"남산타워\",\n    \"addressType\": \"C\",\n    \"joinPath\": \"ONLINE\",\n    \"languages\": [\"EN\", \"KR\", \"ETC\"],\n    \"etcLanguage\": \"아랍어\",\n    \"languageSkills\": [{\"languageTest\": \"TOEIC\", \"score\": \"900점이상\"}, {\"languageTest\": \"HKC\", \"score\": \"만점\"}],\n    \"foreignCountry\": \"호주\",\n    \"foreignPeriod\": \"1년\",\n    \"foreignPurpose\": \"여행\",\n    \"coursePurposes\": [\"STUDY_ABROAD\", \"DEVELOPMENT\"]\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "firstNameEn",
            "description": "<p>영문 이름(이름)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "lastNameEn",
            "description": "<p>영문 이름(성)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>닉네임</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "textbook",
            "description": "<p>교재</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "loginId",
            "description": "<p>아이디</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "isReceiveEmail",
            "description": "<p>이메일 수신 여부</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>비밀번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>성별 (M:남, F:여)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "phone",
            "description": "<p>유선전화</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "phoneType",
            "description": "<p>유선전화 유형 (H:자택, C:직장)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cellPhone",
            "description": "<p>휴대전화번호</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "isReceiveSms",
            "description": "<p>SMS 수신 여부</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "isOfficeWorker",
            "description": "<p>직장인 여부</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>직장/학교</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "position",
            "description": "<p>직책/학과</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "note",
            "description": "<p>특이사항</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "isActive",
            "description": "<p>활동 여부</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "zipcode",
            "description": "<p>우편번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "address",
            "description": "<p>주소</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "detailedAddress",
            "description": "<p>상세 주소</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "addressType",
            "description": "<p>주소 유형 (H:자택, C:직장)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "joinPath",
            "description": "<p>가입 경로 (10:간판, 20:온라인검색, 30:지인추천, 40:부채, 50:3단리플릿, 60:지하철광고, 70:기업제휴, 900: 기타)</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": true,
            "field": "languages",
            "description": "<p>학습희망언어 목록 (EN:영어, CN:중국어, JP:일본어, KR:한국어, ETC:기타)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "etcLanguage",
            "description": "<p>학습희망언어 기타</p>"
          },
          {
            "group": "Body",
            "type": "Object[]",
            "optional": true,
            "field": "languageSkills",
            "description": "<p>외국어실력 목록</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "languageSkills.languageTest",
            "description": "<p>외국어시험 (SJPT, HKC, TOEIC, TSC, TOEIC-S, OPIc, 기타)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "languageSkills.score",
            "description": "<p>외국어시험 점수 (900점이상, 800-900점, ...)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "foreignCountry",
            "description": "<p>외국거주경험 국가명</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "foreignPeriod",
            "description": "<p>외국거주경험 기간</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "foreignPurpose",
            "description": "<p>외국거주경험 목적</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": true,
            "field": "coursePurposes",
            "description": "<p>수강의 목적 (STUDY_ABROAD:유학, TEST:시험, EMPLOYMENT:취업, WORK:업무, DEVELOPMENT:자기계발)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/20_update_user.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}/consultations/{consultationId}",
    "title": "35. 회원 상담 수정",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 상담 탭</p>",
    "version": "1.0.0",
    "name": "admin_updateUserConsultation",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/users/M1374063899995477/consultations/296728' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"consultationDate\": \"2024-01-01 10:00\",\n    \"type\": \"ETC\",\n    \"details\": \"기타 상담1\"\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "consultationId",
            "description": "<p>회원 상담 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "consultationDate",
            "description": "<p>상담일시 (yyyy-MM-dd HH:mm)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>구분 (COURSE_REGISTRATION: 수강등록, PROGRESS: 진도, LESSON: 레슨, RESERVATION: 예약, CLASS_CONTENT: 수업내용, TEACHER: 강사, ETC: 기타)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>상담내용</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "topFixedYn",
            "description": "<p>상단고정 [체크:Y 아닐시 N]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "fontBoldYn",
            "description": "<p>상담 내용 굵게 [체크:Y 아닐시 N]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "backgroundColor",
            "description": "<p>배경색 [10:배경색 없음, 20:주황색, 30:노랑색, 40형광색]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/35_update_user_consultation.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}/courses/{courseId}",
    "title": "12. 회원 수강 수정",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 수강 탭</p>",
    "version": "1.0.0",
    "name": "admin_updateUserCourse",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/users/M1672401688362469/courses/75615'\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"lessonCount\":50,\n    \"startDate\":\"2023-12-30\",\n    \"endDate\":\"2024-12-29\",\n    \"teacherId\":\"M1695013438115743\"\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "Number",
            "optional": false,
            "field": "courseId",
            "description": "<p>수강 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "lessonCount",
            "description": "<p>레슨횟수</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "countChangeReason",
            "description": "<p>레슨횟수 변경시사유</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "startDate",
            "description": "<p>수강기간 시작일 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "endDate",
            "description": "<p>수강기간 종료일 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "dateChangeReason",
            "description": "<p>수강기간 변경시사유</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "reservations.cancelReason",
            "description": "<p>취소 사유</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "teacherId",
            "description": "<p>담임강사 실별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "assistantTeacherId",
            "description": "<p>부담임강사 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/12_update_user_course.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/notes/{id}",
    "title": "27. 비고 수정",
    "description": "<p>회원관리 &gt; 기본 탭 &gt; 예약 &gt; 예약등록 &gt; TIP</p>",
    "version": "1.0.0",
    "name": "admin_updateUserNote",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/users/notes/2666892' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"content\" : \"수정\"\n       }\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "Long",
            "optional": true,
            "field": "id",
            "description": "<p>비고식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>비고 내용</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/27_update_user_notes.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}/reservations/{reservationId}",
    "title": "15. 회원 예약 수정(학사보고서)",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 학습 탭 &gt; 학사보고서 등록/수정</p>",
    "version": "1.0.0",
    "name": "admin_updateUserReservation",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/users/M1427783489308244/reservations/1366328' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"attendanceStatus\": \"Y\",\n    \"report\": \"학사보고서\"\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "reservationId",
            "description": "<p>예약 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "attendanceStatus",
            "description": "<p>출결 상태 (R: 예약, Y: 출석, N: 결석)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "report",
            "description": "<p>취소 사유</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/15_update_user_reservation.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}/reservations",
    "title": "06. 회원 예약 수정(취소)",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 체크 후 예약 취소</p>",
    "version": "1.0.0",
    "name": "admin_updateUserReservations",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/users/M1427783489308244/reservations' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"reservations\": [\n        {\n            \"id\": 1,\n            \"isCancel\": true,\n            \"cancelReason\": \"취소 사유\"\n        }\n    ]\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Object[]",
            "optional": false,
            "field": "reservations",
            "description": "<p>수정할 예약 목록</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "reservations.id",
            "description": "<p>예약 식별키</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "reservations.isCancel",
            "description": "<p>취소 여부 (예약 취소시 true)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "reservations.cancelReason",
            "description": "<p>취소 사유</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/06_update_user_reservations.js",
    "groupTitle": "1._Admin_API_>_1._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/products/languages",
    "title": "02. 상품 언어 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_listProductLanguages",
    "group": "1._Admin_API_>_2._상품",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/products/languages'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "languages",
            "description": "<p>언어 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "languages.value",
            "description": "<p>Value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "languages.label",
            "description": "<p>Label</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"languages\": [\n        {\n            \"value\": \"EN\",\n            \"label\": \"영어\"\n        },\n        {\n            \"value\": \"CN\",\n            \"label\": \"중국어\"\n        },\n        {\n            \"value\": \"JP\",\n            \"label\": \"일본어\"\n        },\n        {\n            \"value\": \"KR\",\n            \"label\": \"한국어\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/02_product/02_list_product_languages.js",
    "groupTitle": "1._Admin_API_>_2._상품"
  },
  {
    "type": "get",
    "url": "/admin/v1/products/lessonTypes",
    "title": "03. 상품 수업 유형 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_listProductLessonTypes",
    "group": "1._Admin_API_>_2._상품",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/products/lessonTypes'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "lessonTypes",
            "description": "<p>수업 유형 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lessonTypes.value",
            "description": "<p>Value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lessonTypes.label",
            "description": "<p>Label</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"lessonTypes\": [\n        {\n            \"value\": \"PT\",\n            \"label\": \"PT\"\n        },\n        {\n            \"value\": \"TT\",\n            \"label\": \"TT\"\n        },\n        {\n            \"value\": \"GT\",\n            \"label\": \"GT\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/02_product/03_list_product_lesson_types.js",
    "groupTitle": "1._Admin_API_>_2._상품"
  },
  {
    "type": "get",
    "url": "/admin/v1/products/types",
    "title": "01. 상품 유형 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_listProductTypes",
    "group": "1._Admin_API_>_2._상품",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/products/types'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "types",
            "description": "<p>상품 유형 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "types.value",
            "description": "<p>Value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "types.label",
            "description": "<p>Label</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"types\": [\n        {\n            \"value\": \"CURRICULUM\",\n            \"label\": \"과정\"\n        },\n        {\n            \"value\": \"CONTENTS\",\n            \"label\": \"컨텐츠\"\n        },\n        {\n            \"value\": \"DEVICE\",\n            \"label\": \"기기\"\n        },\n        {\n            \"value\": \"TEXTBOOK\",\n            \"label\": \"교재\"\n        },\n        {\n            \"value\": \"PACKAGE\",\n            \"label\": \"패키지\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/02_product/01_list_product_types.js",
    "groupTitle": "1._Admin_API_>_2._상품"
  },
  {
    "type": "get",
    "url": "/admin/v1/products",
    "title": "04. 상품 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_listProducts",
    "group": "1._Admin_API_>_2._상품",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/products?type=DEVICE'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "type",
            "description": "<p>상품 유형</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "language",
            "description": "<p>언어</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "lessonType",
            "description": "<p>수업 유형</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>상품 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.id",
            "description": "<p>상품 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.name",
            "description": "<p>상품명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.price",
            "description": "<p>상품 가격</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "products.options",
            "description": "<p>옵션 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.options.value",
            "description": "<p>Value</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.options.label",
            "description": "<p>Label</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"products\": [\n        {\n            \"id\": \"P1350566928359647\",\n            \"name\": \"맥북에어 - 11.6(128 Flash)\",\n            \"price\": 1390000,\n            \"options\": [\n                {\n                    \"value\": \"색상:Silver\",\n                    \"label\": \"Silver\"\n                }\n            ]\n        },\n        {\n            \"id\": \"P1352098696544281\",\n            \"name\": \"아이패드 미니 - 16G\",\n            \"price\": 420000,\n            \"options\": [\n                {\n                    \"value\": \"색상:White\",\n                    \"label\": \"White\"\n                },\n                {\n                    \"value\": \"색상:Black\",\n                    \"label\": \"Black\"\n                }\n            ]\n        },\n        {\n            \"id\": \"P1352098762823637\",\n            \"name\": \"아이패드 미니 - 32G\",\n            \"price\": 540000,\n            \"options\": [\n                {\n                    \"value\": \"색상:White\",\n                    \"label\": \"White\"\n                },\n                {\n                    \"value\": \"색상:Black\",\n                    \"label\": \"Black\"\n                }\n            ]\n        },\n        {\n            \"id\": \"P1352098835580142\",\n            \"name\": \"아이패드 미니 - 64G\",\n            \"price\": 660000,\n            \"options\": [\n                {\n                    \"value\": \"색상:White\",\n                    \"label\": \"White\"\n                },\n                {\n                    \"value\": \"색상:Black\",\n                    \"label\": \"Black\"\n                }\n            ]\n        },\n        {\n            \"id\": \"P1352098897939225\",\n            \"name\": \"아이패드4 - 32G\",\n            \"price\": 740000,\n            \"options\": [\n                {\n                    \"value\": \"색상:White\",\n                    \"label\": \"White\"\n                },\n                {\n                    \"value\": \"색상:Black\",\n                    \"label\": \"Black\"\n                }\n            ]\n        },\n        {\n            \"id\": \"P1363942256811053\",\n            \"name\": \"맥북에어  - 11.6(64 Flash)\",\n            \"price\": 1290000,\n            \"options\": [\n                {\n                    \"value\": \"색상:Silver\",\n                    \"label\": \"Silver\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/02_product/04_list_products.js",
    "groupTitle": "1._Admin_API_>_2._상품"
  },
  {
    "type": "get",
    "url": "/admin/v1/reservations/report/{reservationId}",
    "title": "02. 학사보고서조회",
    "description": "<p>회원관리 &gt; 학사보고서<br/> 회원관리 &gt; 학사보고서 &gt; 수정/등록 시 사용</p>",
    "version": "1.0.0",
    "name": "admin_getReport",
    "group": "1._Admin_API_>_3._학사보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/reservations/report/1317329'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>예약id 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>예약식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>예약일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>시작시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>종료시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendanceStatus",
            "description": "<p>참석여부(Y:출석 , N:결석, R:예약)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "todayLesson",
            "description": "<p>Today's Lesson</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "report",
            "description": "<p>보고서(Lesson Content and Feedback)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nextLesson",
            "description": "<p>Next Lesson</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>학생명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courseName",
            "description": "<p>강의명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": 1317329,\n    \"date\": \"2018-01-03 (Wed)\",\n    \"startTime\": \"07:30\",\n    \"endTime\": \"08:00\",\n    \"attendanceStatus\": \"Y\",\n    \"report\": \"중간\",\n    \"todayLesson\": \"처음\",\n    \"nextLesson\": \"마지막\",\n    \"userName\": \"전연호\",\n    \"courseName\": \"PTM (주2회 6개월)\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/03_report/02_get_report.js",
    "groupTitle": "1._Admin_API_>_3._학사보고서"
  },
  {
    "type": "put",
    "url": "/admin/v1/reservations/report/{reservationId}",
    "title": "03. 학사보고서 수정/등록",
    "description": "<p>회원관리 &gt; 학사보고서 <br/></p>",
    "version": "1.0.0",
    "name": "admin_updateReport",
    "group": "1._Admin_API_>_3._학사보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/reservations/report/1317329'\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"attendanceStatus\" :\"Y\",\n           \"report\" : \"중간\",\n           \"todayLesson\": \"처음\",\n           \"nextLesson\":\"마지막\"\n       }\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>예약식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "attendanceStatus",
            "description": "<p>참석여부(Y:출석 , N:결석, R:예약)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "todayLesson",
            "description": "<p>Today's Lesson</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "report",
            "description": "<p>보고서(Lesson Content and Feedback)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "nextLesson",
            "description": "<p>Next Lesson</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/03_report/03_update_report.js",
    "groupTitle": "1._Admin_API_>_3._학사보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/reservations/report",
    "title": "01. 학사보고서 목록 조회",
    "description": "<p>회원관리 &gt; 학사보고서<br/> 회원관리 &gt; 학사보고서</p>",
    "version": "1.0.0",
    "name": "listReport",
    "group": "1._Admin_API_>_3._학사보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/reservations/report?dateFrom=2024-01-01&dateTo=2024-01-31&reportCondition=REPORT&reportSort=TIME'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "dateFrom",
            "description": "<p>가입일자 검색 ~부터 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "dateTo",
            "description": "<p>가입일자 검색 ~까지 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "teacherId",
            "description": "<p>강사식별키</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "search",
            "description": "<p>검색 선택(이름)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "keyword",
            "description": "<p>검색어</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "courseStatus",
            "description": "<p>정렬순서 ( TIME: 시간, TEACHER: 강사)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "reportCondition",
            "description": "<p>검색조건 (ALL: 전체, ATTENDANCE: 출석, REPORT: 미작성)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 회원 수</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "page",
            "description": "<p>조회할 페이지</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "order",
            "description": "<p>정렬 선택</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "direction",
            "description": "<p>정렬 방향 (ASD: 오름차순, DESC: 내림차순)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>학사 보고서 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "long",
            "optional": false,
            "field": "list.id",
            "description": "<p>학사보고서 식별키(예약식별키)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.date",
            "description": "<p>예약일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.startTime",
            "description": "<p>예약시작시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.endTime",
            "description": "<p>예약종료시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.teacherName",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.userName",
            "description": "<p>학생명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.courseName",
            "description": "<p>강의명</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.lessonCount",
            "description": "<p>수강회차</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.remainCount",
            "description": "<p>잔여회차</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.assignmentCount",
            "description": "<p>출석회차</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.attendanceStatus",
            "description": "<p>출석여부(출석, 결석, 예약)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.report",
            "description": "<p>학사보고서(null일시 등록버튼 / 예약식별키일시 수정버튼)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalCount",
            "description": "<p>전체 예약 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>현재 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 페이지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>전체 페이지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startPage",
            "description": "<p>페이징 영역에 노출될 첫 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endPage",
            "description": "<p>페이징 영역에 노출될 마지막 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>전 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>다음 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFirst",
            "description": "<p>첫 페이징 영역 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLast",
            "description": "<p>마지막 페이징 영역 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 2624692,\n            \"date\": \"2024-01-31 (Wed)\",\n            \"startTime\": \"21:30\",\n            \"endTime\": \"22:00\",\n            \"teacherName\": \"한가영\",\n            \"userName\": \"조아라\",\n            \"courseName\": \"NEW PT 24회 3개월\",\n            \"lessonCount\": 26.0,\n            \"remainCount\": 5.0,\n            \"assignmentCount\": 21.0,\n            \"attendanceStatus\": \"예약\",\n            \"report\": null\n        },\n        {\n            \"id\": 2621583,\n            \"date\": \"2024-01-31 (Wed)\",\n            \"startTime\": \"21:30\",\n            \"endTime\": \"22:00\",\n            \"teacherName\": \"김나래\",\n            \"userName\": \"RE:김동우\",\n            \"courseName\": \"PTM (주2회 3개월)\",\n            \"lessonCount\": 55.0,\n            \"remainCount\": 43.0,\n            \"assignmentCount\": 12.0,\n            \"attendanceStatus\": \"예약\",\n            \"report\": null\n        },\n        {\n            \"id\": 2624691,\n            \"date\": \"2024-01-31 (Wed)\",\n            \"startTime\": \"21:00\",\n            \"endTime\": \"21:30\",\n            \"teacherName\": \"한가영\",\n            \"userName\": \"조아라\",\n            \"courseName\": \"NEW PT 24회 3개월\",\n            \"lessonCount\": 26.0,\n            \"remainCount\": 5.0,\n            \"assignmentCount\": 21.0,\n            \"attendanceStatus\": \"예약\",\n            \"report\": null\n        },\n        {\n            \"id\": 2621582,\n            \"date\": \"2024-01-31 (Wed)\",\n            \"startTime\": \"21:00\",\n            \"endTime\": \"21:30\",\n            \"teacherName\": \"김나래\",\n            \"userName\": \"RE:김동우\",\n            \"courseName\": \"PTM (주2회 3개월)\",\n            \"lessonCount\": 55.0,\n            \"remainCount\": 43.0,\n            \"assignmentCount\": 12.0,\n            \"attendanceStatus\": \"예약\",\n            \"report\": null\n        },\n        {\n            \"id\": 2621249,\n            \"date\": \"2024-01-31 (Wed)\",\n            \"startTime\": \"20:30\",\n            \"endTime\": \"21:00\",\n            \"teacherName\": \"김나래\",\n            \"userName\": \"RE:김동우\",\n            \"courseName\": \"PTM (주2회 3개월)\",\n            \"lessonCount\": 55.0,\n            \"remainCount\": 43.0,\n            \"assignmentCount\": 12.0,\n            \"attendanceStatus\": \"예약\",\n            \"report\": null\n        },\n        {\n            \"id\": 2620327,\n            \"date\": \"2024-01-31 (Wed)\",\n            \"startTime\": \"20:30\",\n            \"endTime\": \"21:00\",\n            \"teacherName\": \"한가영\",\n            \"userName\": \"정혜정:홀딩2/16\",\n            \"courseName\": \"NEW PT 24회 3개월\",\n            \"lessonCount\": 26.0,\n            \"remainCount\": 8.0,\n            \"assignmentCount\": 18.0,\n            \"attendanceStatus\": \"예약\",\n            \"report\": null\n        },\n        {\n            \"id\": 2621248,\n            \"date\": \"2024-01-31 (Wed)\",\n            \"startTime\": \"20:00\",\n            \"endTime\": \"20:30\",\n            \"teacherName\": \"김나래\",\n            \"userName\": \"RE:김동우\",\n            \"courseName\": \"PTM (주2회 3개월)\",\n            \"lessonCount\": 55.0,\n            \"remainCount\": 43.0,\n            \"assignmentCount\": 12.0,\n            \"attendanceStatus\": \"예약\",\n            \"report\": null\n        },\n        {\n            \"id\": 2620326,\n            \"date\": \"2024-01-31 (Wed)\",\n            \"startTime\": \"20:00\",\n            \"endTime\": \"20:30\",\n            \"teacherName\": \"한가영\",\n            \"userName\": \"정혜정:홀딩2/16\",\n            \"courseName\": \"NEW PT 24회 3개월\",\n            \"lessonCount\": 26.0,\n            \"remainCount\": 8.0,\n            \"assignmentCount\": 18.0,\n            \"attendanceStatus\": \"예약\",\n            \"report\": null\n        },\n        {\n            \"id\": 2622149,\n            \"date\": \"2024-01-31 (Wed)\",\n            \"startTime\": \"19:30\",\n            \"endTime\": \"20:00\",\n            \"teacherName\": \"Sadie\",\n            \"userName\": \"박지혜A\",\n            \"courseName\": \"NEW PT 24회 3개월\",\n            \"lessonCount\": 26.0,\n            \"remainCount\": 2.0,\n            \"assignmentCount\": 24.0,\n            \"attendanceStatus\": \"예약\",\n            \"report\": null\n        },\n        {\n            \"id\": 2621936,\n            \"date\": \"2024-01-31 (Wed)\",\n            \"startTime\": \"19:30\",\n            \"endTime\": \"20:00\",\n            \"teacherName\": \"한가영\",\n            \"userName\": \"김동희\",\n            \"courseName\": \"NEW PT 24회 3개월\",\n            \"lessonCount\": 27.5,\n            \"remainCount\": 17.0,\n            \"assignmentCount\": 10.5,\n            \"attendanceStatus\": \"예약\",\n            \"report\": null\n        }\n    ],\n    \"totalCount\": 1055,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"totalPage\": 106,\n    \"startPage\": 1,\n    \"endPage\": 10,\n    \"hasNext\": true,\n    \"isFirst\": true,\n    \"isLast\": false,\n    \"hasPrev\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/03_report/01_list_report.js",
    "groupTitle": "1._Admin_API_>_3._학사보고서"
  },
  {
    "type": "post",
    "url": "/admin/v1/consultations",
    "title": "09. 상담 관리 등록",
    "description": "<p>회원관리 &gt; 상담관리 &gt; 상담등록 <br/> &quot;Content-Type&quot;은 파일이 있어서 &quot;multipart/form-data&quot;로 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_createConsultation",
    "group": "1._Admin_API_>_4._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/consultations' \\\n-H \"Content-Type: multipart/form-data\" \\\n-F \"status=NO_CONTACT\"\\\n-F \"callTime=TIME_06\"\\\n-F \"studyPurposes=WORK\"\\\n-F \"studyPurposes=DEVELOPMENT\"\\\n-F \"foundPath=RECOMMEND\"\\",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>상담구분  P, // 전화상담<br/> V, // 방문상담<br/> K, // 카카오채널<br/> N, // 네이버예약<br/> F, // 온라인상담<br/> L, // 무료레벨테스트]<br/></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>처리상태 WAITING:대기중, 컨텍금지:컨택금지, UNVISITED:미방문(통화완료)<br/> RESERVED:예약완료, NOT_REGISTERED:미등록(상담완료), <br/> REGISTERED:등록완료, NoShow, MISSED:부재중)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>성별 ( M: 남성,  F:여성 )</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "callTime",
            "description": "<p>통화 가능 시간 [  TIME_01, // 06:30~08:00<br/> TIME_02, // 08:00~10:00<br/> TIME_03, // 10:00~12:00<br/> TIME_04, // 12:00~14:00<br/> TIME_05, // 14:00~16:00<br/> TIME_06, // 16:00~18:00<br/> TIME_07, // 18:00~20:00<br/> TIME_08, // 20:00~21:00<br/> TIME_09,]<br/></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>전화번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cellPhone",
            "description": "<p>핸드폰번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "studyPurposes",
            "description": "<p>공부목적[  COMMON_ENGLISH, // 생활영어<br/> WORK, //업무<br/> STUDY_ABROAD, // 유학<br/> DEVELOPMENT, // 자기개<br/> EMPLOYMENT, // 취업<br/> ETC // 기타<br/> ;]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "foundPath",
            "description": "<p>알게된동기   SIGN, // 간판<br/> ONLINE, // 온라인검색<br/> RECOMMEND, // 지인추천<br/> FAN, // 부채<br/> LEAFLET, // 3단리플릿<br/> SUBWAY, // 지하철광고<br/> ALLIANCE, // 기업제휴<br/> ETC, // 기타<br/> ;</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "foundPathNote",
            "description": "<p>알게된 동기 이유</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>직업</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>회사명</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "consultationDate",
            "description": "<p>상담일(yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "visitDate",
            "description": "<p>방문일(yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>상담내용</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>첨부파일</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/04_consultation/09_create_consultation.js",
    "groupTitle": "1._Admin_API_>_4._상담관리"
  },
  {
    "type": "post",
    "url": "/admin/v1/consultations/{id}/users",
    "title": "02. 상담 회원 등록",
    "description": "<p>회원관리 &gt; 상담관리 &gt; 회원등록 <br/> test id : 14890 , 14967 , 15001 , 15209</p>",
    "version": "1.0.0",
    "name": "admin_createConsultationUser",
    "group": "1._Admin_API_>_4._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/consultations/14949/users'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>상담 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>회원 식별키</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"userId\": \"M1719131763363954\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/04_consultation/02_create_consultation_user.js",
    "groupTitle": "1._Admin_API_>_4._상담관리"
  },
  {
    "type": "post",
    "url": "/admin/v1/consultations/history/{id}",
    "title": "06. 추가 상담 등록",
    "description": "<p>상담관리 &gt; 상세페이지조회 &gt; 추가 상담 이력 <br/> 상세 페이지 누를 시 상담 식별키 넘겨 받음-&gt; 식별키 가지고 추가 상담 이력 출력</p>",
    "version": "1.0.0",
    "name": "admin_createUserConsultation",
    "group": "1._Admin_API_>_4._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/consultations/history/520' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"details\" : \"ㅇㅇㅇㅇ\"\n       }\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>상담 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>내용</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/04_consultation/06_create_consultationHistory.js",
    "groupTitle": "1._Admin_API_>_4._상담관리"
  },
  {
    "type": "delete",
    "url": "/admin/v1/consultations/history/{id}",
    "title": "07. 추가 상담 삭제",
    "description": "<p>상담관리 &gt; 상세조회 페이지</p>",
    "version": "1.0.0",
    "name": "admin_deleteConsultationHistory",
    "group": "1._Admin_API_>_4._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/users/notes/2610931'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>추가 상담 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/04_consultation/07_delete_consultationHistory.js",
    "groupTitle": "1._Admin_API_>_4._상담관리"
  },
  {
    "type": "delete",
    "url": "/admin/v1/consultations",
    "title": "05. 상담관리 기본정보 삭제",
    "description": "<p>상담관리 &gt; 상세조회 &gt; 삭제</p>",
    "version": "1.0.0",
    "name": "admin_deleteUser",
    "group": "1._Admin_API_>_4._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/consultations/634'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "smsId",
            "description": "<p>상담식별키</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/04_consultation/05_delete_consultation.js",
    "groupTitle": "1._Admin_API_>_4._상담관리"
  },
  {
    "type": "get",
    "url": "/admin/v1/consultations/{id}",
    "title": "03. 상담고객 상세조회",
    "description": "<p>수정/삭제 시 사용<br/></p>",
    "version": "1.0.0",
    "name": "admin_getOptions",
    "group": "1._Admin_API_>_4._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/consultations/14890'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "id",
            "description": "<p>상담 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "consultation",
            "description": "<p>상담 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.id",
            "description": "<p>상담 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.institutionId",
            "description": "<p>추천인 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.consultationDate",
            "description": "<p>상담일(yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.name",
            "description": "<p>성명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.gender",
            "description": "<p>성별 남:&quot;M&quot;,여:&quot;F&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.job",
            "description": "<p>직업</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.company",
            "description": "<p>회사명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.phone",
            "description": "<p>번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.cellPhone",
            "description": "<p>핸드폰번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.joinPath",
            "description": "<p>알게된 동기<br/> SIGN, // 간판<br/> ONLINE, // 온라인검색<br/> RECOMMEND, // 지인추천<br/> FAN, // 부채<br/> LEAFLET, // 3단리플릿<br/> SUBWAY, // 지하철광고<br/> ALLIANCE, // 기업제휴<br/> ETC, // 기타<br/></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.foundPathNote",
            "description": "<p>알게된 동기 설명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.visitDate",
            "description": "<p>방문일자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.details",
            "description": "<p>상담내용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.isMember",
            "description": "<p>회원여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.type",
            "description": "<p>상담구분 [  P, // 전화상담<br> V, // 방문상담<br> K, // 카카오채널<br> N, // 네이버예약<br> F, // 온라인상담<br> L, // 무료레벨테스트]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.studyPurpose",
            "description": "<p>공부목적[  COMMON_ENGLISH(&quot;10&quot;), // 생활영어<br/> WORK(&quot;20&quot;), //업무<br/> STUDY_ABROAD(&quot;30&quot;), // 유학<br/> DEVELOPMENT(&quot;40&quot;), // 자기개<br/> EMPLOYMENT(&quot;50&quot;), // 취업<br/> ETC(&quot;60&quot;) // 기타]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.callTime",
            "description": "<p>통화가능시간 [  TIME_01(&quot;10&quot;), // 06:30~08:00<br/> TIME_02(&quot;20&quot;), // 08:00~10:00<br/> TIME_03(&quot;30&quot;), // 10:00~12:00<br/> TIME_04(&quot;40&quot;), // 12:00~14:00<br/> TIME_05(&quot;50&quot;), // 14:00~16:00<br/> TIME_06(&quot;60&quot;), // 16:00~18:00<br/> TIME_07(&quot;70&quot;), // 18:00~20:00<br/> TIME_08(&quot;80&quot;), // 20:00~21:00<br/> TIME_09(&quot;90&quot;), // 기타]<br/></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.status",
            "description": "<p>처리상태 WAITING // 대기<br/> NO_CONTACT,<br/> UNVISITED,<br/> RESERVED,<br/> NOT_REGISTERED,<br/> REGISTERED,<br/> NO_SHOW,<br/> MISSED,<br/></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.statuses",
            "description": "<p>사용X</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.levelTestType",
            "description": "<p>[R 밖에 없음.]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.levelTestAnswer",
            "description": "<p>사용X</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.levelTestCorrectCount",
            "description": "<p>정답수</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.createdOn",
            "description": "<p>등록일 [yyyy-MM-dd HH:mm:ss]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.createdBy",
            "description": "<p>등록한사람ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.modifiedBy",
            "description": "<p>수정한사람ID [yyyy-MM-dd HH:mm:ss]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.modifiedOn",
            "description": "<p>수정일 [yyyy-MM-dd HH:mm:ss]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultation.creatorName",
            "description": "<p>사용X</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdName",
            "description": "<p>상담자(등록한사람이름)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modifiedName",
            "description": "<p>상담자(수정한사람이름)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"consultation\": {\n        \"id\": 14890,\n        \"institutionId\": \"C1352081511487906\",\n        \"consultationDate\": \"2020-07-28 14:00:00\",\n        \"name\": \"이우정:상담완료\",\n        \"gender\": \"M\",\n        \"job\": \"직장인\",\n        \"company\": \"(주)후이즈\",\n        \"phone\": null,\n        \"cellPhone\": \"5gz14POxRDFNoPlTCEGupw==\",\n        \"foundPath\": \"20\",\n        \"foundPathNote\": \"워크인\",\n        \"visitDate\": \"2020-07-28T14:00:00\",\n        \"details\": \"* 워크인,이신종님과 같이옴 * 해외시장확장으로 전반적 영어실력향상 원함 * 점심시간에 잠시 나오신거라 레벨테스트까지 할시간없어  정규코스, 5%할인까지 안내드림 * 큐브정규코스, 온라인학습 안내드림 * 가격듣고는 일단 알겠다고 바로나가심\",\n        \"isMember\": \"N\",\n        \"type\": \"V\",\n        \"studyPurpose\": \"10\",\n        \"etcStudyPurpose\": null,\n        \"callTime\": \"90\",\n        \"email\": \"010-3790-2702\",\n        \"status\": \"7\",\n        \"statuses\": null,\n        \"levelTestType\": null,\n        \"levelTestAnswer\": null,\n        \"levelTestCorrectCount\": null,\n        \"createdBy\": \"U1585270523092843\",\n        \"createdOn\": \"2020-07-28 14:23:41\",\n        \"modifiedBy\": \"U1585270523092843\",\n        \"modifiedOn\": \"2020-07-28\",\n        \"creatorName\": null\n    },\n    \"createdName\": \"양은진\",\n    \"modifiedName\": \"양은진\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/04_consultation/03_get_consultation.js",
    "groupTitle": "1._Admin_API_>_4._상담관리"
  },
  {
    "type": "post",
    "url": "/admin/v1/consultations/cellpnone",
    "title": "10. 연락처 중복 체크",
    "description": "<p>상세조회,등록,수정 시 사용<br/> 중복된 연락처 확인을 위해서는 {&quot;cellPhone&quot; : &quot;020-3333-3333&quot;} 사용해주세요</p>",
    "version": "1.0.0",
    "name": "admin_getValCellphone",
    "group": "1._Admin_API_>_4._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/consultations/cellphone'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "cellPhone",
            "description": "<p>휴대폰번호</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>유효성 검사 결과</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"message\": \"중복된 연락처가 있습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/04_consultation/10_get_cellphone.js",
    "groupTitle": "1._Admin_API_>_4._상담관리"
  },
  {
    "type": "get",
    "url": "/admin/v1/consultations/history/{id}",
    "title": "08. 추가 상담 목록",
    "description": "<p>상담관리 &gt; 상세페이지 조회 &gt; 추가 상담 이력 <br/> 상세 페이지 들어올 때 상담 식별키 가져옴</p>",
    "version": "1.0.0",
    "name": "admin_listUserNotes",
    "group": "1._Admin_API_>_4._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/consultations/history/520",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>상담 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>추가 상담 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>추가 상담 내용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modifiedName",
            "description": "<p>수정한사람</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdName",
            "description": "<p>등록자</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n[\n    {\n        \"id\": 1,\n        \"details\": \"test\",\n        \"modifiedName\": \"황순안\",\n        \"createdName\": \"황순안\"\n    },\n    {\n        \"id\": 2,\n        \"details\": \"test1\",\n        \"modifiedName\": \"황순안\",\n        \"createdName\": \"황순안\"\n    },\n    {\n        \"id\": 3,\n        \"details\": \"test2\",\n        \"modifiedName\": \"황순안\",\n        \"createdName\": \"황순안\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/04_consultation/08_list_consultationHistory.js",
    "groupTitle": "1._Admin_API_>_4._상담관리"
  },
  {
    "type": "put",
    "url": "/admin/v1/consultations/{id}",
    "title": "04. 상담 관리 기본 정보 수정",
    "description": "<p>상담관리 &gt; 상세관리수정 <br/> &quot;Content-Type&quot;은 파일이 있어서 &quot;multipart/form-data&quot;로 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_updateConsultation",
    "group": "1._Admin_API_>_4._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/consultations/522' \\\n-H \"Content-Type: multipart/form-data\" \\\n-F \"status=NO_CONTACT\"\\\n-F \"callTime=TIME_06\"\\\n-F \"studyPurposes=WORK\"\\\n-F \"studyPurposes=DEVELOPMENT\"\\\n-F \"foundPath=RECOMMEND\"\\",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "Long",
            "optional": true,
            "field": "id",
            "description": "<p>상담식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>상담구분 [  P, // 전화상담<br/> V, // 방문상담<br/> K, // 카카오채널<br/> N, // 네이버예약<br/> F, // 온라인상담<br/> L, // 무료레벨테스트]<br/></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>처리상태 WAITING:대기중, 컨텍금지:컨택금지, UNVISITED:미방문(통화완료)<br/> RESERVED:예약완료, NOT_REGISTERED:미등록(상담완료), <br/> REGISTERED:등록완료, NoShow, MISSED:부재중)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>성별 [    M: 남성,  F:여성]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "callTime",
            "description": "<p>통화 가능 시간 [  TIME_01, // 06:30~08:00<br/> TIME_02, // 08:00~10:00<br/> TIME_03, // 10:00~12:00<br/> TIME_04, // 12:00~14:00<br/> TIME_05, // 14:00~16:00<br/> TIME_06, // 16:00~18:00<br/> TIME_07, // 18:00~20:00<br/> TIME_08, // 20:00~21:00<br/> TIME_09,]<br/></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>전화번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cellPhone",
            "description": "<p>핸드폰번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": false,
            "field": "studyPurposes",
            "description": "<p>공부목적[  COMMON_ENGLISH, // 생활영어<br/> WORK, //업무<br/> STUDY_ABROAD, // 유학<br/> DEVELOPMENT, // 자기개<br/> EMPLOYMENT, // 취업<br/> ETC // 기타<br/> ;]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "foundPath",
            "description": "<p>알게된동기 [    SIGN, // 간판<br/> ONLINE, // 온라인검색<br/> RECOMMEND, // 지인추천<br/> FAN, // 부채<br/> LEAFLET, // 3단리플릿<br/> SUBWAY, // 지하철광고<br/> ALLIANCE, // 기업제휴<br/> ETC, // 기타<br/> ;]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "foundPathNote",
            "description": "<p>알게된 동기 이유</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>직업</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>회사명</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "consultationDate",
            "description": "<p>상담일</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "visitDate",
            "description": "<p>방문일[yyyy-MM-dd HH:mm:ss]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "details",
            "description": "<p>상담내용</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>첨부파일</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/04_consultation/04_update_consultation.js",
    "groupTitle": "1._Admin_API_>_4._상담관리"
  },
  {
    "type": "get",
    "url": "/admin/v1/consultations",
    "title": "01. 상담관리 > 상담고객목록",
    "description": "<p>회원관리 &gt; 상담관리 &gt; 상담고객<br/> 모든 파라미터는 안넘기면 전체<br/> 파마미터의 [전체] checkbox 선택 시 나머지 checkbox 선택 제거</p>",
    "version": "1.0.0",
    "name": "all_consultation",
    "group": "1._Admin_API_>_4._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/consultations?statusCodes=3&statusCodes=7",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "consultationDateFrom",
            "description": "<p>등록일(시작) (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "consultationDateTo",
            "description": "<p>등록일(끝) (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "visitDateFrom",
            "description": "<p>방문예약일(시작) (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "visitDateTo",
            "description": "<p>방문예약일(끝) (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>상담구분(P: 전화상담,V: 방문상담,K: 카카오채널,N: 네이버예약)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>처리상태(WAITING,NO_CONTACT,UNVISITED,RESERVED,NOT_REGISTERED,REGISTERED,NO_SHOW,MISSED)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>검색구분( name:이름, phone: 전화번호 , details :상담내용)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>검색내용</p>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 회원 수</p>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>현재 페이지</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>회원 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.id",
            "description": "<p>예약 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.type",
            "description": "<p>(P:전화상담, V:방문상담, K:카카오채널, N:네이버예약, F:온라인상담, L:무료레벨테스트)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.status",
            "description": "<p>처리상태(3:대기중, 4:컨택금지, 5:미방문(통화완료), 6:예약완료, 7:미등록(상담완료), 8:등록완료, 9:NoShow, 10:부재중)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.name",
            "description": "<p>회원명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.phone",
            "description": "<p>전화번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.company",
            "description": "<p>회사/직장명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.callTime",
            "description": "<p>통화시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.visitDate",
            "description": "<p>방문일정</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.createdOn",
            "description": "<p>등록일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.creatorName",
            "description": "<p>상담직원</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.details",
            "description": "<p>상담내용</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list.smsList",
            "description": "<p>회원 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.smsList.content",
            "description": "<p>문자내용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.smsList.smsId",
            "description": "<p>문자식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.smsList.recipientPhone",
            "description": "<p>받는사람핸드폰번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.smsList.recipientName",
            "description": "<p>받는사람이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.smsList.sendDate",
            "description": "<p>전송날짜(yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.smsList.status",
            "description": "<p>발송성공여부(SUCCESS)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalCount",
            "description": "<p>전체 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>현재 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 회원 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>전체 페이지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startPage",
            "description": "<p>페이징 영역에 노출될 첫 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endPage",
            "description": "<p>페이징 영역에 노출될 마지막 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>전 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>다음 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFirst",
            "description": "<p>첫 페이징 영역 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLast",
            "description": "<p>마지막 페이징 영역 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 26268,\n            \"type\": \"N\",\n            \"status\": \"7\",\n            \"name\": \"원지연:상담완료\",\n            \"phone\": null,\n            \"company\": null,\n            \"callTime\": null,\n            \"visitDate\": \"2023-12-30T11:30:00\",\n            \"createdOn\": \"2023-12-29T21:48:08\",\n            \"creatorName\": \"박지수\",\n            \"details\": \"[레테] 12/30(토) 11:30am Steven.T 원지연 010-2727-7972\"\n        },\n        {\n            \"id\": 26223,\n            \"type\": \"N\",\n            \"status\": \"7\",\n            \"name\": \"유병주:상담완료\",\n            \"phone\": null,\n            \"company\": null,\n            \"callTime\": null,\n            \"visitDate\": \"2024-01-02T14:00:00\",\n            \"createdOn\": \"2023-12-26T11:19:06\",\n            \"creatorName\": \"손진\",\n            \"details\": \"[레테] 12/27(수) 14:00pm AlexT 유병주 010-2798-4312>> 21년도 등록고객으로 재상담받기를 원하심. >>예약변경: 상으로 예약상담변경요청하심.  >> [레테] 01/02(화) 14:00pm AlexT 유병주 010-2798-4312\"\n        },\n        {\n            \"id\": 26222,\n            \"type\": \"N\",\n            \"status\": \"7\",\n            \"name\": \"조승인:상담완료\",\n            \"phone\": null,\n            \"company\": null,\n            \"callTime\": null,\n            \"visitDate\": \"2023-12-27T09:30:00\",\n            \"createdOn\": \"2023-12-26T11:07:51\",\n            \"creatorName\": \"손진\",\n            \"details\": \"[레테] 12/27(수) 9:30am OliviaT 조승인 010-3223-7499 \"\n        },\n        {\n            \"id\": 26200,\n            \"type\": \"N\",\n            \"status\": \"7\",\n            \"name\": \"소현진:상담완료\",\n            \"phone\": null,\n            \"company\": null,\n            \"callTime\": null,\n            \"visitDate\": \"2023-12-21T20:30:00\",\n            \"createdOn\": \"2023-12-21T14:13:59\",\n            \"creatorName\": \"한시내\",\n            \"details\": \"[레테] 12/21(목) 20:30pm AlexT 소현진 010-2520-6618\"\n        },\n        {\n            \"id\": 26185,\n            \"type\": \"N\",\n            \"status\": \"7\",\n            \"name\": \"안솔:상담완료\",\n            \"phone\": null,\n            \"company\": null,\n            \"callTime\": null,\n            \"visitDate\": \"2023-12-20T17:30:00\",\n            \"createdOn\": \"2023-12-20T07:28:48\",\n            \"creatorName\": \"손진\",\n            \"details\": \"[레테] 12/20(수) 17:30pm OliviaT 안솔 010-9319-6207\"\n        },\n        {\n            \"id\": 26160,\n            \"type\": \"P\",\n            \"status\": \"7\",\n            \"name\": \"최시연:상담완료\",\n            \"phone\": null,\n            \"company\": null,\n            \"callTime\": null,\n            \"visitDate\": \"2023-12-18T18:30:00\",\n            \"createdOn\": \"2023-12-18T17:18:13\",\n            \"creatorName\": \"한시내\",\n            \"details\": \"[레테] 12/18(월) 18:30pm SadieT 최시연님 010-4142-5723\"\n        },\n        {\n            \"id\": 26159,\n            \"type\": \"V\",\n            \"status\": \"7\",\n            \"name\": \"유서현:상담완료\",\n            \"phone\": null,\n            \"company\": null,\n            \"callTime\": null,\n            \"visitDate\": null,\n            \"createdOn\": \"2023-12-18T17:14:12\",\n            \"creatorName\": \"박수현\",\n            \"details\": \"예약없이 워크인으로 오셔서 레테없이 상담도와드림. 고3여학생, 어머니와 상의 후 12/22(금)까지 오시면 당일할인 적용해드리기로 함. 증명서(수강확인서,출석확인서)는 어머니 이름으로 발급 해드리기로 함.\"\n        },\n        {\n            \"id\": 26153,\n            \"type\": \"N\",\n            \"status\": \"7\",\n            \"name\": \"윤소민:상담완료\",\n            \"phone\": null,\n            \"company\": null,\n            \"callTime\": null,\n            \"visitDate\": \"2023-12-18T20:00:00\",\n            \"createdOn\": \"2023-12-18T10:14:01\",\n            \"creatorName\": \"박수현\",\n            \"details\": \"[레테] 12/18(월) 8:00pm Alex.T 윤소민 010-3096-3175  예약확인전화 드릴때 화상수업도 가능한지 문의하심. 대면수업으로 진행하나 불가시엔 화상,전화수업으로 대체 가능하다고 말씀드림.\"\n        },\n        {\n            \"id\": 26096,\n            \"type\": \"N\",\n            \"status\": \"7\",\n            \"name\": \"장이룸:상담완료\",\n            \"phone\": null,\n            \"company\": null,\n            \"callTime\": null,\n            \"visitDate\": \"2023-12-13T20:30:00\",\n            \"createdOn\": \"2023-12-11T16:49:46\",\n            \"creatorName\": \"박지수\",\n            \"details\": \"[레테] 12/13(수) 8:30pm Sadie.T 장이룸 010-3844-8052\"\n        },\n        {\n            \"id\": 26082,\n            \"type\": \"N\",\n            \"status\": \"7\",\n            \"name\": \"김민철:상담완료\",\n            \"phone\": null,\n            \"company\": null,\n            \"callTime\": null,\n            \"visitDate\": \"2023-12-12T10:30:00\",\n            \"createdOn\": \"2023-12-08T21:08:02\",\n            \"creatorName\": \"한시내\",\n            \"details\": \"[레테] 12/9(토) 10:30am SadieT 김민철님 010-7175-5317 >> 방문예약인지 몰랐다고 하시며 취소하심. 월요일에 시간 확인하고 다시 예약하겠다고 하심  >>상담 재예약주심(전화로 시간준수 안내완료) [레테] 12/12(화) 10:30am Olivia.T 김민철 010-7175-5317\"\n        }\n    ],\n    \"totalCount\": 476,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 48,\n    \"endPage\": 10,\n    \"hasNext\": true,\n    \"isFirst\": true,\n    \"isLast\": false,\n    \"hasPrev\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/04_consultation/01_list_all_consultation.js",
    "groupTitle": "1._Admin_API_>_4._상담관리"
  },
  {
    "type": "post",
    "url": "/admin/v1/teachers",
    "title": "08. 강사 등록",
    "description": "<p>강사관리 &gt; 강사등록 <br/> 동일 loginID가 존재로 에러 발생 시 알려주세요. <br/> &quot;Content-Type&quot;은 파일이 있어서 &quot;multipart/form-data&quot;로 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_createTeacher",
    "group": "1._Admin_API_>_5._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/teachers' \\\n-H \"Content-Type: multipart/form-data\" \\\n-F \"name=수정2\" \\\n-F \"firstNameEn=jin\" \\\n-F \"password=1234\" \\\n-F \"loginId=loginId3000@naver.com\" \\\n-F \"workType=A\" \\\n-F \"workTime=SP_4\" \\",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "firstNameEn",
            "description": "<p>이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "lastNameEn",
            "description": "<p>성</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "loginId",
            "description": "<p>강사아이디</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>비밀번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>성별[F,M]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "workStartDate",
            "description": "<p>근무시작일[yyyy-MM-dd]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>강사타입 [HT, LT]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "workTime",
            "description": "<p>근무시간[AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "workType",
            "description": "<p>근무타입[A, C]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "partnerTeacherId",
            "description": "<p>파트너강사</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "teacherActive",
            "description": "<p>활동여부 [true:활동, false:비활동]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cellPhone",
            "description": ""
          },
          {
            "group": "Body",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/08_create_teachers.js",
    "groupTitle": "1._Admin_API_>_5._강사"
  },
  {
    "type": "post",
    "url": "/admin/v1/teachers/{id}/schedules",
    "title": "06. 강사 스케줄 저장",
    "description": "<p>강사관리 &gt; 강의OPEN(주별)<br/> 선택한 스케줄은 등록하고, 선택하지 않은 스케줄은 삭제한다.</p>",
    "version": "1.0.0",
    "name": "admin_createTeacherSchedules",
    "group": "1._Admin_API_>_5._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/teachers/M1695013438115743/schedules'\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"dateFrom\": \"2023-10-04\",\n    \"dateTo\": \"2023-10-05\",\n    \"workTime\": \"AM_16\",\n    \"schedules\": [\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"06:30\"\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"07:00\"\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"07:30\"\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"08:00\"\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"08:30\"\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"09:00\"\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"09:30\"\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"10:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"11:00\"\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"06:30\"\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"07:00\"\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"07:30\"\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"08:00\"\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"08:30\"\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"09:00\"\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"09:30\"\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"10:00\"\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"11:00\"\n        }\n    ]\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>강사 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dateFrom",
            "description": "<p>조회 시작일 (yyyy-MM-dd, 조회 시작일 ~ 종료일 사이의 선택하지 않은 스케줄은 모두 삭제)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "dateTo",
            "description": "<p>조회 종료일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "workTime",
            "description": "<p>근무시간 (AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4)</p>"
          },
          {
            "group": "Body",
            "type": "Object[]",
            "optional": true,
            "field": "schedules",
            "description": "<p>선택한 스케줄 목록</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "schedules.date",
            "description": "<p>날짜 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "schedules.time",
            "description": "<p>시간 (HH:mm)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/06_create_teacher_schedules.js",
    "groupTitle": "1._Admin_API_>_5._강사"
  },
  {
    "type": "delete",
    "url": "/admin/v1/teachers/{id}",
    "title": "04. 강사삭제",
    "description": "<p>강사관리 &gt; 강사상세조회 &gt; 삭제 <br/> 데이터가 많지 않아 오류 가능성 높음. M1594795852631377 안될시 알려주세요.</p>",
    "version": "1.0.0",
    "name": "admin_deleteUser",
    "group": "1._Admin_API_>_5._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/teachers/M1594795852631377'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>강사식별키</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/04_delete_teacher.js",
    "groupTitle": "1._Admin_API_>_5._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers/{id}",
    "title": "02. 강사 상세조회",
    "description": "<p>상세보기/ 수정/삭제 시 사용<br/></p>",
    "version": "1.0.0",
    "name": "admin_getOptions",
    "group": "1._Admin_API_>_5._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/teachers/M1574925585880330'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "id",
            "description": "<p>강사 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "loginId",
            "description": "<p>강사 아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nameEn",
            "description": "<p>영어이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastNameEn",
            "description": "<p>성</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>비밀번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>성별 [F,M]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cellPhone",
            "description": "<p>전화번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>강사타입 [HT, LT]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workStartDate",
            "description": "<p>근무시작일[yyyy-MM-dd]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>언어 [ ENGLISH, CHINESE, JAPANESE]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workTime",
            "description": "<p>근무시간[AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workType",
            "description": "<p>근무타입[A, C]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "partnerTeacherId",
            "description": "<p>파트너강사</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "teacherActive",
            "description": "<p>활동여부 [true:활동, false:비활동]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": \"M1574925585880330\",\n    \"loginId\": \"joyjoyjoy20@naver.com\",\n    \"name\": \"나기쁨\",\n    \"nameEn\": \"Joy Na\",\n    \"lastNameEn\": \"Na\",\n    \"firstNameEn\": \"Joy\",\n    \"password\": \"e10adc3949ba59abbe56e057f20f883e\",\n    \"email\": \"joyjoyjoy20@naver.com\",\n    \"gender\": \"F\",\n    \"cellPhone\": \"UdWtv6wc/t4H/Qfph7VnyA==\",\n    \"type\": \"HT\",\n    \"workStartDate\": \"2019-12-02\",\n    \"language\": \"ENGLISH\",\n    \"workTime\": \"PM_16\",\n    \"workType\": \"A\",\n    \"partnerTeacherId\": \"M1567752637796763\",\n    \"active\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/02_get_teacher.js",
    "groupTitle": "1._Admin_API_>_5._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers/attendances",
    "title": "07. 출석/결석률 조회",
    "description": "<p>강사관리 &gt; 출석률/결석률</p>",
    "version": "1.0.0",
    "name": "admin_listTeacherAttendances",
    "group": "1._Admin_API_>_5._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/teachers/attendances?status=Y&yearMonth=2024-01'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "status",
            "description": "<p>조회할 출결상태 (Y:출석, N:결석)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "yearMonth",
            "description": "<p>조회할 년월 (yyyy-MM)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedules",
            "description": "<p>출결 스케줄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.date",
            "description": "<p>날짜 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedules.attendances",
            "description": "<p>날짜별 강사 출석/결석 목록 (HT-&gt;LT 순서, AVG 포함)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.attendances.name",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.attendances.reservationCount",
            "description": "<p>전체 예약 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.attendances.attendanceCount",
            "description": "<p>출석/결석 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.attendances.attendanceRate",
            "description": "<p>출석/결석률</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "totalAttendances",
            "description": "<p>출석/결석률 합계</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totalAttendances.name",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalAttendances.reservationCount",
            "description": "<p>전체 예약 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalAttendances.attendanceCount",
            "description": "<p>출석/결석 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalAttendances.attendanceRate",
            "description": "<p>출석/결석률</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"schedules\": [\n        {\n            \"date\": \"2024-01-01\",\n            \"attendances\": [\n                {\n                    \"name\": \"한가영\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"서안나\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"김나래\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"최태연\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"정지은\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"HT Avg.\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"Steven\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"Alex\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"Olivia\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"Sadie\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"Tyler\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"LT Avg.\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-01-02\",\n            \"attendances\": [\n                {\n                    \"name\": \"한가영\",\n                    \"reservationCount\": 0,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"서안나\",\n                    \"reservationCount\": 2,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"김나래\",\n                    \"reservationCount\": 14,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"최태연\",\n                    \"reservationCount\": 10,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"정지은\",\n                    \"reservationCount\": 6,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"HT Avg.\",\n                    \"reservationCount\": 32,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"Steven\",\n                    \"reservationCount\": 4,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"Alex\",\n                    \"reservationCount\": 13,\n                    \"attendanceCount\": 2,\n                    \"attendanceRate\": \"15.38\"\n                },\n                {\n                    \"name\": \"Olivia\",\n                    \"reservationCount\": 8,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"Sadie\",\n                    \"reservationCount\": 11,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"Tyler\",\n                    \"reservationCount\": 6,\n                    \"attendanceCount\": 0,\n                    \"attendanceRate\": \"0.00\"\n                },\n                {\n                    \"name\": \"LT Avg.\",\n                    \"reservationCount\": 42,\n                    \"attendanceCount\": 2,\n                    \"attendanceRate\": \"4.76\"\n                }\n            ]\n        }\n    ],\n    \"totalAttendances\": [\n        {\n            \"name\": \"한가영\",\n            \"reservationCount\": 218,\n            \"attendanceCount\": 2,\n            \"attendanceRate\": \"0.92\"\n        },\n        {\n            \"name\": \"서안나\",\n            \"reservationCount\": 49,\n            \"attendanceCount\": 0,\n            \"attendanceRate\": \"0.00\"\n        },\n        {\n            \"name\": \"김나래\",\n            \"reservationCount\": 148,\n            \"attendanceCount\": 2,\n            \"attendanceRate\": \"1.35\"\n        },\n        {\n            \"name\": \"최태연\",\n            \"reservationCount\": 70,\n            \"attendanceCount\": 6,\n            \"attendanceRate\": \"8.57\"\n        },\n        {\n            \"name\": \"정지은\",\n            \"reservationCount\": 60,\n            \"attendanceCount\": 4,\n            \"attendanceRate\": \"6.67\"\n        },\n        {\n            \"name\": \"HT Avg.\",\n            \"reservationCount\": 545,\n            \"attendanceCount\": 14,\n            \"attendanceRate\": \"2.57\"\n        },\n        {\n            \"name\": \"Steven\",\n            \"reservationCount\": 48,\n            \"attendanceCount\": 0,\n            \"attendanceRate\": \"0.00\"\n        },\n        {\n            \"name\": \"Alex\",\n            \"reservationCount\": 146,\n            \"attendanceCount\": 2,\n            \"attendanceRate\": \"1.37\"\n        },\n        {\n            \"name\": \"Olivia\",\n            \"reservationCount\": 62,\n            \"attendanceCount\": 0,\n            \"attendanceRate\": \"0.00\"\n        },\n        {\n            \"name\": \"Sadie\",\n            \"reservationCount\": 210,\n            \"attendanceCount\": 5,\n            \"attendanceRate\": \"2.38\"\n        },\n        {\n            \"name\": \"Tyler\",\n            \"reservationCount\": 44,\n            \"attendanceCount\": 1,\n            \"attendanceRate\": \"2.27\"\n        },\n        {\n            \"name\": \"LT Avg.\",\n            \"reservationCount\": 510,\n            \"attendanceCount\": 8,\n            \"attendanceRate\": \"1.57\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/07_list_teacher_attendances.js",
    "groupTitle": "1._Admin_API_>_5._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers/{id}/schedules",
    "title": "05. 강사 스케줄 조회",
    "description": "<p>강사관리 &gt; 강의OPEN(주별)<br/> 조회할 기간의 6:00~23:30 까지의 스케줄을 조회한다.</p>",
    "version": "1.0.0",
    "name": "admin_listTeacherSchedules",
    "group": "1._Admin_API_>_5._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/teachers/M1695013438115743/schedules?dateFrom=2023-10-04&dateTo=2023-10-05'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>강사 식별키</p>"
          }
        ],
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "dateFrom",
            "description": "<p>조회할 날짜 ~부터 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "dateTo",
            "description": "<p>조회할 날짜 ~까지 (yyyy-MM-dd)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedules",
            "description": "<p>스케줄</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.date",
            "description": "<p>날짜 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.time",
            "description": "<p>시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "schedules.isScheduled",
            "description": "<p>저장된 스케줄 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"schedules\": [\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"06:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"06:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"07:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"07:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"08:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"08:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"09:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"09:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"10:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"10:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"11:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"11:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"12:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"12:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"13:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"13:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"14:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"14:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"15:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"15:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"16:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"16:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"17:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"17:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"18:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"18:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"19:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"19:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"20:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"20:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"21:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"21:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"22:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"22:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"23:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"23:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"06:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"06:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"07:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"07:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"08:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"08:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"09:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"09:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"10:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"10:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"11:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"11:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"12:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"12:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"13:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"13:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"14:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"14:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"15:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"15:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"16:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"16:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"17:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"17:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"18:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"18:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"19:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"19:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"20:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"20:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"21:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"21:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"22:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"22:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"23:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"23:30\",\n            \"isScheduled\": false\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/05_list_teacher_schedules.js",
    "groupTitle": "1._Admin_API_>_5._강사"
  },
  {
    "type": "put",
    "url": "/admin/v1/teachers/{id}",
    "title": "03. 강사수정",
    "description": "<p>강사관리 &gt; 강사상세조회 &gt; 수정 <br/> &quot;Content-Type&quot;은 파일이 있어서 &quot;multipart/form-data&quot;로 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_updateTeacher",
    "group": "1._Admin_API_>_5._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/500593' \\\n-H \"Content-Type: multipart/form-data\" \\\n-F \"name=수정2\" \\\n-F \"firstNameEn=jin\" \\\n-F \"password=1234\" \\\n-F \"loginId=loginId6666@naver.com\" \\\n-F \"workType=A\" \\\n-F \"workTime=SP_4\" \\",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "type": "String",
            "optional": true,
            "field": "id",
            "description": "<p>강사 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "firstNameEn",
            "description": "<p>이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "lastNameEn",
            "description": "<p>성</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "loginId",
            "description": "<p>강사아이디</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>비밀번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>성별[F,M]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "workStartDate",
            "description": "<p>근무시작일[yyyy-MM-dd]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>강사타입 [HT, LT]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "workTime",
            "description": "<p>근무시간[AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "workType",
            "description": "<p>근무타입[A, C]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "partnerTeacherId",
            "description": "<p>파트너강사</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "teacherActive",
            "description": "<p>활동여부 [true:활동, false:비활동]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cellPhone",
            "description": ""
          },
          {
            "group": "Body",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/03_update_teacher.js",
    "groupTitle": "1._Admin_API_>_5._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers",
    "title": "01. 강사목록 조회",
    "description": "<p>강사관리 &gt; <br/> 제대로된 데이터가 별로 없어서 오류 가능성 높으니 계약기간 제외하고 테스트 해주세요</p>",
    "version": "1.0.0",
    "name": "all_consultation",
    "group": "1._Admin_API_>_5._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/teachers?active=INACTIVE&type=LT&search=name&keyword=Da",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "contractDateFrom",
            "description": "<p>계약기간 [yyyy-MM-dd]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "contractDateTo",
            "description": "<p>계약기간[yyyy-MM-dd]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>활동 [INACTIVE:비활동/ACTIVE:활동] . 기본값 '활동'으로</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>구분[HT, LT]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>검색조건[name: 이름,loginId:아이디,email:이메일]</p>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": false,
            "field": "keyword",
            "description": "<p>검색내용</p>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 강사 수</p>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>현재 페이지</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>강사 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.userId",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.type",
            "description": "<p>구분[HT, LT]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.teacherName",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.workTime",
            "description": "<p>근무시간[AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.sort",
            "description": "<p>순번</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.cellPhone",
            "description": "<p>전화번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalCount",
            "description": "<p>전체 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>현재 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 회원 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>전체 페이지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startPage",
            "description": "<p>페이징 영역에 노출될 첫 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endPage",
            "description": "<p>페이징 영역에 노출될 마지막 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>전 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>다음 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFirst",
            "description": "<p>첫 페이징 영역 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLast",
            "description": "<p>마지막 페이징 영역 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"userId\": \"M1695013438115743\",\n            \"type\": \"HT\",\n            \"teacherName\": \"서안나\",\n            \"workTime\": \"AM_8\",\n            \"sort\": 28\n        },\n        {\n            \"userId\": \"M1681990831501448\",\n            \"type\": \"HT\",\n            \"teacherName\": \"정지은\",\n            \"workTime\": \"PM_8\",\n            \"sort\": 36\n        },\n        {\n            \"userId\": \"M1665055086597885\",\n            \"type\": \"HT\",\n            \"teacherName\": \"정지경\",\n            \"workTime\": \"PM_8\",\n            \"sort\": 40\n        },\n        {\n            \"userId\": \"M1661138591404520\",\n            \"type\": \"HT\",\n            \"teacherName\": \"최태연\",\n            \"workTime\": \"PM_16\",\n            \"sort\": 35\n        },\n        {\n            \"userId\": \"M1657064932771055\",\n            \"type\": \"HT\",\n            \"teacherName\": \"김나래\",\n            \"workTime\": \"PM_16\",\n            \"sort\": 30\n        },\n        {\n            \"userId\": \"M1655101918032060\",\n            \"type\": \"HT\",\n            \"teacherName\": \"홍성호\",\n            \"workTime\": \"PM_8\",\n            \"sort\": 9\n        },\n        {\n            \"userId\": \"M1649713933516571\",\n            \"type\": \"HT\",\n            \"teacherName\": \"황재희\",\n            \"workTime\": \"PM_16\",\n            \"sort\": 60\n        },\n        {\n            \"userId\": \"M1643076224863648\",\n            \"type\": \"HT\",\n            \"teacherName\": \"한윤경\",\n            \"workTime\": \"PM_8\",\n            \"sort\": 8\n        },\n        {\n            \"userId\": \"M1611718455286391\",\n            \"type\": \"HT\",\n            \"teacherName\": \"김영지\",\n            \"workTime\": \"PM_16\",\n            \"sort\": 6\n        },\n        {\n            \"userId\": \"M1610099206577796\",\n            \"type\": \"HT\",\n            \"teacherName\": \"최다정\",\n            \"workTime\": \"AM_8\",\n            \"sort\": 20\n        }\n    ],\n    \"totalCount\": 103,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 11,\n    \"endPage\": 10,\n    \"hasNext\": true,\n    \"hasPrev\": false,\n    \"isFirst\": true,\n    \"isLast\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/01_list_all_teacher.js",
    "groupTitle": "1._Admin_API_>_5._강사"
  },
  {
    "type": "delete",
    "url": "/admin/v1/statistics/sms",
    "title": "03. 발송 내역 삭제",
    "description": "<p>강사관리 &gt; 강사상세조회 &gt; 삭제 <br/></p>",
    "version": "1.0.0",
    "name": "admin_deleteSms",
    "group": "1._Admin_API_>_6._통계보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/statistics/sms'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "Number[]",
            "optional": false,
            "field": "smsId",
            "description": "<p>sms식별키</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/06_statistics/03_delete_sms.js",
    "groupTitle": "1._Admin_API_>_6._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/sms/{id}",
    "title": "06. LDF 상세 조회",
    "description": "<p>통계보고서 &gt; 평가현황 &gt; 상세보기 &gt; LDF 보기<br/> id: 288497 사용해주세요</p>",
    "version": "1.0.0",
    "name": "admin_evaluation_ldf",
    "group": "1._Admin_API_>_6._통계보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/statistics/ldfs/2884975'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "id",
            "description": "<p>LDF 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>LDF 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lesson",
            "description": "<p>lesson</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentSp",
            "description": "<p>Stress and Pronunciation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentV",
            "description": "<p>Vocabulary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentSg",
            "description": "<p>Sentence Structure &amp; Grammar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentC",
            "description": "<p>Comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": 288497,\n    \"lesson\": \"Jan. 2nd\",\n    \"contentSp\": \"<p><span style=\\\"font-size: 20px\\\">impressed- 감명받은</span></p> <p><span style=\\\"font-size: 20px\\\">tired- 피곤한</span></p> <p><span style=\\\"font-size: 20px\\\">freshman- 1학년, 신입사원</span></p> <p><span style=\\\"font-size: 20px\\\">popular- 인기있는</span></p> <p><span style=\\\"font-size: 20px\\\">each other-&nbsp;</span><span style=\\\"font-size: 20px\\\">서로 서로&nbsp;</span></p> <p><span style=\\\"font-size: 20px\\\">outgoing- 외향적인</span></p> <p><span style=\\\"font-size: 20px\\\">hardworking- 성실한</span></p> <p><span style=\\\"font-size: 20px\\\">mutual- 서로의</span></p>\",\n    \"contentV\": \"<p><span style=\\\"font-size: 20px\\\">&nbsp; socialize- 어울리다</span></p> <p><span style=\\\"font-size: 20px\\\">hit it off- 죽이 잘 맞다</span></p> <p><span style=\\\"font-size: 20px\\\">blow me away- 놀라게하다</span></p> <p><span style=\\\"font-size: 20px\\\">life time partner- 평생동반자</span></p> <p><span style=\\\"font-size: 20px\\\">manage- (겨우) 해내다</span></p> <p><span style=\\\"font-size: 20px\\\">conflict-갈등</span></p>\",\n    \"contentSg\": \"<p>&nbsp;</p>\",\n    \"contentC\": \"<p>&nbsp;</p>\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/06_statistics/06_get_ldf.js",
    "groupTitle": "1._Admin_API_>_6._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/sms/{id}",
    "title": "02. 발송 내역 상세 조회",
    "description": "<p>통계보고서 &gt; sms전송현황 &gt; 상세 조회<br/> id: 5 사용해주세요</p>",
    "version": "1.0.0",
    "name": "admin_getSms",
    "group": "1._Admin_API_>_6._통계보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/statistics/sms/5'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "id",
            "description": "<p>sms 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>sms 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "target",
            "description": "<p>sms 받은 사람들의 정보(smsTarget)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "target.id",
            "description": "<p>smsTarget 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "target.smsId",
            "description": "<p>사용x</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "target.email",
            "description": "<p>수취인 메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "target.recipientPhone",
            "description": "<p>발송상태 (WAITING: 대기, SUCCESS:성공, FAIL: 실패)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "target.sendDate",
            "description": "<p>발송일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reservationDate",
            "description": "<p>예약발송일[yyyy-MM-dd HH:mm:ss]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": 5,\n    \"target\": [\n        {\n            \"id\": 1,\n            \"smsId\": null,\n            \"email\": \"이메일1@naver.com\",\n            \"recipientPhone\": \"010-2321-2312\",\n            \"recipientName\": \"김민국\",\n            \"status\": \"WAITING\",\n            \"sendDate\": \"2012-11-12T00:00:00\"\n        },\n        {\n            \"id\": 2,\n            \"smsId\": null,\n            \"email\": \"이메일2@naver.com\",\n            \"recipientPhone\": \"010-2321-2312\",\n            \"recipientName\": \"김민국2\",\n            \"status\": \"WAITING\",\n            \"sendDate\": \"2012-11-12T00:00:00\"\n        },\n        {\n            \"id\": 3,\n            \"smsId\": null,\n            \"email\": \"이메일3@naver.com\",\n            \"recipientPhone\": \"010-2321-2312\",\n            \"recipientName\": \"김민국3\",\n            \"status\": \"WAITING\",\n            \"sendDate\": \"2012-11-12T00:00:00\"\n        },\n        {\n            \"id\": 4,\n            \"smsId\": null,\n            \"email\": \"이메일4@naver.com\",\n            \"recipientPhone\": \"010-2321-2312\",\n            \"recipientName\": \"김민국4\",\n            \"status\": \"SUCCESS\",\n            \"sendDate\": \"2012-11-12T00:00:00\"\n        },\n        {\n            \"id\": 5,\n            \"smsId\": null,\n            \"email\": \"이메일5@naver.com\",\n            \"recipientPhone\": \"010-2321-2312\",\n            \"recipientName\": \"김민국5\",\n            \"status\": \"SUCCESS\",\n            \"sendDate\": \"2012-11-12T00:00:00\"\n        },\n        {\n            \"id\": 6,\n            \"smsId\": null,\n            \"email\": \"이메일5@naver.com\",\n            \"recipientPhone\": \"010-2321-2312\",\n            \"recipientName\": \"김민국5\",\n            \"status\": \"FAIL\",\n            \"sendDate\": \"2012-11-12T00:00:00\"\n        },\n        {\n            \"id\": 7,\n            \"smsId\": null,\n            \"email\": \"이메일6@naver.com\",\n            \"recipientPhone\": \"010-2321-2312\",\n            \"recipientName\": \"김민국6\",\n            \"status\": \"FAIL\",\n            \"sendDate\": \"2012-11-12T00:00:00\"\n        },\n        {\n            \"id\": 8,\n            \"smsId\": null,\n            \"email\": \"이메일7@naver.com\",\n            \"recipientPhone\": \"010-2321-2312\",\n            \"recipientName\": \"김민국7\",\n            \"status\": \"FAIL\",\n            \"sendDate\": \"2012-11-12T00:00:00\"\n        },\n        {\n            \"id\": 9,\n            \"smsId\": null,\n            \"email\": \"이메일8@naver.com\",\n            \"recipientPhone\": \"010-2321-2312\",\n            \"recipientName\": \"김민국8\",\n            \"status\": \"FAIL\",\n            \"sendDate\": \"2012-11-12T00:00:00\"\n        },\n        {\n            \"id\": 10,\n            \"smsId\": null,\n            \"email\": \"이메일9@naver.com\",\n            \"recipientPhone\": \"010-2321-2312\",\n            \"recipientName\": \"김민국9\",\n            \"status\": \"FAIL\",\n            \"sendDate\": \"2012-11-12T00:00:00\"\n        }\n    ],\n    \"reservationDate\": \"2021-12-12T00:00:00\",\n    \"content\": \"문자메세지\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/06_statistics/02_get_sms.js",
    "groupTitle": "1._Admin_API_>_6._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/sms/{id}/target",
    "title": "04. 대상자 보기",
    "description": "<p>통계보고서 &gt; sms전송현황 &gt; 목록 조회&gt; 대상자보기<br/></p>",
    "version": "1.0.0",
    "name": "admin_getSmsTarget",
    "group": "1._Admin_API_>_6._통계보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/statistics/sms/5/target?search=recipientName&keyword=김민국8'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "id",
            "description": "<p>sms 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "optional": false,
            "field": "search",
            "description": "<p>검색조건 (전체: ALL, 이름:recipientName, 이메일: email)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>수취인 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.id",
            "description": "<p>수취인 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "target.email",
            "description": "<p>사용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "target.recipientPhone",
            "description": "<p>수취인 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "target.recipientName",
            "description": "<p>수취인 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "target.status",
            "description": "<p>발송상태 (WAITING: 대기, SUCCESS:성공, FAIL: 실패)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n{\n    \"list\": [\n        {\n            \"listNumber\": 1,\n            \"id\": 9,\n            \"email\": \"이메일8@naver.com\",\n            \"recipientPhone\": \"010-2321-2312\",\n            \"recipientName\": \"김민국8\",\n            \"status\": \"FAIL\"\n        }\n    ],\n    \"totalCount\": 1,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 1,\n    \"endPage\": 1,\n    \"hasNext\": false,\n    \"isFirst\": true,\n    \"isLast\": true,\n    \"hasPrev\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/06_statistics/04_get_smsTarget.js",
    "groupTitle": "1._Admin_API_>_6._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/sms",
    "title": "01. 발송 내역 목록",
    "description": "<p>SMS 전송현황 &gt; <br/> 통계보고서 &gt; sms전송현황 &gt; 발송 내역</p>",
    "version": "1.0.0",
    "name": "all_Sms",
    "group": "1._Admin_API_>_6._통계보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/statistics/sms",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "sendDateFrom",
            "description": "<p>발송일 시작 [yyyy-MM-dd]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "sendDateTo",
            "description": "<p>발송일 종료 [yyyy-MM-dd]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "sendType",
            "description": "<p>구분 [L:LMS , S: SMS] 전체 시 null값 넘겨주세요</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>검색조건[content: 내용,senderName:발송인]</p>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": false,
            "field": "keyword",
            "description": "<p>검색내용</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>SMS 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.id",
            "description": "<p>SMS 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.senderName",
            "description": "<p>발송인</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.sendDate",
            "description": "<p>발송일[yyyy-MM-dd HH:mm:ss]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.count",
            "description": "<p>발송건수(성공/실패)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.recipientName",
            "description": "<p>수취인</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.reservationDate",
            "description": "<p>예약일시(성공/실패)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalCount",
            "description": "<p>전체 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>현재 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 회원 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalPage",
            "description": "<p>전체 페이지 수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "startPage",
            "description": "<p>페이징 영역에 노출될 첫 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "endPage",
            "description": "<p>페이징 영역에 노출될 마지막 페이지</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasPrev",
            "description": "<p>전 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "hasNext",
            "description": "<p>다음 페이징 영역 존재 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isFirst",
            "description": "<p>첫 페이징 영역 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isLast",
            "description": "<p>마지막 페이징 영역 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 5,\n            \"senderName\": \"고길동\",\n            \"content\": \"문자메세지\",\n            \"sendDate\": \"2021-12-12T00:00:00\",\n            \"count\": 0,\n            \"recipientName\": \"홍길동\",\n            \"reservationDate\": \"2021-12-12T00:00:00\"\n        },\n        {\n            \"id\": 6,\n            \"senderName\": \"고길동1\",\n            \"content\": \"문자메세지1\",\n            \"sendDate\": \"2021-12-12T00:00:00\",\n            \"count\": 0,\n            \"recipientName\": \"홍길동1\",\n            \"reservationDate\": \"2021-12-12T00:00:00\"\n        },\n        {\n            \"id\": 7,\n            \"senderName\": \"고길동2\",\n            \"content\": \"문자메세지2\",\n            \"sendDate\": \"2021-12-12T00:00:00\",\n            \"count\": 0,\n            \"recipientName\": \"홍길동2\",\n            \"reservationDate\": \"2021-12-12T00:00:00\"\n        },\n        {\n            \"id\": 8,\n            \"senderName\": \"고길동3\",\n            \"content\": \"문자메세지3\",\n            \"sendDate\": \"2021-12-12T00:00:00\",\n            \"count\": 0,\n            \"recipientName\": \"홍길동3\",\n            \"reservationDate\": \"2021-12-12T00:00:00\"\n        }\n    ],\n    \"totalCount\": 4,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 1,\n    \"endPage\": 1,\n    \"hasNext\": false,\n    \"isFirst\": true,\n    \"isLast\": true,\n    \"hasPrev\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/06_statistics/01_list_all_sms.js",
    "groupTitle": "1._Admin_API_>_6._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/evaluations",
    "title": "05. 평가 현황 목록 / 상세보기",
    "description": "<p>평가현황 &gt; <br/> 통계보고서 &gt; 평가현황 &gt; 전체 목록 조회 + 상세보기</p>",
    "version": "1.0.0",
    "name": "all_evaluation",
    "group": "1._Admin_API_>_6._통계보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http:/admin/v1/statistics/evaluations?date=2023-12-04",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "date",
            "description": "<p>수업일 [yyyy-MM-dd]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>강사명</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "detailId",
            "description": "<p>목록 식별키 (상세보기)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacherName",
            "description": "<p>강사이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacherId",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gradeCount",
            "description": "<p>평가 인원수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gradeAvg",
            "description": "<p>평점</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "tatal",
            "description": "<p>총점</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ldfList",
            "description": "<p>상세보기 내 LDF 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ldfList.id",
            "description": "<p>LDF 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ldfList.date",
            "description": "<p>수업일(날짜)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ldfList.startTime",
            "description": "<p>수업일(시작시간)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ldfList.endTime",
            "description": "<p>수업일(종료시간)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ldfList.userName",
            "description": "<p>학습자</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ldfList.grade",
            "description": "<p>별점</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ldfList.evaluation",
            "description": "<p>설명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n[\n    {\n        \"detailId\": 1,\n        \"teacherName\": \"Tyler\",\n        \"teacherId\": \"M1693558129675151\",\n        \"gradeCount\": 1,\n        \"gradeAvg\": 4.0,\n        \"total\": 4.0,\n        \"ldfList\": [\n            {\n                \"id\": 362222,\n                \"date\": \"2023-12-01\",\n                \"startTime\": \"19:30:00\",\n                \"endTime\": \"20:00:00\",\n                \"userName\": \"조예진\",\n                \"grade\": 4.0,\n                \"evaluation\": \"평가평가\"\n            },\n            {\n                \"id\": 362241,\n                \"date\": \"2023-12-01\",\n                \"startTime\": \"20:30:00\",\n                \"endTime\": \"21:00:00\",\n                \"userName\": \"RE:이승민\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 362600,\n                \"date\": \"2023-12-04\",\n                \"startTime\": \"18:30:00\",\n                \"endTime\": \"19:00:00\",\n                \"userName\": \"RE:박규은\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 362658,\n                \"date\": \"2023-12-04\",\n                \"startTime\": \"21:30:00\",\n                \"endTime\": \"22:00:00\",\n                \"userName\": \"RE:문해화\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 362896,\n                \"date\": \"2023-12-05\",\n                \"startTime\": \"19:00:00\",\n                \"endTime\": \"19:30:00\",\n                \"userName\": \"조예나\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 362922,\n                \"date\": \"2023-12-05\",\n                \"startTime\": \"19:30:00\",\n                \"endTime\": \"20:00:00\",\n                \"userName\": \"RE:박규은\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 362946,\n                \"date\": \"2023-12-05\",\n                \"startTime\": \"20:00:00\",\n                \"endTime\": \"20:30:00\",\n                \"userName\": \"김한나:환불\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 362970,\n                \"date\": \"2023-12-05\",\n                \"startTime\": \"21:00:00\",\n                \"endTime\": \"21:30:00\",\n                \"userName\": \"RE:김윤아\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 363208,\n                \"date\": \"2023-12-06\",\n                \"startTime\": \"18:30:00\",\n                \"endTime\": \"19:00:00\",\n                \"userName\": \"RE:박규은\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 363227,\n                \"date\": \"2023-12-06\",\n                \"startTime\": \"19:30:00\",\n                \"endTime\": \"20:00:00\",\n                \"userName\": \"RE:이우열\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 363251,\n                \"date\": \"2023-12-06\",\n                \"startTime\": \"20:30:00\",\n                \"endTime\": \"21:00:00\",\n                \"userName\": \"RE:이수아\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 363263,\n                \"date\": \"2023-12-06\",\n                \"startTime\": \"21:30:00\",\n                \"endTime\": \"22:00:00\",\n                \"userName\": \"RE:김희진\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 363492,\n                \"date\": \"2023-12-07\",\n                \"startTime\": \"18:30:00\",\n                \"endTime\": \"19:00:00\",\n                \"userName\": \"김한나:환불\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 363531,\n                \"date\": \"2023-12-07\",\n                \"startTime\": \"19:30:00\",\n                \"endTime\": \"20:00:00\",\n                \"userName\": \"RE:박규은\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 363551,\n                \"date\": \"2023-12-07\",\n                \"startTime\": \"20:30:00\",\n                \"endTime\": \"21:00:00\",\n                \"userName\": \"RE:김윤아\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 363830,\n                \"date\": \"2023-12-08\",\n                \"startTime\": \"18:30:00\",\n                \"endTime\": \"19:00:00\",\n                \"userName\": \"RE:박규은\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 363869,\n                \"date\": \"2023-12-08\",\n                \"startTime\": \"20:30:00\",\n                \"endTime\": \"21:00:00\",\n                \"userName\": \"방수윤\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 363896,\n                \"date\": \"2023-12-08\",\n                \"startTime\": \"21:30:00\",\n                \"endTime\": \"22:00:00\",\n                \"userName\": \"RE:김소이\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 363981,\n                \"date\": \"2023-12-09\",\n                \"startTime\": \"14:30:00\",\n                \"endTime\": \"15:00:00\",\n                \"userName\": \"김이은\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 364240,\n                \"date\": \"2023-12-11\",\n                \"startTime\": \"18:30:00\",\n                \"endTime\": \"19:00:00\",\n                \"userName\": \"RE:박규은\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 364288,\n                \"date\": \"2023-12-11\",\n                \"startTime\": \"21:30:00\",\n                \"endTime\": \"22:00:00\",\n                \"userName\": \"최서영\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 364567,\n                \"date\": \"2023-12-12\",\n                \"startTime\": \"19:00:00\",\n                \"endTime\": \"19:30:00\",\n                \"userName\": \"조예진\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 364591,\n                \"date\": \"2023-12-12\",\n                \"startTime\": \"19:30:00\",\n                \"endTime\": \"20:00:00\",\n                \"userName\": \"RE:박규은\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },\n            {\n                \"id\": 364632,\n                \"date\": \"2023-12-12\",\n                \"startTime\": \"21:30:00\",\n                \"endTime\": \"22:00:00\",\n                \"userName\": \"양세오\",\n                \"grade\": 0.0,\n                \"evaluation\": null\n            },",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/06_statistics/05_list_all_evaluations.js",
    "groupTitle": "1._Admin_API_>_6._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/orders/calculates",
    "title": "01. 기간별 정산 목록 조회",
    "description": "<p>정산관리 &gt; 기간별정산관리</p>",
    "version": "1.0.0",
    "name": "admin_listOrderCalculates",
    "group": "1._Admin_API_>_7._정산",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/orders/calculates?dateFrom=2023-12-01&dateTo=2023-12-31&creatorName=박지수'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "dateFrom",
            "description": "<p>결제기간 검색 시작일 [yyyy-MM-dd]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "dateTo",
            "description": "<p>결제기간 검색 종료일[yyyy-MM-dd]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "creatorName",
            "description": "<p>처리자 검색</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "summaries",
            "description": "<p>정산 요약 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "summaries.creatorName",
            "description": "<p>처리자</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "summaries.paymentAmount",
            "description": "<p>매출액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "summaries.refundAmount",
            "description": "<p>환불금액</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders",
            "description": "<p>주문 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.id",
            "description": "<p>주문 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.billingAmount",
            "description": "<p>주문액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.paymentAmount",
            "description": "<p>매출액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.refundAmount",
            "description": "<p>환불금액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.receivableAmount",
            "description": "<p>미수금액</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.creatorName",
            "description": "<p>처리자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.createdOn",
            "description": "<p>주문일시 (yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.orderProductName",
            "description": "<p>상품명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.userId",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.userName",
            "description": "<p>주문자</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "orders.payments",
            "description": "<p>결제 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.payments.paymentAmount",
            "description": "<p>매출액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.payments.refundAmount",
            "description": "<p>환불금액</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.payments.transactionName",
            "description": "<p>거래처</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orders.payments.installmentMonths",
            "description": "<p>할부개월 (null:일시불)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.payments.cardNumber",
            "description": "<p>카드번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.payments.createdOn",
            "description": "<p>결제일시 (yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.payments.creatorName",
            "description": "<p>처리자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orders.payments.orderType",
            "description": "<p>구분</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n {\n     \"summaries\": [\n         {\n             \"creatorName\": \"김새롬\",\n             \"paymentAmount\": 765000,\n             \"refundAmount\": 680000\n         },\n         {\n             \"creatorName\": \"박지수\",\n             \"paymentAmount\": 29555000,\n             \"refundAmount\": 0\n         }\n     ],\n     \"orders\": [\n         {\n             \"id\": \"O1699685966684866\",\n             \"billingAmount\": 2320000,\n             \"paymentAmount\": 680000,\n             \"refundAmount\": 680000,\n             \"receivableAmount\": 960000,\n             \"creatorName\": \"김새롬\",\n             \"createdOn\": \"2023-11-11 15:59:26\",\n             \"orderProductName\": \"NEW PT 24회 3개월/3개월/26회\",\n             \"userName\": \"김주연:환불\",\n             \"payments\": [\n                 {\n                     \"paymentAmount\": 1000000,\n                     \"refundAmount\": 0,\n                     \"transactionName\": null,\n                     \"installmentMonths\": 3,\n                     \"cardNumber\": \"12345\",\n                     \"createdOn\": \"2023-11-11 16:04:06\",\n                     \"creatorName\": \"손진\",\n                     \"orderType\": \"신규\"\n                 },\n                 {\n                     \"paymentAmount\": 640000,\n                     \"refundAmount\": 0,\n                     \"transactionName\": null,\n                     \"installmentMonths\": null,\n                     \"cardNumber\": \"12345\",\n                     \"createdOn\": \"2023-11-23 18:57:41\",\n                     \"creatorName\": \"박지수\",\n                     \"orderType\": \"신규\"\n                 }\n             ]\n         },\n         {\n             \"id\": \"O1700133422903557\",\n             \"billingAmount\": 510000,\n             \"paymentAmount\": 510000,\n             \"refundAmount\": 0,\n             \"receivableAmount\": 0,\n             \"creatorName\": \"박지수\",\n             \"createdOn\": \"2023-11-16 20:17:02\",\n             \"orderProductName\": \"PTM (주2회 3개월)/1개월/9회\",\n             \"userName\": \"전민경\",\n             \"payments\": [\n                 {\n                     \"paymentAmount\": 500000,\n                     \"refundAmount\": 0,\n                     \"transactionName\": null,\n                     \"installmentMonths\": null,\n                     \"cardNumber\": null,\n                     \"createdOn\": \"2023-11-16 20:18:58\",\n                     \"creatorName\": \"박지수\",\n                     \"orderType\": \"신규\"\n                 },\n                 {\n                     \"paymentAmount\": 10000,\n                     \"refundAmount\": 0,\n                     \"transactionName\": null,\n                     \"installmentMonths\": null,\n                     \"cardNumber\": \"12345\",\n                     \"createdOn\": \"2023-12-01 21:14:39\",\n                     \"creatorName\": \"김새롬\",\n                     \"orderType\": \"신규\"\n                 }\n             ]\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/07_calculate/01_list_order_calculates.js",
    "groupTitle": "1._Admin_API_>_7._정산"
  },
  {
    "type": "post",
    "url": "/admin/v1/sms/send",
    "title": "02. SMS 발송",
    "description": "<p>공통 &gt; SMS 발송</p>",
    "version": "1.0.0",
    "name": "admin_createSendSms",
    "group": "1._Admin_API_>_8._SMS",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/sms/send' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n     \"senderPhone\": \"02-2082-1105\",\n     \"content\": \"문자 받으시오!\",\n     \"reservationDate\": \"2024-07-01 19:00\",\n     \"recipients\": [\n          {\n              \"name\": \"RE-김동하\",\n              \"phone\": \"010-3333-4444\"\n          },\n          {\n              \"name\": \"RE-김하연\",\n              \"phone\": \"010-5555-6666\"\n          },\n          {\n              \"name\": \"RE-서민하\",\n              \"phone\": \"010-7777-8888\"\n          }\n     ]\n}\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "senderPhone",
            "description": "<p>발신번호 (필요 없음. 어떤 번호를 입력해도 02-2082-1105로 발송됨)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "reservationDate",
            "description": "<p>예약발송일때, 일시</p>"
          },
          {
            "group": "Body",
            "type": "Object[]",
            "optional": false,
            "field": "recipients",
            "description": "<p>발송대상 목록</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "recipients.name",
            "description": "<p>발송대상 이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "recipients.phone",
            "description": "<p>발송대상 휴대폰번호</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/08_sms/02_create_send_sms.js",
    "groupTitle": "1._Admin_API_>_8._SMS"
  },
  {
    "type": "get",
    "url": "/admin/v1/sms/users",
    "title": "01. 발송 대상 목록 조회",
    "description": "<p>공통 &gt; SMS 발송</p>",
    "version": "1.0.0",
    "name": "admin_listSmsUsers",
    "group": "1._Admin_API_>_8._SMS",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/sms/users?type=S&search=name&keyword=하'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>발송 대상 유형 (S:일반회원, T:강사, A:관리자)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>검색 조건 (name:이름, id:아이디)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>검색어</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>발송 대상 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.nameEn",
            "description": "<p>영문 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.cellPhone",
            "description": "<p>휴대폰번호</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n {\n     \"users\": [\n         {\n             \"id\": \"M1519648304234104\",\n             \"name\": \"RE-김동하\",\n             \"nameEn\": \"Dongha Kim\",\n             \"cellPhone\": \"oM0uUrU29/y8pX8RhMJowA==\"\n         },\n         {\n             \"id\": \"M1511408494025832\",\n             \"name\": \"RE-김하연\",\n             \"nameEn\": \"Hayeon Kim\",\n             \"cellPhone\": \"1YbnCAQv003mIo7wZSkhjQ==\"\n         },\n         {\n             \"id\": \"M1524297763999142\",\n             \"name\": \"RE-서민하\",\n             \"nameEn\": \"Minha Seo\",\n             \"cellPhone\": \"Tw/eHhP+RYDHm5SISrHs5w==\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/08_sms/01_list_sms_users.js",
    "groupTitle": "1._Admin_API_>_8._SMS"
  },
  {
    "type": "post",
    "url": "/admin/v1/email/send",
    "title": "02. Email 발송",
    "description": "<p>공통 &gt; Email 발송</p>",
    "version": "1.0.0",
    "name": "admin_createSendEmail",
    "group": "1._Admin_API_>_9._Email",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/email/send' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n     \"senderEmail\": \"webmaster@languagecube.kr\",\n     \"title\": \"이메일 테스트!\",\n     \"content\": \"이메일 테스트입니다.\",\n     \"recipients\": [\n         {\n             \"name\": \"테스트\",\n             \"email\": \"test@gmail.com\"\n         }\n     ]\n }\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "senderEmail",
            "description": "<p>발신이메일 (필요 없음. 어떤 이메일을 입력해도 webmaster@languagecube.kr로 발송됨)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>내용</p>"
          },
          {
            "group": "Body",
            "type": "Object[]",
            "optional": false,
            "field": "recipients",
            "description": "<p>발송대상 목록</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "recipients.name",
            "description": "<p>발송대상 이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "recipients.email",
            "description": "<p>발송대상 이메일</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/09_email/02_create_send_email.js",
    "groupTitle": "1._Admin_API_>_9._Email"
  },
  {
    "type": "get",
    "url": "/admin/v1/email/users",
    "title": "01. 발송 대상 목록 조회",
    "description": "<p>공통 &gt; Email 발송</p>",
    "version": "1.0.0",
    "name": "admin_listEmailUsers",
    "group": "1._Admin_API_>_9._Email",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/email/users?type=S&search=name&keyword=하'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>발송 대상 유형 (S:일반회원, T:강사, A:관리자)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>검색 조건 (name:이름, id:아이디)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>검색어</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>발송 대상 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.id",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.name",
            "description": "<p>이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.nameEn",
            "description": "<p>영문 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": "<p>이메일</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n {\n     \"users\": [\n         {\n             \"id\": \"M1519648304234104\",\n             \"name\": \"RE-김동하\",\n             \"nameEn\": \"Dongha Kim\",\n             \"email\": \"kimdongha1984@gmail.com\"\n         },\n         {\n             \"id\": \"M1511408494025832\",\n             \"name\": \"RE-김하연\",\n             \"nameEn\": \"Hayeon Kim\",\n             \"email\": \"aqua7583@naver.com\"\n         },\n         {\n             \"id\": \"M1524297763999142\",\n             \"name\": \"RE-서민하\",\n             \"nameEn\": \"Minha Seo\",\n             \"email\": \"yellow0824@naver.com\"\n         }\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/09_email/01_list_email_users.js",
    "groupTitle": "1._Admin_API_>_9._Email"
  },
  {
    "type": " ",
    "url": "{code:'에러코드',message:'에러메시지'}",
    "title": "00. 공통 에러 코드",
    "description": "<p>Admin API 공통 에러 코드 <br/></p>",
    "version": "1.0.0",
    "name": "adminApiError",
    "group": "1._Admin_API",
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "type": "401",
            "optional": false,
            "field": "admin-api-0100",
            "description": "<p>로그인 필요</p>"
          },
          {
            "group": "Error",
            "type": "500",
            "optional": false,
            "field": "admin-api-9999",
            "description": "<p>기타 서버 에러</p>"
          },
          {
            "group": "Error",
            "type": "400",
            "optional": false,
            "field": "admin-api-9900",
            "description": "<p>기타 잘못된 요청</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "LOGIN_REQUIRED",
          "content": "HTTP/1.1 401\n{\n    \"code\": \"admin-api-0100\",\n    \"message\": \"Login is required.\"\n}",
          "type": "json"
        },
        {
          "title": "SERVER_ERROR",
          "content": "HTTP/1.1 500\n{\n    \"code\": \"admin-api-9999\",\n    \"message\": \"Internal Server Error.\"\n}",
          "type": "json"
        },
        {
          "title": "BAD_REQUEST",
          "content": "HTTP/1.1 400\n{\n    \"code\": \"admin-api-9900\",\n    \"message\": \"Bad Request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/00_error.js",
    "groupTitle": "1._Admin_API"
  }
] });
