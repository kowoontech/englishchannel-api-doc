/**
 * @api {put} /admin/v1/users/{id}/courses/{courseId} 13. 회원 수강 수정
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 수강 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateUserCourse
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/users/M1672401688362469/courses/75615'
 * -H "Content-Type: application/json" \
 * -d "{
    "lessonCount":50,
    "startDate":"2023-12-30",
    "endDate":"2024-12-29",
    "teacherId":"M1695013438115743"
}"
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {Number} courseId 수강 식별키
 * 
 * @apiParam (Body) {Number} lessonCount 레슨횟수
 * @apiParam (Body) {String} [countChangeReason] 레슨횟수 변경시사유
 * @apiParam (Body) {String} startDate 수강기간 시작일 (yyyy-mm-dd)
 * @apiParam (Body) {String} endDate 수강기간 종료일 (yyyy-mm-dd)
 * @apiParam (Body) {String} [dateChangeReason] 수강기간 변경시사유
 * @apiParam (Body) {String} [reservations.cancelReason] 취소 사유
 * @apiParam (Body) {String} teacherId 담임강사 실별키
 * @apiParam (Body) {String} [assistantTeacherId] 부담임강사 식별키
 * @apiParam (Body) {String} [status] 상태 (WAITING: 대기, NORMAL: 정상, CANCEL: 취소)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */