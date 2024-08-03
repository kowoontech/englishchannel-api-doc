/**
 * @api {put} /admin/v1/users/{id}/consultations/{consultationId} 35. 회원 상담 수정
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 상담 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateUserConsultation
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/users/M1374063899995477/consultations/296728' \
 * -H "Content-Type: application/json" \
 * -d "{
 *     "consultationDate": "2024-01-01 10:00",
 *     "type": "ETC",
 *     "details": "기타 상담1"
 * }"
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {String} consultationId 회원 상담 식별키
 *
 *
 * @apiParam (Body) {String} consultationDate 상담일시 (yyyy-MM-dd HH:mm)
 * @apiParam (Body) {String} type 구분 (COURSE_REGISTRATION: 수강등록, PROGRESS: 진도, LESSON: 레슨, RESERVATION: 예약, CLASS_CONTENT: 수업내용, TEACHER: 강사, ETC: 기타)
 * @apiParam (Body) {String} details 상담내용
 * @apiParam (Body) {String} topFixedYn 상단고정 [체크:Y 아닐시 N]
 * @apiParam (Body) {String} fontBoldYn 상담 내용 굵게 [체크:Y 아닐시 N]
 * @apiParam (Body) {String} backgroundColor 배경색 [10:배경색 없음, 20:주황색, 30:노랑색, 40형광색]
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */