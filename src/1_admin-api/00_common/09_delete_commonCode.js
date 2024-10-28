/**
 * @api {put} api/admin/v1/commonCode/{codeId} 09. 공통 코드 삭제 
 *
 * @apiDescription 공통 코드 관리
 *
 * @apiVersion 1.0.0
 * @apiName admin_deleteCommonCode
 * @apiGroup 1. Admin API > 00. 공통
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/api/admin/v1/commonCode/{id}'
 *
 * @apiParam (Path) {String} id 코드 식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */