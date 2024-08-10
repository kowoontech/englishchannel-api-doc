/**
 * @api {delete} /admin/v1/teachers/{id}  04. 강사삭제
 *
 * @apiDescription 강사관리 > 강사상세조회 > 삭제 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_deleteUser
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/admin/v1/teachers/M1594795852631377'
 *
 * @apiParam (Path) {String} [id] 강사식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */