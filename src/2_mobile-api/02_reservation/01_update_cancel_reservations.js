/**
 * @api {put} /mobile/v1/reservations/cancel 01. 예약 취소
 *
 * @apiDescription 취소할 예약 선택 후 취소
 *
 * @apiVersion 1.0.0
 * @apiName mobile_updateCancelReservations
 * @apiGroup 2. Mobile API > 02. 예약
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/mobile/v1/reservations/cancel' \
 * -H "Content-Type: application/json" \
 * -H "Authorization: 2191d3aa-d33d-4677-9da0-44556277ab39"
 * -d "{
 *     "ids": [
 *         2626311, 2626312
 *     ],
 *     "cancelReason": "test"
 * }"
 *
 * @apiParam (Body) {Number[]} ids 취소할 예약 식별키 목록
 * @apiParam (Body) {String} cancelReason 취소 사유
 *
 * @apiSuccess {Object[]} cancelReservations 취소 예약 목록
 * @apiSuccess {String} cancelReservations.cancelDate 취소일 (yyyy-MM-dd)
 * @apiSuccess {String} cancelReservations.date 수업일 (yyyy-MM-dd)
 * @apiSuccess {String} cancelReservations.startTime 수업시작시간 (HH:mm)
 * @apiSuccess {String} cancelReservations.endTime 수업종료시간 (HH:mm)
 * @apiSuccess {String} cancelReservations.teacherName 강사명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
 *     "cancelReservations": [
 *         {
 *             "cancelDate": "2024-08-11",
 *             "date": "2024-10-10",
 *             "startTime": "18:00",
 *             "endTime": "18:30",
 *             "teacherName": "정지은"
 *         },
 *         {
 *             "cancelDate": "2024-08-11",
 *             "date": "2024-10-10",
 *             "startTime": "18:30",
 *             "endTime": "19:00",
 *             "teacherName": "정지은"
 *         }
 *     ]
 * }"
 */