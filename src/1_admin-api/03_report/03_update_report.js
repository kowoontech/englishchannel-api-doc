/**
 * @api {put} /admin/v1/reservations/report/{reservationId} 03. 학사보고서 수정/등록
 *
 * @apiDescription 회원관리 > 학사보고서 <br/>
 * 강의시간표 조회 시 회원의 출결 상태 (출석,결석,출결 취소)를 바꿀 때 사용.
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateReport
 * @apiGroup 1. Admin API > 03. 학사보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/reservations/report/1317329'
 * -H "Content-Type: application/json" \
 * -d "{
           "attendanceStatus" :"Y",
           "content" : "중간",
           "todayLesson": "처음",
           "nextLesson":"마지막"
       }"
 *
 * @apiParam (Path) {String} id 예약식별키
 *
 * @apiParam (Body) {String} attendanceStatus 참석여부(Y:출석 , N:결석, R:예약)
 * @apiParam (Body) {String} [todayLesson] Today's Lesson
 * @apiParam (Body) {String} [content] 보고서(Lesson Content and Feedback)
 * @apiParam (Body) {String} [nextLesson] Next Lesson
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */