/**
 * @api {post} /admin/v1/users/{id}/reservations 09. 예약 등록
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록 > 일정 체크 후 저장
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUserReservations
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/users/M1699689011700418/reservations' \
 * -H "Content-Type: application/json" \
 * -d "{
    "courseId": 1,
    "scheduleIds": [10, 11, 12]
}"
 *
 * @apiParam (Body) {Number} courseId 예약할 과정 식별키
 * @apiParam (Body) {Number[]} scheduleIds 예약할 담임강사 또는 부담임강사 스케줄 식별키 목록
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */