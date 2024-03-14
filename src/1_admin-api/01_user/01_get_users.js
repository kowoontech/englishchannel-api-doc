/**
 * @api {get} /admin/v1/users 01. 회원 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUsers
 * @apiGroup 1. Admin API
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users'
 *
 * @apiParam (Query) [createDateFrom] 가입일자 검색 ~부터 (yyyy-mm-dd)
 * @apiParam (Query) [createDateTo] 가입일자 검색 ~까지 (yyyy-mm-dd)
 * @apiParam (Query) [type] 구분 (W: 오프라인등록회원, V: 웹회원)
 * @apiParam (Query) [isActive] 상태 (true: 활동, false: 비활동)
 * @apiParam (Query) [limit] 한페이지에 보여줄 회원 수
 * @apiParam (Query) [search] 검색 선택 (name: 이름, loginId: 아이디, email: 이메일, company: 회사/직장명, phone: 전화번호, cellPhone: 휴대전화번호)
 * @apiParam (Query) [keyword] 검색어
 * @apiParam (Query) [page] 조회할 페이지
 * @apiParam (Query) [order] 정렬 선택
 * @apiParam (Query) [direction] 정렬 방향 (ASD: 오름차순, DESC: 내림차순)
 * @apiParam (Query) [TBD] 등록구분, 담당강사, 수강상태 확인필요
 *
 * @apiSuccess {Object[]} list 회원 목록
 * @apiSuccess {Number} list.id 회원 식별키
 * @apiSuccess {String} list.name 이름
 * @apiSuccess {String} [list.nickname] 별명
 * @apiSuccess {String} list.email 이메일
 * @apiSuccess {String} list.cellPhone 휴대전화번호
 * @apiSuccess {String} [list.company] 회사/직장명 (list에서 구분 데이터)
 * @apiSuccess {String} list.createDate 가입일 (list에서 이름 아래 표시)
 * @apiSuccess {Number} totalCount 전체 회원 수
 * @apiSuccess {Number} page 현재 페이지
 * @apiSuccess {Number} limit 한페이지에 보여줄 회원 수
 * @apiSuccess {Number} totalPage 전체 페이지 수
 * @apiSuccess {Number} startPage 페이징 영역에 노출될 첫 페이지
 * @apiSuccess {Number} endPage 페이징 영역에 노출될 마지막 페이지
 * @apiSuccess {Boolean} hasPrev 전 페이징 영역 존재 여부
 * @apiSuccess {Boolean} hasNext 다음 페이징 영역 존재 여부
 * @apiSuccess {Boolean} isFirst 첫 페이징 영역 여부
 * @apiSuccess {Boolean} isLast 마지막 페이징 영역 여부
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * {
    "list": [
        {
            "id": 9049,
            "name": "황순안",
            "nickname": "",
            "email": "1028151@naver.com",
            "cellPhone": "gOI7YKz4khanfsIk9Wc/Wg==",
            "company": "필립스",
            "createDate": "2007-03-10"
        },
        {
            "id": 9048,
            "name": "trial",
            "nickname": "NULL",
            "email": "",
            "cellPhone": "",
            "company": "",
            "createDate": "2007-03-12"
        },
        {
            "id": 9047,
            "name": "신혜정(6)",
            "nickname": "",
            "email": "Jung81@hanmail.net",
            "cellPhone": "ir6AWdZaG3cyl7iaLn/vWA==",
            "company": "",
            "createDate": "2007-03-14"
        },
        {
            "id": 9046,
            "name": "이경란(6)",
            "nickname": "",
            "email": "1028238@naver.com",
            "cellPhone": "bzsxKc8rSfi0SYlKEK4V6g==",
            "company": "",
            "createDate": "2007-03-14"
        },
        {
            "id": 9045,
            "name": "이영진(6)",
            "nickname": "",
            "email": "1028792@naver.com",
            "cellPhone": "AH7uYqBQ9U4QqYCICnQrLw==",
            "company": "(주)이원이앤씨",
            "createDate": "2007-04-13"
        },
        {
            "id": 9044,
            "name": "함형택",
            "nickname": "",
            "email": "1029034@naver.com",
            "cellPhone": "AToyr1ia+3AnDeBFeCY/TQ==",
            "company": "",
            "createDate": "2007-04-27"
        },
        {
            "id": 9043,
            "name": "신용다",
            "nickname": "",
            "email": "1029325@naver.com",
            "cellPhone": "OTglatIm5cwqIVr6O78A7g==",
            "company": "대한공인중개사무소",
            "createDate": "2007-05-11"
        },
        {
            "id": 9042,
            "name": "노하형(6)",
            "nickname": "",
            "email": "1029458@naver.com",
            "cellPhone": "PGRRhMsscaV0lUxnhBEmcg==",
            "company": "",
            "createDate": "2007-05-21"
        },
        {
            "id": 9041,
            "name": "이영재(6)",
            "nickname": "",
            "email": "hanilceo@hanilworld.com",
            "cellPhone": "Vi9mlIAjWtm05JWVKNlRqA==",
            "company": "한일월드(주)",
            "createDate": "2007-05-25"
        },
        {
            "id": 9040,
            "name": "문경하",
            "nickname": "",
            "email": "biomoon88@naver.com",
            "cellPhone": "AXAzEvHSnhNUdZbhAS/Ckg==",
            "company": "",
            "createDate": "2007-05-29"
        }
    ],
    "totalCount": 4899,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "startPage": 1,
    "totalPage": 490,
    "endPage": 10,
    "hasNext": true,
    "hasPrev": false,
    "isFirst": true,
    "isLast": false
}
 */