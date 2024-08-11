/**
 * @api {post} /mobile/v1/reservations 05. 예약하기
 *
 * @apiDescription 강사/시간/나머지 스케줄 선택 후 최종 예약하기
 *
 * @apiVersion 1.0.0
 * @apiName mobile_createReservations
 * @apiGroup 2. Mobile API > 02. 예약
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/mobile/v1/reservations' \
 * -H "Content-Type: application/json" \
 * -H "Authorization: 2191d3aa-d33d-4677-9da0-44556277ab39"
 * -d "{
 *     "courseId": 75615,
 *     "date": "2024-10-10",
 *     "time": "18:00",
 *     "teacherId": "M1681990831501448",
 *     "remainScheduleId": 9525312
 * }"
 *
 * @apiParam (Body) {Number} courseId 메인에서 예약 시작할때 선택되어 있던 수강 식별키
 * @apiParam (Body) {String} date 수업일 (yyyy-MM-dd)
 * @apiParam (Body) {String} time 수업시간 (HH:mm)
 * @apiParam (Body) {String} teacherId 강사 식별키
 * @apiParam (Body) {String} [remainScheduleId] 마지막에 선택한 나머지 스케줄 식별키
 *
 * @apiSuccess {String} date 수업일 (yyyy-MM-dd)
 * @apiSuccess {Object[]} schedules 수업시간 목록
 * @apiSuccess {String} schedules.time 수업시간 (HH:mm)
 * @apiSuccess {String} schedules.teacherName 강사명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
 *     "date": "2024-10-10",
 *     "schedules": [
 *         {
 *             "time": "18:00",
 *             "teacherName": "정지은"
 *         },
 *         {
 *             "time": "18:30",
 *             "teacherName": "정지은"
 *         }
 *     ]
 * }"
 */