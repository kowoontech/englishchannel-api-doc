/**
 * @api {get} /mobile/v1/reservations/cancelable 10. 예약 취소 가능여부
 *
 * @apiDescription 시간별, 강사별 예약
 *
 * @apiVersion 1.0.0
 * @apiName mobile_getCancelableDate
 * @apiGroup 2. Mobile API > 02. 예약
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/api/mobile/v1/reservations/cancelable?date=2024-04-01'
 *
 * @apiParam (Query) {String} date 조회 날짜 (yyyy-MM-dd)
 *
 * @apiSuccess {Boolean} cancelable 취소 가능 여부
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
    "cancelable": "false"
 * }"
 */
