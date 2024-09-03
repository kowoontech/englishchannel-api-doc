/**
 * @api {get} /mobile/v1/reservations/times 02. 예약 가능한 시간 목록 조회
 *
 * @apiDescription 시간별, 강사별 예약
 *
 * @apiVersion 1.0.0
 * @apiName mobile_getReservationTimes
 * @apiGroup 2. Mobile API > 02. 예약
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/api/mobile/v1/reservations/times?date=2024-04-01&teacherId=M1400118325784523'
 *
 * @apiParam (Query) {String} date 조회 날짜 (yyyy-MM-dd)
 * @apiParam (Query) {String} [teacherId] 앞에서 선택한 강사 식별키, 강사 먼저 선택했을 경우 사용
 *
 * @apiSuccess {String[]} times 시간 목록
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
    "times": [
        "01:00 PM",
        "01:30 PM",
        "02:00 PM",
        "02:30 PM",
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
        "04:30 PM",
        "06:00 PM",
        "06:30 PM",
        "07:00 PM",
        "07:30 PM"
    ]
 * }"
 */