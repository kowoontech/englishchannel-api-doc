define({ "api": [
  {
    "type": "post",
    "url": "/admin/v1/commonCode",
    "title": "05. 공통 코드 등록",
    "description": "<p>공통 코드 관리</p>",
    "version": "1.0.0",
    "name": "admin_createCommonCode",
    "group": "1._Admin_API_>_00._공통",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/commonCode' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"codeGroup\":200,\n           \"codeGroupName\": \"처리상태\",\n           \"code\": 200,\n           \"name\": \"처리상태1\",\n           \"sort\": 2,\n           \"useYn\":\"Y\"\n       }\"",
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
            "field": "codeGroup",
            "description": "<p>코드그룹 식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "codeGroupName",
            "description": "<p>코드그룹명</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>코드 식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>코드명</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>순위</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "useYn",
            "description": "<p>활성여부(Y:활성,N:비활성)</p>"
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
    "filename": "src/1_admin-api/00_common/05_create_commonCode.js",
    "groupTitle": "1._Admin_API_>_00._공통"
  },
  {
    "type": "get",
    "url": "/admin/v1/options",
    "title": "01. 공통 옵션 목록 조회",
    "description": "<p>어드민 옵션에 필요한 데이터 목록 조회<br/> 강사 목록<br/> 상담사 목록</p>",
    "version": "1.0.0",
    "name": "admin_getOptions",
    "group": "1._Admin_API_>_00._공통",
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
            "description": "<p>조회할 옵션 (,로 복수 가능)<br/></p> <ul> <li>TEACHERS:담당강사 목록</li> <li>CONSULTANTS:상담사 목록</li> <li>MEMBER_CONSULTATION_TYPES:회원 상담 구분 목록</li> <li>CARD_COMPANIES:카드종류 목록</li> </ul>"
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
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": true,
            "field": "cardCompanies",
            "description": "<p>카드종류 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cardCompanies.value",
            "description": "<p>카드종류 키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cardCompanies.label",
            "description": "<p>카드종류</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n {\n    \"teachers\": [\n        {\n            \"value\": \"500982\",\n            \"label\": \"강사수정222\"\n        },\n        {\n            \"value\": \"M1400118325784523\",\n            \"label\": \"한가영\"\n        }\n    ],\n    \"consultants\": [\n        {\n            \"value\": \"U1370839971594082\",\n            \"label\": \"채인숙\"\n        },\n        {\n            \"value\": \"U1629938464848865\",\n            \"label\": \"신원준2\"\n        }\n    ],\n    \"memberConsultationTypes\": [\n        {\n            \"value\": \"COURSE_REGISTRATION\",\n            \"label\": \"수강등록\"\n        },\n        {\n            \"value\": \"PROGRESS\",\n            \"label\": \"진도\"\n        }\n    ],\n    \"cardCompanies\": [\n        {\n            \"value\": \"KB\",\n            \"label\": \"KB\"\n        },\n        {\n            \"value\": \"NH\",\n            \"label\": \"농협NH\"\n        }\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/00_common/01_get_options.js",
    "groupTitle": "1._Admin_API_>_00._공통"
  },
  {
    "type": "get",
    "url": "/admin/v1/code/{codeGroupId}",
    "title": "07. 공통코드 목록",
    "description": "<p>셀렉트박스 리스트 조회 시 사용 <br/> - 상담관리 : 상담구분(100) , 처리상태(200)<br/> - 39.회원주문결제등록: 카드종류(300)<br/></p>",
    "version": "1.0.0",
    "name": "admin_listCode",
    "group": "1._Admin_API_>_00._공통",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/code/100'",
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
            "field": "codeGroupId",
            "description": "<p>공통코드식별키(상담구분:100/ 처리상태:200/ 카드종류:300/ 근무시간:400)</p>"
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
            "field": "code",
            "description": "<p>코드식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>코드명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/00_common/07_list_code.js",
    "groupTitle": "1._Admin_API_>_00._공통"
  },
  {
    "type": "get",
    "url": "/admin/v1/commonCode",
    "title": "06. 공통코드 목록(공통코드관리페이지)",
    "description": "<p>공통 코드 관리 페이지의 공통 코드 목록 <br/></p>",
    "version": "1.0.0",
    "name": "admin_listCommonCode",
    "group": "1._Admin_API_>_00._공통",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/localhost:8080/admin/v1/commonCode'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": true,
            "field": "codeGroup",
            "description": "<p>그룹코드 식별키</p>"
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
            "field": "commonCode",
            "description": "<p>공통코드목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commonCode.codeGroup",
            "description": "<p>그룹코드 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commonCode.codeGroupName",
            "description": "<p>그룹코드명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commonCode.code",
            "description": "<p>코드 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commonCode.name",
            "description": "<p>코드명</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "commonCode.sort",
            "description": "<p>코드순서</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commonCode.useYn",
            "description": "<p>활성여부(Y:활성,N:비활성)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"commonCode\": [\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 11,\n            \"name\": \"수정\",\n            \"sort\": 5,\n            \"useYn\": \"Y\"\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 12,\n            \"name\": \"이메일상담12\",\n            \"sort\": 3,\n            \"useYn\": \"Y\"\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 13,\n            \"name\": \"이메일상담13\",\n            \"sort\": 3,\n            \"useYn\": null\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 14,\n            \"name\": \"이메일상담14\",\n            \"sort\": 3,\n            \"useYn\": null\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 15,\n            \"name\": \"이메일상담15\",\n            \"sort\": 3,\n            \"useYn\": null\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 16,\n            \"name\": \"이메일상담16\",\n            \"sort\": 3,\n            \"useYn\": \"N\"\n        },\n        {\n            \"codeGroup\": 200,\n            \"codeGroupName\": \"처리상태\",\n            \"code\": 20,\n            \"name\": \"이메일상담16\",\n            \"sort\": 3,\n            \"useYn\": \"N\"\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 200,\n            \"name\": \"이메일상담2\",\n            \"sort\": 1,\n            \"useYn\": \"Y\"\n        },\n        {\n            \"codeGroup\": 200,\n            \"codeGroupName\": \"처리상태\",\n            \"code\": 200,\n            \"name\": \"처리상태1\",\n            \"sort\": 2,\n            \"useYn\": \"Y\"\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 300,\n            \"name\": \"이메일상담3\",\n            \"sort\": 1,\n            \"useYn\": \"Y\"\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 400,\n            \"name\": \"이메일상담4\",\n            \"sort\": 1,\n            \"useYn\": \"Y\"\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 500,\n            \"name\": \"이메일상담5\",\n            \"sort\": 1,\n            \"useYn\": null\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 600,\n            \"name\": \"이메일상담6\",\n            \"sort\": 2,\n            \"useYn\": null\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 700,\n            \"name\": \"이메일상담7\",\n            \"sort\": 2,\n            \"useYn\": \"Y\"\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 800,\n            \"name\": \"이메일상담8\",\n            \"sort\": 3,\n            \"useYn\": \"Y\"\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 900,\n            \"name\": \"이메일상담9\",\n            \"sort\": 3,\n            \"useYn\": \"Y\"\n        },\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\",\n            \"code\": 1000,\n            \"name\": \"이메일상담10\",\n            \"sort\": 3,\n            \"useYn\": \"Y\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/00_common/06_list_commonCode.js",
    "groupTitle": "1._Admin_API_>_00._공통"
  },
  {
    "type": "get",
    "url": "/admin/v1/commonCodeGroup",
    "title": "04. 코드 그룹 목록",
    "description": "<p>코드 그룹 목록 <br/> 하드코딩 된 테이블입니다. 공통코드 등록, 수정 시 사용합니다.</p>",
    "version": "1.0.0",
    "name": "admin_listGroupCode",
    "group": "1._Admin_API_>_00._공통",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/commonCodeGroup'",
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
            "field": "commonCodeGroup",
            "description": "<p>코드 그룹 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commonCode.codeGroup",
            "description": "<p>그룹코드 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commonCode.codeGroupName",
            "description": "<p>그룹코드명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"commonCodeGroup\": [\n        {\n            \"codeGroup\": 100,\n            \"codeGroupName\": \"상담구분\"\n        },\n        {\n            \"codeGroup\": 200,\n            \"codeGroupName\": \"처리상태\"\n        },\n        {\n            \"codeGroup\": 300,\n            \"codeGroupName\": \"카드종류\"\n        },\n        {\n            \"codeGroup\": 400,\n            \"codeGroupName\": \"근무시간\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/00_common/04_list_codeGroup.js",
    "groupTitle": "1._Admin_API_>_00._공통"
  },
  {
    "type": "post",
    "url": "/admin/v1/login",
    "title": "02. 로그인",
    "description": "<p>어드민 로그인<br/> 모든 API 요청의 header에 Login-Profile=test 를 넣으면 로그인 우회<br/> Token은 각 요청 Header에 Authorization으로 넣어주시면 됩니다. (Bearer 이런거 없이 토큰만)</p>",
    "version": "1.0.0",
    "name": "admin_login",
    "group": "1._Admin_API_>_00._공통",
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
    "groupTitle": "1._Admin_API_>_00._공통"
  },
  {
    "type": "post",
    "url": "/admin/v1/logout",
    "title": "03. 로그아웃",
    "description": "<p>어드민 로그아웃</p>",
    "version": "1.0.0",
    "name": "admin_logout",
    "group": "1._Admin_API_>_00._공통",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/logout' \\\n-H \"Authorization: 19fa536a-6aab-49c0-bf3f-099e050e1583\"",
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
    "groupTitle": "1._Admin_API_>_00._공통"
  },
  {
    "type": "put",
    "url": "api/admin/v1/commonCode/{codeGroup}/{code}",
    "title": "08. 공통 코드 수정",
    "description": "<p>공통 코드 관리</p>",
    "version": "1.0.0",
    "name": "admin_updateCommonCode",
    "group": "1._Admin_API_>_00._공통",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/api/admin/v1/commonCode/{codeGroup}/{code}' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"codeGroupName\": \"처리상태\",\n           \"name\": \"처리상태수정\",\n           \"sort\": 2,\n           \"useYn\":\"Y\"\n       }\"",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Path": [
          {
            "group": "Path",
            "optional": false,
            "field": "codeGroup",
            "description": "<p>코드 그룹</p>"
          },
          {
            "group": "Path",
            "optional": false,
            "field": "code",
            "description": "<p>코드</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>코드명</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "sort",
            "description": "<p>순위</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "useYn",
            "description": "<p>활성여부(Y:활성,N:비활성)</p>"
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
    "filename": "src/1_admin-api/00_common/08_update_commonCode.js",
    "groupTitle": "1._Admin_API_>_00._공통"
  },
  {
    "type": "delete",
    "url": "/admin/v1/users/{id}/levelTests/{testId}",
    "title": "34. 레벨테스트 삭제",
    "description": "<p>회원관리 &gt; 상세조회 &gt; 테스트탭 <br/> id : 1028151  / testId : 6118</p>",
    "version": "1.0.0",
    "name": "admin_User_DELETE_LevelTest",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/34_delete_user_levelTest.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "delete",
    "url": "/admin/v1/users/notes/{id}",
    "title": "29. 비고 삭제",
    "description": "<p>회원관리 &gt; 예약 &gt; 예약등록 &gt; TIP</p>",
    "version": "1.0.0",
    "name": "admin_User_Note",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/29_delete_user_notes.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/levelTests",
    "title": "32. 레벨 테스트 등록",
    "description": "<p>회원관리 &gt; 회원 상세 조회 &gt; 테스트 탭 <br/> 없는 데이터가 많으니 id : 1028151 사용해주세요<br/> &quot;Content-Type&quot;은 파일이 있어서 &quot;multipart/form-data&quot;로 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_creatLevelTest",
    "group": "1._Admin_API_>_01._회원",
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
            "description": "<p>테스트일시(시작) (yyyy-mm-dd HH:mm)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "interviewer",
            "description": "<p>interviewer Interviewer</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "lbt",
            "description": "<p>LBT 테스트결과</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "rbt",
            "description": "<p>RBT 테스트결과</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "obt",
            "description": "<p>OBT</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "testIp",
            "description": "<p>TEST IP</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": true,
            "field": "file",
            "description": "<p>첨부파일</p>"
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
            "type": "String",
            "optional": true,
            "field": "purpose",
            "description": "<p>Purpose of Study</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": true,
            "field": "studyType",
            "description": "<p>What kind of English do you want to study and learn?<br/> [ EC: English Conversation,<br/> BE: Business English ,TS:Toeic Speaking , I:Interview ,ETC: ETC]<br></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "studyTypeETC",
            "description": "<p>이유</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "familyBackground",
            "description": "<p>Family Background</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "usageType",
            "description": "<p>Company or School</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "occupation",
            "description": "<p>Occupation</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "spareTime",
            "description": "<p>Spare Time</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "travelAbroad",
            "description": "<p>Travel Abroad</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "futurePlans",
            "description": "<p>Future Plans</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": true,
            "field": "consonants",
            "description": "<p>consonants <br/> [ R , L, P, F, B, V, S , Z, SH, EZH, CH, G, TTH, TH]<br/></p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": true,
            "field": "vowels",
            "description": "<p>vowels [ A,B,C,D,E,F,G,H,I,J,K,L,M,N]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "clarity",
            "description": "<p>Clarity(10:hard to understand ,20:average ,30:easy to understand)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "intonation",
            "description": "<p>Intonation(10:very Korean ,20:a bit Korean,30:acceptable ,40:near native)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "vocabulary",
            "description": "<p>Vocabulary(10:very limited ,20:limited ,30:average ,40:above average ,50:extensive)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "verbsTense",
            "description": "<p>Verbs tense(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "agreement",
            "description": "<p>Agreement(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "prepositions",
            "description": "<p>Prepositions(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "articles",
            "description": "<p>Articles(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "plurals",
            "description": "<p>Plurals(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "others",
            "description": "<p>Others(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "strongPoint",
            "description": "<p>strongPoint</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "weakPoint",
            "description": "<p>weakPoint</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "comprehension",
            "description": "<p>Comprehension How much does learner understand<br/> (10:almost nothing ,20:some parts ,30:most parts ,40:almost everything ,50:everything)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "confidence",
            "description": "<p>Confidence(10:completely lacking ,20:lacking ,30:average ,40:above average,50:very confident)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "recommendedLevel",
            "description": "<p>Recommended Level [ R2:Pre// R3:300// R4:400//R5:500 //R6:600//R7:700://R8: 800//R9:900//ETC:ETC]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
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
    "filename": "src/1_admin-api/01_user/32_create_user_levelTest.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users",
    "title": "03. 회원 등록",
    "description": "<p>회원관리 &gt; 회원 등록 <br/> 사용자등록, 직원등록 시 사용 &gt; type 필드는 필수입니다</p>",
    "version": "1.0.0",
    "name": "admin_createUser",
    "group": "1._Admin_API_>_01._회원",
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
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>사용자 인지 직원인지 구분 (사용자:S , 직원: A)</p>"
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
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/consultations",
    "title": "18. 회원 상담 등록",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 상담 탭</p>",
    "version": "1.0.0",
    "name": "admin_createUserConsultation",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/18_create_user_consultation.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/ldfs",
    "title": "48. ldf 등록",
    "description": "<p>강사 계정 로그인 : 회원목록 &gt; ldf탭 &gt; 등록<br/> test: reservationId : 2431378</p>",
    "version": "1.0.0",
    "name": "admin_createUserLdf",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/users/M1654741178072018/ldfs' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"reservationId\":2431385,\n           \"lesson\":\"lesson\",\n           \"contentSp\": \"contentSp\",\n           \"contentV\": \"contentV\",\n           \"contentSg\": \"contentSg\",\n           \"contentC\": \"contentC\"\n       }\"",
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
            "type": "Number",
            "optional": false,
            "field": "reservationId",
            "description": "<p>ldf 목록에 가지고 있는 ldfId(ldf식별키)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "lesson",
            "description": "<p>Lesson</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "contentSp",
            "description": "<p>Stress and Pronunciation</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "contentV",
            "description": "<p>Vocabulary</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "contentSg",
            "description": "<p>Sentence Structure &amp; Grammar</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "contentC",
            "description": "<p>Comment</p>"
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
    "filename": "src/1_admin-api/01_user/48_create_user_ldf.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/notes",
    "title": "26. 비고등록",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; TIP(비고)</p>",
    "version": "1.0.0",
    "name": "admin_createUserNote",
    "group": "1._Admin_API_>_01._회원",
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
            "optional": false,
            "field": "id",
            "description": "<p>과정 회원 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "courseId",
            "description": "<p>강의 식별키(오른쪽에 있는 과정의 식별키와 일치)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
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
    "filename": "src/1_admin-api/01_user/26_create_user_notes.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/orders/{orderId}/payments",
    "title": "40. 회원 주문 결제 등록",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_createUserOrderPayment",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/users/M1722002661204896/orders/O1722163996604360/payments' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"type\": \"I\",\n           \"paymentDate\": \"2024-07-28\",\n           \"cashAmount\": null,\n           \"isReceiptIssued\": false,\n           \"receiptNumber\": \"\",\n           \"depositAmount\": null,\n           \"accountHolder\": \"테스터\",\n           \"receivableAmount\": 440000,\n           \"recallDate\": null,\n           \"receivableReason\": \"test\",\n           \"memo\": \"test\",\n           \"cards\": [\n               {\n                   \"amount\": 10000,\n                   \"code\": \"2090073\",\n                   \"cardNumber\": \"12345\",\n                   \"installmentMonths\": 0,\n                   \"approvalNumber\": \"\"\n               },\n               {\n                   \"amount\": 30000,\n                   \"code\": \"2090074\",\n                   \"cardNumber\": \"00000\",\n                   \"installmentMonths\": 0,\n                   \"approvalNumber\": \"\"\n               }\n           ]\n       }\"",
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
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>결제구분 (I:신규, P:회수, T:변경)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "paymentDate",
            "description": "<p>결제일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "cashAmount",
            "description": "<p>현금금액</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": true,
            "field": "isReceiptIssued",
            "description": "<p>현금영수증 여부</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "receiptNumber",
            "description": "<p>현금영수증 번호</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "depositAmount",
            "description": "<p>예금금액</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "accountHolder",
            "description": "<p>예금자명</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "receivableAmount",
            "description": "<p>미수금액</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "recallDate",
            "description": "<p>회수예정일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "receivableReason",
            "description": "<p>미수금사유</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "memo",
            "description": "<p>결제메모</p>"
          },
          {
            "group": "Body",
            "type": "Object[]",
            "optional": true,
            "field": "cards",
            "description": "<p>카드결제 목록</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "cards.amount",
            "description": "<p>결제금액</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cards.code",
            "description": "<p>카드종류(코드)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cards.cardNumber",
            "description": "<p>카드번호</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "cards.installmentMonths",
            "description": "<p>할개월수 (숫자만, 0 또는 null: 일시불)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "cards.approvalNumber",
            "description": "<p>승인번호</p>"
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
    "filename": "src/1_admin-api/01_user/40_create_user_payment.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/orders/products",
    "title": "23. 회원 주문 상품 등록 (주문 등록)",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 상담 탭</p>",
    "version": "1.0.0",
    "name": "admin_createUserOrderProduct",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/users/M1374063899995477/orders/products' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"productId\":\"P1725650808085698\",\n           \"months\": 1,\n           \"quantity\":6,\n           \"teacherId\":\"M1709859614116619\",\n           \"assistantTeacherId\":\"M1681990831501448\",\n           \"isRetake\":true,\n           \"retakeTeacherId\":\"M1681990831501448\",\n           \"retakeNote\":\"수업만족\",\n           \"billingAmount\":70000\n       }\"",
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
          "content": "HTTP/1.1 200\n {\n    \"orderId\": \"O1725653297500048\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/23_create_user_order_product.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/orders/{orderId}/orderProducts/{orderProductId}/refund",
    "title": "42. 회원 주문 환불 등록",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_createUserOrderRefund",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/users/M1722002661204896/orders/O1722163996604360/orderProducts/I1722163996604145/refund' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"refundDate\": \"2024-07-29\",\n    \"cardAmount\": 55000,\n    \"cashAmount\": null,\n    \"depositAmount\": null,\n    \"bank\": null,\n    \"accountNumber\": null,\n    \"refundReason\": \"\"\n}\"",
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
          },
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "orderProductId",
            "description": "<p>주문 상세 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "refundDate",
            "description": "<p>환불일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "cardAmount",
            "description": "<p>카드금액</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "cashAmount",
            "description": "<p>현금금액</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "depositAmount",
            "description": "<p>계좌이체</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "bank",
            "description": "<p>은행명</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "accountNumber",
            "description": "<p>계좌번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "refundReason",
            "description": "<p>환불사유</p>"
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
    "filename": "src/1_admin-api/01_user/42_create_user_refund.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "post",
    "url": "/admin/v1/users/{id}/reservations",
    "title": "10. 예약 등록",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; 일정 체크 후 저장 id: M1699689011700418 사용해주세요 스케줄 출력이 된다면 courseId : 75127 로 하고 scheduleIds를 넘겨주세요.<br/> 스케줄 출력이 안된다면 REQUEST 참고해서 넣어주세요</p>",
    "version": "1.0.0",
    "name": "admin_createUserReservations",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/10_create_user_reservations.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "delete",
    "url": "/admin/v1/users/{id}",
    "title": "22. 회원 삭제",
    "description": "<p>회원관리 &gt; 기본 탭</p>",
    "version": "1.0.0",
    "name": "admin_deleteUser",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/22_delete_user.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "delete",
    "url": "/admin/v1/users/{id}/consultations/{consultationId}",
    "title": "37. 회원 상담 삭제",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 상담 탭</p>",
    "version": "1.0.0",
    "name": "admin_deleteUserConsultation",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/37_delete_user_consultation.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "delete",
    "url": "/admin/v1/users/{id}/orders/{orderId}",
    "title": "44. 회원 주문 전체 취소",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_deleteUserOrder",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/users/M1722002661204896/orders/O1722163996604360'",
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
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/44_delete_user_order.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "delete",
    "url": "/admin/v1/users/{id}/orders/{orderId}/payments/{paymentId}",
    "title": "41. 회원 주문 결제 취소",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_deleteUserOrderPayment",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/users/M1722002661204896/orders/O1722163996604360/payments/P1722166023495462'",
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
          },
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "paymentId",
            "description": "<p>결제 식별키</p>"
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
    "filename": "src/1_admin-api/01_user/41_delete_user_payment.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "delete",
    "url": "/admin/v1/users/{id}/orders/{orderId}/orderProducts/{orderProductId}",
    "title": "43. 회원 주문상세 취소",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_deleteUserOrderProduct",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/users/M1722002661204896/orders/O1722163996604360/orderProducts/I1722163996604145'",
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
          },
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "orderProductId",
            "description": "<p>주문상세 식별키</p>"
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
    "filename": "src/1_admin-api/01_user/43_delete_user_orderProduct.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/levelTests/{testId}",
    "title": "31. 레벨테스트 상세조회",
    "description": "<p>회원관리 &gt; 회원  상세 조회 &gt; 테스트 탭 <br/> 테스트가 필요하다면, id : M1372661465106388 , testId : 6153 사용해주세요 <br/> 회원id 의 회원 이름은 '김기훈' 입니다</p>",
    "version": "1.0.0",
    "name": "admin_getLevelTest",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'localhost:8080/admin/v1/users/M1372661465106388/levelTests/6153'",
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
            "description": "<p>테스트일시(시작) (yyyy-mm-dd HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "levelTest.testEndTime",
            "description": "<p>테스트일시(끝)(yyyy-mm-dd HH:mm)</p>"
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
            "optional": true,
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
            "field": "levelTest.travelAbroad",
            "description": "<p>TravelAbroad</p>"
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
            "optional": true,
            "field": "levelTest.consonants",
            "description": "<p>consonants(사용x, 아래 consonants 사용해주세요)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
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
            "optional": true,
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
            "description": "<p>Recommended Level [ R2:Pre// R3:300// R4:400//R5:500 //R6:600//R7:700://R8: 800//R9:900//ETC:ETC]</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "vowels",
            "description": "<p>vowels(순서대로 [ A,B,C,D,E,F,G,H,I,J,K,L,M,N])</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "consonants",
            "description": "<p>consonants(순서대로 [ R , L, P, F, B, V, Z, SH, EZH, CH, G, TTH, TH] )</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "studyType",
            "description": "<p>studyType( [ EC: English Conversation //BE: Business English //TS:Toeic Speaking <br/> I:Interview ,ETC: ETC])</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"levelTest\": {\n        \"id\": 6153,\n        \"userId\": null,\n        \"testStartTime\": null,\n        \"testEndTime\": null,\n        \"interviewer\": \"interviewer\",\n        \"lbt\": \"10\",\n        \"rbt\": null,\n        \"obt\": null,\n        \"testIp\": null,\n        \"note\": null,\n        \"purpose\": null,\n        \"studyTypeEtc\": \"이유\",\n        \"familyBackground\": \"familyBackground\",\n        \"usageType\": null,\n        \"occupation\": null,\n        \"spareTime\": null,\n        \"travelAbroad\": \"travelAbroad\",\n        \"futurePlans\": null,\n        \"clarity\": \"10\",\n        \"intonation\": \"20\",\n        \"vocabulary\": \"30\",\n        \"verbsTense\": null,\n        \"agreement\": null,\n        \"prepositions\": \"40\",\n        \"articles\": null,\n        \"plurals\": null,\n        \"others\": null,\n        \"strongPoint\": \"strongPoint\",\n        \"weakPoint\": null,\n        \"comprehension\": \"10\",\n        \"confidence\": null,\n        \"comments\": null,\n        \"recommendedLevelEtc\": \"recommendedLevelEtc\",\n        \"studyType\": \"30,20\",\n        \"consonants\": \"80,130\",\n        \"vowels\": \"150,40\",\n        \"recommendedLevel\": \"80,90\",\n        \"file\": \"1721961066411_오픈.txt\",\n        \"originalFile\": \"오픈.txt\",\n        \"fileUrl\": \"http://localhost:8080/file/download/1721961066411_오픈.txt/오픈.txt\"\n    },\n    \"studyType\": [\n        \"TS\",\n        \"BE\"\n    ],\n    \"consonants\": [\n        \"SH\",\n        \"TH\"\n    ],\n    \"vowels\": [\n        \"N\",\n        \"C\"\n    ],\n    \"recommendedLevel\": [\n        \"R8\",\n        \"R9\"\n    ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/31_get_user_levelTest.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/templates/1",
    "title": "39. 특이사항 템플릿",
    "description": "<p>회원관리 &gt; 회원등록 &gt; 특이사항 필드에 들어 갈 템플릿<br/></p>",
    "version": "1.0.0",
    "name": "admin_getRegisterNoteTemplate",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/templates/1'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>템플릿 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>템플릿</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>템플릿에 대한 설명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modifiedBy",
            "description": "<p>작성자 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modifiedName",
            "description": "<p>작성자이름</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": 1,\n    \"text\": \"■ 등록조건 : \\n ■ 교재 : \\n ■ 교재이력 : \\n ■ 차량등록 : \\n ■ 기타 : \",\n    \"description\": \"회원 특이사항\",\n    \"modifiedBy\": \"U1658468539178711\",\n    \"modifiedName\": \"박수현\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/39_get_template_registerMemberNote.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}",
    "title": "02. 회원 기본정보 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 기본 탭</p>",
    "version": "1.0.0",
    "name": "admin_getUser",
    "group": "1._Admin_API_>_01._회원",
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
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/consultations/{consultationId}",
    "title": "35. 회원 상담 상세 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 상담 탭</p>",
    "version": "1.0.0",
    "name": "admin_getUserConsultation",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/35_get_user_consultation.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/courses/{courseId}",
    "title": "12. 회원 수강 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 수강 탭</p>",
    "version": "1.0.0",
    "name": "admin_getUserCourse",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/12_get_user_course.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/ldfs/{ldfId}",
    "title": "25. 회원 LDF 상세 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; LDF 탭</p>",
    "version": "1.0.0",
    "name": "admin_getUserLdf",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/25_get_user_ldf.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/notes/{noteId}",
    "title": "27. 비고 상세 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; TIP(비고)</p>",
    "version": "1.0.0",
    "name": "admin_getUserNote",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/27_get_user_notes.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/orders/{orderId}",
    "title": "20. 회원 주문 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_getUserOrder",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1722002661204896/orders/O1722163996604360'",
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
            "type": "Boolean",
            "optional": false,
            "field": "isCancelable",
            "description": "<p>전체 취소 가능 여부</p>"
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
            "type": "String",
            "optional": false,
            "field": "orderProducts.name",
            "description": "<p>상품명</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orderProducts.amount",
            "description": "<p>금액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orderProducts.paymentAmount",
            "description": "<p>결제금액</p>"
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
            "type": "Number",
            "optional": false,
            "field": "orderProducts.months",
            "description": "<p>개월수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "orderProducts.quantity",
            "description": "<p>횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "orderProducts.productName",
            "description": "<p>상품명</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "orderProducts.hasReservations",
            "description": "<p>예약 여부 (true: 예약 있음)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "orderProducts.hasPayments",
            "description": "<p>결제 여부 (true: 결제 있음)</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "orderProducts.refundType",
            "description": "<p>환불 구분 (CANCELABLE: 취소 가능, REFUNDABLE: 환불 가능, REFUNDED: 환불 완료)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n    \"id\": \"O1722163996604360\",\n    \"supplyAmount\": 55000,\n    \"discountAmount\": 0,\n    \"billingAmount\": 55000,\n    \"refundAmount\": 55000,\n    \"orderProducts\": [\n        {\n            \"id\": \"I1722163996604145\",\n            \"name\": \"PTG (주1회 1개월)/0개월/1회\",\n            \"amount\": 55000,\n            \"discountAmount\": 0,\n            \"billingAmount\": 55000,\n            \"refundAmount\": 55000,\n            \"productType\": \"과정\",\n            \"createdOn\": \"2024-07-28 19:53\",\n            \"orderType\": \"신규\",\n            \"refundType\": \"REFUNDED\",\n            \"retake\": false,\n            \"hasReservations\": false,\n            \"hasPayments\": true\n        }\n    ],\n    \"isCancelable\": false\n}\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/20_get_user_order.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/orders/{orderId}/payments/{paymentId}",
    "title": "51. 회원 주문 결제 상세조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문탭</p>",
    "version": "1.0.0",
    "name": "admin_getUserPayment",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/api/admin/v1/users/M1724922936146796/orders/O1724939709739071/payments/P1724992366486176'",
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
          },
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "paymentId",
            "description": "<p>결제 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>결제 식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "modifiedBy",
            "description": "<p>처리자 식벌키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cardCompany",
            "description": "<p>카드종류</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cardNumber",
            "description": "<p>카드번호</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "installmentMonths",
            "description": "<p>할개월수 (숫자만, 0 또는 null: 일시불)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "approvalNumber",
            "description": "<p>승인번호</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": \"P1724992366486176\",\n    \"cardCompany\": \"KB\",\n    \"cardNumber\": \"1212343412123434\",\n    \"approvalNumber\": \"123\",\n    \"modifiedBy\": \"U1370839971594082\",\n    \"modifiedName\": \"채인숙\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/51_get_user_payment.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/reservations/{reservationId}",
    "title": "15. 회원 예약 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 학습 탭</p>",
    "version": "1.0.0",
    "name": "admin_getUserReservation",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/15_get_user_reservation.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/consultations",
    "title": "17. 회원 상담 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 상담 탭</p>",
    "version": "1.0.0",
    "name": "admin_listUserConsultations",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/17_list_user_consultations.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/courses/{courseId}/histories",
    "title": "14. 회원 수강관리이력 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 수강 탭</p>",
    "version": "1.0.0",
    "name": "admin_listUserCourseHistories",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/14_list_user_course_histories.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/courses",
    "title": "04. 회원 과정(수강) 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 과정 정보<br/> 회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; 과정 정보<br/> 회원관리 &gt; 회원 목록 조회 &gt; 수강 탭<br/></p>",
    "version": "1.0.0",
    "name": "admin_listUserCourses",
    "group": "1._Admin_API_>_01._회원",
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
            "description": "<p>조회할 수강 상태 (VALID: 기본 조회, ATTENDING: 수강중, WAITING: 대기중, COMPLETE: 수강완료, REFUND: 환불 예약가능:AVAILABLE)</p>"
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
            "field": "list.status",
            "description": "<p>상태(대기:WAITING, 정상:NORMAL, 취소:CANCEL)</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 75615,\n            \"name\": \"PTG (주2회 3개월)/50.0회\",\n            \"lessonCount\": 50.0,\n            \"assignmentCount\": 0.0,\n            \"remainCount\": 50.0,\n            \"startDate\": \"2023-12-30\",\n            \"endDate\": \"2024-12-29\",\n            \"teacherId\": \"M1695013438115743\",\n            \"teacherName\": \"서안나\",\n            \"assistantTeacherId\": \"M1681990831501448\",\n            \"assistantTeacherName\": \"정지은\",\n            \"createDate\": \"2023-12-30\",\n            \"status\": \"정상\"\n        },\n        {\n            \"id\": 73912,\n            \"name\": \"PTM (주2회 3개월)/26.0회\",\n            \"lessonCount\": 26.0,\n            \"assignmentCount\": 26.0,\n            \"remainCount\": 0.0,\n            \"startDate\": \"2023-07-19\",\n            \"endDate\": \"2024-01-28\",\n            \"teacherId\": \"M1400118325784523\",\n            \"teacherName\": \"한가영\",\n            \"assistantTeacherId\": \"M1657064932771055\",\n            \"assistantTeacherName\": \"김나래\",\n            \"createDate\": \"2023-07-19\",\n            \"status\": \"정상\"\n        }\n    ],\n    \"totalCount\": 4,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 1,\n    \"endPage\": 1,\n    \"hasNext\": false,\n    \"hasPrev\": false,\n    \"isFirst\": true,\n    \"isLast\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/04_list_user_courses.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/ldfs",
    "title": "24. 회원 LDF 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; LDF 탭</p>",
    "version": "1.0.0",
    "name": "admin_listUserLdfs",
    "group": "1._Admin_API_>_01._회원",
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
            "field": "list.email",
            "description": "<p>이메일 발송 여부 (SENT: 발송됨, null: 발송안됨)</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 2533960,\n            \"date\": \"2023-07-27 (Thu)\",\n            \"startTime\": \"15:00\",\n            \"endTime\": \"15:30\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": null,\n            \"email\": \"SENT\"\n        },\n        {\n            \"id\": 2533961,\n            \"date\": \"2023-07-27 (Thu)\",\n            \"startTime\": \"15:30\",\n            \"endTime\": \"16:00\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": 333965,\n            \"email\": null\n        },\n        {\n            \"id\": 2502187,\n            \"date\": \"2023-07-21 (Fri)\",\n            \"startTime\": \"16:30\",\n            \"endTime\": \"17:00\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": null,\n            \"email\": null\n        },\n        {\n            \"id\": 2502186,\n            \"date\": \"2023-07-21 (Fri)\",\n            \"startTime\": \"16:00\",\n            \"endTime\": \"16:30\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": null,\n            \"email\": null\n        },\n        {\n            \"id\": 2502184,\n            \"date\": \"2023-07-14 (Fri)\",\n            \"startTime\": \"16:00\",\n            \"endTime\": \"16:30\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": null,\n            \"email\": null\n        },\n        {\n            \"id\": 2502185,\n            \"date\": \"2023-07-14 (Fri)\",\n            \"startTime\": \"16:30\",\n            \"endTime\": \"17:00\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": 331048,\n            \"email\": null\n        {\n            \"id\": 2502181,\n            \"date\": \"2023-07-26 (Wed)\",\n            \"startTime\": \"16:30\",\n            \"endTime\": \"17:00\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"결석\",\n            \"ldfId\": null,\n            \"email\": null\n        },\n        {\n            \"id\": 2502180,\n            \"date\": \"2023-07-26 (Wed)\",\n            \"startTime\": \"16:00\",\n            \"endTime\": \"16:30\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"결석\",\n            \"ldfId\": null,\n            \"email\": null\n        },\n        {\n            \"id\": 2502179,\n            \"date\": \"2023-07-19 (Wed)\",\n            \"startTime\": \"16:30\",\n            \"endTime\": \"17:00\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": 332036,\n            \"email\": null\n        },\n        {\n            \"id\": 2502178,\n            \"date\": \"2023-07-19 (Wed)\",\n            \"startTime\": \"16:00\",\n            \"endTime\": \"16:30\",\n            \"courseName\": \"PTM (주2회 3개월)/26.0회\",\n            \"content\": null,\n            \"teacherName\": \"한가영\",\n            \"attendanceStatus\": \"출석\",\n            \"ldfId\": null,\n            \"email\": null\n        }\n    ],\n    \"totalCount\": 94,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 10,\n    \"endPage\": 10,\n    \"hasNext\": false,\n    \"isFirst\": true,\n    \"isLast\": true,\n    \"hasPrev\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/24_list_user_ldf.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/notes",
    "title": "11. 회원 비고 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; TIP <br/> modifiedBy null일 시에는 createdOn와 creatorName 출력 <br/> modifiedBy null이 아닐 시에는 modifiedOn, modifierName 출력</p>",
    "version": "1.0.0",
    "name": "admin_listUserNotes",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/11_list_user_notes.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/orders/{orderId}/payments",
    "title": "38. 회원 주문 결제/환불 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_listUserOrderPayments",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/api/admin/v1/users/1038929/orders/O1523931572152363/payments'",
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
            "type": "Number",
            "optional": false,
            "field": "billingAmount",
            "description": "<p>실청구금액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "paymentAmount",
            "description": "<p>결제금액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "refundAmount",
            "description": "<p>환불금액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "receivableAmount",
            "description": "<p>미수금액</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "payments",
            "description": "<p>결제 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.id",
            "description": "<p>결제 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.paymentDate",
            "description": "<p>결제일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.type",
            "description": "<p>결제구분 (취소, 신규, 회수, 환불, 변경)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.paymentMethod",
            "description": "<p>결제방식 (카드, 예금, 현금)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payments.paymentAmount",
            "description": "<p>결제금액</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.accountHolder",
            "description": "<p>예금자명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.code",
            "description": "<p>카드사번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.codeName",
            "description": "<p>카드사</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.cardNumber",
            "description": "<p>카드번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "payments.installmentMonths",
            "description": "<p>카드할부 개월수 (null: 일시불)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.installmentMonthsLabel",
            "description": "<p>카드할부 (n개월, 일시불)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.approvalNumber",
            "description": "<p>카드승인번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.memo",
            "description": "<p>결제메모</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.modifiedBy",
            "description": "<p>처리자 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "payments.modifierName",
            "description": "<p>처리자</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "payments.isCancelable",
            "description": "<p>취소 가능 여부</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "refunds",
            "description": "<p>환불 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refunds.id",
            "description": "<p>환불 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refunds.refundDate",
            "description": "<p>환불일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refunds.orderProductName",
            "description": "<p>상품명</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "refunds.refundAmount",
            "description": "<p>환불금액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "refunds.cardAmount",
            "description": "<p>카드금액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "refunds.cashAmount",
            "description": "<p>현금금액</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "refunds.depositAmount",
            "description": "<p>계좌이체금액</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refunds.bank",
            "description": "<p>은행명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refunds.accountNumber",
            "description": "<p>계좌번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refunds.refundReason",
            "description": "<p>환불사유</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refunds.modifierName",
            "description": "<p>처리자</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n        \"billingAmount\": 10000,\n        \"paymentAmount\": 10000,\n        \"refundAmount\": 0,\n        \"receivableAmount\": 0,\n        \"payments\": [\n            {\n                \"id\": \"P1725850024703510\",\n                \"paymentDate\": \"2024-09-07\",\n                \"type\": \"신규\",\n                \"paymentMethod\": \"현금\",\n                \"paymentAmount\": 10000,\n                \"accountHolder\": null,\n                \"code\": null,\n                \"codeName\": null,\n                \"cardNumber\": null,\n                \"installmentMonths\": null,\n                \"installmentMonthsLabel\": \"일시불\",\n                \"approvalNumber\": null,\n                \"memo\": null,\n                \"modifiedBy\": \"U1370839971594082\",\n                \"modifierName\": \"채인숙\",\n                \"isCancelable\": true\n            }\n        ],\n        \"refunds\": [],\n    }\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/38_list_user_payments.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/orders",
    "title": "19. 회원 주문 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_listUserOrders",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/19_list_user_orders.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/reservations",
    "title": "05. 회원 예약 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭<br/> 회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; 최근 5회 수강현황<br/> 회원관리 &gt; 회원 목록 조회 &gt; 학습 탭</p>",
    "version": "1.0.0",
    "name": "admin_listUserReservations",
    "group": "1._Admin_API_>_01._회원",
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
            "type": "String",
            "optional": false,
            "field": "list.cancelDate",
            "description": "<p>취소일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.cancelerName",
            "description": "<p>취소자</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "list.isCancel",
            "description": "<p>취소 여부</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 1366328,\n            \"teacherName\": \"송예희\",\n            \"lessonType\": \"PT\",\n            \"date\": \"2018-03-05 (Mon)\",\n            \"startTime\": \"08:00\",\n            \"endTime\": \"08:30\",\n            \"attendanceStatus\": \"출석\",\n            \"modifierName\": \"김조희\",\n            \"modifiedOn\": \"2018-02-23\",\n            \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n            \"report\": \"1:1 inter 17(done) 두번째 다이얼로그 마무리. 주요표현들을 모두 잘기억하고계심.\",\n            \"cancelDate\": null,\n            \"cancelerName\": null,\n            \"isCancel\": false\n        },\n        {\n            \"id\": 1366327,\n            \"teacherName\": \"Brett\",\n            \"lessonType\": \"PT\",\n            \"date\": \"2018-03-05 (Mon)\",\n            \"startTime\": \"07:30\",\n            \"endTime\": \"08:00\",\n            \"attendanceStatus\": \"출석\",\n            \"modifierName\": \"김조희\",\n            \"modifiedOn\": \"2018-02-23\",\n            \"courseName\": \"PTM (주2회 6개월)/29.0회\",\n            \"report\": \"FT about his weekend and how his daughters are doing and what kind of alcohol he drinks when he goes out.\",\n            \"cancelDate\": null,\n            \"cancelerName\": null,\n            \"isCancel\": false\n        }\n    ],\n    \"totalCount\": 38,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 4,\n    \"endPage\": 4,\n    \"hasNext\": false,\n    \"hasPrev\": false,\n    \"isFirst\": true,\n    \"isLast\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/05_list_user_reservations.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/schedules/by-date",
    "title": "08. 회원 날짜별 스케줄 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; 주별<br/> 조회할 기간의 6:00~23:30 까지의 스케줄을 조회한다.</p>",
    "version": "1.0.0",
    "name": "admin_listUserSchedulesByDate",
    "group": "1._Admin_API_>_01._회원",
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
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.date",
            "description": "<p>날짜 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "schedules.reservations.teacherScheduleId",
            "description": "<p>담임강사 스케줄 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.teacherStatus",
            "description": "<p>담임강사 예약 상태 (NONE:스케줄 없음, USERS:조회 대상 회원의 예약, AVAILABLE:예약 가능, FULL:예약 매진)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "schedules.reservations.assistantTeacherScheduleId",
            "description": "<p>부담임강사 스케줄 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.assistantTeacherStatus",
            "description": "<p>부담임강사 예약 상태 (NONE:스케줄 없음, USERS:조회 대상 회원의 예약, AVAILABLE:예약 가능, FULL:예약 매진)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedules.reservations.teachers",
            "description": "<p>강사 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.reservations.teachers.id",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.teachers.name",
            "description": "<p>강사명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"schedules\": [\n        {\n            \"time\": \"06:00\",\n            \"reservations\": [\n                {\n                    \"date\": \"2024-01-24\",\n                    \"teacherScheduleId\": null,\n                    \"teacherStatus\": \"NONE\",\n                    \"assistantTeacherScheduleId\": null,\n                    \"assistantTeacherStatus\": \"NONE\",\n                    \"teachers\": []\n                },\n                {\n                    \"date\": \"2024-01-25\",\n                    \"teacherScheduleId\": null,\n                    \"teacherStatus\": \"NONE\",\n                    \"assistantTeacherScheduleId\": null,\n                    \"assistantTeacherStatus\": \"NONE\",\n                    \"teachers\": []\n                }\n            ]\n        },\n        {\n            \"time\": \"06:30\",\n            \"reservations\": [\n                {\n                    \"date\": \"2024-01-24\",\n                    \"teacherScheduleId\": null,\n                    \"teacherStatus\": \"NONE\",\n                    \"assistantTeacherScheduleId\": null,\n                    \"assistantTeacherStatus\": \"NONE\",\n                    \"teachers\": []\n                },\n                {\n                    \"date\": \"2024-01-25\",\n                    \"teacherScheduleId\": null,\n                    \"teacherStatus\": \"NONE\",\n                    \"assistantTeacherScheduleId\": null,\n                    \"assistantTeacherStatus\": \"NONE\",\n                    \"teachers\": []\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/08_list_user_schedules_by_date.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/schedules/by-time",
    "title": "07. 회원 시간별 스케줄 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; 일별<br/> 조회할 날짜의 6:00~23:30 까지의 스케줄을 조회한다.</p>",
    "version": "1.0.0",
    "name": "admin_listUserSchedulesByTime",
    "group": "1._Admin_API_>_01._회원",
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
            "description": "<p>스케줄 식별키</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"schedules\": [\n        {\n            \"time\": \"06:00\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        },\n        {\n            \"time\": \"06:30\",\n            \"reservations\": [\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1400118325784523\",\n                    \"teacherName\": \"한가영\",\n                    \"status\": \"NONE\"\n                },\n                {\n                    \"scheduleId\": null,\n                    \"teacherId\": \"M1695013438115743\",\n                    \"teacherName\": \"서안나\",\n                    \"status\": \"NONE\"\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/07_list_user_schedules_by_time.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/schedules/by-week",
    "title": "09. 회원 날짜에 주별 스케줄 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 등록 &gt; 주별<br/> 조회할 기간의 6:00~23:30 까지의 스케줄을 조회한다.</p>",
    "version": "1.0.0",
    "name": "admin_listUserSchedulesByWeek",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/users/M1699689011700418/schedules/by-week?dateMonth=2024-01&week=4&teacherId=M1661138591404520&assistantTeacherId=M1657064932771055'",
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
            "field": "dateMonth",
            "description": "<p>조회할 날짜 (yyyy-MM)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "week",
            "description": "<p>조회할 주차</p>"
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
            "type": "Number",
            "optional": false,
            "field": "week",
            "description": "<p>달의 주차</p>"
          },
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
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.date",
            "description": "<p>날짜 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "schedules.reservations.teacherScheduleId",
            "description": "<p>담임강사 스케줄 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.teacherStatus",
            "description": "<p>담임강사 예약 상태 (NONE:스케줄 없음, USERS:조회 대상 회원의 예약, AVAILABLE:예약 가능, FULL:예약 매진)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "schedules.reservations.assistantTeacherScheduleId",
            "description": "<p>부담임강사 스케줄 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.assistantTeacherStatus",
            "description": "<p>부담임강사 예약 상태 (NONE:스케줄 없음, USERS:조회 대상 회원의 예약, AVAILABLE:예약 가능, FULL:예약 매진)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedules.reservations.teachers",
            "description": "<p>강사 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.reservations.teachers.id",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.teachers.name",
            "description": "<p>강사명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"week\": 5,\n    \"schedules\": [\n        {\n            \"time\": \"06:00\",\n            \"reservations\": [\n                {\n                    \"date\": \"2024-01-24\",\n                    \"teacherScheduleId\": null,\n                    \"teacherStatus\": \"NONE\",\n                    \"assistantTeacherScheduleId\": null,\n                    \"assistantTeacherStatus\": \"NONE\",\n                    \"teachers\": []\n                },\n                {\n                    \"date\": \"2024-01-25\",\n                    \"teacherScheduleId\": null,\n                    \"teacherStatus\": \"NONE\",\n                    \"assistantTeacherScheduleId\": null,\n                    \"assistantTeacherStatus\": \"NONE\",\n                    \"teachers\": []\n                }\n            ]\n        },\n        {\n            \"time\": \"06:30\",\n            \"reservations\": [\n                {\n                    \"date\": \"2024-01-24\",\n                    \"teacherScheduleId\": null,\n                    \"teacherStatus\": \"NONE\",\n                    \"assistantTeacherScheduleId\": null,\n                    \"assistantTeacherStatus\": \"NONE\",\n                    \"teachers\": []\n                },\n                {\n                    \"date\": \"2024-01-25\",\n                    \"teacherScheduleId\": null,\n                    \"teacherStatus\": \"NONE\",\n                    \"assistantTeacherScheduleId\": null,\n                    \"assistantTeacherStatus\": \"NONE\",\n                    \"teachers\": []\n                }\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/09_list_user_schedules_by_week.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users",
    "title": "01. 회원 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회<br/> 모든 파라미터는 안넘기면 전체<br/> 전체가 명시되어 있는 셀렉트박스는 &quot;ALL&quot;을 넘겨도 전체<br/> 사용자등록, 직원등록 시 사용 &gt; type 필드는 필수입니다<br/> 정렬기능 &gt; 이름: name , 이메일: email , 수강만료일: expirationDate , 가입일: createDate , 잔여횟수: remainingCount , 미부킹: notBook</p>",
    "version": "1.0.0",
    "name": "admin_listUsers",
    "group": "1._Admin_API_>_01._회원",
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
            "description": "<p>정렬 선택(이름: name , 이메일: email , 수강만료일: endDate , 가입일: createDate , 잔여횟수: remainingCount)</p>"
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
            "field": "list.notBook",
            "description": "<p>미부킹</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": \"9049\",\n            \"name\": \"황순안\",\n            \"email\": \"1028151@naver.com\",\n            \"cellPhone\": \"gOI7YKz4khanfsIk9Wc/Wg==\",\n            \"company\": \"필립스\",\n            \"createDate\": \"2007-03-10\"\n        },\n        {\n            \"id\": \"9048\",\n            \"name\": \"trial\",\n            \"email\": \"\",\n            \"cellPhone\": \"\",\n            \"company\": \"\",\n            \"createDate\": \"2007-03-12\"\n        }\n    ],\n    \"totalCount\": 4899,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 490,\n    \"endPage\": 10,\n    \"hasNext\": true,\n    \"hasPrev\": false,\n    \"isFirst\": true,\n    \"isLast\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/01_list_users.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/teacher/v1/users",
    "title": "47. 강사 계정 - 회원목록",
    "description": "<p>강사 계정 로그인 시 회원 목록 <br/></p>",
    "version": "1.0.0",
    "name": "admin_listUsers_teacherPage",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/teacher/v1/users?today=false'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "boolean",
            "optional": false,
            "field": "today",
            "description": "<p>학생 구분 (전체: false / 오늘예약 : true)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "teacherId",
            "description": "<p>강사 강사식별키</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "search",
            "description": "<p>검색조건 [ALL:전체 , name: 이름, email:이메일 , company: 회사명, cellPhone: 전화번호]</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "keyword",
            "description": "<p>검색내용</p>"
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
            "field": "list.textbook",
            "description": "<p>교재</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.startTime",
            "description": "<p>수업시간(시작)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.endTime",
            "description": "<p>수업시간(종료)</p>"
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
            "field": "list.email",
            "description": "<p>회원이메일</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": \"M1723209450019027\",\n            \"name\": \"학생1\",\n            \"textbook\": \"교재11\",\n            \"startTime\": null,\n            \"endTime\": null,\n            \"teacherName\": null\n        },\n        {\n            \"id\": \"M1723209393285284\",\n            \"name\": \"학생1\",\n            \"textbook\": \"교재11\",\n            \"startTime\": null,\n            \"endTime\": null,\n            \"teacherName\": null\n        },\n        {\n            \"id\": \"M1723185874746952\",\n            \"name\": \"강사테스트\",\n            \"textbook\": null,\n            \"startTime\": null,\n            \"endTime\": null,\n            \"teacherName\": null\n        },\n        {\n            \"id\": \"M1723181199400889\",\n            \"name\": \"TEST이름\",\n            \"textbook\": null,\n            \"startTime\": null,\n            \"endTime\": null,\n            \"teacherName\": null\n        },\n        {\n            \"id\": \"M1723181139822358\",\n            \"name\": \"TEST이름\",\n            \"textbook\": null,\n            \"startTime\": null,\n            \"endTime\": null,\n            \"teacherName\": null\n        },\n        {\n            \"id\": \"M1723181061269819\",\n            \"name\": \"TEST이름\",\n            \"textbook\": null,\n            \"startTime\": null,\n            \"endTime\": null,\n            \"teacherName\": null\n        },\n        {\n            \"id\": \"M1723180727681590\",\n            \"name\": \"TEST이름\",\n            \"textbook\": null,\n            \"startTime\": null,\n            \"endTime\": null,\n            \"teacherName\": null\n        },\n        {\n            \"id\": \"M1723180073783614\",\n            \"name\": \"TEST이름\",\n            \"textbook\": null,\n            \"startTime\": null,\n            \"endTime\": null,\n            \"teacherName\": null\n        },\n        {\n            \"id\": \"M1723180046288196\",\n            \"name\": \"TEST이름\",\n            \"textbook\": null,\n            \"startTime\": null,\n            \"endTime\": null,\n            \"teacherName\": null\n        },\n        {\n            \"id\": \"M1723179793913079\",\n            \"name\": \"TEST이름\",\n            \"textbook\": null,\n            \"startTime\": null,\n            \"endTime\": null,\n            \"teacherName\": null\n        }\n    ],\n    \"totalCount\": 4921,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"endPage\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 493,\n    \"hasNext\": true,\n    \"isFirst\": true,\n    \"isLast\": false,\n    \"hasPrev\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/47_list_users_teacherPage.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/templates/excel/users",
    "title": "50. 회원 목록 엑셀",
    "description": "<p>회원관리 &gt; 회원 목록 엑셀다운로드<br/> 존재하지 않는 데이터들이 있어 기존 프로그램의 모든 필드 출력이 불가합니다.</p>",
    "version": "1.0.0",
    "name": "admin_listUsersexcel",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/templates/excel/users?createDateFrom=2023-01-01&createDateTo=2023-01-31&registerType=ALL&status=ALL&keyword=이&search=ALL'",
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
            "description": "<p>사용자 인지 직원인지 구분 (사용자:S , 직원: A)</p>"
          },
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
            "field": "search",
            "description": "<p>검색 선택 (ALL: 전체 , name: 이름, loginId: 아이디, email: 이메일, company: 회사/직장명, phone: 전화번호, cellPhone: 휴대전화번호)</p>"
          },
          {
            "group": "Query",
            "optional": true,
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>회원 식별키</p>"
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
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
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
            "field": "gender",
            "description": "<p>성별</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>유선전화</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cellPhone",
            "description": "<p>휴대폰번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isReceiveSms",
            "description": "<p>sms수신여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isReceiveEmail",
            "description": "<p>이메일수신여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "zipcode",
            "description": "<p>우편번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>주소1</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "detailedAddress",
            "description": "<p>주소2</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "isOfficeWorker",
            "description": "<p>직장인여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>직장/학교</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "position",
            "description": "<p>직책/학과</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "joinPath",
            "description": "<p>가입경로  SIGN(&quot;10&quot;), // 간판 <br/> ONLINE(&quot;20&quot;), // 온라인검색<br/> RECOMMEND(&quot;30&quot;), // 지인추천<br/> FAN(&quot;40&quot;), // 부채<br/> LEAFLET(&quot;50&quot;), // 3단리플릿<br/> SUBWAY(&quot;60&quot;), // 지하철광고<br/> ALLIANCE(&quot;70&quot;), // 기업제휴<br/> ETC(&quot;900&quot;), // 기타<br/></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "language",
            "description": "<p>학습희망</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "etcLanguage",
            "description": "<p>기타희망</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "languageSkill",
            "description": "<p>외국어실력</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>상태</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdOn",
            "description": "<p>등록일</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n[\n    {\n        \"id\": \"M1674731989462953\",\n        \"loginId\": \"skyx8957@icloud.com\",\n        \"email\": \"skyx8957@icloud.com\",\n        \"name\": \"RE:이윤재\",\n        \"nameEn\": null,\n        \"gender\": \"M\",\n        \"phone\": \"010-5020-0547\",\n        \"cellPhone\": \"syDqwywkULi+3CCo05xafg==\",\n        \"isReceiveSms\": true,\n        \"isReceiveEmail\": true,\n        \"zipcode\": null,\n        \"address\": null,\n        \"detailedAddress\": null,\n        \"isOfficeWorker\": true,\n        \"company\": \"한일프로텍\",\n        \"position\": null,\n        \"joinPath\": null,\n        \"language\": null,\n        \"etcLanguage\": null,\n        \"languageSkill\": \"SJPT:,HKC:,TOEIC:,TSC:,기타:,TOEIC-S:,OPIc:\",\n        \"active\": true,\n        \"createdOn\": \"2023-01-26\"\n    },\n    {\n        \"id\": \"M1675149143911667\",\n        \"loginId\": \"shlee@ktikorea.com\",\n        \"email\": \"99rokp@daum.net\",\n        \"name\": \"이상훈\",\n        \"nameEn\": null,\n        \"gender\": \"M\",\n        \"phone\": null,\n        \"cellPhone\": \"6XiAr/9E8Mng/vx0oErUkA==\",\n        \"isReceiveSms\": true,\n        \"isReceiveEmail\": true,\n        \"zipcode\": null,\n        \"address\": null,\n        \"detailedAddress\": null,\n        \"isOfficeWorker\": true,\n        \"company\": \"KTI Korea\",\n        \"position\": null,\n        \"joinPath\": \"SIGN\",\n        \"language\": null,\n        \"etcLanguage\": null,\n        \"languageSkill\": \"SJPT:,HKC:,TOEIC:,TSC:,기타:,TOEIC-S:,OPIc:\",\n        \"active\": true,\n        \"createdOn\": \"2023-01-31\"\n    },\n    {\n        \"id\": \"M1675165735705529\",\n        \"loginId\": \"mvpking1@naver.com\",\n        \"email\": \"mvpking1@naver.com\",\n        \"name\": \"이범관\",\n        \"nameEn\": null,\n        \"gender\": \"M\",\n        \"phone\": null,\n        \"cellPhone\": \"4RteJamYqYMKh7RwdSIPeg==\",\n        \"isReceiveSms\": true,\n        \"isReceiveEmail\": true,\n        \"zipcode\": null,\n        \"address\": null,\n        \"detailedAddress\": null,\n        \"isOfficeWorker\": true,\n        \"company\": \"직장인\",\n        \"position\": null,\n        \"joinPath\": \"RECOMMEND\",\n        \"language\": null,\n        \"etcLanguage\": null,\n        \"languageSkill\": \"SJPT:,HKC:,TOEIC:,TSC:,기타:,TOEIC-S:,OPIc:\",\n        \"active\": true,\n        \"createdOn\": \"2023-01-31\"\n    }\n]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/01_user/50_list_usersexcel.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "get",
    "url": "/admin/v1/users/{id}/levelTests",
    "title": "30. 레벨 테스트 목록",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt;  회원 상세 조회&gt; 테스트탭</p>",
    "version": "1.0.0",
    "name": "admin_list_LevelTest",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/30_list_user_levelTest.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}/levelTests/{testId}",
    "title": "33. 레벨테스트 수정",
    "description": "<p>회원관리 &gt; 회원 상세 조회 &gt; 테스트 탭<br/> id : 1028151  / testId: 6145 <br/> &quot;Content-Type&quot;은 파일이 있어서 &quot;multipart/form-data&quot;로 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_updateLevelTest",
    "group": "1._Admin_API_>_01._회원",
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
            "optional": true,
            "field": "testStartTime",
            "description": "<p>테스트일시(시작) (yyyy-mm-dd HH:mm)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "interviewer",
            "description": "<p>interviewer Interviewer</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "lbt",
            "description": "<p>LBT 테스트결과</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "rbt",
            "description": "<p>RBT 테스트결과</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "obt",
            "description": "<p>OBT</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "testIp",
            "description": "<p>TEST IP</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": true,
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
            "optional": true,
            "field": "note",
            "description": "<p>특이사항</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "purpose",
            "description": "<p>Purpose of Study</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": true,
            "field": "studyType",
            "description": "<p>What kind of English do you want to study and learn?<br/> [EC: English Conversation,<br/> BE: Business English ,TS:Toeic Speaking , I:Interview ,ETC: ETC]<br></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "studyTypeETC",
            "description": "<p>이유</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "familyBackground",
            "description": "<p>Family Background</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "usageType",
            "description": "<p>Company or School</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "occupation",
            "description": "<p>Occupation</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "spareTime",
            "description": "<p>Spare Time</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "travelAbroad",
            "description": "<p>Travel Abroad</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "futurePlans",
            "description": "<p>Future Plans</p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": true,
            "field": "consonants",
            "description": "<p>consonants <br/> [ R , L, P, F, B, V, S , Z, SH, EZH, CH, G, TTH, TH]<br/></p>"
          },
          {
            "group": "Body",
            "type": "String[]",
            "optional": true,
            "field": "vowels",
            "description": "<p>vowels [ 순서대로 &gt; A,B,C,D,E,F,G,H,I,J,K,L,M,N]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "clarity",
            "description": "<p>Clarity(10:hard to understand ,20:average ,30:easy to understand)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "intonation",
            "description": "<p>Intonation(10:very Korean ,20:a bit Korean,30:acceptable ,40:near native)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "vocabulary",
            "description": "<p>Vocabulary(10:very limited ,20:limited ,30:average ,40:above average ,50:extensive)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "verbsTense",
            "description": "<p>Verbs tense(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "agreement",
            "description": "<p>Agreement(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "prepositions",
            "description": "<p>Prepositions(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "articles",
            "description": "<p>Articles(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "plurals",
            "description": "<p>Plurals(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "others",
            "description": "<p>Others(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "strongPoint",
            "description": "<p>strongPoint</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "weakPoint",
            "description": "<p>weakPoint</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "comprehension",
            "description": "<p>Comprehension How much does learner understand<br/> (10:almost nothing ,20:some parts ,30:most parts ,40:almost everything ,50:everything)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "confidence",
            "description": "<p>Confidence(10:completely lacking ,20:lacking ,30:average ,40:above average,50:very confident)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "recommendedLevel",
            "description": "<p>Recommended Level [ R2:Pre// R3:300// R4:400//R5:500 //R6:600//R7:700://R8: 800//R9:900//ETC:ETC]</p>"
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
    "filename": "src/1_admin-api/01_user/33_update_user_levelTest.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/templates/1",
    "title": "46. 템플릿 수정",
    "description": "<p>회원관리 &gt; 회원 등록 / 수정 &gt; 특이사항</p>",
    "version": "1.0.0",
    "name": "admin_updateTemplate",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/templates/1' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"text\" : \"수정template3\",\n           \"description\" : \"수정test용3\"\n       }\"",
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
            "field": "text",
            "description": "<p>템플릿</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>템플릿에 대한 설명</p>"
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
    "filename": "src/1_admin-api/01_user/46_update_template.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}",
    "title": "21. 회원 수정",
    "description": "<p>회원관리 &gt; 기본 탭</p>",
    "version": "1.0.0",
    "name": "admin_updateUser",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/21_update_user.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}/consultations/{consultationId}",
    "title": "36. 회원 상담 수정",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 상담 탭</p>",
    "version": "1.0.0",
    "name": "admin_updateUserConsultation",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/36_update_user_consultation.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}/courses/{courseId}",
    "title": "13. 회원 수강 수정",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 수강 탭</p>",
    "version": "1.0.0",
    "name": "admin_updateUserCourse",
    "group": "1._Admin_API_>_01._회원",
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
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>상태 (WAITING: 대기, NORMAL: 정상, CANCEL: 취소)</p>"
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
    "filename": "src/1_admin-api/01_user/13_update_user_course.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/ldfs/{id}",
    "title": "49. ldf 수정",
    "description": "<p>강사 계정 로그인 : 회원목록 &gt; ldf탭 &gt; 수정<br/></p>",
    "version": "1.0.0",
    "name": "admin_updateUserLdf",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/users/ldfs/368396' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"lesson\":\"수정3lesson\",\n           \"contentSp\": \"수정3contentSp\",\n           \"contentV\": \"수정3contentV\",\n           \"contentSg\": \"수정3contentSg\",\n           \"contentC\": \"수정3contentC\"\n       }\"",
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
            "description": "<p>ldf 식별키(ldf 목록에 가지고 있는)</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "lesson",
            "description": "<p>Lesson</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "contentSp",
            "description": "<p>Stress and Pronunciation</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "contentV",
            "description": "<p>Vocabulary</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "contentSg",
            "description": "<p>Sentence Structure &amp; Grammar</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "contentC",
            "description": "<p>Comment</p>"
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
    "filename": "src/1_admin-api/01_user/49_update_user_ldf.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/notes/{id}",
    "title": "28. 비고 수정",
    "description": "<p>회원관리 &gt; 기본 탭 &gt; 예약 &gt; 예약등록 &gt; TIP</p>",
    "version": "1.0.0",
    "name": "admin_updateUserNote",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/28_update_user_notes.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}/orders/{orderId}/payments/{paymentId}",
    "title": "45. 회원 주문 결제 수정",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_updateUserOrderPayment",
    "group": "1._Admin_API_>_01._회원",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/users/M1722002661204896/orders/O1722163996604360/payments/P1722166085902400' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"modifiedBy\": \"U1370839971594082\",\n    \"cardCompany\": \"NH\",\n    \"cardNumber\": \"11111\",\n    \"installmentMonths\": null,\n    \"approvalNumber\": \"22222\"\n}\"",
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
          },
          {
            "group": "Path",
            "type": "String",
            "optional": false,
            "field": "paymentId",
            "description": "<p>결제 식별키</p>"
          }
        ],
        "Body": [
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "modifiedBy",
            "description": "<p>처리자 식벌키 (처리자는 '01. 공통 옵션 목록 조회'에서 조회할 수 있습니다.)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "cardCompany",
            "description": "<p>카드종류 (카드종류는 '01. 공통 옵션 목록 조회'에서 조회할 수 있습니다.)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "cardNumber",
            "description": "<p>카드번호</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "installmentMonths",
            "description": "<p>할개월수 (숫자만, 0 또는 null: 일시불)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "approvalNumber",
            "description": "<p>승인번호</p>"
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
    "filename": "src/1_admin-api/01_user/45_update_user_payment.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}/reservations/{reservationId}",
    "title": "16. 회원 예약 수정(학사보고서)",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 학습 탭 &gt; 학사보고서 등록/수정</p>",
    "version": "1.0.0",
    "name": "admin_updateUserReservation",
    "group": "1._Admin_API_>_01._회원",
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
    "filename": "src/1_admin-api/01_user/16_update_user_reservation.js",
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "put",
    "url": "/admin/v1/users/{id}/reservations",
    "title": "06. 회원 예약 수정(취소)",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 예약 탭 &gt; 예약 체크 후 예약 취소</p>",
    "version": "1.0.0",
    "name": "admin_updateUserReservations",
    "group": "1._Admin_API_>_01._회원",
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
    "groupTitle": "1._Admin_API_>_01._회원"
  },
  {
    "type": "post",
    "url": "api/admin/v1/products",
    "title": "05. 상품 등록",
    "description": "<p>상품관리 &gt; 상품등록</p>",
    "version": "1.0.0",
    "name": "admin_createUserOrderRefund",
    "group": "1._Admin_API_>_02._상품",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/api/admin/v1/products' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"name\":\"테스트상품\",\n           \"curriculumYN\":\"Y\",\n           \"price\":60000\n       }\"",
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
            "field": "curriculumYN",
            "description": "<p>과정여부 (Y:과정 , N:이외)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>상품명</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
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
    "filename": "src/1_admin-api/02_product/05_create_products.js",
    "groupTitle": "1._Admin_API_>_02._상품"
  },
  {
    "type": "delete",
    "url": "/admin/v1/products/{id}",
    "title": "09. 상품 삭제",
    "description": "<p>상품관리 &gt; 삭제</p>",
    "version": "1.0.0",
    "name": "admin_deleteProduct",
    "group": "1._Admin_API_>_02._상품",
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
            "description": "<p>상품 식별키</p>"
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
    "filename": "src/1_admin-api/02_product/09_delete_product.js",
    "groupTitle": "1._Admin_API_>_02._상품"
  },
  {
    "type": "get",
    "url": "/admin/v1/products/{id}",
    "title": "07. 상품 상세 조회",
    "description": "<p>상품관리 &gt; 상품 조회</p>",
    "version": "1.0.0",
    "name": "admin_getUserProduct",
    "group": "1._Admin_API_>_02._상품",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/products/P1722476566849400'",
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
            "description": "<p>상품 식별키</p>"
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
            "description": "<p>상품 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "curriculumYN",
            "description": "<p>과정(수강)여부 체크</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>상품명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "quantityUnit",
            "description": "<p>수량(단위)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": \"P1722478832696425\",\n    \"type\": \"TEXTBOOK\",\n    \"language\": \"영어\",\n    \"lessonType\": \"PT\",\n    \"name\": \"패키지1\",\n    \"price\": 13000,\n    \"quantityUnit\": \"개\",\n    \"options\": [\n        \"SILVER\",\n        \"SILVER\"\n    ],\n    \"sort\": 82\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/02_product/07_get_product.js",
    "groupTitle": "1._Admin_API_>_02._상품"
  },
  {
    "type": "get",
    "url": "/admin/v1/products/languages",
    "title": "02. 상품 언어 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_listProductLanguages",
    "group": "1._Admin_API_>_02._상품",
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
    "groupTitle": "1._Admin_API_>_02._상품"
  },
  {
    "type": "get",
    "url": "/admin/v1/products/lessonTypes",
    "title": "03. 상품 수업 유형 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_listProductLessonTypes",
    "group": "1._Admin_API_>_02._상품",
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
    "groupTitle": "1._Admin_API_>_02._상품"
  },
  {
    "type": "get",
    "url": "/admin/v1/products/types",
    "title": "01. 상품 유형 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_listProductTypes",
    "group": "1._Admin_API_>_02._상품",
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
    "groupTitle": "1._Admin_API_>_02._상품"
  },
  {
    "type": "get",
    "url": "/admin/v1/products",
    "title": "04. 상품 목록 조회",
    "description": "<p>회원관리 &gt; 회원 목록 조회 &gt; 주문 탭</p>",
    "version": "1.0.0",
    "name": "admin_listProducts",
    "group": "1._Admin_API_>_02._상품",
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
    "groupTitle": "1._Admin_API_>_02._상품"
  },
  {
    "type": "get",
    "url": "/admin/v1/products/list",
    "title": "08. 홈페이지관리 > 상품목록조회",
    "description": "<p>주문관리 &gt; 상품 목록 조회</p>",
    "version": "1.0.0",
    "name": "admin_listProducts_management",
    "group": "1._Admin_API_>_02._상품",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/products/list'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>상품 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>상품명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>상품 가격</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "curriculumYN",
            "description": "<p>과정여부 (Y:과정 , N:이외)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n[\n    {\n        \"id\": \"P1722559046496207\",\n        \"name\": null,\n        \"price\": 0,\n        \"curriculumYN\": \"Y\"\n    },\n    {\n        \"id\": \"P1722558926239420\",\n        \"name\": null,\n        \"price\": 0,\n        \"curriculumYN\": \"N\"\n    },\n\n\n\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/02_product/08_list_manage_products.js",
    "groupTitle": "1._Admin_API_>_02._상품"
  },
  {
    "type": "put",
    "url": "/admin/v1/products/{id}",
    "title": "06. 상품 수정",
    "description": "<p>상품관리 &gt; 수정</p>",
    "version": "1.0.0",
    "name": "admin_updateUserOrderProduct",
    "group": "1._Admin_API_>_02._상품",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/products/P1722475920322505' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n                  \"name\":\"테스트상품\",\n                  \"curriculumYN\":\"Y\",\n                  \"price\":60000\n              }\"",
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
            "field": "curriculumYN",
            "description": "<p>과정여부 (Y:과정 , N:이외)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>상품명</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
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
    "filename": "src/1_admin-api/02_product/06_update_products.js",
    "groupTitle": "1._Admin_API_>_02._상품"
  },
  {
    "type": "get",
    "url": "/admin/v1/reservations/report/{reservationId}",
    "title": "02. 학사보고서조회",
    "description": "<p>회원관리 &gt; 학사보고서<br/> 회원관리 &gt; 학사보고서 &gt; 수정/등록 시 사용</p>",
    "version": "1.0.0",
    "name": "admin_getReport",
    "group": "1._Admin_API_>_03._학사보고서",
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
            "field": "content",
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
          "content": "HTTP/1.1 200\n{\n    \"id\": 1317329,\n    \"date\": \"2018-01-03 (Wed)\",\n    \"startTime\": \"07:30\",\n    \"endTime\": \"08:00\",\n    \"attendanceStatus\": \"Y\",\n    \"content\": \"중간\",\n    \"todayLesson\": \"처음\",\n    \"nextLesson\": \"마지막\",\n    \"userName\": \"전연호\",\n    \"courseName\": \"PTM (주2회 6개월)\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/03_report/02_get_report.js",
    "groupTitle": "1._Admin_API_>_03._학사보고서"
  },
  {
    "type": "put",
    "url": "/admin/v1/reservations/report/{reservationId}",
    "title": "03. 학사보고서 수정/등록",
    "description": "<p>회원관리 &gt; 학사보고서 <br/> 강의시간표 조회 시 회원의 출결 상태 (출석,결석,출결 취소)를 바꿀 때 사용.</p>",
    "version": "1.0.0",
    "name": "admin_updateReport",
    "group": "1._Admin_API_>_03._학사보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/reservations/report/1317329'\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"attendanceStatus\" :\"Y\",\n           \"content\" : \"중간\",\n           \"todayLesson\": \"처음\",\n           \"nextLesson\":\"마지막\"\n       }\"",
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
            "optional": true,
            "field": "todayLesson",
            "description": "<p>Today's Lesson</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>보고서(Lesson Content and Feedback)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
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
    "groupTitle": "1._Admin_API_>_03._학사보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/reservations/noreport",
    "title": "05. 학사보고서 미작성 목록 조회",
    "description": "<p>회원관리 &gt; 학사보고서 &gt; 학사보고서 미작성 목록<br/> 운영자 계정 : 회원관리 &gt; 학사보고서 <br/> 강사 계정 : 학사보고서 <br/></p>",
    "version": "1.0.0",
    "name": "listNoReport",
    "group": "1._Admin_API_>_03._학사보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/reservation/noreport?yearMonth=2023-01'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "yearMonth",
            "description": "<p>년월(yyyy-MM)</p>"
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
            "field": "reports",
            "description": "<p>학사 보고서 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.teacherId",
            "description": "<p>강사 식별키(예약식별키)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.name",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.total",
            "description": "<p>전체 건수</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reports.noReports",
            "description": "<p>날짜별 미작성 리스트</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.noReports.date",
            "description": "<p>날짜</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.noReports.count",
            "description": "<p>건수</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.noReports.holiday",
            "description": "<p>요일</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "totals",
            "description": "<p>합</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totals.total",
            "description": "<p>합</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "totals.noReports",
            "description": "<p>미작성 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totals.noReports.date",
            "description": "<p>날짜</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totals.noReports.count",
            "description": "<p>건수</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "totals.noReports.holiday",
            "description": "<p>요일</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n {\n  \"reports\": [\n    {\n      \"teacherId\": \"M1729308976238224\",\n      \"name\": \"테스트강사\",\n      \"total\": 0,\n      \"noReports\": [\n        {\"date\": \"2024-10-01\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-02\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-03\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-04\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-05\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-06\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-07\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-08\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-09\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-10\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-11\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-12\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-13\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-14\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-15\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-16\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-17\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-18\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-19\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-20\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-21\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-22\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-23\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-24\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-25\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-26\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-27\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-28\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-29\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-30\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-31\", \"count\": 0, \"holiday\": 0}\n      ]\n    }\n  ],\n  \"totals\": [\n    {\n      \"total\": 0,\n      \"noReports\": [\n        {\"date\": \"2024-10-01\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-02\", \"count\": 1, \"holiday\": 0},\n        {\"date\": \"2024-10-03\", \"count\": 3, \"holiday\": 1},\n        {\"date\": \"2024-10-04\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-05\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-06\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-07\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-08\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-09\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-10\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-11\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-12\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-13\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-14\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-15\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-16\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-17\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-18\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-19\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-20\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-21\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-22\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-23\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-24\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-25\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-26\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-27\", \"count\": 0, \"holiday\": 1},\n        {\"date\": \"2024-10-28\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-29\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-30\", \"count\": 0, \"holiday\": 0},\n        {\"date\": \"2024-10-31\", \"count\": 0, \"holiday\": 0}\n      ]\n    }\n  ],\n  \"teachers\": [\n    {\"id\": \"M1729308976238224\", \"name\": \"테스트강사\"},\n    {\"id\": \"M1400118325784523\", \"name\": \"한가영\"},\n    {\"id\": \"M1729240753428900\", \"name\": \"박수현\"},\n    {\"id\": \"M1594795852631377\", \"name\": \"Steven\"},\n    {\"id\": \"M1695013438115743\", \"name\": \"서안나\"},\n    {\"id\": \"M1657064932771055\", \"name\": \"김나래\"},\n    {\"id\": \"M1661138591404520\", \"name\": \"최태연\"},\n    {\"id\": \"M1681990831501448\", \"name\": \"정지은\"},\n    {\"id\": \"M1713239402907750\", \"name\": \"박제은\"},\n    {\"id\": \"M1698204875465368\", \"name\": \"Olivia\"},\n    {\"id\": \"M1691559227102239\", \"name\": \"Sadie\"},\n    {\"id\": \"M1709859614116619\", \"name\": \"Austin\"}\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/03_report/05_list_no_report.js",
    "groupTitle": "1._Admin_API_>_03._학사보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/reservations/report",
    "title": "01. 학사보고서 목록 조회",
    "description": "<p>회원관리 &gt; 학사보고서<br/> 운영자 계정 : 회원관리 &gt; 학사보고서 <br/> 강사 계정 : 학사보고서 <br/> 계정에 동일한 api를 사용하기 위해 userType 추가했습니다. 강사 계정 페이지 조회 시 사용할 api는 userType=T 필수값입니다.</p>",
    "version": "1.0.0",
    "name": "listReport",
    "group": "1._Admin_API_>_03._학사보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/reservations/report?dateFrom=2024-01-01&dateTo=2024-01-31&reportCondition=REPORT'",
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
            "optional": true,
            "field": "teacherId",
            "description": "<p>강사식별키</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "search",
            "description": "<p>검색 선택(이름)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "keyword",
            "description": "<p>검색어</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "reportCondition",
            "description": "<p>검색조건 (ALL: 전체, COMPLETED: 출석, PENDING: 미작성)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "userType",
            "description": "<p>계정구분 (강사:T , 운영자: A)</p>"
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
            "description": "<p>정렬 선택 (정렬순서 강사우선 or 강사 : teacher / 정렬순서 시간우선 or 수강시간: date / 회원명: name , 과정:courseName ,<br/> 잔여횟수: remainingCount , 예약횟수: assignmentCount , lessonCount: 수강회차)</p>"
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
            "field": "list.content",
            "description": "<p>학사보고서(null일시 등록버튼 / 예약식별키일시 수정버튼)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.todayLesson",
            "description": "<p>today lesson</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.nextLesson",
            "description": "<p>next lesson</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 2624692,\n            \"date\": \"2024-01-31 (Wed)\",\n            \"startTime\": \"21:30\",\n            \"endTime\": \"22:00\",\n            \"teacherName\": \"한가영\",\n            \"userName\": \"조아라\",\n            \"courseName\": \"NEW PT 24회 3개월\",\n            \"lessonCount\": 26.0,\n            \"remainCount\": 5.0,\n            \"assignmentCount\": 21.0,\n            \"attendanceStatus\": \"예약\",\n            \"content\": null,\n            \"todayLesson\": null,\n            \"nextLesson\": null\n        }\n    ],\n    \"totalCount\": 1055,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"totalPage\": 106,\n    \"startPage\": 1,\n    \"endPage\": 10,\n    \"hasNext\": true,\n    \"isFirst\": true,\n    \"isLast\": false,\n    \"hasPrev\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/03_report/01_list_report.js",
    "groupTitle": "1._Admin_API_>_03._학사보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/templates/excel/report",
    "title": "04. 학사보고서 엑셀",
    "description": "<p>회원관리 &gt; 학사보고서 &gt; 엑셀 다운로드 시 필요한 학사보고서 목록<br/> 운영자 계정 : 회원관리 &gt; 학사보고서 <br/> 강사 계정 : 학사보고서 <br/> 계정에 동일한 api를 사용하기 위해 userType 추가했습니다. 강사 계정 페이지 조회 시 사용할 api는 userType=T 필수값입니다.<br/></p>",
    "version": "1.0.0",
    "name": "listReportexcel",
    "group": "1._Admin_API_>_03._학사보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/templates/excel/report?dateFrom=2023-01-01&dateTo=2023-01-31&userType=A&keyword=김보경'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": true,
            "field": "dateFrom",
            "description": "<p>가입일자 검색 ~부터 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "dateTo",
            "description": "<p>가입일자 검색 ~까지 (yyyy-mm-dd)</p>"
          },
          {
            "group": "Query",
            "optional": true,
            "field": "teacherId",
            "description": "<p>강사식별키</p>"
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
            "field": "reportCondition",
            "description": "<p>검색조건 (ALL: 전체, ATTENDANCE: 출석, REPORT: 미작성)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "userType",
            "description": "<p>계정구분 (강사:T , 운영자: A)</p>"
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
            "description": "<p>(예약식별키 no)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>수강시간(날짜)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>수강시간(시작)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>수강시간(종료)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>회원명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cellPhone",
            "description": "<p>휴대폰번호번호</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "lessonCount",
            "description": "<p>수강회차</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "remainCount",
            "description": "<p>잔여회차</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "assignmentCount",
            "description": "<p>출석회차</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendanceStatus",
            "description": "<p>출석여부(출석, 결석, 예약)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>content학사보고서내용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "todayLesson",
            "description": "<p>todayLesson</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nextLesson",
            "description": "<p>nextLesson</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n    {\n        \"no\": 2408099,\n        \"date\": \"2023-01-03\",\n        \"startTime\": \"16:30:00\",\n        \"endTime\": \"17:00:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2408100,\n        \"date\": \"2023-01-03\",\n        \"startTime\": \"17:00:00\",\n        \"endTime\": \"17:30:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2397062,\n        \"date\": \"2023-01-10\",\n        \"startTime\": \"13:00:00\",\n        \"endTime\": \"13:30:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2397063,\n        \"date\": \"2023-01-10\",\n        \"startTime\": \"13:30:00\",\n        \"endTime\": \"14:00:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2397070,\n        \"date\": \"2023-01-13\",\n        \"startTime\": \"13:00:00\",\n        \"endTime\": \"13:30:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2397071,\n        \"date\": \"2023-01-13\",\n        \"startTime\": \"13:30:00\",\n        \"endTime\": \"14:00:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2397064,\n        \"date\": \"2023-01-17\",\n        \"startTime\": \"13:00:00\",\n        \"endTime\": \"13:30:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2397065,\n        \"date\": \"2023-01-17\",\n        \"startTime\": \"13:30:00\",\n        \"endTime\": \"14:00:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2397072,\n        \"date\": \"2023-01-20\",\n        \"startTime\": \"13:00:00\",\n        \"endTime\": \"13:30:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2397073,\n        \"date\": \"2023-01-20\",\n        \"startTime\": \"13:30:00\",\n        \"endTime\": \"14:00:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2397074,\n        \"date\": \"2023-01-27\",\n        \"startTime\": \"13:00:00\",\n        \"endTime\": \"13:30:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2397075,\n        \"date\": \"2023-01-27\",\n        \"startTime\": \"13:30:00\",\n        \"endTime\": \"14:00:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2397066,\n        \"date\": \"2023-01-31\",\n        \"startTime\": \"13:00:00\",\n        \"endTime\": \"13:30:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    },\n    {\n        \"no\": 2397067,\n        \"date\": \"2023-01-31\",\n        \"startTime\": \"13:30:00\",\n        \"endTime\": \"14:00:00\",\n        \"attendanceStatus\": \"Y\",\n        \"content\": null,\n        \"todayLesson\": null,\n        \"nextLesson\": null,\n        \"userName\": \"김보경\",\n        \"cellPhone\": \"xZ95fw2jfA26BoRQut0mRw==\",\n        \"lessoncount\": 24.0,\n        \"assignedLessonCount\": 24.0,\n        \"remainingLessonCount\": 0.0\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/03_report/04_list_excel_report.js",
    "groupTitle": "1._Admin_API_>_03._학사보고서"
  },
  {
    "type": "post",
    "url": "/admin/v1/consultations",
    "title": "09. 상담 관리 등록",
    "description": "<p>회원관리 &gt; 상담관리 &gt; 상담등록 <br/> &quot;Content-Type&quot;은 파일이 있어서 &quot;multipart/form-data&quot;로 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_createConsultation",
    "group": "1._Admin_API_>_04._상담관리",
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
            "optional": true,
            "field": "gender",
            "description": "<p>성별 ( M: 남성,  F:여성 )</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "callTime",
            "description": "<p>통화 가능 시간 [  TIME_01, // 06:30~08:00<br/> TIME_02, // 08:00~10:00<br/> TIME_03, // 10:00~12:00<br/> TIME_04, // 12:00~14:00<br/> TIME_05, // 14:00~16:00<br/> TIME_06, // 16:00~18:00<br/> TIME_07, // 18:00~20:00<br/> TIME_08, // 20:00~21:00<br/> TIME_09,]<br/></p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
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
            "optional": true,
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
            "optional": true,
            "field": "foundPathNote",
            "description": "<p>알게된 동기 이유</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "job",
            "description": "<p>직업</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "company",
            "description": "<p>회사명</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "consultationDate",
            "description": "<p>상담일(yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "visitDate",
            "description": "<p>방문일(yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "details",
            "description": "<p>상담내용</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": true,
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
    "groupTitle": "1._Admin_API_>_04._상담관리"
  },
  {
    "type": "post",
    "url": "/admin/v1/consultations/{id}/users",
    "title": "02. 상담 회원 등록",
    "description": "<p>회원관리 &gt; 상담관리 &gt; 회원등록 <br/> test id : 14890 , 14967 , 15001 , 15209</p>",
    "version": "1.0.0",
    "name": "admin_createConsultationUser",
    "group": "1._Admin_API_>_04._상담관리",
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
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>사용자 인지 직원인지 구분 (사용자:S , 직원: A)</p>"
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
    "groupTitle": "1._Admin_API_>_04._상담관리"
  },
  {
    "type": "post",
    "url": "/admin/v1/consultations/history/{id}",
    "title": "06. 추가 상담 등록",
    "description": "<p>상담관리 &gt; 상세페이지조회 &gt; 추가 상담 이력 <br/> 상세 페이지 누를 시 상담 식별키 넘겨 받음-&gt; 식별키 가지고 추가 상담 이력 출력</p>",
    "version": "1.0.0",
    "name": "admin_createUserConsultation",
    "group": "1._Admin_API_>_04._상담관리",
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
    "groupTitle": "1._Admin_API_>_04._상담관리"
  },
  {
    "type": "delete",
    "url": "api/admin/v1/consultations/{id}",
    "title": "05. 상담관리 기본정보 삭제",
    "description": "<p>상담관리 &gt; 상세조회 &gt; 삭제</p>",
    "version": "1.0.0",
    "name": "admin_deleteConsultation",
    "group": "1._Admin_API_>_04._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/consultations/634'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": false,
            "field": "id",
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
    "groupTitle": "1._Admin_API_>_04._상담관리"
  },
  {
    "type": "delete",
    "url": "/admin/v1/consultations/history/{id}",
    "title": "07. 추가 상담 삭제",
    "description": "<p>상담관리 &gt; 상세조회 페이지</p>",
    "version": "1.0.0",
    "name": "admin_deleteConsultationHistory",
    "group": "1._Admin_API_>_04._상담관리",
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
    "groupTitle": "1._Admin_API_>_04._상담관리"
  },
  {
    "type": "get",
    "url": "/admin/v1/consultations/{id}",
    "title": "03. 상담고객 상세조회",
    "description": "<p>수정/삭제 시 사용<br/></p>",
    "version": "1.0.0",
    "name": "admin_getOptions",
    "group": "1._Admin_API_>_04._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/consultations/26268'",
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>상담 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "institutionId",
            "description": "<p>추천인 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "consultationDate",
            "description": "<p>상담일(yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>성명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>성별 남:&quot;M&quot;,여:&quot;F&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "job",
            "description": "<p>직업</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>회사명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cellPhone",
            "description": "<p>핸드폰번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "foundPath",
            "description": "<p>알게된 동기<br/> SIGN, // 간판<br/> ONLINE, // 온라인검색<br/> RECOMMEND, // 지인추천<br/> FAN, // 부채<br/> LEAFLET, // 3단리플릿<br/> SUBWAY, // 지하철광고<br/> ALLIANCE, // 기업제휴<br/> ETC, // 기타<br/></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "foundPathNote",
            "description": "<p>알게된 동기 설명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "visitDate",
            "description": "<p>방문일자(yyyy-MM-dd HH:mm:ss)</p>"
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
            "field": "isMember",
            "description": "<p>회원여부</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>상담구분 [  P, // 전화상담<br> V, // 방문상담<br> K, // 카카오채널<br> N, // 네이버예약<br> F, // 온라인상담<br> L, // 무료레벨테스트]</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "studyPurposes",
            "description": "<p>공부목적[  COMMON_ENGLISH, // 생활영어<br/> WORK, //업무<br/> STUDY_ABROAD, // 유학<br/> DEVELOPMENT // 자기개<br/> EMPLOYMENT // 취업<br/> ETC // 기타]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "callTime",
            "description": "<p>통화가능시간 [  TIME_01, // 06:30~08:00<br/> TIME_02, // 08:00~10:00<br/> TIME_03, // 10:00~12:00<br/> TIME_04, // 12:00~14:00<br/> TIME_05, // 14:00~16:00<br/> TIME_06, // 16:00~18:00<br/> TIME_07, // 18:00~20:00<br/> TIME_08, // 20:00~21:00<br/> TIME_09 // 기타]<br/></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>처리상태 (3:대기중, 4:컨택금지, 5:미방문(통화완료), 6:예약완료,<br/> 7:미등록(상담완료), 8:등록완료, 9:NoShow, 10:부재중)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>서버에 저장된 파일명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "originalFile",
            "description": "<p>파일명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "fileUrl",
            "description": "<p>파일URL</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>등록한사람ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modifiedBy",
            "description": "<p>수정한사람ID [yyyy-MM-dd HH:mm:ss]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "modifiedOn",
            "description": "<p>수정일 [yyyy-MM-dd HH:mm:ss]</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"id\": 26268,\n    \"consultationDate\": \"2023-07-18 00:00:00\",\n    \"name\": \"John Doe\",\n    \"gender\": \"M\",\n    \"job\": \"Engineer\",\n    \"company\": \"ABC Corp\",\n    \"phone\": \"123456789\",\n    \"cellPhone\": \"22222222\",\n    \"foundPathNote\": \"Online search\",\n    \"visitDate\": \"2023-07-18 00:00:00\",\n    \"details\": \"Consultation details\",\n    \"isMember\": \"N\",\n    \"type\": \"P\",\n    \"studyPurposes\": [\n        \"COMMON_ENGLISH\"\n    ],\n    \"etcStudyPurpose\": null,\n    \"email\": \"john.doe@example.com\",\n    \"status\": \"3\",\n    \"file\": \"1721556949596_수정hello.txt\",\n    \"originalFile\": \"수정hello.txt\",\n    \"fileUrl\": \"http://localhost:8080/file/download/1721556949596_수정hello.txt/수정hello.txt\",\n    \"createdBy\": \"U1675406451584692\",\n    \"createdOn\": \"2023-12-29 21:48:08\",\n    \"modifiedBy\": \"U1658468539178711\",\n    \"modifiedOn\": \"2024-07-22 16:40:00\",\n    \"joinPath\": \"ALLIANCE\",\n    \"callTime\": \"TIME_02\",\n    \"modifiedName\": \"박수현\",\n    \"createdName\": \"박지수\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/04_consultation/03_get_consultation.js",
    "groupTitle": "1._Admin_API_>_04._상담관리"
  },
  {
    "type": "post",
    "url": "/admin/v1/consultations/cellpnone",
    "title": "10. 연락처 중복 체크",
    "description": "<p>상세조회,등록,수정 시 사용<br/> 중복된 연락처 확인을 위해서는 {&quot;cellPhone&quot; : &quot;020-3333-3333&quot;} 사용해주세요</p>",
    "version": "1.0.0",
    "name": "admin_getValCellphone",
    "group": "1._Admin_API_>_04._상담관리",
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
            "optional": false,
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
    "groupTitle": "1._Admin_API_>_04._상담관리"
  },
  {
    "type": "get",
    "url": "/admin/v1/consultations/history/{id}",
    "title": "08. 추가 상담 목록",
    "description": "<p>상담관리 &gt; 상세페이지 조회 &gt; 추가 상담 이력 <br/> 상세 페이지 들어올 때 상담 식별키 가져옴</p>",
    "version": "1.0.0",
    "name": "admin_listUserNotes",
    "group": "1._Admin_API_>_04._상담관리",
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
            "field": "date",
            "description": "<p>날짜</p>"
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
    "groupTitle": "1._Admin_API_>_04._상담관리"
  },
  {
    "type": "put",
    "url": "/admin/v1/consultations/{id}",
    "title": "04. 상담 관리 기본 정보 수정",
    "description": "<p>상담관리 &gt; 상세관리수정 <br/> &quot;Content-Type&quot;은 파일이 있어서 &quot;multipart/form-data&quot;로 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_updateConsultation",
    "group": "1._Admin_API_>_04._상담관리",
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
            "description": "<p>(3:대기중, 4:컨택금지, 5:미방문(통화완료), 6:예약완료,<br/> 7:미등록(상담완료), 8:등록완료, 9:NoShow, 10:부재중)</p>"
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
    "groupTitle": "1._Admin_API_>_04._상담관리"
  },
  {
    "type": "get",
    "url": "/admin/v1/consultations",
    "title": "01. 상담관리 > 상담고객목록",
    "description": "<p>회원관리 &gt; 상담관리 &gt; 상담고객<br/> 모든 파라미터는 안넘기면 전체<br/> 파마미터의 [전체] checkbox 선택 시 나머지 checkbox 선택 제거</p>",
    "version": "1.0.0",
    "name": "all_consultation",
    "group": "1._Admin_API_>_04._상담관리",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/consultations?status=4",
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
            "field": "createDateFrom",
            "description": "<p>등록일(시작) (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "createDateTo",
            "description": "<p>등록일(끝) (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "visitDateFrom",
            "description": "<p>방문예약일(시작) (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
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
            "description": "<p>처리상태  (3:대기중, 4:컨택금지, 5:미방문(통화완료), 6:예약완료,<br/> 7:미등록(상담완료), 8:등록완료, 9:NoShow, 10:부재중)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>검색구분( name:이름, phone: 전화번호 , details :상담내용)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
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
          },
          {
            "group": "Query",
            "optional": true,
            "field": "order",
            "description": "<p>정렬 선택(상담구분: type , 처리상태: status , 성명: name , 전화번호: cellPhone , 직장: company ,<br/> 통화가능시간: callTime , 방문예약:visitDate , 등록일시:createdBy , 상담직원:modifiedBy , 상담내용: details)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "list.status",
            "description": "<p>처리상태 (3:대기중, 4:컨택금지, 5:미방문(통화완료), 6:예약완료,<br/> 7:미등록(상담완료), 8:등록완료, 9:NoShow, 10:부재중)</p>"
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
            "description": "<p>회사</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.job",
            "description": "<p>직업</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.callTime",
            "description": "<p>통화시간 TIME_01 // 06:30~08:00 <br/> TIME_02 // 08:00~10:00 <br/> TIME_03 // 10:00~12:00<br/> TIME_04 // 12:00~14:00<br/> TIME_05 // 14:00~16:00<br/> TIME_06 // 16:00~18:00<br/> TIME_07 // 18:00~20:00<br/> TIME_08, // 20:00~21:00<br/> TIME_09, // 기타</p>"
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
            "field": "list.smsList.senderPhone",
            "description": "<p>보내는 사람 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.smsList.senderName",
            "description": "<p>보내는 사람 이름</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"listNumber\": 42,\n            \"id\": 26306,\n            \"type\": \"P\",\n            \"status\": \"4\",\n            \"name\": \"test이름1\",\n            \"cellPhone\": \"3\",\n            \"company\": \"ABC Corp\",\n            \"callTime\": \"40\",\n            \"visitDate\": \"2021-12-12 00:00:00\",\n            \"consultationDate\": \"2021-12-12 00:00:00\",\n            \"creatorName\": null,\n            \"details\": \"11\",\n            \"smsList\": [\n                {\n                    \"content\": \"문자메세지\",\n                    \"smsId\": \"5\",\n                    \"recipientPhone\": \"3\",\n                    \"recipientName\": \"김대한4\",\n                    \"senderPhone\": \"123-456-7899\",\n                    \"senderName\": \"고길동\",\n                    \"sendDate\": \"2012-12-26 00:00:00\",\n                    \"status\": \"SUCCESS\"\n                },\n                {\n                    \"content\": \"문자메세지\",\n                    \"smsId\": \"5\",\n                    \"recipientPhone\": \"3\",\n                    \"recipientName\": \"김대한3\",\n                    \"senderPhone\": \"123-456-7899\",\n                    \"senderName\": \"고길동\",\n                    \"sendDate\": \"2012-12-25 00:00:00\",\n                    \"status\": \"SUCCESS\"\n                },\n                {\n                    \"content\": \"문자메세지\",\n                    \"smsId\": \"5\",\n                    \"recipientPhone\": \"3\",\n                    \"recipientName\": \"김대한2\",\n                    \"senderPhone\": \"123-456-7899\",\n                    \"senderName\": \"고길동\",\n                    \"sendDate\": \"2012-12-23 00:00:00\",\n                    \"status\": \"SUCCESS\"\n                }\n            ]\n        },\n        {\n            \"listNumber\": 41,\n            \"id\": 26305,\n            \"type\": \"P\",\n            \"status\": \"4\",\n            \"name\": \"test이름1\",\n            \"cellPhone\": \"010-1111-1111\",\n            \"company\": \"ABC Corp\",\n            \"callTime\": \"40\",\n            \"visitDate\": null,\n            \"consultationDate\": null,\n            \"creatorName\": null,\n            \"details\": \"123\",\n            \"smsList\": []\n        },\n        {\n            \"listNumber\": 40,\n            \"id\": 26304,\n            \"type\": \"P\",\n            \"status\": \"4\",\n            \"name\": \"test이름1\",\n            \"cellPhone\": \"010-1111-1111\",\n            \"company\": \"ABC Corp\",\n            \"callTime\": \"40\",\n            \"visitDate\": null,\n            \"consultationDate\": null,\n            \"creatorName\": null,\n            \"details\": \"test내용2\",\n            \"smsList\": []\n        },\n        {\n            \"listNumber\": 39,\n            \"id\": 26303,\n            \"type\": \"P\",\n            \"status\": \"4\",\n            \"name\": \"test이름\",\n            \"cellPhone\": \"010-1111-1111\",\n            \"company\": \"ABC Corp\",\n            \"callTime\": \"40\",\n            \"visitDate\": null,\n            \"consultationDate\": null,\n            \"creatorName\": null,\n            \"details\": \"test내용2\",\n            \"smsList\": []\n        },\n        {\n            \"listNumber\": 38,\n            \"id\": 26300,\n            \"type\": \"P\",\n            \"status\": \"4\",\n            \"name\": \"test이름2\",\n            \"cellPhone\": \"010-1111-1111\",\n            \"company\": \"ABC Corp\",\n            \"callTime\": \"40\",\n            \"visitDate\": \"2021-12-12 12:12:12\",\n            \"consultationDate\": \"2021-12-12 12:12:12\",\n            \"creatorName\": null,\n            \"details\": \"test내용2\",\n            \"smsList\": []\n        },\n        {\n            \"listNumber\": 37,\n            \"id\": 26299,\n            \"type\": \"P\",\n            \"status\": \"4\",\n            \"name\": \"test이름1\",\n            \"cellPhone\": \"010-1111-1111\",\n            \"company\": \"ABC Corp\",\n            \"callTime\": \"40\",\n            \"visitDate\": \"2021-12-12 12:12:12\",\n            \"consultationDate\": \"2021-12-12 12:12:12\",\n            \"creatorName\": null,\n            \"details\": \"test내용2\",\n            \"smsList\": []\n        },\n        {\n            \"listNumber\": 36,\n            \"id\": 26297,\n            \"type\": \"P\",\n            \"status\": \"4\",\n            \"name\": \"test이름4\",\n            \"cellPhone\": \"010-1111-1113\",\n            \"company\": \"ABC Corp\",\n            \"callTime\": \"40\",\n            \"visitDate\": \"2021-12-12 00:00:00\",\n            \"consultationDate\": null,\n            \"creatorName\": null,\n            \"details\": \"123\",\n            \"smsList\": []\n        },\n        {\n            \"listNumber\": 35,\n            \"id\": 26296,\n            \"type\": \"P\",\n            \"status\": \"4\",\n            \"name\": \"test이름4\",\n            \"cellPhone\": \"010-1111-1113\",\n            \"company\": \"ABC Corp\",\n            \"callTime\": \"40\",\n            \"visitDate\": null,\n            \"consultationDate\": null,\n            \"creatorName\": null,\n            \"details\": \"test내용2\",\n            \"smsList\": []\n        },\n        {\n            \"listNumber\": 34,\n            \"id\": 26295,\n            \"type\": \"P\",\n            \"status\": \"4\",\n            \"name\": \"test이름3\",\n            \"cellPhone\": \"010-1111-1113\",\n            \"company\": \"ABC Corp\",\n            \"callTime\": \"40\",\n            \"visitDate\": \"2021-12-12 00:00:00\",\n            \"consultationDate\": \"2021-12-12 00:00:00\",\n            \"creatorName\": null,\n            \"details\": \"test내용2\",\n            \"smsList\": []\n        },\n        {\n            \"listNumber\": 33,\n            \"id\": 26294,\n            \"type\": \"P\",\n            \"status\": \"4\",\n            \"name\": \"test이름\",\n            \"cellPhone\": \"010-1111-1113\",\n            \"company\": \"ABC Corp\",\n            \"callTime\": \"40\",\n            \"visitDate\": \"2021-12-12 00:00:00\",\n            \"consultationDate\": \"2021-12-12 00:00:00\",\n            \"creatorName\": null,\n            \"details\": \"test내용2\",\n            \"smsList\": []\n        }\n    ],\n    \"totalCount\": 42,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"startPage\": 1,\n    \"totalPage\": 5,\n    \"endPage\": 5,\n    \"hasNext\": false,\n    \"hasPrev\": false,\n    \"isFirst\": true,\n    \"isLast\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/04_consultation/01_list_all_consultation.js",
    "groupTitle": "1._Admin_API_>_04._상담관리"
  },
  {
    "type": "delete",
    "url": "/admin/v1/teachers/reservationCgt",
    "title": "15. CGT 예약취소(운영자)",
    "description": "<p>강사관리 &gt; CGT스케줄 &gt; 목록 &gt; 예약 취소 <br/> 예약자 인원 클릭 시 예약자 명단 확인 가능. 추가 수강생 예약</p>",
    "version": "1.0.0",
    "name": "admin_cancelcgt",
    "group": "1._Admin_API_>_05._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/reservationCgt' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"schedules\":[9525345,9525351],\n           \"date\" : \"2024-08-16\",\n           \"teacherId\":\"M1723613351792159\",\n           \"userId\":\"1029034\"\n       }\"",
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
            "field": "schedules",
            "description": "<p>schedule 식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>날짜 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "teacherId",
            "description": "<p>강사식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>회원식별키</p>"
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
    "filename": "src/1_admin-api/05_teacher/15_delete_cgtcancel.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "put",
    "url": "/admin/v1/teachers/cgt",
    "title": "11. CGT 스케줄 등록",
    "description": "<p>강사관리 &gt; CGT스케줄 &gt; 등록 <br/></p>",
    "version": "1.0.0",
    "name": "admin_createCgt",
    "group": "1._Admin_API_>_05._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/cgt' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"date\":\"2023-11-04\",\n           \"startTime\":\"07:30\",\n           \"teacherId\":\"M1695013438115743\",\n           \"type\":\"CGT\",\n           \"reservationLimit\":4\n       }\"",
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
            "field": "date",
            "description": "<p>예약일(yyyy-MM-dd)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>예약시간(HH:mm:ss)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "teacherId",
            "description": "<p>강사식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>수강명(CGT로 넘겨주세요)</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "reservationLimit",
            "description": "<p>정원</p>"
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
    "filename": "src/1_admin-api/05_teacher/11_create_cgt.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "post",
    "url": "/admin/v1/teachers/reservationCgt",
    "title": "14. CGT 예약(운영자)",
    "description": "<p>강사관리 &gt; CGT스케줄 &gt; 목록 &gt; 회원 예약 <br/> 예약자 인원 클릭 시 예약자 명단 확인 가능. 추가 수강생 예약</p>",
    "version": "1.0.0",
    "name": "admin_createCgtmember",
    "group": "1._Admin_API_>_05._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/reservationCgt' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"schedules\":[9525345,9525351],\n           \"date\" : \"2024-08-16\",\n           \"teacherId\":\"M1723613351792159\",\n           \"userId\":\"1029034\"\n       }\"",
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
            "field": "schedules",
            "description": "<p>schedule 식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>날짜 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "teacherId",
            "description": "<p>강사식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>회원식별키</p>"
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
    "filename": "src/1_admin-api/05_teacher/14_create_reservationcgt.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "post",
    "url": "/admin/v1/teachers",
    "title": "09. 강사 등록",
    "description": "<p>강사관리 &gt; 강사등록 <br/> 동일 loginID가 존재로 에러 발생 시 알려주세요. <br/> &quot;Content-Type&quot;은 파일이 있어서 &quot;multipart/form-data&quot;로 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_createTeacher",
    "group": "1._Admin_API_>_05._강사",
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
            "field": "nameEn",
            "description": "<p>영어이름</p>"
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
            "optional": true,
            "field": "gender",
            "description": "<p>성별[F,M]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "workStartDate",
            "description": "<p>근무시작일[yyyy-MM-dd]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "teacherType",
            "description": "<p>강사타입 [HT, LT]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "workTime",
            "description": "<p>근무시간[AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "workType",
            "description": "<p>근무타입[A, C]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "partnerTeacherId",
            "description": "<p>파트너강사</p>"
          },
          {
            "group": "Body",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>활동여부 [true:활동, false:비활동]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cellPhone",
            "description": "<p>전화번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "memo",
            "description": "<p>메모</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": true,
            "field": "files",
            "description": "<p>첨부파일 (같은 파라미터명으로 여러 파일 가능)</p>"
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
    "filename": "src/1_admin-api/05_teacher/09_create_teachers.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "post",
    "url": "/admin/v1/teachers/{id}/schedules",
    "title": "06. 강사 스케줄 저장",
    "description": "<p>강사관리 &gt; 강의OPEN(주별)<br/> 선택한 스케줄은 등록하고, 선택하지 않은 스케줄은 삭제한다.</p>",
    "version": "1.0.0",
    "name": "admin_createTeacherSchedules",
    "group": "1._Admin_API_>_05._강사",
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
            "optional": true,
            "field": "workTime",
            "description": "<p>근무시간 (NULL, AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4)</p>"
          },
          {
            "group": "Body",
            "type": "Object[]",
            "optional": false,
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
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "put",
    "url": "/admin/v1/teachers/deletecgt",
    "title": "12. CGT 스케줄 삭제",
    "description": "<p>강사관리 &gt; CGT스케줄 &gt; 삭제 <br/></p>",
    "version": "1.0.0",
    "name": "admin_deleteCgt",
    "group": "1._Admin_API_>_05._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/deletecgt' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"schedules\":[9525255,9525256]\n       }\"",
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
            "field": "schedules",
            "description": "<p>스케줄식별키 (목록 내 있는 schedules안에 id값들)</p>"
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
    "filename": "src/1_admin-api/05_teacher/12_delete_cgt.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers/{id}",
    "title": "02. 강사 상세조회",
    "description": "<p>상세보기/ 수정/삭제 시 사용<br/></p>",
    "version": "1.0.0",
    "name": "admin_getOptions",
    "group": "1._Admin_API_>_05._강사",
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
            "field": "teacherType",
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
            "field": "active",
            "description": "<p>활동여부 [true:활동, false:비활동]</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "files",
            "description": "<p>첨부파일 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "files.id",
            "description": "<p>첨부파일 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.file",
            "description": "<p>파일명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.originalFile",
            "description": "<p>실제 파일명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "files.url",
            "description": "<p>다운로드 URL</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n{\n    \"id\": \"M1574925585880330\",\n    \"loginId\": \"joyjoyjoy20@naver.com\",\n    \"name\": \"나기쁨\",\n    \"nameEn\": \"Joy Na\",\n    \"lastNameEn\": \"Na\",\n    \"firstNameEn\": \"Joy\",\n    \"password\": \"e10adc3949ba59abbe56e057f20f883e\",\n    \"email\": \"joyjoyjoy20@naver.com\",\n    \"gender\": \"F\",\n    \"cellPhone\": \"UdWtv6wc/t4H/Qfph7VnyA==\",\n    \"type\": \"HT\",\n    \"workStartDate\": \"2019-12-02\",\n    \"language\": \"ENGLISH\",\n    \"workTime\": \"PM_16\",\n    \"workType\": \"A\",\n    \"partnerTeacherId\": \"M1567752637796763\",\n    \"active\": false,\n    \"files\": [\n        {\n            \"id\": 1,\n            \"file\": \"1722059534694_1.jpeg\",\n            \"originalFile\": \"1.jpeg\",\n            \"url\": \"http://englishchannel.co.kr:8080/file/download/1722059534694_1.jpeg/1.jpeg\"\n        },\n        {\n            \"id\": 2,\n            \"file\": \"1722059534694_2.jpeg\",\n            \"originalFile\": \"2.jpeg\",\n            \"url\": \"http://englishchannel.co.kr:8080/file/download/1722059534694_2.jpeg/2.jpeg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/02_get_teacher.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers/attendances",
    "title": "07. 출석/결석률 조회(월)",
    "description": "<p>강사관리 &gt; 출석률/결석률</p>",
    "version": "1.0.0",
    "name": "admin_listTeacherAttendances",
    "group": "1._Admin_API_>_05._강사",
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
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers/attendances/by-date",
    "title": "08. 출석/결석률 조회(일)",
    "description": "<p>강사관리 &gt; 출석률/결석률</p>",
    "version": "1.0.0",
    "name": "admin_listTeacherAttendances_date",
    "group": "1._Admin_API_>_05._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/teachers/attendances/by-date?status=Y&yearMonthDay=2024-01-01'",
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
            "field": "yearMonthDay",
            "description": "<p>조회할 년월일 (yyyy-MM-dd)</p>"
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
    "filename": "src/1_admin-api/05_teacher/08_list_teacher_attendances_date.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers/{id}/schedules",
    "title": "05. 강사 스케줄 조회",
    "description": "<p>강사관리 &gt; 강의OPEN(주별)<br/> 조회할 기간의 6:00~23:30 까지의 스케줄을 조회한다.</p>",
    "version": "1.0.0",
    "name": "admin_listTeacherSchedules",
    "group": "1._Admin_API_>_05._강사",
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
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers/{id}/schedules/by-week",
    "title": "20. 강사 스케줄 조회",
    "description": "<p>강사관리 &gt; 강의OPEN(주별)<br/> 조회할 기간의 6:00~23:30 까지의 스케줄을 조회한다.</p>",
    "version": "1.0.0",
    "name": "admin_listTeacherSchedulesByWeek",
    "group": "1._Admin_API_>_05._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/teachers/M1695013438115743/schedules/by-week?dateMonth=2024-01&week=4'",
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
            "field": "dateMonth",
            "description": "<p>조회할 날짜 (yyyy-MM)</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "week",
            "description": "<p>조회할 주차</p>"
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
            "field": "week",
            "description": "<p>달의 주차</p>"
          },
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
          "content": "HTTP/1.1 200\n{\n    \"week\": 5,\n    \"schedules\": [\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"06:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"06:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"07:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"07:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"08:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"08:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"09:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"09:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"10:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"10:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"11:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"11:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"12:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"12:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"13:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"13:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"14:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"14:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"15:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"15:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"16:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"16:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"17:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"17:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"18:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"18:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"19:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"19:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"20:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"20:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"21:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"21:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"22:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"22:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"23:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-04\",\n            \"time\": \"23:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"06:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"06:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"07:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"07:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"08:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"08:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"09:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"09:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"10:00\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"10:30\",\n            \"isScheduled\": true\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"11:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"11:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"12:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"12:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"13:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"13:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"14:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"14:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"15:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"15:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"16:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"16:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"17:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"17:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"18:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"18:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"19:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"19:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"20:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"20:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"21:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"21:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"22:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"22:30\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"23:00\",\n            \"isScheduled\": false\n        },\n        {\n            \"date\": \"2023-10-05\",\n            \"time\": \"23:30\",\n            \"isScheduled\": false\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/20_list_teacher_schedules_by_week.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "post",
    "url": "/admin/v1/teachers/cgttimes",
    "title": "16. CGT 등록 가능 시간",
    "description": "<p>강사관리 &gt; CGT스케줄 &gt; 등록 &gt; 예약일시의 시간 <br/></p>",
    "version": "1.0.0",
    "name": "admin_list_cgtTime",
    "group": "1._Admin_API_>_05._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/teachers/cgttimes'\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"date\":\"2023-11-04\",\n           \"teacherId\":\"M1695013438115743\"\n       }\"",
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
            "field": "date",
            "description": "<p>예약날짜(yyyy-MM-dd)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "teacherId",
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
            "optional": false,
            "field": "String[]",
            "description": "<p>예약가능시간</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n[\n    \"06:30:00\",\n    \"08:30:00\",\n    \"09:00:00\",\n    \"09:30:00\",\n    \"10:00:00\"\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/16_list_cgtTime.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers/reservationCgt",
    "title": "17. CGT 예약자 목록",
    "description": "<p>강사관리 &gt; CGT스케줄 &gt; 목록 &gt; 예약자 <br/> 예약자 인원 클릭 시 예약자 명단</p>",
    "version": "1.0.0",
    "name": "admin_listcgtmember",
    "group": "1._Admin_API_>_05._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/reservationCgt' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"schedules\":[9525345,9525351],\n           \"date\":\"2024-08-16\",\n           \"cgtTime\":\"09:30:00\",\n           \"teacherId\":\"M1723613351792159\"\n       }\"",
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
            "field": "schedules",
            "description": "<p>schedule 식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>날짜 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "teacherId",
            "description": "<p>강사식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cgtTime",
            "description": "<p>CGT시간(HH:mm:ss)</p>"
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>회원 이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>날짜(yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>CGT시작시간(시작,HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>CGT종료시간(시작,HH:mm:ss)</p>"
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
            "type": "Number[]",
            "optional": false,
            "field": "schedules",
            "description": "<p>스케줄</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\n [\n     {\n         \"userId\": \"1028237\",\n         \"name\": \"신혜정(6)\",\n         \"date\": \"2024-08-16\",\n         \"startTime\": \"09:30:00\",\n         \"endTime\": \"10:00:00\",\n         \"teacherId\": \"M1723613351792159\",\n         \"schedules\": [\n             9525345,\n             9525351\n         ]\n     },\n     {\n         \"userId\": \"1028238\",\n         \"name\": \"이경란(6)\",\n         \"date\": \"2024-08-16\",\n         \"startTime\": \"09:30:00\",\n         \"endTime\": \"10:00:00\",\n         \"teacherId\": \"M1723613351792159\",\n         \"schedules\": [\n             9525345,\n             9525351\n         ]\n     },\n     {\n         \"userId\": \"1028792\",\n         \"name\": \"이영진(6)\",\n         \"date\": \"2024-08-16\",\n         \"startTime\": \"09:30:00\",\n         \"endTime\": \"10:00:00\",\n         \"teacherId\": \"M1723613351792159\",\n         \"schedules\": [\n             9525345,\n             9525351\n         ]\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/17_list_reservationcgt.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers/worked",
    "title": "18. 기간별 강사 목록",
    "description": "<p>강사관리 <br/> 해당 기간에 일한 강사 목록</p>",
    "version": "1.0.0",
    "name": "admin_listworkTeacher",
    "group": "1._Admin_API_>_05._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/worked?dateFrom=2023-01-01&dateTo=2023-01-31' \\",
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
            "type": "String",
            "optional": false,
            "field": "teacherId",
            "description": "<p>강사식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>강사이름</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\n[\n    {\n        \"teacherId\": \"M1515756140981038\",\n        \"name\": \"임정은\"\n    },\n    {\n        \"teacherId\": \"M1594795852631377\",\n        \"name\": \"Steven\"\n    },\n    {\n        \"teacherId\": \"M1660267538951028\",\n        \"name\": \"Adam\"\n    },\n    {\n        \"teacherId\": \"M1400118325784523\",\n        \"name\": \"한가영\"\n    },\n    {\n        \"teacherId\": \"M1487640799950353\",\n        \"name\": \"Alex\"\n    },\n    {\n        \"teacherId\": \"M1523939117926947\",\n        \"name\": \"Airin\"\n    },\n    {\n        \"teacherId\": \"M1661138591404520\",\n        \"name\": \"최태연\"\n    },\n    {\n        \"teacherId\": \"M1657064932771055\",\n        \"name\": \"김나래\"\n    },\n    {\n        \"teacherId\": \"M1649713933516571\",\n        \"name\": \"황재희\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/18_list_workTeacher.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "put",
    "url": "/admin/v1/teachers/{id}",
    "title": "03. 강사수정/삭제",
    "description": "<p>강사관리 &gt; 강사상세조회 &gt; 수정 / 삭제 <br/> 삭제 : active를 false로 수정 <br/> &quot;Content-Type&quot;은 파일이 있어서 &quot;multipart/form-data&quot;로 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_updateTeacher",
    "group": "1._Admin_API_>_05._강사",
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
            "optional": true,
            "field": "nameEn",
            "description": "<p>영어이름</p>"
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
            "optional": true,
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
            "optional": true,
            "field": "workStartDate",
            "description": "<p>근무시작일[yyyy-MM-dd]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "teacherType",
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
            "optional": true,
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
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>활동여부 [true:활동, false:비활동]</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "cellPhone",
            "description": "<p>전화번호</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": true,
            "field": "sort",
            "description": "<p>순번</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "memo",
            "description": "<p>메모</p>"
          },
          {
            "group": "Body",
            "type": "Number[]",
            "optional": false,
            "field": "deleteFiles",
            "description": "<p>(삭제할 파일 id 목록)</p>"
          },
          {
            "group": "Body",
            "type": "File",
            "optional": true,
            "field": "files",
            "description": "<p>첨부파일 (같은 파라미터명으로 여러 파일 가능)</p>"
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
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "put",
    "url": "/admin/v1/teachers/sort",
    "title": "19. 강사 순서 변경",
    "description": "<p>강사관리 &gt; 목록 조회 &gt; 순서변경 <br/></p>",
    "version": "1.0.0",
    "name": "admin_updateTeacherSort",
    "group": "1._Admin_API_>_05._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/api/admin/v1/teachers/sort'\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"userId\":\"M1726648755607877\",\n           \"sort\" : 4\n       }\"",
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
            "field": "userId",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>순서</p>"
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
    "filename": "src/1_admin-api/05_teacher/19_update_teacherSort.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers/cgt",
    "title": "10. CGT 목록",
    "description": "<p>강사관리 &gt; CGT스케쥴 &gt; 목록 조회<br/></p>",
    "version": "1.0.0",
    "name": "all_cgt",
    "group": "1._Admin_API_>_05._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'localhost:8080/admin/v1/teachers/cgt'",
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
            "description": "<p>예약일자 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "teacherId",
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
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>CGT 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.id",
            "description": "<p>CGT 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "list.teacherId",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.teacherName",
            "description": "<p>강사이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.date",
            "description": "<p>예약일자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.startTime",
            "description": "<p>예약시간(시작,HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.endTime",
            "description": "<p>예약시간(끝,HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.cgtTime",
            "description": "<p>CGT시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.reservationLimit",
            "description": "<p>정원</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.reservationCount",
            "description": "<p>현재예약인원</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list.schedules",
            "description": "<p>스케줄정보(일정)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.schedules.id",
            "description": "<p>스케줄 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "list.schedules.date",
            "description": "<p>날짜(사용X, 위에 있는 '예약일자' 사용)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "list.schedules.startTime",
            "description": "<p>시작시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "list.schedules.cgtTime",
            "description": "<p>CGT구분을 위한 컬럼</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "list.schedules.type",
            "description": "<p>CGT구분을 위한 컬럼</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"id\": 1,\n            \"teacherId\": \"M1723613351792159\",\n            \"teacherName\": \"TEST\",\n            \"date\": \"2024-08-16\",\n            \"startTime\": \"09:30\",\n            \"endTime\": \"10:30\",\n            \"cgtTime\": \"09:30:00\",\n            \"reservationLimit\": 4,\n            \"reservationCount\": 3,\n            \"schedules\": [\n                {\n                    \"id\": 9525351,\n                    \"date\": \"2024-08-16\",\n                    \"startTime\": \"09:30:00\",\n                    \"cgtTime\": \"09:30:00\",\n                    \"type\": \"CGT\"\n                },\n                {\n                    \"id\": 9525345,\n                    \"date\": \"2024-08-16\",\n                    \"startTime\": \"10:00:00\",\n                    \"cgtTime\": \"09:30:00\",\n                    \"type\": \"CGT\"\n                }\n            ]\n        },\n        {\n            \"id\": 2,\n            \"teacherId\": \"M1723613351792159\",\n            \"teacherName\": \"TEST\",\n            \"date\": \"2024-08-16\",\n            \"startTime\": \"12:00\",\n            \"endTime\": \"13:30\",\n            \"cgtTime\": \"12:00:00\",\n            \"reservationLimit\": 8,\n            \"reservationCount\": 0,\n            \"schedules\": [\n                {\n                    \"id\": 9525348,\n                    \"date\": \"2024-08-16\",\n                    \"startTime\": \"12:30:00\",\n                    \"cgtTime\": \"12:00:00\",\n                    \"type\": \"CGT\"\n                },\n                {\n                    \"id\": 9525347,\n                    \"date\": \"2024-08-16\",\n                    \"startTime\": \"12:00:00\",\n                    \"cgtTime\": \"12:00:00\",\n                    \"type\": \"CGT\"\n                }\n            ]\n        }\n    ],\n    \"totalCount\": 2,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"endPage\": 1,\n    \"startPage\": 1,\n    \"totalPage\": 1,\n    \"hasNext\": false,\n    \"isFirst\": true,\n    \"isLast\": true,\n    \"hasPrev\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/10_list_all_cgt.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "get",
    "url": "/admin/v1/teachers",
    "title": "01. 강사목록 조회",
    "description": "<p>강사관리 &gt; <br/> 제대로된 데이터가 별로 없어서 오류 가능성 높으니 계약기간 제외하고 테스트 해주세요</p>",
    "version": "1.0.0",
    "name": "all_consultation",
    "group": "1._Admin_API_>_05._강사",
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
            "optional": true,
            "field": "contractDateFrom",
            "description": "<p>계약기간 [yyyy-MM-dd]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "contractDateTo",
            "description": "<p>계약기간[yyyy-MM-dd]</p>"
          },
          {
            "group": "Query",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>활동 (true/false) . 기본값 '활동(true)'으로</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>구분(HT, LT), 초기값 '전체'는 null</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>검색조건(ALL:전체 name: 이름,loginId:아이디,email:이메일)</p>"
          },
          {
            "group": "Query",
            "type": "Number",
            "optional": true,
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
          },
          {
            "group": "Query",
            "optional": true,
            "field": "order",
            "description": "<p>정렬 선택(구분: type , 이름: name , 이메일: email , 근무시간: workTime , 순서: sort ,<br/></p>"
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
            "description": "<p>구분(HT, LT)</p>"
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
            "field": "list.teacherEnName",
            "description": "<p>강사영문명</p>"
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
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "get",
    "url": "/teacher/v1/teachers",
    "title": "13. 강사계정: 강사목록(영문포함)",
    "description": "<p>강사 계정 페이지 &gt; 강사 목록 조회 &gt; <br/> 페이징처리X , 단순 목록 조회 시 사용</p>",
    "version": "1.0.0",
    "name": "all_teacherPage",
    "group": "1._Admin_API_>_05._강사",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/teacher/v1/teachers'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "listNumber",
            "description": "<p>목록번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "userId",
            "description": "<p>강사식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>강사타입(LT:외국인강사,HT:한국인강사)</p>"
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
            "field": "teacherEnName",
            "description": "<p>강사영문명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>강사 email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "cellPhone",
            "description": "<p>강사 핸드폰번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "workTime",
            "description": "<p>강사 시간 타입(AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "sort",
            "description": "<p>순번</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": true,
            "field": "active",
            "description": "<p>활동여부(활동:true,비활동:false)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n[\n    {\n        \"listNumber\": 0,\n        \"userId\": \"M1594795852631377\",\n        \"type\": \"LT\",\n        \"teacherName\": \"Steven\",\n        \"teacherEnName\": \"Steven Trecek\",\n        \"email\": \"sjtrecek@gmail.com\",\n        \"cellPhone\": \"m+r8K+/oSue6/4ypbr44XA==\",\n        \"workTime\": null,\n        \"sort\": 0,\n        \"active\": true\n    },\n    {\n        \"listNumber\": 0,\n        \"userId\": \"M1681990831501448\",\n        \"type\": \"HT\",\n        \"teacherName\": \"정지은\",\n        \"teacherEnName\": \"Grace \",\n        \"email\": \"nansilverya@hanmail.net\",\n        \"cellPhone\": \"3m8tI6TQJNhTNq3m/Z4OCg==\",\n        \"workTime\": null,\n        \"sort\": 36,\n        \"active\": true\n    },\n    {\n        \"listNumber\": 0,\n        \"userId\": \"M1691559227102239\",\n        \"type\": \"LT\",\n        \"teacherName\": \"Sadie\",\n        \"teacherEnName\": \"Sadie Rose\",\n        \"email\": \"sadie.rose320@gmail.com\",\n        \"cellPhone\": \"7ENYpiRFRKBxPco0BXgo1A==\",\n        \"workTime\": null,\n        \"sort\": 0,\n        \"active\": true\n    },\n    {\n        \"listNumber\": 0,\n        \"userId\": \"M1693558129675151\",\n        \"type\": \"LT\",\n        \"teacherName\": \"Tyler\",\n        \"teacherEnName\": \"Tyler Tran\",\n        \"email\": \"tytn2017@gmail.com\",\n        \"cellPhone\": \"Jo6hJocYWTcHnbhkaqAOvg==\",\n        \"workTime\": null,\n        \"sort\": 0,\n        \"active\": true\n    },\n    {\n        \"listNumber\": 0,\n        \"userId\": \"M1723370523381628\",\n        \"type\": \"HT\",\n        \"teacherName\": \"TEST이름\",\n        \"teacherEnName\": null,\n        \"email\": \"email.naver.com\",\n        \"cellPhone\": null,\n        \"workTime\": null,\n        \"sort\": 0,\n        \"active\": true\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/05_teacher/13_list_all_teacherPage.js",
    "groupTitle": "1._Admin_API_>_05._강사"
  },
  {
    "type": "delete",
    "url": "/admin/v1/statistics/cancelSms",
    "title": "08. SMS 예약취소",
    "description": "<p>통계보고서 &gt; SMS현황&gt; 대기내역 &gt; 예약취소 <br/></p>",
    "version": "1.0.0",
    "name": "admin_deleteCancelSms",
    "group": "1._Admin_API_>_06._통계보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X DELETE 'http://localhost:8080/admin/v1/statistics/cancelSms'",
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
            "field": "id",
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
    "filename": "src/1_admin-api/06_statistics/08_delete_cancelSms.js",
    "groupTitle": "1._Admin_API_>_06._통계보고서"
  },
  {
    "type": "delete",
    "url": "/admin/v1/statistics/sms",
    "title": "03. 발송 내역 삭제",
    "description": "<p>통계보고서 &gt; SMS현황&gt; 발송내역 &gt; 삭제 <br/></p>",
    "version": "1.0.0",
    "name": "admin_deleteSms",
    "group": "1._Admin_API_>_06._통계보고서",
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
    "groupTitle": "1._Admin_API_>_06._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/evaluations/{id}",
    "title": "06. LDF 상세 조회",
    "description": "<p>통계보고서 &gt; 평가현황 &gt; 상세보기 &gt; LDF 보기<br/> ldfList 에 있는 ldf 식별키를 사용해 테스트 해주세요</p>",
    "version": "1.0.0",
    "name": "admin_evaluation_ldf",
    "group": "1._Admin_API_>_06._통계보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/statistics/evaluations/362222'",
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
          "content": "HTTP/1.1 200\n{\n    \"id\": 362222,\n    \"lesson\": \"SYM2 Issue 27\",\n    \"contentSp\": \"<p>subtle =SUH+dil</p> <p><br /></p> <p>people=PEE+ppol</p>\",\n    \"contentV\": \"<p>subtle (adj)=when something is not obvious or easy to notice</p> <p>EX: this coffee has a subtle berry taste</p> <p>EX: The facial expression is subtle, but you can tell she is a little uncomfortable</p> <p>EX: I will be subtle, and ask her casually about how she feels since she is so stressed</p> <p><br /></p> <p>to censor (v)/censorship (n)=to block content that is inappropriate</p> <p><br /></p> <p>graphic (adj)=shows too much violence, blood, sexual content, and something offensive</p> <p><br /></p> <p>to try one's damndest to + verb (idiom)=to try really hard to do or avoid something</p> <p><br /></p> <p>buy + something&nbsp; +with + (money, card, online back)</p> <p><br /></p> <p>young adult + fiction/fantasy/scifi</p> <p><br /></p> <p>false advertising (n)=wrong facts in ads</p> <p><br /></p> <p>skeptical/doubtful (adj)=to feel doubt</p> <p><br /></p> <p>predictable (adj)=easy to guess what will happen, can predict it, obvious</p> <p><br /></p> <p>subverts expectations (v+n)=to do something that is unexpected for the audience</p> <p>EX: The Matrix film subverted many people's expectations with the ending.</p> <p><br /></p> <p>nearly live (adj)=not exactly shot live, but very close to live based on time</p> <p><br /></p> <p>to manipulate (v)/manipulator (n)/manipulation (n)=to control people or situations using various hidden methods</p> <p><br /></p> <p>to convey (v)=to show something</p> <p>EX: The actor conveyed a lot of depression when they played that character</p> <p><br /></p> <p>absorb (v)=to take something and put it in side of yourself</p> <p>EX: a sponge absorbs water</p> <p>EX: a person absorbs knowledge</p>\",\n    \"contentSg\": \"<p>I don't much care about that</p> <p>Correction: I don't really care about that</p> <p><br /></p> <p>when I was like teenager</p> <p>Correction: when I was a teenager/ during my teen years/ when I was a teen/ when I was an adolescent</p> <p><br /></p> <p>I can choose to see or not</p> <p>Correction: I can choose to avoid most ads, but commercials are harder to avoid</p> <p><br /></p> <p>people have to think more after watching commercial</p> <p>Correction: people have to be more skeptical when watching a commercial</p>\",\n    \"contentC\": \"<p>https://www.happycow.net/reviews/charlies-grocery-seoul-317701</p>\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/06_statistics/06_get_ldf.js",
    "groupTitle": "1._Admin_API_>_06._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/sms/{id}",
    "title": "02. 발송 내역 상세 조회",
    "description": "<p>통계보고서 &gt; sms전송현황 &gt; 상세 조회<br/> id: 5 사용해주세요</p>",
    "version": "1.0.0",
    "name": "admin_getSms",
    "group": "1._Admin_API_>_06._통계보고서",
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
            "description": "<p>smsTarget 받은 사람들에 대한 정보 식별키</p>"
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
    "groupTitle": "1._Admin_API_>_06._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/sms/{id}/target",
    "title": "04. 대상자 보기",
    "description": "<p>통계보고서 &gt; sms전송현황 &gt; 목록 조회&gt; 대상자보기<br/></p>",
    "version": "1.0.0",
    "name": "admin_getSmsTarget",
    "group": "1._Admin_API_>_06._통계보고서",
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
          },
          {
            "group": "Query",
            "optional": false,
            "field": "search",
            "description": "<p>검색조건 (전체: ALL, 이름:recipientName, 이메일: email)</p>"
          },
          {
            "group": "Query",
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
    "groupTitle": "1._Admin_API_>_06._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/evaluations/users",
    "title": "09. 평가한 학생 목록",
    "description": "<p>통계보고서 &gt; 평가현황 <br/> 해당 기간에 평가한 학생 목록</p>",
    "version": "1.0.0",
    "name": "admin_lisldfUser",
    "group": "1._Admin_API_>_06._통계보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/statistics/evaluations/users?dateFrom=2023-02-01&dateTo=2023-02-28' \\",
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
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>회원식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>회원명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\n[\n    {\n        \"userId\": \"M1672207477162387\",\n        \"name\": \"최원보\"\n    },\n    {\n        \"userId\": \"M1666947941196642\",\n        \"name\": \"정보연\"\n    },\n    {\n        \"userId\": \"M1676335706733128\",\n        \"name\": \"이의종\"\n    },\n    {\n        \"userId\": \"M1676620115349486\",\n        \"name\": \"RE:손운룡\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/06_statistics/09_list_ldfUser.js",
    "groupTitle": "1._Admin_API_>_06._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/evaluations/ldf",
    "title": "10. 강사별 평가 상세보기",
    "description": "<p>통계보고서 &gt; 평가현황 &gt; 상세보기 <br/> 해당 기간에 평가된 ldf 정보</p>",
    "version": "1.0.0",
    "name": "admin_lisldfinfo",
    "group": "1._Admin_API_>_06._통계보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/statistics/evaluations/ldf?date=2023-01-01&teacherId=M1661138591404520' \\",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "optional": false,
            "field": "date",
            "description": "<p>조회하려는 월(평가현황목록의 date,yyyy-MM )</p>"
          },
          {
            "group": "Query",
            "optional": false,
            "field": "teacherId",
            "description": "<p>조회할 강사식별키</p>"
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
            "field": "date",
            "description": "<p>수업일</p>"
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
            "description": "<p>수업종료시간</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "grade",
            "description": "<p>별점</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "evaluation",
            "description": "<p>설명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>회원식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>학습자</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "ldf",
            "description": "<p>ldf 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ldf.id",
            "description": "<p>ldf식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ldf.lesson",
            "description": "<p>lesson</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ldf.contentSp",
            "description": "<p>Stress and Pronunciation</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ldf.contentV",
            "description": "<p>Vocabulary</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ldf.contentSg",
            "description": "<p>Sentence Structure &amp; Grammar</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ldf.contentC",
            "description": "<p>Comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\n[\n    {\n        \"date\": \"2023-01-02\",\n        \"startTime\": \"19:30\",\n        \"endTime\": \"20:00\",\n        \"grade\": 5.0,\n        \"evaluation\": \"수준에 적당한 방식으로 수업이 진행되어 도움이 되었습니다.\",\n        \"userId\": \"M1672207477162387\",\n        \"userName\": \"최원보\",\n        \"ldf\": {\n            \"id\": 288658,\n            \"lesson\": \"왕초보회화 01-02\",\n            \"contentSp\": \"<p>go to +장소&nbsp;</p> <p><br></p> <p>i'll take this&nbsp;</p> <p><br></p> <p>i see my girl friend&nbsp;</p> <p>그냥 친구 i meet some friends&nbsp;</p> <p>see/watch&nbsp;</p> <p>see 내가 보려고하지 않아도 보임 목적의식 없음</p> <p>watch&nbsp; 내가 보려고 하는 것&nbsp;</p> <p>look 내가 목적의식 있음&nbsp;</p> <p><br></p> <p>주어 동사 사람목적어 사물목적어 4형식&nbsp;</p> <p><br></p> <p>i so like english (x) 어순 주어 동사 목적어 장소 방향 시간&nbsp;</p> <p>부사는 수식하는 형용사,동사 앞에나 뒤에&nbsp;</p> <p>i like english <span style=\\\"color: #ff007f\\\">so much</span>&nbsp;</p> <p><br></p> <p>do you have a job?</p> <p>what do you work? &gt;&gt; what do you do?&nbsp;</p> <p>what's your job? direct&nbsp;</p> <p><br></p>\",\n            \"contentV\": \"<p>sleep (x) &gt;&gt; go to bed&nbsp;</p> <p>i go to bed at 2 <span style=\\\"color: #ff007f\\\">in the morning&nbsp;</span></p> <p>i reservation (X) i book a ticket&nbsp;</p> <p>스튜어디스 (x) &gt;&gt; flight attendant</p> <p>i book a flight ticket</p> <p>for round trip 왕복&nbsp;</p> <p><br></p> <p>i take a bus go to disneyland (x) 동사가 2개&nbsp;</p> <p>i take a bus to go to disneyland (o)&nbsp;</p> <p>can 할 수 있다&nbsp;</p> <p><br></p> <p>~해야한다 하는게 좋겠다 should !!!</p> <p>you should take a bus here to go to disney&nbsp;</p> <p>&gt;&gt; where <span style=\\\"color: #ff007f\\\">should</span> i take a bus to go to disney?</p> <p>&nbsp;should &lt;&lt;<have to<<<<<must<have=\\\"\\\" to=\\\"\\\" 해야=\\\"\\\" 해=\\\"\\\" <<<<must=\\\"\\\" 안하면=\\\"\\\" 안돼 <=\\\"\\\" p=\\\"\\\"></have></p> <p>should 개인적인 조언&nbsp;</p> <p>have to 내가 결정하는 게 아닌 남이 시키는 것&nbsp;</p> <p>be supposed to ~하기로 약속했었다&nbsp;</p> <p>you were supposed to meet me at 2 ~하기로 했었다&nbsp;</p> <p><br></p> <p>~안 해야 돼 /하면 안 돼&nbsp;</p> <p>don't have to 너 안 해도 괜찮아&nbsp;</p> <p>shouldn't 안 하는 게 좋아&nbsp;</p> <p>are not supposed to 전통/관습/규칙 안 돼&nbsp;</p> <p><br></p> <p>give someone a discount&nbsp;</p> <p>can you give me a discount&nbsp;</p> <p><br></p> <p><br></p>\",\n            \"contentSg\": \"<p>&nbsp;</p>\",\n            \"contentC\": \"<p>&nbsp;</p>\"\n        }\n    },",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/06_statistics/10_list_ldf.js",
    "groupTitle": "1._Admin_API_>_06._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/successSms",
    "title": "01. 발송 내역 목록",
    "description": "<p>SMS 전송현황 &gt; <br/> 통계보고서 &gt; sms전송현황 &gt; 발송 내역<br/></p>",
    "version": "1.0.0",
    "name": "all_Sms",
    "group": "1._Admin_API_>_06._통계보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/statistics/successSms?sendType=ALL",
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
            "field": "sendDateFrom",
            "description": "<p>발송일 시작 [yyyy-MM-dd]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "sendDateTo",
            "description": "<p>발송일 종료 [yyyy-MM-dd]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "sendType",
            "description": "<p>구분 [ALL:전체, L:LMS , S: SMS]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>검색조건[ALL:전체, content: 내용,senderName:발송인]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
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
            "field": "list.listNumber",
            "description": "<p>NO</p>"
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
            "field": "list.total",
            "description": "<p>총 발송 건수</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.success",
            "description": "<p>SMS 발송 성공</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.fail",
            "description": "<p>SMS 발송 실패</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.waiting",
            "description": "<p>SMS 발송 대기</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.sendType",
            "description": "<p>구분(L:LMS , S: SMS)</p>"
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
            "description": "<p>예약일시</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.recipientPhone",
            "description": "<p>수신자 번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.senderPhone",
            "description": "<p>발신자번호</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"listNumber\": 4,\n            \"id\": 5,\n            \"senderName\": \"고길동\",\n            \"content\": \"문자메세지\",\n            \"sendDate\": \"2021-12-12 00:00:00\",\n            \"total\": 17,\n            \"success\": 5,\n            \"fail\": 6,\n            \"waiting\": 6,\n            \"sendType\": \"S\",\n            \"recipientName\": \"홍길동\",\n            \"recipientPhone\": \"010-2321-1234\",\n            \"senderPhone\": \"123-456-7899\",\n            \"reservationDate\": \"2021-12-12 00:00:00\"\n        },\n        {\n            \"listNumber\": 3,\n            \"id\": 6,\n            \"senderName\": \"고길동1\",\n            \"content\": \"문자메세지1\",\n            \"sendDate\": \"2021-12-12 00:00:00\",\n            \"total\": 1,\n            \"success\": 0,\n            \"fail\": 1,\n            \"waiting\": 0,\n            \"sendType\": \"L\",\n            \"recipientName\": \"홍길동1\",\n            \"recipientPhone\": \"010-2321-1234\",\n            \"senderPhone\": \"123-456-7899\",\n            \"reservationDate\": \"2021-12-12 00:00:00\"\n        },\n        {\n            \"listNumber\": 2,\n            \"id\": 7,\n            \"senderName\": \"고길동2\",\n            \"content\": \"문자메세지2\",\n            \"sendDate\": \"2021-12-12 00:00:00\",\n            \"total\": 0,\n            \"success\": 0,\n            \"fail\": 0,\n            \"waiting\": 0,\n            \"sendType\": null,\n            \"recipientName\": \"홍길동2\",\n            \"recipientPhone\": \"010-2321-1234\",\n            \"senderPhone\": \"123-456-7899\",\n            \"reservationDate\": \"2021-12-12 00:00:00\"\n        },\n        {\n            \"listNumber\": 1,\n            \"id\": 19,\n            \"senderName\": \"고길동2\",\n            \"content\": \"문자메세지2\",\n            \"sendDate\": \"2021-12-12 00:00:00\",\n            \"total\": 0,\n            \"success\": 0,\n            \"fail\": 0,\n            \"waiting\": 0,\n            \"sendType\": null,\n            \"recipientName\": \"홍길동2\",\n            \"recipientPhone\": \"010-2321-1234\",\n            \"senderPhone\": \"123-456-7899\",\n            \"reservationDate\": \"2021-12-12 00:00:00\"\n        }\n    ],\n    \"totalCount\": 4,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"endPage\": 1,\n    \"startPage\": 1,\n    \"totalPage\": 1,\n    \"isFirst\": true,\n    \"isLast\": true,\n    \"hasNext\": false,\n    \"hasPrev\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/06_statistics/01_list_all_successSms.js",
    "groupTitle": "1._Admin_API_>_06._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/evaluations",
    "title": "05. 평가 현황 목록 / 상세보기",
    "description": "<p>평가현황 &gt; <br/> 통계보고서 &gt; 평가현황 &gt; 전체 목록 조회 + 상세보기</p>",
    "version": "1.0.0",
    "name": "all_evaluation",
    "group": "1._Admin_API_>_06._통계보고서",
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
            "optional": false,
            "field": "date",
            "description": "<p>수업일 [yyyy-MM-dd]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "search",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>검색구분(필수값: name)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "date",
            "description": "<p>검색시작일</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n[\n    {\n        \"teacherName\": \"최태연\",\n        \"teacherId\": \"M1661138591404520\",\n        \"gradeCount\": 9,\n        \"gradeAvg\": 5.0,\n        \"total\": 45.0,\n        \"date\": \"2023-02-01\"\n    },\n    {\n        \"teacherName\": \"김나래\",\n        \"teacherId\": \"M1657064932771055\",\n        \"gradeCount\": 1,\n        \"gradeAvg\": 5.0,\n        \"total\": 5.0,\n        \"date\": \"2023-02-01\"\n    },\n    {\n        \"teacherName\": \"임정은\",\n        \"teacherId\": \"M1515756140981038\",\n        \"gradeCount\": 1,\n        \"gradeAvg\": 5.0,\n        \"total\": 5.0,\n        \"date\": \"2023-02-01\"\n    },\n    {\n        \"teacherName\": \"Adam\",\n        \"teacherId\": \"M1660267538951028\",\n        \"gradeCount\": 1,\n        \"gradeAvg\": 3.0,\n        \"total\": 3.0,\n        \"date\": \"2023-02-01\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/06_statistics/05_list_all_evaluations.js",
    "groupTitle": "1._Admin_API_>_06._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/statistics/waitingSms",
    "title": "07. 대기 내역 목록",
    "description": "<p>SMS 전송현황 &gt; <br/> 통계보고서 &gt; sms전송현황 &gt; 대기 내역 <br/> 검색 조건 시 전체일 때 ALL 사용</p>",
    "version": "1.0.0",
    "name": "all_waitingSms",
    "group": "1._Admin_API_>_06._통계보고서",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'localhost:8080/admin/v1/statistics/waitingSms?search=senderPhone&keyword=123-456-7899'",
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
            "field": "sendType",
            "description": "<p>구분 [ALL:전체, L:LMS , S: SMS]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>검색조건[ALL: 전체, recipientPhone: 수신번호,senderPhone:발신번호, content:내용]</p>"
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
            "description": "<p>SMS 대기목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list.smsTarget",
            "description": "<p>대기 내역 정보</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.smsTarget.id",
            "description": "<p>SMS 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.smsTarget.email",
            "description": "<p>회원이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.smsTarget.recipientPhone",
            "description": "<p>수신번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.smsTarget.recipientName",
            "description": "<p>수신자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.smsTarget.status",
            "description": "<p>상태(WAITING)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.smsTarget.sendDate",
            "description": "<p>발송일 (yyyy-MM-dd HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.sendType",
            "description": "<p>구분(S:SMS, L:LMS)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.senderPhone",
            "description": "<p>발송번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.senderName",
            "description": "<p>발송자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.content",
            "description": "<p>문자내용</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "list.count",
            "description": "<p>발송건수(1로 고정임)</p>"
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
          "content": "HTTP/1.1 200\n{\n    \"list\": [\n        {\n            \"smsTarget\": {\n                \"id\": 24,\n                \"email\": null,\n                \"recipientPhone\": \"3\",\n                \"recipientName\": \"김대한2\",\n                \"status\": \"WAITING\",\n                \"sendDate\": \"2012-12-12 00:00:00\"\n            },\n            \"sendType\": \"S\",\n            \"senderPhone\": \"123-456-7899\",\n            \"senderName\": \"고길동\",\n            \"content\": \"문자메세지\",\n            \"count\": 1\n        },\n        {\n            \"smsTarget\": {\n                \"id\": 23,\n                \"email\": null,\n                \"recipientPhone\": \"3\",\n                \"recipientName\": \"김대한1\",\n                \"status\": \"WAITING\",\n                \"sendDate\": \"2012-12-12 00:00:00\"\n            },\n            \"sendType\": \"S\",\n            \"senderPhone\": \"123-456-7899\",\n            \"senderName\": \"고길동\",\n            \"content\": \"문자메세지\",\n            \"count\": 1\n        },\n        {\n            \"smsTarget\": {\n                \"id\": 22,\n                \"email\": null,\n                \"recipientPhone\": \"3\",\n                \"recipientName\": \"김대한\",\n                \"status\": \"WAITING\",\n                \"sendDate\": \"2012-12-12 00:00:00\"\n            },\n            \"sendType\": \"S\",\n            \"senderPhone\": \"123-456-7899\",\n            \"senderName\": \"고길동\",\n            \"content\": \"문자메세지\",\n            \"count\": 1\n        },\n        {\n            \"smsTarget\": {\n                \"id\": 11,\n                \"email\": \"이메일9@naver.com\",\n                \"recipientPhone\": \"010-2321-2312\",\n                \"recipientName\": \"김민국9\",\n                \"status\": \"WAITING\",\n                \"sendDate\": \"2012-11-12 00:00:00\"\n            },\n            \"sendType\": \"L\",\n            \"senderPhone\": \"123-456-7899\",\n            \"senderName\": \"고길동1\",\n            \"content\": \"문자메세지1\",\n            \"count\": 1\n        },\n        {\n            \"smsTarget\": {\n                \"id\": 3,\n                \"email\": \"이메일3@naver.com\",\n                \"recipientPhone\": \"010-2321-2312\",\n                \"recipientName\": \"김민국3\",\n                \"status\": \"WAITING\",\n                \"sendDate\": \"2012-11-12 00:00:00\"\n            },\n            \"sendType\": \"S\",\n            \"senderPhone\": \"123-456-7899\",\n            \"senderName\": \"고길동\",\n            \"content\": \"문자메세지\",\n            \"count\": 1\n        },\n        {\n            \"smsTarget\": {\n                \"id\": 2,\n                \"email\": \"이메일2@naver.com\",\n                \"recipientPhone\": \"010-2321-2312\",\n                \"recipientName\": \"김민국2\",\n                \"status\": \"WAITING\",\n                \"sendDate\": \"2012-11-12 00:00:00\"\n            },\n            \"sendType\": \"S\",\n            \"senderPhone\": \"123-456-7899\",\n            \"senderName\": \"고길동\",\n            \"content\": \"문자메세지\",\n            \"count\": 1\n        },\n        {\n            \"smsTarget\": {\n                \"id\": 1,\n                \"email\": \"이메일1@naver.com\",\n                \"recipientPhone\": \"010-2321-2312\",\n                \"recipientName\": \"김민국\",\n                \"status\": \"WAITING\",\n                \"sendDate\": \"2012-11-12 00:00:00\"\n            },\n            \"sendType\": \"S\",\n            \"senderPhone\": \"123-456-7899\",\n            \"senderName\": \"고길동\",\n            \"content\": \"문자메세지\",\n            \"count\": 1\n        }\n    ],\n    \"totalCount\": 7,\n    \"page\": 1,\n    \"limit\": 10,\n    \"pageSize\": 10,\n    \"totalPage\": 1,\n    \"startPage\": 1,\n    \"endPage\": 1,\n    \"hasNext\": false,\n    \"isFirst\": true,\n    \"isLast\": true,\n    \"hasPrev\": false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/06_statistics/07_list_all_watingSms.js",
    "groupTitle": "1._Admin_API_>_06._통계보고서"
  },
  {
    "type": "get",
    "url": "/admin/v1/orders/calculates",
    "title": "01. 기간별 정산 목록 조회",
    "description": "<p>정산관리 &gt; 기간별정산관리</p>",
    "version": "1.0.0",
    "name": "admin_listOrderCalculates",
    "group": "1._Admin_API_>_07._정산",
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
    "groupTitle": "1._Admin_API_>_07._정산"
  },
  {
    "type": "post",
    "url": "/admin/v1/sms/send",
    "title": "02. SMS 발송",
    "description": "<p>공통 &gt; SMS 발송</p>",
    "version": "1.0.0",
    "name": "admin_createSendSms",
    "group": "1._Admin_API_>_08._SMS",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/sms/send' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n     \"senderPhone\": \"02-2082-1105\",\n     \"content\": \"문자 받으시오!\",\n     \"reservationDate\": \"2024-07-01 19:00\",\n     \"recipients\": [\n          {\n              \"name\": \"RE-김동하\",\n              \"phone\": \"010-3333-4444\",\n              \"email\": \"kim@naver.com\"\n          },\n          {\n              \"name\": \"RE-김하연\",\n              \"phone\": \"010-5555-6666\",\n              \"email\": \"kim2@naver.com\"\n          },\n          {\n              \"name\": \"RE-서민하\",\n              \"phone\": \"010-7777-8888\",\n              \"email\": \"ha@naver.com\"\n          }\n     ]\n}\"",
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
            "type": "String",
            "optional": false,
            "field": "sendType",
            "description": "<p>문자타입 (S: SMS / L :LMS)</p>"
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
            "description": "<p>발송대상 이메일주소</p>"
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
    "groupTitle": "1._Admin_API_>_08._SMS"
  },
  {
    "type": "get",
    "url": "/admin/v1/sms/users",
    "title": "01. 발송 대상 목록 조회",
    "description": "<p>공통 &gt; SMS 발송</p>",
    "version": "1.0.0",
    "name": "admin_listSmsUsers",
    "group": "1._Admin_API_>_08._SMS",
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
    "groupTitle": "1._Admin_API_>_08._SMS"
  },
  {
    "type": "get",
    "url": "/admin/v1/templates/excel/sms",
    "title": "03. sms 엑셀",
    "description": "<p>SMS전송현황&gt; 엑셀 다운로드<br/></p>",
    "version": "1.0.0",
    "name": "listSmsexcel",
    "group": "1._Admin_API_>_08._SMS",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080//api/admin/v1/templates/excel/sms'",
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
            "description": "<p>구분 [ALL:전체, L:LMS , S: SMS]</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>검색조건[ALL:전체, content: 내용,senderName:발송인]</p>"
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "senderPhone",
            "description": "<p>발송자번호</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>발송자식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "senderName",
            "description": "<p>발송자(이름)</p>"
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
            "field": "date",
            "description": "<p>발송날짜</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>발송시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sendType",
            "description": "<p>발송타입[SMS:S , LMS:L]</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "status",
            "description": "<p>발송상태[WAITING, SUCCESS, FAIL]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n[\n    {\n        \"id\": 31,\n        \"senderPhone\": \"0220821105\",\n        \"createdBy\": \"U1370839971594082\",\n        \"senderName\": \"채인숙\",\n        \"content\": \"123123123123123\",\n        \"date\": \"2024-09-20\",\n        \"time\": \"21:26:17\",\n        \"sendType\": null,\n        \"status\": \"WAITING\"\n    },\n    {",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/08_sms/03_list_excelSms.js",
    "groupTitle": "1._Admin_API_>_08._SMS"
  },
  {
    "type": "post",
    "url": "/admin/v1/email/send",
    "title": "02. Email 발송",
    "description": "<p>공통 &gt; Email 발송</p>",
    "version": "1.0.0",
    "name": "admin_createSendEmail",
    "group": "1._Admin_API_>_09._Email",
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
    "groupTitle": "1._Admin_API_>_09._Email"
  },
  {
    "type": "post",
    "url": "/admin/v1/email/ldf/send",
    "title": "03. LDF Email 발송",
    "description": "<p>공통 &gt; Email 발송</p>",
    "version": "1.0.0",
    "name": "admin_createSendLDFEmail",
    "group": "1._Admin_API_>_09._Email",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/admin/v1/email/ldf/send' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n     \"ldfId\": 1234,\n     \"email\": \"zombi@languagecube.kr\",\n     \"name\": \"조원빈\",\n     \"title\": \"이메일 테스트!\",\n     \"lesson\": \"이메일 테스트입니다.\",\n     \"lessonDate\": \"이메일 테스트입니다.\",\n     \"teacher\": \"teacher@languagecube.kr\",\n     \"contentSp\": \"테스트\",\n     \"contentV\": \"테스트\",\n     \"contentSg\": \"테스트\",\n     \"contentC\": \"테스트\"\n }\"",
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
            "field": "ldfId",
            "description": "<p>ldf 식별자</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>수신자 이메일</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>수신자 이름</p>"
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
            "field": "lesson",
            "description": "<p>강의 이름</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "lessonDate",
            "description": "<p>강의 시간</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "teacher",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "contentSp",
            "description": "<p>Stress and Pronunciation에 들어갈 내용</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "contentV",
            "description": "<p>Vocabulary에 들어갈 내용</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "contentSg",
            "description": "<p>Sentence Structure &amp; Grammar 에 들어갈 내용</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "contentC",
            "description": "<p>Comment 에 들어갈 내용</p>"
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
    "filename": "src/1_admin-api/09_email/03_create_send_ldf_email.js",
    "groupTitle": "1._Admin_API_>_09._Email"
  },
  {
    "type": "get",
    "url": "/admin/v1/email/users",
    "title": "01. 발송 대상 목록 조회",
    "description": "<p>공통 &gt; Email 발송</p>",
    "version": "1.0.0",
    "name": "admin_listEmailUsers",
    "group": "1._Admin_API_>_09._Email",
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
            "description": "<p>검색 조건 (name:이름, loginId:아이디)</p>"
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.loginId",
            "description": "<p>아이디</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n {\n{\n    \"users\": [\n        {\n            \"id\": \"M1519648304234104\",\n            \"name\": \"RE-김동하\",\n            \"nameEn\": \"Dongha Kim\",\n            \"loginId\": \"huggun@hanmail.net\",\n            \"email\": \"kimdongha1984@gmail.com\"\n        },\n        {\n            \"id\": \"M1511408494025832\",\n            \"name\": \"RE-김하연\",\n            \"nameEn\": \"Hayeon Kim\",\n            \"loginId\": \"aqua7583@naver.com\",\n            \"email\": \"aqua7583@naver.com\"\n        },\n        {\n            \"id\": \"M1524297763999142\",\n            \"name\": \"RE-서민하\",\n            \"nameEn\": \"Minha Seo\",\n            \"loginId\": \"yellow0824@naver.com\",\n            \"email\": \"yellow0824@naver.com\"\n        },\n        {\n            \"id\": \"M1502520988970956\",\n            \"name\": \"RE-이하늘\",\n            \"nameEn\": \"Ha-neul Lee\",\n            \"loginId\": \"skyfl94@naver.com\",\n            \"email\": \"skyfl94@naver.com\"\n        },\n\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/09_email/01_list_email_users.js",
    "groupTitle": "1._Admin_API_>_09._Email"
  },
  {
    "type": "get",
    "url": "/admin/v1/reservations/schedules",
    "title": "01. 스케줄 조회",
    "description": "<p>강의시간표, 학사보고서</p>",
    "version": "1.0.0",
    "name": "admin_listSchedules",
    "group": "1._Admin_API_>_10._스케줄",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/admin/v1/reservations/schedules?date=2023-12-23'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
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
            "field": "teachers",
            "description": "<p>강사 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teachers.id",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teachers.name",
            "description": "<p>강사명</p>"
          },
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
            "description": "<p>예약 목록, 예약이 없으면 optional 필드는 모두 null</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "schedules.reservations.reservationId",
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
            "optional": true,
            "field": "schedules.reservations.userId",
            "description": "<p>회원 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "schedules.reservations.userName",
            "description": "<p>회원명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "schedules.reservations.email",
            "description": "<p>이메일</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "schedules.reservations.textbook",
            "description": "<p>교재</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "schedules.reservations.status",
            "description": "<p>예약 상태 (Y: 출석, N: 결석, R: 예약)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "schedules.reservations.statusLabel",
            "description": "<p>예약 상태명 (출석, 결석, 예약)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": true,
            "field": "schedules.reservations.courseId",
            "description": "<p>수강 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "schedules.reservations.isRetakeRequired",
            "description": "<p>재등록 필요 여부 (true: 재등록 필요)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "schedules.reservations.isReported",
            "description": "<p>학사보고서 등록 여부 (true: 학사보고서 등록)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedules.teachers",
            "description": "<p>강의가 오픈된 강사 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "schedules.teachers.id",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "schedules.teachers.name",
            "description": "<p>강사명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n    \"teachers\": [\n        {\n            \"id\": \"M1657064932771055\",\n            \"name\": \"김나래\"\n        },\n        {\n            \"id\": \"M1661138591404520\",\n            \"name\": \"최태연\"\n        }\n    ],\n    \"schedules\": [\n         {\n             \"time\": \"09:30\",\n             \"teachers\": [\n                 {\n                     \"id\": \"M1657064932771055\",\n                     \"name\": \"김나래\"\n                 },\n                 {\n                     \"id\": \"M1661138591404520\",\n                     \"name\": \"최태연\"\n                 },\n                 {\n                     \"id\": \"M1698204875465368\",\n                     \"name\": \"Olivia\"\n                 },\n                 {\n                     \"id\": \"M1709859614116619\",\n                     \"name\": \"Austin\"\n                 }\n             ],\n             \"reservations\": [\n                 {\n                     \"reservationId\": 2711097,\n                     \"teacherId\": \"M1657064932771055\",\n                     \"teacherName\": \"김나래\",\n                     \"userId\": \"M1703814296618972\",\n                     \"userName\": \"나한나\",\n                     \"email\": \"o0241@naver.com\",\n                     \"textbook\": \"일상영어섀도잉\",\n                     \"status\": \"Y\",\n                     \"statusLabel\": \"출석\",\n                     \"courseId\": 76373,\n                     \"isRetakeRequired\": true,\n                     \"isReported\": false\n                 },\n            ]\n        }\n    ]\n}\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/1_admin-api/10_schedule/01_list_schedules.js",
    "groupTitle": "1._Admin_API_>_10._스케줄"
  },
  {
    "type": "put",
    "url": "api/admin/v1/reservations/attendanceStatus",
    "title": "02. 출결처리 변경 api",
    "description": "<p>강의시간표 출결 변경 api <br/> 강의 시간표 조회 시 예약된 회원의 출결 수정을 위해 사용 <br/></p>",
    "version": "1.0.0",
    "name": "admin_updateAttendanceStatus",
    "group": "1._Admin_API_>_10._스케줄",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/api/admin/v1/reservations/attendanceStatus' \\\n-H \"Content-Type: multipart/form-data\" \\\n-d \"{\n           \"attendanceStatus\" : \"R\",\n           \"reservationId\": 2731922\n       }\"",
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
            "field": "attendanceStatus",
            "description": "<p>출결상태(Y:출석,N:결석,R:예약)</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "reservationId",
            "description": "<p>예약 식별키</p>"
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
    "filename": "src/1_admin-api/10_schedule/02_update_attendanceStatus.js",
    "groupTitle": "1._Admin_API_>_10._스케줄"
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
  },
  {
    "type": "post",
    "url": "/mobile/v1/login",
    "title": "01. 로그인",
    "description": "<p>모바일 로그인<br/> 모든 API 요청의 header에 Login-Profile=test 를 넣으면 로그인 우회<br/> Token은 각 요청 Header에 Authorization으로 넣어주시면 됩니다. (Bearer 이런거 없이 토큰만)</p>",
    "version": "1.0.0",
    "name": "mobile_login",
    "group": "2._Mobile_API_>_00._공통",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/mobile/v1/login' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n    \"id\": \"123123123123@naver.com\",\n    \"password\": \"1111\"\n}\"",
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
          "content": "HTTP/1.1 200\n {\n     \"id\": \"M1479127681680503\",\n     \"name\": \"Level test\",\n     \"token\": \"aff5f649-afa2-4e78-b1e3-96943cf98236\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/00_common/01_login.js",
    "groupTitle": "2._Mobile_API_>_00._공통"
  },
  {
    "type": "post",
    "url": "/mobile/v1/logout",
    "title": "02. 로그아웃",
    "description": "<p>모바일 로그아웃</p>",
    "version": "1.0.0",
    "name": "mobile_logout",
    "group": "2._Mobile_API_>_00._공통",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/mobile/v1/logout' \\\n-H \"Authorization: 19fa536a-6aab-49c0-bf3f-099e050e1583\"",
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
    "filename": "src/2_mobile-api/00_common/02_logout.js",
    "groupTitle": "2._Mobile_API_>_00._공통"
  },
  {
    "type": "get",
    "url": "/mobile/v1/main",
    "title": "01. 메인화면 데이터 조회",
    "description": "<p>메인화면에 필요한 데이터 조회 <br/> 로그인 필수 <br/> 수강 목록</p>",
    "version": "1.0.0",
    "name": "mobile_getMainData",
    "group": "2._Mobile_API_>_01._메인",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/mobile/v1/main' \\\n-H \"Authorization: 2191d3aa-d33d-4677-9da0-44556277ab39\"",
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
            "field": "courses",
            "description": "<p>수강 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "courses.id",
            "description": "<p>수강 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courses.productName",
            "description": "<p>수강명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courses.startDate",
            "description": "<p>수강 시작일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courses.endDate",
            "description": "<p>수강 종료일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "courses.lessonCount",
            "description": "<p>레슨 횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "courses.remainCount",
            "description": "<p>잔여 횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "courses.attendanceCount",
            "description": "<p>완료 횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "courses.reservationCount",
            "description": "<p>예약 횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "courses.totalAttendanceCount",
            "description": "<p>전체 출석 횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "courses.totalReservationCount",
            "description": "<p>전체 예약 횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "courses.totalNonAttendanceCount",
            "description": "<p>전체 결석 횟수</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "courses.totalAttendanceRate",
            "description": "<p>출석률(전체출석/전체예약)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "courses.roundedTotalAttendanceRate",
            "description": "<p>출석률(전체출석/전체예약)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "courses.reservations",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "courses.reservations.id",
            "description": "<p>예약 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courses.reservations.date",
            "description": "<p>예약일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courses.reservations.startTime",
            "description": "<p>시작 시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courses.reservations.endTime",
            "description": "<p>종료 시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courses.reservations.teacherId",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courses.reservations.teacherName",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "courses.reservations.isCancelable",
            "description": "<p>취소 가능 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n    \"courses\": [\n        {\n            \"id\": 71840,\n            \"productName\": \"NEW PT 24회 3개월\",\n            \"startDate\": \"2023-01-09\",\n            \"endDate\": \"2023-04-08\",\n            \"lessonCount\": 24.0,\n            \"remainCount\": 0.0,\n            \"attendanceCount\": 24.0,\n            \"reservationCount\": 0.0,\n            \"roundedTotalAttendanceRate\": 0,\n            \"reservations\": []\n        },\n        {\n            \"id\": 72884,\n            \"productName\": \"PTM (주2회 3개월)\",\n            \"startDate\": \"2023-04-11\",\n            \"endDate\": \"2023-07-20\",\n            \"lessonCount\": 26.0,\n            \"remainCount\": 0.0,\n            \"attendanceCount\": 26.0,\n            \"reservationCount\": 0.0,\n            \"reservations\": []\n        }\n    ]\n}\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/01_main/01_get_main_data.js",
    "groupTitle": "2._Mobile_API_>_01._메인"
  },
  {
    "type": "get",
    "url": "api/mobile/v1/main/reservations",
    "title": "02. 예약목록조회",
    "description": "<p>main화면 다음 예약 레슨 <br/></p>",
    "version": "1.0.0",
    "name": "mobile_listReservations",
    "group": "2._Mobile_API_>_01._메인",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/api/mobile/v1/main/reservations'",
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
            "field": "date",
            "description": "<p>조회 날짜 (yyyy-MM-dd)</p>"
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
            "description": "<p>예약 식별키</p>"
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
            "field": "startTime",
            "description": "<p>시작시간(HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>종료시간(HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>수업일(yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendanceStatus",
            "description": "<p>출석상태(R:예약, A:출석, N:결석)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\n[\n    {\n        \"id\": 2732287,\n        \"date\": \"2024-09-04\",\n        \"startTime\": \"08:30\",\n        \"endTime\": \"09:00\",\n        \"attendanceStatus\": \"R\",\n        \"teacherName\": \"TEST이름\"\n    },\n    {\n        \"id\": 2732288,\n        \"date\": \"2024-09-04\",\n        \"startTime\": \"09:00\",\n        \"endTime\": \"09:30\",\n        \"attendanceStatus\": \"R\",\n        \"teacherName\": \"TEST이름\"\n    },\n    {\n        \"id\": 2732295,\n        \"date\": \"2024-09-16\",\n        \"startTime\": \"08:00\",\n        \"endTime\": \"08:30\",\n        \"attendanceStatus\": \"R\",\n        \"teacherName\": \"서안나\"\n    },\n    {\n        \"id\": 2732296,\n        \"date\": \"2024-09-16\",\n        \"startTime\": \"08:30\",\n        \"endTime\": \"09:00\",\n        \"attendanceStatus\": \"R\",\n        \"teacherName\": \"서안나\"\n    },\n    {\n        \"id\": 2732297,\n        \"date\": \"2024-09-16\",\n        \"startTime\": \"09:00\",\n        \"endTime\": \"09:30\",\n        \"attendanceStatus\": \"R\",\n        \"teacherName\": \"서안나\"\n    }\n]\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/01_main/02_list_reservations.js",
    "groupTitle": "2._Mobile_API_>_01._메인"
  },
  {
    "type": "delete",
    "url": "/mobile/v1/reservations/cgt",
    "title": "08. CGT 예약취소(회원)",
    "description": "<p>모바일 &gt; 메인 &gt; cgt예약버튼 &gt; 예약 취소 <br/></p>",
    "version": "1.0.0",
    "name": "mobile_cancelcgt",
    "group": "2._Mobile_API_>_02._예약",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/mobile/v1/reservations/cgt' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"schedules\":[9525345,9525351]\n       }\"",
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
            "field": "schedules",
            "description": "<p>schedule 식별키</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n {\n     \"code\": \"api-9900\",\n     \"message\": \"잘못된 요청입니다. 일정 취소는 2일 전까지만 가능합니다.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/02_reservation/08_delete_cgtcancelUser.js",
    "groupTitle": "2._Mobile_API_>_02._예약"
  },
  {
    "type": "post",
    "url": "/mobile/v1/reservations/cgt",
    "title": "09. CGT 예약(회원)",
    "description": "<p>모바일 &gt; 메인 &gt; cgt예약버튼 &gt; 예약 취소 <br/></p>",
    "version": "1.0.0",
    "name": "mobile_createCgt",
    "group": "2._Mobile_API_>_02._예약",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/mobile/v1/reservations/cgt' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"schedules\":[9525345,9525351]\n       }\"",
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
            "field": "schedules",
            "description": "<p>schedule 식별키</p>"
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
    "filename": "src/2_mobile-api/02_reservation/09_create_reservationcgtUser.js",
    "groupTitle": "2._Mobile_API_>_02._예약"
  },
  {
    "type": "post",
    "url": "/mobile/v1/reservations",
    "title": "05. 예약하기",
    "description": "<p>강사/시간/나머지 스케줄 선택 후 최종 예약하기</p>",
    "version": "1.0.0",
    "name": "mobile_createReservations",
    "group": "2._Mobile_API_>_02._예약",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X POST 'http://localhost:8080/mobile/v1/reservations' \\\n-H \"Content-Type: application/json\" \\\n-H \"Authorization: 2191d3aa-d33d-4677-9da0-44556277ab39\"\n-d \"{\n    \"courseId\": 75615,\n    \"date\": \"2024-10-10\",\n    \"time\": \"18:00\",\n    \"teacherId\": \"M1681990831501448\",\n    \"remainScheduleId\": 9525312\n}\"",
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
            "description": "<p>메인에서 예약 시작할때 선택되어 있던 수강 식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>수업일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>수업시간 (HH:mm)</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "teacherId",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": true,
            "field": "remainScheduleId",
            "description": "<p>마지막에 선택한 나머지 스케줄 식별키</p>"
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
            "field": "date",
            "description": "<p>수업일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedules",
            "description": "<p>수업시간 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.time",
            "description": "<p>수업시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.teacherName",
            "description": "<p>강사명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n    \"date\": \"2024-10-10\",\n    \"schedules\": [\n        {\n            \"time\": \"18:00\",\n            \"teacherName\": \"정지은\"\n        },\n        {\n            \"time\": \"18:30\",\n            \"teacherName\": \"정지은\"\n        }\n    ]\n}\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/02_reservation/05_create_reservations.js",
    "groupTitle": "2._Mobile_API_>_02._예약"
  },
  {
    "type": "get",
    "url": "/mobile/v1/reservations/cancelable",
    "title": "10. 예약 취소 가능여부",
    "description": "<p>시간별, 강사별 예약</p>",
    "version": "1.0.0",
    "name": "mobile_getCancelableDate",
    "group": "2._Mobile_API_>_02._예약",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/api/mobile/v1/reservations/cancelable?date=2024-04-01'",
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
            "field": "date",
            "description": "<p>조회 날짜 (yyyy-MM-dd)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "cancelable",
            "description": "<p>취소 가능 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n    \"cancelable\": \"false\"\n}\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/02_reservation/10_get_cancelable_date.js",
    "groupTitle": "2._Mobile_API_>_02._예약"
  },
  {
    "type": "get",
    "url": "/mobile/v1/reservations/schedules",
    "title": "06. 스케줄 목록 조회",
    "description": "<p>캘린더에서 선택한 년월의 스케줄 목록 조회</p>",
    "version": "1.0.0",
    "name": "mobile_getReservationSchedules",
    "group": "2._Mobile_API_>_02._예약",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/mobile/v1/reservations/schedules?yearMonth=2024-10'",
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
            "field": "yearMonth",
            "description": "<p>조회 년월 (yyyy-MM)</p>"
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
            "description": "<p>스케줄 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.date",
            "description": "<p>수업일 (yyyy-MM-dd)</p>"
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
            "optional": false,
            "field": "schedules.reservations.id",
            "description": "<p>예약 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.startTime",
            "description": "<p>시작 시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.endTime",
            "description": "<p>종료 시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.attendanceStatus",
            "description": "<p>출석 상태 코드 (R)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservations.attendanceStatusLabel",
            "description": "<p>출석 상태 (예약)</p>"
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
            "type": "Boolean",
            "optional": false,
            "field": "schedules.reservations.isCancelable",
            "description": "<p>취소 가능 여부</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n    \"schedules\": [\n        {\n            \"date\": \"2024-10-01\",\n            \"reservations\": []\n        },\n        {\n            \"date\": \"2024-10-10\",\n            \"reservations\": [\n                {\n                    \"id\": 2626313,\n                    \"startTime\": \"18:00\",\n                    \"endTime\": \"18:30\",\n                    \"attendanceStatus\": \"R\",\n                    \"attendanceStatusLabel\": \"예약\",\n                    \"teacherName\": \"정지은\",\n                    \"isCancelable\": true\n                },\n                {\n                    \"id\": 2626314,\n                    \"startTime\": \"18:30\",\n                    \"endTime\": \"19:00\",\n                    \"attendanceStatus\": \"R\",\n                    \"attendanceStatusLabel\": \"예약\",\n                    \"teacherName\": \"정지은\",\n                    \"isCancelable\": true\n                }\n            ]\n        },\n        {\n            \"date\": \"2024-10-31\",\n            \"reservations\": []\n        }\n    ]\n}\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/02_reservation/06_get_reservation_schedules.js",
    "groupTitle": "2._Mobile_API_>_02._예약"
  },
  {
    "type": "get",
    "url": "/mobile/v1/reservations/schedules/remain",
    "title": "04. 예약 가능한 나머지 스케줄 목록 조회",
    "description": "<p>시간별, 강사별 예약</p>",
    "version": "1.0.0",
    "name": "mobile_getReservationSchedulesRemain",
    "group": "2._Mobile_API_>_02._예약",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/mobile/v1/reservations/schedules/remain?date=2024-01-31&time=13:00'",
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
            "field": "date",
            "description": "<p>조회 날짜 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": "<p>앞에서 선택한 시간</p>"
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
            "description": "<p>스케줄 목록, 비어있으면 30분만 예약 팝업 노출</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "schedules.id",
            "description": "<p>스케줄 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.teacherId",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.teacherName",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.startTime",
            "description": "<p>시작시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.endTime",
            "description": "<p>종료시간</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n    \"schedules\": [\n        {\n            \"id\": 9212090,\n            \"teacherId\": \"M1661138591404520\",\n            \"teacherName\": \"최태연\",\n            \"startTime\": \"13:30\",\n            \"endTime\": \"14:00\"\n        },\n        {\n            \"id\": 9208889,\n            \"teacherId\": \"M1691559227102239\",\n            \"teacherName\": \"Sadie\",\n            \"startTime\": \"13:30\",\n            \"endTime\": \"14:00\"\n        }\n    ]\n}\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/02_reservation/04_get_reservation_schedules_remain.js",
    "groupTitle": "2._Mobile_API_>_02._예약"
  },
  {
    "type": "get",
    "url": "/mobile/v1/reservations/teachers",
    "title": "03. 예약 가능한 강사 목록 조회",
    "description": "<p>시간별, 강사별 예약</p>",
    "version": "1.0.0",
    "name": "mobile_getReservationTeachers",
    "group": "2._Mobile_API_>_02._예약",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/mobile/v1/reservations/teachers?date=2024-01-31&time=13:00'",
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
            "field": "date",
            "description": "<p>조회 날짜 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "time",
            "description": "<p>앞에서 선택한 시간, 시간 먼저 선택했을 경우 사용</p>"
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
            "field": "teachers",
            "description": "<p>강사 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teachers.id",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teachers.name",
            "description": "<p>강사명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n    \"teachers\": [\n        {\n            \"id\": \"M1657064932771055\",\n            \"name\": \"김나래\"\n        },\n        {\n            \"id\": \"M1661138591404520\",\n            \"name\": \"최태연\"\n        },\n        {\n            \"id\": \"M1691559227102239\",\n            \"name\": \"Sadie\"\n        }\n    ]\n}\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/02_reservation/03_get_reservation_teachers.js",
    "groupTitle": "2._Mobile_API_>_02._예약"
  },
  {
    "type": "get",
    "url": "/mobile/v1/reservations/times",
    "title": "02. 예약 가능한 시간 목록 조회",
    "description": "<p>시간별, 강사별 예약</p>",
    "version": "1.0.0",
    "name": "mobile_getReservationTimes",
    "group": "2._Mobile_API_>_02._예약",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/api/mobile/v1/reservations/times?date=2024-04-01&teacherId=M1400118325784523'",
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
            "field": "date",
            "description": "<p>조회 날짜 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Query",
            "type": "String",
            "optional": true,
            "field": "teacherId",
            "description": "<p>앞에서 선택한 강사 식별키, 강사 먼저 선택했을 경우 사용</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "times",
            "description": "<p>시간 목록</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n    \"times\": [\n        \"01:00 PM\",\n        \"01:30 PM\",\n        \"02:00 PM\",\n        \"02:30 PM\",\n        \"03:00 PM\",\n        \"03:30 PM\",\n        \"04:00 PM\",\n        \"04:30 PM\",\n        \"06:00 PM\",\n        \"06:30 PM\",\n        \"07:00 PM\",\n        \"07:30 PM\"\n    ]\n}\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/02_reservation/02_get_reservation_times.js",
    "groupTitle": "2._Mobile_API_>_02._예약"
  },
  {
    "type": "get",
    "url": "/mobile/v1/reservations/cgt",
    "title": "07. CGT 예약 목록",
    "description": "<p>CGT 예약 가능한 스케줄 목록 조회 <br/> 메인 화면 &gt; cgt 예약 버튼</p>",
    "version": "1.0.0",
    "name": "mobile_listcgt",
    "group": "2._Mobile_API_>_02._예약",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/api/mobile/v1/reservations/cgt?date=2024-09-04'",
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
            "field": "date",
            "description": "<p>조회 날짜 (yyyy-MM-dd)</p>"
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
            "description": "<p>스케줄 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.id",
            "description": "<p>스케줄 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.teacherId",
            "description": "<p>강사 식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.teacherName",
            "description": "<p>강사명</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.startTime",
            "description": "<p>시작시간(HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.endTime",
            "description": "<p>종료시간(HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.cgtTime",
            "description": "<p>CGT 시간(HH:mm:ss)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.date",
            "description": "<p>수업일(yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservationId",
            "description": "<p>예약식별키(0이면 로그인한 회원은 예약 안한 상태)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservationCount",
            "description": "<p>예약인원</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.reservationLimit",
            "description": "<p>제한인원</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n[\n    {\n        \"schedules\": [\n            {\n                \"id\": 9878677,\n                \"teacherId\": \"M1725182283443744\",\n                \"teacherName\": \"TEST이름\",\n                \"date\": \"2024-09-04\",\n                \"cgtTime\": \"08:30:00\",\n                \"startTime\": \"08:30\",\n                \"reservationCount\": 1,\n                \"reservationLimit\": 2,\n                \"reservationId\": 2732287,\n                \"endTime\": \"09:00\"\n            },\n            {\n                \"id\": 9878678,\n                \"teacherId\": \"M1725182283443744\",\n                \"teacherName\": \"TEST이름\",\n                \"date\": \"2024-09-04\",\n                \"cgtTime\": \"08:30:00\",\n                \"startTime\": \"09:00\",\n                \"reservationCount\": 1,\n                \"reservationLimit\": 2,\n                \"reservationId\": 2732288,\n                \"endTime\": \"09:30\"\n            }\n        ]\n    },\n    {\n        \"schedules\": [\n            {\n                \"id\": 9878673,\n                \"teacherId\": \"M1725182283443744\",\n                \"teacherName\": \"TEST이름\",\n                \"date\": \"2024-09-04\",\n                \"cgtTime\": \"06:30:00\",\n                \"startTime\": \"06:30\",\n                \"reservationCount\": 0,\n                \"reservationLimit\": 4,\n                \"reservationId\": 0,\n                \"endTime\": \"07:00\"\n            },\n            {\n                \"id\": 9878674,\n                \"teacherId\": \"M1725182283443744\",\n                \"teacherName\": \"TEST이름\",\n                \"date\": \"2024-09-04\",\n                \"cgtTime\": \"06:30:00\",\n                \"startTime\": \"07:00\",\n                \"reservationCount\": 0,\n                \"reservationLimit\": 4,\n                \"reservationId\": 0,\n                \"endTime\": \"07:30\"\n            }\n        ]\n    }\n]\n}\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/02_reservation/07_list_cgt.js",
    "groupTitle": "2._Mobile_API_>_02._예약"
  },
  {
    "type": "put",
    "url": "/mobile/v1/reservations/cancel",
    "title": "01. 예약 취소",
    "description": "<p>취소할 예약 선택 후 취소</p>",
    "version": "1.0.0",
    "name": "mobile_updateCancelReservations",
    "group": "2._Mobile_API_>_02._예약",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http://localhost:8080/mobile/v1/reservations/cancel' \\\n-H \"Content-Type: application/json\" \\\n-H \"Authorization: 2191d3aa-d33d-4677-9da0-44556277ab39\"\n-d \"{\n    \"ids\": [\n        2626311, 2626312\n    ],\n    \"cancelReason\": \"test\"\n}\"",
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
            "field": "ids",
            "description": "<p>취소할 예약 식별키 목록</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "cancelReason",
            "description": "<p>취소 사유</p>"
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
            "field": "cancelReservations",
            "description": "<p>취소 예약 목록</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cancelReservations.cancelDate",
            "description": "<p>취소일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cancelReservations.date",
            "description": "<p>수업일 (yyyy-MM-dd)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cancelReservations.startTime",
            "description": "<p>수업시작시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cancelReservations.endTime",
            "description": "<p>수업종료시간 (HH:mm)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cancelReservations.teacherName",
            "description": "<p>강사명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n    \"cancelReservations\": [\n        {\n            \"cancelDate\": \"2024-08-11\",\n            \"date\": \"2024-10-10\",\n            \"startTime\": \"18:00\",\n            \"endTime\": \"18:30\",\n            \"teacherName\": \"정지은\"\n        },\n        {\n            \"cancelDate\": \"2024-08-11\",\n            \"date\": \"2024-10-10\",\n            \"startTime\": \"18:30\",\n            \"endTime\": \"19:00\",\n            \"teacherName\": \"정지은\"\n        }\n    ]\n}\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/02_reservation/01_update_cancel_reservations.js",
    "groupTitle": "2._Mobile_API_>_02._예약"
  },
  {
    "type": "get",
    "url": "/mobile/v1/feedback/completion",
    "title": "04. 완료 레슨 피드백 목록",
    "description": "<ul> <li></li> </ul>",
    "version": "1.0.0",
    "name": "mobile_listCompleteFeedback",
    "group": "2._Mobile_API_>_03._레슨피드백",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/api/mobile/v1/feedback/completion'",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>예약식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>예약일자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>예약수업시간(시작)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>예약수업시간(끝)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendanceStatus",
            "description": "<p>출결상태(Y:출석, N:결석 , R:예약)</p>"
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
            "type": "Number",
            "optional": false,
            "field": "ldfId",
            "description": "<p>ldf 식별키</p>"
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
            "description": "<p>Sentence Structure &amp; Gramm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentC",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "grade",
            "description": "<p>평점</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "evaluation",
            "description": "<p>평가</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n[\n       {\n           \"id\": 2263980,\n           \"date\": \"2022.04.27 Wed\",\n           \"startTime\": \"01:30 PM\",\n           \"endTime\": \"02:00 PM\",\n           \"attendanceStatus\": \"Y\",\n           \"teacherName\": \"황재희\",\n           \"ldfId\": 90553,\n           \"lesson\": \"FreeClassJan13\",\n           \"contentSp\": \"<p>pharmacy-[farmasey]&nbsp;</p><p><br/></p><p>cough-[coff]&nbsp;</p><p><br/></p><p>syrup-[si-rup]&nbsp;(notshirup)&nbsp;</p>\",\n           \"contentV\": \"<p>tofillaprescription-toprepareaprescription&nbsp;</p><p><br/></p><p>ailment-ongoingillness&nbsp;</p><p><br/></p><p><br/></p>\",\n           \"contentSg\": \"<p>Atfirst..............</p><p><br/></p><p>WhenIfirststartedIwassonervousIshookalot.&nbsp;</p><p><br/></p><p>Themovieisscary.</p><p><br/></p><p>Hefeelsscared.&nbsp;</p><p><br/></p><p>WhenshouldI(dosomething)?</p><p><br/></p><p>WhenshouldIeatameal?&nbsp;</p><p><br/></p><p>Intwohourstherewillbeafireworkshow.</p><p><br/></p><p>Comebackinthreedays.&nbsp;</p>\",\n           \"contentC\": \"<p>Adoctorishandingoveranoteforaninjection.&nbsp;</p><p><br/></p><p>Amaninapharmacyispointingatthemedicineforarunnynose.&nbsp;</p><p><br/></p><p>Apharmacistisdenyingarequestbyawoman.&nbsp;</p>\",\n           \"grade\": null,\n           \"evaluation\": null\n       },\n       {\n           \"id\": 2265702,\n           \"date\": \"2022.04.30 Sat\",\n           \"startTime\": \"03:00 PM\",\n           \"endTime\": \"03:30 PM\",\n           \"attendanceStatus\": \"Y\",\n           \"teacherName\": \"황재희\",\n           \"ldfId\": 111454,\n           \"lesson\": \"1\",\n           \"contentSp\": \"<p>&nbsp;</p>\",\n           \"contentV\": \"<p><spanstyle=\\\"font-size:22px\\\">Breath</span></p><p><br></p><p><spanstyle=\\\"font-size:22px\\\">Breathe<br></span></p><p><spanstyle=\\\"font-size:22px\\\"><br></span></p><p><spanstyle=\\\"font-size:22px\\\">Habitat=whereananimallives</span></p><p><spanstyle=\\\"font-size:22px\\\"><br></span></p><p><spanstyle=\\\"font-size:22px\\\">Gills=howafishbreathes<br></span></p><p><spanstyle=\\\"font-size:22px\\\"><br></span></p><p><spanstyle=\\\"font-size:22px\\\">Takein=absorb<br></span></p><p><spanstyle=\\\"font-size:22px\\\"><br></span></p><p><spanstyle=\\\"font-size:22px\\\">12&nbsp;=Midnight/Noon<br></span></p><p><spanstyle=\\\"font-size:22px\\\"><br></span></p><p><spanstyle=\\\"font-size:22px\\\"></span></p>\",\n           \"contentSg\": \"<p>&nbsp;</p>\",\n           \"contentC\": \"<p>&nbsp;</p>\",\n           \"grade\": null,\n           \"evaluation\": null\n       },\n       {\n           \"id\": 2476347,\n           \"date\": \"2023.04.26 Wed\",\n           \"startTime\": \"02:00 PM\",\n           \"endTime\": \"02:30 PM\",\n           \"attendanceStatus\": \"Y\",\n           \"teacherName\": \"김나래\",\n           \"ldfId\": 313523,\n           \"lesson\": \".\",\n           \"contentSp\": \"<p>&nbsp;</p>\",\n           \"contentV\": \"<p>*baseball:<spanstyle='color:#000000'>야구</span></p><p><br/></p><p><br/></p>\",\n           \"contentSg\": \"<p>either/neither</p><p><br/></p><p>차이점??</p><p><br/></p><p>-</p><p>-</p><p>-</p><p>-</p><p>-</p><p><br/></p><p><br/></p>\",\n           \"contentC\": \"<p>&nbsp;</p>\",\n           \"grade\": null,\n           \"evaluation\": null\n       }\n   ]\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/03_feedback/04_list_CompleteFeedback.js",
    "groupTitle": "2._Mobile_API_>_03._레슨피드백"
  },
  {
    "type": "get",
    "url": "/mobile/v1/feedback",
    "title": "01.피드백 목록",
    "description": "<ul> <li>현재 날짜 기준으로 진행된 수업에 대한 예약 정보<br/></li> </ul>",
    "version": "1.0.0",
    "name": "mobile_listFeedback",
    "group": "2._Mobile_API_>_03._레슨피드백",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/mobile/v1/feedback?courseId=32054'",
        "type": "curl"
      }
    ],
    "parameter": {
      "fields": {
        "Query": [
          {
            "group": "Query",
            "type": "Number",
            "optional": false,
            "field": "courseId",
            "description": "<p>수업식별키</p>"
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
            "description": "<p>예약식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>예약일자</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "startTime",
            "description": "<p>예약수업시간(시작)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>예약수업시간(끝)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "attendanceStatus",
            "description": "<p>출결상태(Y:출석, N:결석 , R:예약)</p>"
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
            "field": "ldfYN",
            "description": "<p>ldf유무</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"[\n     {\n         \"id\": 2614109,\n         \"date\": \"2024-01-03\",\n         \"startTime\": \"06:00 PM\",\n         \"endTime\": \"06:30 PM\",\n         \"attendanceStatus\": \"Y\",\n         \"teacherName\": \"Olivia1\",\n         \"ldfYN\": \"N\"\n     },\n     {\n         \"id\": 2614108,\n         \"date\": \"2024-01-03\",\n         \"startTime\": \"05:30 PM\",\n         \"endTime\": \"06:00 PM\",\n         \"attendanceStatus\": \"Y\",\n         \"teacherName\": \"Olivia1\",\n         \"ldfYN\": \"N\"\n     },\n     {\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/03_feedback/01_list_feedback.js",
    "groupTitle": "2._Mobile_API_>_03._레슨피드백"
  },
  {
    "type": "get",
    "url": "8080/mobile/v1/feedback/{id}",
    "title": "03. ldf 상세보기",
    "description": "<p>모바일 &gt; 피드백 목록조회 &gt; ldf 상세조회<br/></p>",
    "version": "1.0.0",
    "name": "mobile_listFeedbackdetail",
    "group": "2._Mobile_API_>_03._레슨피드백",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/mobile/v1/feedback/2532931'",
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
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ldf식별키</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lesson",
            "description": "<p>Lesson</p>"
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
            "description": "<p>Sentence Structure &amp; Gramm</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contentC",
            "description": "<p>Comment</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "grade",
            "description": "<p>평점</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "evaluation",
            "description": "<p>평가</p>"
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
            "description": "<p>수업시작시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "endTime",
            "description": "<p>수업종료시간</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "teacherName",
            "description": "<p>강사명</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n /*\n{\n    \"id\": 335375,\n    \"lesson\": \"400 - 1\",\n    \"contentSp\": \"<p>-He doesn't know where he has to go.&nbsp;</p> <p>-She wants to pay her fee.&nbsp;</p> <p>-$8.20 = it's eight dollars and twenty cents / 'it's eight-twenty'&nbsp;</p> <p><br /></p> <p>-fare - transportation&nbsp;</p> <p>-fee - a service / education / penalties&nbsp;</p> <p><br /></p> <p>-another -- an + other&nbsp;</p> <p>-the others = the other items in a set (not including the item your focused)&nbsp;</p> <p><br /></p> <p>'This car looks cool! The others, I don't really care about.' *there are six cars and one of them is cool-looking&nbsp;</p> <p><br /></p> <p>-We have take another bicycle.&nbsp;</p>\",\n    \"contentV\": \"<p>-We have to take another road / path.&nbsp;</p> <p><br /></p> <p>-Sure!&nbsp;</p> <p>-That's fine.&nbsp;</p> <p>-No problem.&nbsp;</p> <p><br /></p> <p>-Can we take another way? Yes, we can.&nbsp;</p> <p><br /></p> <p>-Could you drop me off at the nearest subway station?</p> <p><br /></p> <p>-How much is the apple?&nbsp;</p> <p>-How much are the apples?&nbsp;</p>\",\n    \"contentSg\": \"<p>-It's eight-twenty.</p> <p>-bucks&nbsp;</p> <p><br /></p> <p>-We have to . . . / We need to . . . / It necessary to . . . + verb&nbsp;</p> <p><br /></p> <p>-Take v. = to choose a way . . .&nbsp; / to choose a mode of transportation . . .&nbsp;</p> <p><br /></p> <p>-drop me off . . . / let me out . . . / let me off . . .</p> <p><br /></p> <p>-Could you take me to the subway station?</p> <p><br /></p> <p>-Take me on . . . = 1. I'll take you on! -- I'll fight you! 2. hiring -- 'We've decided to take you on . . .'&nbsp;&nbsp;</p>\",\n    \"contentC\": \"<p>-</p>\",\n    \"grade\": null,\n    \"evaluation\": null,\n    \"date\": \"2023.08.02 Wed\",\n    \"startTime\": \"09:30 PM\",\n    \"endTime\": \"10:00 PM\",\n    \"teacherName\": \"Alex\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/03_feedback/03_get_ldf.js",
    "groupTitle": "2._Mobile_API_>_03._레슨피드백"
  },
  {
    "type": "put",
    "url": "/mobile/v1/feedback",
    "title": "02. 레슨피드백 평점 등록",
    "description": "<p>Ldf 상세 조회 시 평점과 평가 등록</p>",
    "version": "1.0.0",
    "name": "mobile_updateFeedback",
    "group": "2._Mobile_API_>_03._레슨피드백",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http:/localhost:8080/mobile/v1/feedback' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"id\":291785,\n           \"grade\":4.5,\n           \"evaluation\" : \"재확인\"\n       }\"",
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
            "field": "id",
            "description": "<p>Ldf 식별키</p>"
          },
          {
            "group": "Body",
            "type": "Number",
            "optional": false,
            "field": "grade",
            "description": "<p>평점</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "evaluation",
            "description": "<p>평가</p>"
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
    "filename": "src/2_mobile-api/03_feedback/02_update_feedback_evaluation.js",
    "groupTitle": "2._Mobile_API_>_03._레슨피드백"
  },
  {
    "type": "get",
    "url": "mobile/v1/myinfo",
    "title": "02. 내정보보기",
    "description": "<p>햄버거 메뉴 &gt; 더보기 &gt; 접속정보</p>",
    "version": "1.0.0",
    "name": "mobile_getmyinfo",
    "group": "2._Mobile_API_>_04._회원정보",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X GET 'http://localhost:8080/mobile/v1/myinfo'",
        "type": "curl"
      }
    ],
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
            "field": "loginId",
            "description": "<p>로그인아이디</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>회원이름</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "courseStatus",
            "description": "<p>수강상태(ATTENDING:수강중, WAITING:수강대기중, COMPLETE:수강완료, null: 수강 기록 없음)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\"{\n        \"id\": \"M1723792542723767\",\n        \"loginId\": \"duswls3000\",\n        \"name\": \"회원테스트\",\n        \"courseStatus\": null\n    }\"",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/04_user/02_get_myinfo.js",
    "groupTitle": "2._Mobile_API_>_04._회원정보"
  },
  {
    "type": "put",
    "url": "/mobile/v1/password",
    "title": "01. 비밀번호 변경",
    "description": "<p>햄버거메뉴 &gt; 더보기 &gt; 비밀번호 변경</p>",
    "version": "1.0.0",
    "name": "mobile_updatepassword",
    "group": "2._Mobile_API_>_04._회원정보",
    "examples": [
      {
        "title": "REQUEST",
        "content": "curl -i -X PUT 'http:/localhost:8080/mobile/v1/password' \\\n-H \"Content-Type: application/json\" \\\n-d \"{\n           \"password\":\"dus12345\",\n           \"newPassword\":\"dus1234\",\n           \"checkPassword\" :\"dus1234\"\n       }\"",
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
            "field": "password",
            "description": "<p>현재 비밀번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>새비밀번호</p>"
          },
          {
            "group": "Body",
            "type": "String",
            "optional": false,
            "field": "checkPassword",
            "description": "<p>새비밀번호확인</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SUCCESS",
          "content": "HTTP/1.1 200\n\n {\n     \"message\": \"비밀번호가 변경되었습니다.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/2_mobile-api/04_user/01_update_password.js",
    "groupTitle": "2._Mobile_API_>_04._회원정보"
  }
] });
