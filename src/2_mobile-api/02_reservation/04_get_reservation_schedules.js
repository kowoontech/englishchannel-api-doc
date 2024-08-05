/**
 * @api {get} /mobile/v1/reservations/schedules 04. 예약 가능한 스케줄 목록 조회
 *
 * @apiDescription 시간별, 강사별 예약
 *
 * @apiVersion 1.0.0
 * @apiName mobile_getReservationSchedules
 * @apiGroup 2. Mobile API > 02. 예약
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/mobile/v1/reservations/schedules?date=2024-01-31&times=13:00&times=13:30&teacherIds=M1691559227102239&teacherIds=M1661138591404520'
 *
 * @apiParam (Query) {String} date 조회 날짜 (yyyy-MM-dd)
 * @apiParam (Query) {String} times 선택한 시간 (복수)
 * @apiParam (Query) {String} teacherIds 강사 식별키 (복수)
 *
 * @apiSuccess {Object[]} schedules 스케줄 목록
 * @apiSuccess {Number} schedules.id 스케줄 식별키
 * @apiSuccess {String} schedules.teacherId 강사 식별키
 * @apiSuccess {String} schedules.teacherName 강사명
 * @apiSuccess {String} schedules.startTime 시작시간
 * @apiSuccess {String} schedules.endTime 종료시간
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
 *     "schedules": [
 *         {
 *             "id": 9212045,
 *             "teacherId": "M1661138591404520",
 *             "teacherName": "최태연",
 *             "startTime": "13:00",
 *             "endTime": "13:30"
 *         },
 *         {
 *             "id": 9212090,
 *             "teacherId": "M1661138591404520",
 *             "teacherName": "최태연",
 *             "startTime": "13:30",
 *             "endTime": "14:00"
 *         },
 *         {
 *             "id": 9208892,
 *             "teacherId": "M1691559227102239",
 *             "teacherName": "Sadie",
 *             "startTime": "13:00",
 *             "endTime": "13:30"
 *         },
 *         {
 *             "id": 9208889,
 *             "teacherId": "M1691559227102239",
 *             "teacherName": "Sadie",
 *             "startTime": "13:30",
 *             "endTime": "14:00"
 *         }
 *     ]
 * }"
 */