/**
 * @api {delete} /admin/v1/users/{id} 21. 회원 삭제
 *
 * @apiDescription 회원관리 > 기본 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_deleteUser
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/admin/v1/users/M1701411293447353'
 *
 * @apiParam (Path) {String} id 회원 식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */