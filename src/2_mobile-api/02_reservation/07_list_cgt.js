/**
 * @api {get} /mobile/v1/reservations/cgt 07. CGT 예약 목록
 *
 * @apiDescription CGT 예약 가능한 스케줄 목록 조회 <br/>
 * 메인 화면 > cgt 예약 버튼
 *
 * @apiVersion 1.0.0
 * @apiName mobile_listcgt
 * @apiGroup 2. Mobile API > 02. 예약
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/api/mobile/v1/reservations/cgt?date=2024-09-04'
 *
 * @apiParam (Query) {String} date 조회 날짜 (yyyy-MM-dd)
 *
 * @apiSuccess {Object[]} schedules 스케줄 목록
 * @apiSuccess {String} schedules.id 스케줄 식별키
 * @apiSuccess {String} schedules.teacherId 강사 식별키
 * @apiSuccess {String} schedules.teacherName 강사명
 * @apiSuccess {String} schedules.startTime 시작시간(HH:mm)
 * @apiSuccess {String} schedules.endTime 종료시간(HH:mm)
 * @apiSuccess {String} schedules.cgtTime CGT 시간(HH:mm:ss)
 * @apiSuccess {String} schedules.date 수업일(yyyy-MM-dd)
 * @apiSuccess {String} schedules.reservationId 예약식별키(0이면 로그인한 회원은 예약 안한 상태)
 * @apiSuccess {String} schedules.reservationCount 예약인원
 * @apiSuccess {String} schedules.reservationLimit 제한인원
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
[
    {
        "schedules": [
            {
                "id": 9878677,
                "teacherId": "M1725182283443744",
                "teacherName": "TEST이름",
                "date": "2024-09-04",
                "cgtTime": "08:30:00",
                "startTime": "08:30",
                "reservationCount": 1,
                "reservationLimit": 2,
                "reservationId": 2732287,
                "endTime": "09:00"
            },
            {
                "id": 9878678,
                "teacherId": "M1725182283443744",
                "teacherName": "TEST이름",
                "date": "2024-09-04",
                "cgtTime": "08:30:00",
                "startTime": "09:00",
                "reservationCount": 1,
                "reservationLimit": 2,
                "reservationId": 2732288,
                "endTime": "09:30"
            }
        ]
    },
    {
        "schedules": [
            {
                "id": 9878673,
                "teacherId": "M1725182283443744",
                "teacherName": "TEST이름",
                "date": "2024-09-04",
                "cgtTime": "06:30:00",
                "startTime": "06:30",
                "reservationCount": 0,
                "reservationLimit": 4,
                "reservationId": 0,
                "endTime": "07:00"
            },
            {
                "id": 9878674,
                "teacherId": "M1725182283443744",
                "teacherName": "TEST이름",
                "date": "2024-09-04",
                "cgtTime": "06:30:00",
                "startTime": "07:00",
                "reservationCount": 0,
                "reservationLimit": 4,
                "reservationId": 0,
                "endTime": "07:30"
            }
        ]
    }
]
 * }"
 */