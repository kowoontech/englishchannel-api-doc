/**
 * @api {delete} /admin/v1/statistics/sms/{id}  04. 강사삭제
 *
 * @apiDescription 강사관리 > 강사상세조회 > 삭제 <br/>
 * 데이터가 많지 않아 오류 가능성 높음. id:7 사용. 안될시 알려주세요.
 *
 * @apiVersion 1.0.0
 * @apiName admin_deleteSms
 * @apiGroup 1. Admin API > 6. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/admin/v1/statistics/sms/7'
 *
 * @apiParam (Path) {String} [id] sms 식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */