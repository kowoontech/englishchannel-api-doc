/**
 * @api {post} /admin/v1/users/{id}/consultations 17. 회원 상담 등록
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 상담 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUserConsultation
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/users/M1374063899995477/consultations' \
 * -H "Content-Type: application/json" \
 * -d "{
    "consultationDate": "2024-01-01 09:00",
    "type": "ETC",
    "details": "기타 상담"
}"
 *
 * @apiParam (Body) {String} consultationDate 상담일시 (yyyy-MM-dd HH:mm)
 * @apiParam (Body) {String} type 구분 (COURSE_REGISTRATION: 수강등록, PROGRESS: 진도, LESSON: 레슨, RESERVATION: 예약, CLASS_CONTENT: 수업내용, TEACHER: 강사, ETC: 기타)
 * @apiParam (Body) {String} details 상담내용
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */