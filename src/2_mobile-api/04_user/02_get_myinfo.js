/**
 * @api {get} mobile/v1/myinfo 02. 내정보보기
 *
 * @apiDescription 햄버거 메뉴 > 더보기 > 접속정보
 *
 * @apiVersion 1.0.0
 * @apiName mobile_getmyinfo
 * @apiGroup 2. Mobile API > 04. 회원정보
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/mobile/v1/myinfo'
 *
 *
 * @apiSuccess {String} id 회원 식별키
 * @apiSuccess {String} loginId 로그인아이디
 * @apiSuccess {String} name 회원이름
 * @apiSuccess {String} courseStatus 수강상태(ATTENDING:수강중, WAITING:수강대기중, COMPLETE:수강완료, null: 수강 기록 없음)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
        "id": "M1723792542723767",
        "loginId": "duswls3000",
        "name": "회원테스트",
        "courseStatus": null
    }"
 */