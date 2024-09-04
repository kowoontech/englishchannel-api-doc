/**
 * @api {get} api/mobile/v1/main/reservations 02. 예약목록조회
 *
 * @apiDescription main화면 다음 예약 레슨 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName mobile_listReservations
 * @apiGroup 2. Mobile API > 01. 메인
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/api/mobile/v1/main/reservations'
 *
 * @apiParam (Query) {String} date 조회 날짜 (yyyy-MM-dd)
 *
 * @apiSuccess {Number} id 예약 식별키
 * @apiSuccess {String} teacherName 강사명
 * @apiSuccess {String} startTime 시작시간(HH:mm)
 * @apiSuccess {String} endTime 종료시간(HH:mm)
 * @apiSuccess {String} date 수업일(yyyy-MM-dd)
 * @apiSuccess {String} attendanceStatus 출석상태(R:예약, A:출석, N:결석)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 *
[
    {
        "id": 2732287,
        "date": "2024-09-04",
        "startTime": "08:30",
        "endTime": "09:00",
        "attendanceStatus": "R",
        "teacherName": "TEST이름"
    },
    {
        "id": 2732288,
        "date": "2024-09-04",
        "startTime": "09:00",
        "endTime": "09:30",
        "attendanceStatus": "R",
        "teacherName": "TEST이름"
    },
    {
        "id": 2732295,
        "date": "2024-09-16",
        "startTime": "08:00",
        "endTime": "08:30",
        "attendanceStatus": "R",
        "teacherName": "서안나"
    },
    {
        "id": 2732296,
        "date": "2024-09-16",
        "startTime": "08:30",
        "endTime": "09:00",
        "attendanceStatus": "R",
        "teacherName": "서안나"
    },
    {
        "id": 2732297,
        "date": "2024-09-16",
        "startTime": "09:00",
        "endTime": "09:30",
        "attendanceStatus": "R",
        "teacherName": "서안나"
    }
]"
 */