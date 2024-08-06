/**
 * @api {put} /admin/v1/teachers/deletecgt 12. CGT 스케줄 삭제
 *
 * @apiDescription 강사관리 > CGT스케줄 > 삭제 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_deleteCgt
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/deletecgt' \
 * -H "Content-Type: application/json" \
 * -d "{
           "schedules":[9525255,9525256]
       }"
 *
 * 
 * @apiParam (Body) {Number[]} schedules 스케줄식별키 (목록 내 있는 schedules안에 id값들)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */