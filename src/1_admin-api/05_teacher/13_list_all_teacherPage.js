/**
 * @api {get} /teacher/v1/teachers 13. 강사계정: 강사목록(영문포함)
 *
 * @apiDescription 강사 계정 페이지 > 강사 목록 조회 > <br/>
 * 페이징처리X , 단순 목록 조회 시 사용
 *
 * @apiVersion 1.0.0
 * @apiName all_teacherPage
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/teacher/v1/teachers'
 *
 * @apiSuccess {Number} [listNumber] 목록번호
 * @apiSuccess {String} [userId] 강사식별키
 * @apiSuccess {String} [type] 강사타입(LT:외국인강사,HT:한국인강사)
 * @apiSuccess {String} teacherName 강사명
 * @apiSuccess {String} teacherEnName 강사영문명
 * @apiSuccess {String} [email] 강사 email
 * @apiSuccess {String} [cellPhone] 강사 핸드폰번호
 * @apiSuccess {String} [workTime] 강사 시간 타입(AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4)
 * @apiSuccess {String} [sort] 순번
 * @apiSuccess {boolean} [active] 활동여부(활동:true,비활동:false)
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
[
    {
        "listNumber": 0,
        "userId": "M1594795852631377",
        "type": "LT",
        "teacherName": "Steven",
        "teacherEnName": "Steven Trecek",
        "email": "sjtrecek@gmail.com",
        "cellPhone": "m+r8K+/oSue6/4ypbr44XA==",
        "workTime": null,
        "sort": 0,
        "active": true
    },
    {
        "listNumber": 0,
        "userId": "M1681990831501448",
        "type": "HT",
        "teacherName": "정지은",
        "teacherEnName": "Grace ",
        "email": "nansilverya@hanmail.net",
        "cellPhone": "3m8tI6TQJNhTNq3m/Z4OCg==",
        "workTime": null,
        "sort": 36,
        "active": true
    },
    {
        "listNumber": 0,
        "userId": "M1691559227102239",
        "type": "LT",
        "teacherName": "Sadie",
        "teacherEnName": "Sadie Rose",
        "email": "sadie.rose320@gmail.com",
        "cellPhone": "7ENYpiRFRKBxPco0BXgo1A==",
        "workTime": null,
        "sort": 0,
        "active": true
    },
    {
        "listNumber": 0,
        "userId": "M1693558129675151",
        "type": "LT",
        "teacherName": "Tyler",
        "teacherEnName": "Tyler Tran",
        "email": "tytn2017@gmail.com",
        "cellPhone": "Jo6hJocYWTcHnbhkaqAOvg==",
        "workTime": null,
        "sort": 0,
        "active": true
    },
    {
        "listNumber": 0,
        "userId": "M1723370523381628",
        "type": "HT",
        "teacherName": "TEST이름",
        "teacherEnName": null,
        "email": "email.naver.com",
        "cellPhone": null,
        "workTime": null,
        "sort": 0,
        "active": true
    }
]
 */