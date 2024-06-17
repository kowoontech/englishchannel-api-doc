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
            "description": "<p>조회할 옵션 (,로 복수 가능)<br/></p> <ul> <li>TEACHERS:담당강사 목록</li> <li>CONSULTANTS:상담사 목록</li> </ul>"
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
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"teachers\": [\n        {\n            \"value\": \"M1400118325784523\",\n            \"label\": \"한가영\"\n        },\n        {\n            \"value\": \"M1695013438115743\",\n            \"label\": \"서안나\"\n        },\n        {\n            \"value\": \"M1657064932771055\",\n            \"label\": \"김나래\"\n        },\n        {\n            \"value\": \"M1661138591404520\",\n            \"label\": \"최태연\"\n        },\n        {\n            \"value\": \"M1681990831501448\",\n            \"label\": \"정지은\"\n        },\n        {\n            \"value\": \"M1594795852631377\",\n            \"label\": \"Steven\"\n        },\n        {\n            \"value\": \"M1487640799950353\",\n            \"label\": \"Alex\"\n        },\n        {\n            \"value\": \"M1698204875465368\",\n            \"label\": \"Olivia\"\n        },\n        {\n            \"value\": \"M1691559227102239\",\n            \"label\": \"Sadie\"\n        },\n        {\n            \"value\": \"M1693558129675151\",\n            \"label\": \"Tyler\"\n        }\n    ],\n    \"consultants\": [\n        {\n            \"value\": \"U1370839971594082\",\n            \"label\": \"채인숙\"\n        },\n        {\n            \"value\": \"U1629938464848865\",\n            \"label\": \"신원준2\"\n        },\n        {\n            \"value\": \"U1643253882478908\",\n            \"label\": \"최지혜\"\n        },\n        {\n            \"value\": \"U1658468539178711\",\n            \"label\": \"박수현\"\n        },\n        {\n            \"value\": \"U1670565899112697\",\n            \"label\": \"한시내\"\n        },\n        {\n            \"value\": \"U1675406451584692\",\n            \"label\": \"박지수\"\n        },\n        {\n            \"value\": \"U1684455278686108\",\n            \"label\": \"김새롬\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/00_common/01_get_options.js",
    "groupTitle": "1._Admin_API_>_0._공통_API"
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
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; 일정 체크 후 저장</p>",
    "version": "1.0.0",
    "name": "admin_createUserReservations",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/users/M1699689011700418/reservations' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"courseId\": 1,\n    \"scheduleIds\": [10, 11, 12]\n}\"",
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
    "url": "/admin/v1/users/{id}/notes",
    "title": "10. 회원 비고 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; TIP</p>",
    "version": "1.0.0",
    "name": "admin_listUserNotes",
    "group": "1._Admin_API_>_1._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1374063899995477/notes?limit=5'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": true,
            "field": "limit",
            "description": "<p>한페이지에 보여줄 비고 수</p>"
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
            "description": "<p>비고 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.id",
            "description": "<p>비고 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.content",
            "description": "<p>비고 내용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.modifiedOn",
            "description": "<p>수정일시 (yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.modifierName",
            "description": "<p>수정자</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "totalCount",
            "description": "<p>전체 비고 수</p>"
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
            "description": "<p>한페이지에 보여줄 비고 수</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 452458,\n            \"content\": \"Juan 수업 넣지 말 것!\",\n            \"modifiedOn\": \"2014-06-04 16:48:50\",\n            \"modifierName\": \"편효린\"\n        },\n        {\n            \"id\": 306750,\n            \"content\": \"Christoph 강사 예약 하지 원하지 않음.\",\n            \"modifiedOn\": \"2014-01-06 10:45:16\",\n            \"modifierName\": \"권정민\"\n        }\n    ],\n    \"totalCount\": 2,\n    \"page\": 1,\n    \"limit\": 5,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 1,\n    \"endPage\": 1,\n    \"hasNext\": false,\n    \"hasPrev\": false,\n    \"isFirst\": true,\n    \"isLast\": true\n}",
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
            "description": "<p>검색 선택 (name: 이름, loginId: 아이디, email: 이메일, company: 회사/직장명, phone: 전화번호, cellPhone: 휴대전화번호)</p>"
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
