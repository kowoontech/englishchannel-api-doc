/**
 * @api {delete} /admin/v1/statistics/cancelSms  08. SMS 예약취소
 *
 * @apiDescription 통계보고서 > SMS현황> 대기내역 > 예약취소 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_deleteSms
 * @apiGroup 1. Admin API > 06. 통계보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/admin/v1/statistics/cancelSms'
 *
 * @apiParam (Body) {Number[]} id sms식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */