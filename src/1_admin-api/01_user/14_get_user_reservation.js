/**
 * @api {get} /admin/v1/users/{id}/reservations/{reservationId} 14. 회원 예약 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 학습 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUserReservation
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1427783489308244/reservations/1366328'
 * 
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {Number} reservationId 예약 식별키
 *
 * @apiSuccess {String} id 예약 식별키
 * @apiSuccess {String} date 수업일 (yyyy-MM-dd (EEE))
 * @apiSuccess {String} startTime 수업시작시간 (HH:mm)
 * @apiSuccess {String} endTime 수업종료시간 (HH:mm)
 * @apiSuccess {String} attendanceStatus 출결 (Y: 출석, N: 결석, R: 예약)
 * @apiSuccess {String} courseName 과정명
 * @apiSuccess {String} [report] 학사보고서
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": 1366328,
    "date": "2018-03-05 (Mon)",
    "startTime": "08:00",
    "endTime": "08:30",
    "courseName": "PTM (주2회 6개월)/29.0회",
    "attendanceStatus": "Y",
    "report": "1:1 inter 17(done) 두번째 다이얼로그 마무리. 주요표현들을 모두 잘기억하고계심."
}
 */