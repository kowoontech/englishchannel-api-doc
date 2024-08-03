/**
 * @api {delete} /admin/v1/statistics/sms  03. 발송 내역 삭제
 *
 * @apiDescription 강사관리 > 강사상세조회 > 삭제 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_deleteSms
 * @apiGroup 1. Admin API > 06. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/admin/v1/statistics/sms'
 *
 * @apiParam (Body) {Number[]} smsId sms식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */