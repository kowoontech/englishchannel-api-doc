/**
 * @api {post} /admin/v1/teachers/reservationCgt 14. CGT 예약(운영자)
 *
 * @apiDescription 강사관리 > CGT스케줄 > 목록 > 회원 예약 <br/>
 *  예약자 인원 클릭 시 예약자 명단 확인 가능. 추가 수강생 예약
 *
 * @apiVersion 1.0.0
 * @apiName admin_createCgtmember
 * @apiGroup 2. Mobile API > 02. 예약
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/reservationCgt' \
 * -H "Content-Type: application/json" \
 * -d "{
           "schedules":[9525345,9525351],
           "date" : "2024-08-16",
           "teacherId":"M1723613351792159",
           "userId":"1029034"
       }"
 *
 * 
 * @apiParam (Body) {Number[]} schedules schedule 식별키
 * @apiParam (Body) {String} date 날짜 (yyyy-MM-dd)
 * @apiParam (Body) {String} teacherId 강사식별키
 * @apiParam (Body) {String} userId 회원식별키
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */