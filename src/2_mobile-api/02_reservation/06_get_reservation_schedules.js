/**
 * @api {get} /mobile/v1/reservations/schedules 06. 스케줄 목록 조회
 *
 * @apiDescription 캘린더에서 선택한 년월의 스케줄 목록 조회
 *
 * @apiVersion 1.0.0
 * @apiName mobile_getReservationSchedules
 * @apiGroup 2. Mobile API > 02. 예약
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/mobile/v1/reservations/schedules?yearMonth=2024-10'
 *
 * @apiParam (Query) {String} yearMonth 조회 년월 (yyyy-MM)
 *
 * @apiSuccess {Object[]} schedules 스케줄 목록
 * @apiSuccess {String} schedules.date 수업일 (yyyy-MM-dd)
 * @apiSuccess {Object[]} schedules.reservations 예약 목록
 * @apiSuccess {Number} schedules.reservations.id 예약 식별키
 * @apiSuccess {String} schedules.reservations.startTime 시작 시간 (HH:mm)
 * @apiSuccess {String} schedules.reservations.endTime 종료 시간 (HH:mm)
 * @apiSuccess {String} schedules.reservations.attendanceStatus 출석 상태 코드 (R)
 * @apiSuccess {String} schedules.reservations.attendanceStatusLabel 출석 상태 (예약)
 * @apiSuccess {String} schedules.reservations.teacherName 강사명
 * @apiSuccess {Boolean} schedules.reservations.isCancelable 취소 가능 여부
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
 *     "schedules": [
 *         {
 *             "date": "2024-10-01",
 *             "reservations": []
 *         },
 *         {
 *             "date": "2024-10-10",
 *             "reservations": [
 *                 {
 *                     "id": 2626313,
 *                     "startTime": "18:00",
 *                     "endTime": "18:30",
 *                     "attendanceStatus": "R",
 *                     "attendanceStatusLabel": "예약",
 *                     "teacherName": "정지은",
 *                     "isCancelable": true
 *                 },
 *                 {
 *                     "id": 2626314,
 *                     "startTime": "18:30",
 *                     "endTime": "19:00",
 *                     "attendanceStatus": "R",
 *                     "attendanceStatusLabel": "예약",
 *                     "teacherName": "정지은",
 *                     "isCancelable": true
 *                 }
 *             ]
 *         },
 *         {
 *             "date": "2024-10-31",
 *             "reservations": []
 *         }
 *     ]
 * }"
 */