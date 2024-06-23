/**
 * @api {get} /admin/v1/teachers/{id}/schedules 05. 강사 스케줄 조회
 *
 * @apiDescription 강사관리 > 강의OPEN(주별)<br/>
 * 조회할 기간의 6:00~23:30 까지의 스케줄을 조회한다.
 *
 * @apiVersion 1.0.0
 * @apiName admin_listTeacherSchedules
 * @apiGroup 1. Admin API > 5. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/teachers/M1695013438115743/schedules?dateFrom=2023-10-04&dateTo=2023-10-05'
 * 
 * @apiParam (Path) {String} id 강사 식별키
 *
 * @apiParam (Query) dateFrom 조회할 날짜 ~부터 (yyyy-MM-dd)
 * @apiParam (Query) dateTo 조회할 날짜 ~까지 (yyyy-MM-dd)
 *
 * @apiSuccess {Object[]} schedules 스케줄
 * @apiSuccess {String} schedules.date 날짜 (yyyy-MM-dd)
 * @apiSuccess {String} schedules.time 시간 (HH:mm)
 * @apiSuccess {Boolean} schedules.scheduled 스케줄 저장 여부
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "schedules": [
        {
            "date": "2023-10-04",
            "time": "06:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "06:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "07:00",
            "scheduled": true
        },
        {
            "date": "2023-10-04",
            "time": "07:30",
            "scheduled": true
        },
        {
            "date": "2023-10-04",
            "time": "08:00",
            "scheduled": true
        },
        {
            "date": "2023-10-04",
            "time": "08:30",
            "scheduled": true
        },
        {
            "date": "2023-10-04",
            "time": "09:00",
            "scheduled": true
        },
        {
            "date": "2023-10-04",
            "time": "09:30",
            "scheduled": true
        },
        {
            "date": "2023-10-04",
            "time": "10:00",
            "scheduled": true
        },
        {
            "date": "2023-10-04",
            "time": "10:30",
            "scheduled": true
        },
        {
            "date": "2023-10-04",
            "time": "11:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "11:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "12:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "12:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "13:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "13:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "14:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "14:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "15:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "15:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "16:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "16:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "17:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "17:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "18:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "18:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "19:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "19:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "20:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "20:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "21:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "21:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "22:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "22:30",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "23:00",
            "scheduled": false
        },
        {
            "date": "2023-10-04",
            "time": "23:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "06:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "06:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "07:00",
            "scheduled": true
        },
        {
            "date": "2023-10-05",
            "time": "07:30",
            "scheduled": true
        },
        {
            "date": "2023-10-05",
            "time": "08:00",
            "scheduled": true
        },
        {
            "date": "2023-10-05",
            "time": "08:30",
            "scheduled": true
        },
        {
            "date": "2023-10-05",
            "time": "09:00",
            "scheduled": true
        },
        {
            "date": "2023-10-05",
            "time": "09:30",
            "scheduled": true
        },
        {
            "date": "2023-10-05",
            "time": "10:00",
            "scheduled": true
        },
        {
            "date": "2023-10-05",
            "time": "10:30",
            "scheduled": true
        },
        {
            "date": "2023-10-05",
            "time": "11:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "11:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "12:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "12:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "13:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "13:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "14:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "14:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "15:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "15:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "16:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "16:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "17:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "17:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "18:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "18:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "19:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "19:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "20:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "20:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "21:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "21:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "22:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "22:30",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "23:00",
            "scheduled": false
        },
        {
            "date": "2023-10-05",
            "time": "23:30",
            "scheduled": false
        }
    ]
}
 */