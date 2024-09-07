/**
 * @api {put} api/admin/v1/reservations/attendanceStatus 02. 출결처리 변경 api
 *
 * @apiDescription 강의시간표 출결 변경 api <br/>
 * 강의 시간표 조회 시 예약된 회원의 출결 수정을 위해 사용 <br/>
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateAttendanceStatus
 * @apiGroup 1. Admin API > 10. 스케줄
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/api/admin/v1/reservations/attendanceStatus' \
 * -H "Content-Type: multipart/form-data" \
 * -d "{
           "attendanceStatus" : "R",
           "reservationId": 2731922
       }"
 *
 * 
 * @apiParam (Body) {String} attendanceStatus 출결상태(Y:출석,N:결석,R:예약)
 * @apiParam (Body) {Number} reservationId 예약 식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */