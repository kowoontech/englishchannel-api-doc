/**
 * @api {get} /admin/v1/users/{id}/notes 10. 회원 비고 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록 > TIP <br/>
 * modifiedOn null일 시에는 createdOn와 creatorName 출력 <br/>
 * modifiedOn null이 아닐 시에는 modifiedOn, modifierName 출력

 * @apiVersion 1.0.0
 * @apiName admin_listUserNotes
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/ataraxia22/notes?courseId=28071
 *
 * @apiParam (Path) {String} [id] 회원 식별키
 * @apiParam (Query) {Number} [courseId] 수강 식별키
 *
 * @apiSuccess {Number} id 비고 식별키
 * @apiSuccess {String} content 비고 내용
 * @apiSuccess {String} modifiedOn 수정일시 (yyyy-MM-dd HH:mm:ss)
 * @apiSuccess {String} createdOn 등록일시 (yyyy-MM-dd HH:mm:ss)
 * @apiSuccess {String} modifierName 수정자
 * @apiSuccess {String} creatorName 등록자

 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
[

    {
        "id": 2666892,
        "content": "노화선T 불호",
        "modifiedOn": "2020-03-24 19:53:19",
        "modifierName": "배시현",
        "createdOn": "2020-03-24 19:53:19",
        "creatorName": "배시현"
    },
    {
        "id": 2658891,
        "content": "Erin 불호",
        "modifiedOn": "2020-03-17 11:14:23",
        "modifierName": "배규리",
        "createdOn": "2020-03-17 11:14:23",
        "creatorName": "배규리"
    },
    {
        "id": 2657874,
        "content": "6:00pm 월 Brett TT, 수 Erin TT",
        "modifiedOn": "2020-03-16 14:06:30",
        "modifierName": "배시현",
        "createdOn": "2020-03-16 14:06:30",
        "creatorName": "배시현"
    },
    {
        "id": 2642209,
        "content": "노화선 T 불호",
        "modifiedOn": "2020-02-26 13:26:43",
        "modifierName": "신희진",
        "createdOn": "2020-02-26 13:26:43",
        "creatorName": "신희진"
    }
]
}
 */