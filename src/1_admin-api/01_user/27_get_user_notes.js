/**
 * @api {get} /admin/v1/users/{id}/notes/{noteId} 26. 비고 상세 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록 > TIP(비고)
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUserNote
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http:localhost:8080/admin/v1/users/M1537176724121409/notes/2610803'
 *
 * @apiParam (Path) {String} [id] 회원 식별키
 * @apiParam (Path) {Number} [noteId] 식별키
 *
 * @apiSuccess {String} content 비고 내용

 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "content": "2020-01-30 19:00 수업을 결석처리"
}
 */