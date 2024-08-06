/**
 * @api {put} /admin/v1/teachers/cgt 11. CGT 스케줄 등록
 *
 * @apiDescription 강사관리 > CGT스케줄 > 등록 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_createCgt
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/cgt' \
 * -H "Content-Type: application/json" \
 * -d "{
           "date":"2023-11-04",
           "startTime":"07:30",
           "teacherId":"M1695013438115743",
           "type":"CGT",
           "reservationLimit":4
       }"
 *
 * 
 * @apiParam (Body) {String} date 예약일(yyyy-MM-dd)
 * @apiParam (Body) {String} startTime 예약시간(HH:mm)
 * @apiParam (Body) {String} teacherId 강사식별키
 * @apiParam (Body) {String} type 수강명(CGT로 넘겨주세요)
 * @apiParam (Body) {Number} reservationLimit 정원(추가된기능으로 최대4입니다)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */