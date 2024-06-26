/**
 * @api {delete} /admin/v1/teachers/{id}  05. 상담삭제
 *
 * @apiDescription 강사관리 > 강사상세조회 > 삭제 <br/>
 * 데이터가 많지 않아 오류 가능성 높음. M1594795852631377 안될시 알려주세요.
 *
 * @apiVersion 1.0.0
 * @apiName admin_deleteUser
 * @apiGroup 1. Admin API > 5. 강사관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/admin/v1/teachers/M1594795852631377'
 *
 * @apiParam (Path) {String} [id] 강사식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */