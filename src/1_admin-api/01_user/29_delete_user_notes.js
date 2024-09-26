/**
 * @api {delete} /admin/v1/users/notes/{id} 29. 비고 삭제
 *
 * @apiDescription 회원관리 > 예약 > 예약등록 > TIP
 *
 * @apiVersion 1.0.0
 * @apiName admin_User_Note
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/admin/v1/users/notes/2610931'
 *
 * @apiParam (Path) {String} id 비고식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */