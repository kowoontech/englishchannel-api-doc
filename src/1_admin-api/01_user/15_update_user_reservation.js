/**
 * @api {put} /admin/v1/users/{id}/reservations/{reservationId} 15. 회원 예약 수정(학사보고서)
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 학습 탭 > 학사보고서 등록/수정
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateUserReservation
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/users/M1427783489308244/reservations/1366328' \
 * -H "Content-Type: application/json" \
 * -d "{
    "attendanceStatus": "Y",
    "report": "학사보고서"
}"
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {String} reservationId 예약 식별키
 * 
 * @apiParam (Body) {String} [attendanceStatus] 출결 상태 (R: 예약, Y: 출석, N: 결석) 
 * @apiParam (Body) {String} [report] 취소 사유
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */