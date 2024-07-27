/**
 * @api {get} /admin/v1/consultations/history/{id} 08. 추가 상담 목록
 *
 * @apiDescription 상담관리 > 상세페이지 조회 > 추가 상담 이력 <br/>
 * 상세 페이지 들어올 때 상담 식별키 가져옴
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserNotes
 * @apiGroup 1. Admin API > 4. 상담관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/consultations/history/520
 *
 * @apiParam (Path) {Number} [id] 상담 식별키
 *
 *
 * @apiSuccess {Number} id 추가 상담 식별키
 * @apiSuccess {String} details 추가 상담 내용
 * @apiSuccess {String} modifiedName 수정한사람
 * @apiSuccess {String} date 날짜
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
[
    {
        "id": 1,
        "details": "test",
        "modifiedName": "황순안",
        "createdName": "황순안"
    },
    {
        "id": 2,
        "details": "test1",
        "modifiedName": "황순안",
        "createdName": "황순안"
    },
    {
        "id": 3,
        "details": "test2",
        "modifiedName": "황순안",
        "createdName": "황순안"
    }
]
 */