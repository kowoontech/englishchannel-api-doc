/**
 * @api {get} /mobile/v1/reservations/teachers 03. 예약 가능한 강사 목록 조회
 *
 * @apiDescription 시간별, 강사별 예약
 *
 * @apiVersion 1.0.0
 * @apiName mobile_getReservationTeachers
 * @apiGroup 2. Mobile API > 02. 예약
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/mobile/v1/reservations/teachers?date=2024-01-31&times=13:00&times=13:30'
 *
 * @apiParam (Query) {String} date 조회 날짜 (yyyy-MM-dd)
 * @apiParam (Query) {String} [times] 선택한 시간 (복수), 시간 먼저 선택했을 경우 사용
 *
 * @apiSuccess {Object[]} teachers 강사 목록
 * @apiSuccess {Object[]} teachers.id 강사 식별키
 * @apiSuccess {Object[]} teachers.name 강사명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
 *     "teachers": [
 *         {
 *             "id": "M1657064932771055",
 *             "name": "김나래"
 *         },
 *         {
 *             "id": "M1661138591404520",
 *             "name": "최태연"
 *         },
 *         {
 *             "id": "M1691559227102239",
 *             "name": "Sadie"
 *         }
 *     ]
 * }"
 */