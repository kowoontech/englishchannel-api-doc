/**
 * @api {put} /admin/v1/reservations/report/{reservationId} 03. 학사보고서 수정/등록
 *
 * @apiDescription 회원관리 > 학사보고서 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateUserReservations
 * @apiGroup 1. Admin API > 3. 학사보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/reservations/report/1317368
 * -H "Content-Type: application/json" \
 * -d "{
    "attendanceStatus" : "N",
    "report" : "TEST"
}"
 *
 * @apiParam (Path) {String} id 예약식별키
 * 
 * @apiParam (Body) {String} 참석여부(Y:출석 , N:결석, R:예약)
 * @apiParam (Body) {String} report 학사보고서내용
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */