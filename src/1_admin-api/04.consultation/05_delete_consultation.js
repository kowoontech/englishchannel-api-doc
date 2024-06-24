/**
 * @api {delete} /admin/v1/consultations/{id}  05. 상담삭제
 *
 * @apiDescription 상담관리 > 상세조회 > 삭제
 *
 * @apiVersion 1.0.0
 * @apiName admin_deleteUser
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/admin/v1/consultations/634'
 *
 * @apiParam (Path) {String} id 상담식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */