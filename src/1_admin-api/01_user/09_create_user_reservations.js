/**
 * @api {post} /admin/v1/users/{id}/reservations 09. 예약 등록
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUserReservations
 * @apiGroup 1. Admin API > 1. 회원관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/users/M1699689011700418/reservations' \
 * -H "Content-Type: application/json" \
 * -d "{
    "reservations": [
        {
            "courseId": 1,
            "scheduleId": 2
        },
        {
            "courseId": 10,
            "scheduleId": 100
        }
    ]
}"
 *
 * @apiParam (Body) {Object[]} reservations 등록할 예약 목록
 * @apiParam (Body) {Number} reservations.courseId 과정 식별키
 * @apiParam (Body) {Number} reservations.scheduleId 담임강사 또는 부담임강사 스케줄 식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */