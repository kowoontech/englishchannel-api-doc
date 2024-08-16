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
 * curl -i -X GET 'http://localhost:8080/mobile/v1/reservations/cgt?date=2024-08-05'
 *
 * @apiParam (Query) {String} date 조회 날짜 (yyyy-MM-dd)
 *
 * @apiSuccess {Object[]} schedules 스케줄 목록
 * @apiSuccess {Number} schedules.id 스케줄 식별키
 * @apiSuccess {String} schedules.teacherId 강사 식별키
 * @apiSuccess {String} schedules.teacherName 강사명
 * @apiSuccess {String} schedules.startTime 시작시간(HH:mm)
 * @apiSuccess {String} schedules.endTime 종료시간(HH:mm)
 * @apiSuccess {String} schedules.cgtTime CGT 시간(HH:mm:ss)
 * @apiSuccess {String} schedules.date 수업일(yyyy-MM-dd)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
[
    {
        "schedules": [
            {
                "id": 9525351,
                "teacherId": "M1723613351792159",
                "teacherName": "TEST",
                "date": "2024-08-16",
                "cgtTime": "09:30:00",
                "startTime": "09:30",
                "endTime": "10:00"
            },
            {
                "id": 9525345,
                "teacherId": "M1723613351792159",
                "teacherName": "TEST",
                "date": "2024-08-16",
                "cgtTime": "09:30:00",
                "startTime": "10:00",
                "endTime": "10:30"
            }
        ]
    },
    {
        "schedules": [
            {
                "id": 9525347,
                "teacherId": "M1723613351792159",
                "teacherName": "TEST",
                "date": "2024-08-16",
                "cgtTime": "12:00:00",
                "startTime": "12:00",
                "endTime": "12:30"
            },
            {
                "id": 9525348,
                "teacherId": "M1723613351792159",
                "teacherName": "TEST",
                "date": "2024-08-16",
                "cgtTime": "12:00:00",
                "startTime": "12:30",
                "endTime": "13:00"
            }
        ]
    }
]
 * }"
 */