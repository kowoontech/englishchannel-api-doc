/**
 * @api {get} /admin/v1/users/{id}/schedules/by-time 07. 회원 시간별 스케줄 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록 > 일별<br/>
 * 조회할 날짜의 6:00~23:30 까지의 스케줄을 조회한다.
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserSchedulesByTime
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1699689011700418/schedules/by-time?date=2024-01-31'
 * 
 * @apiParam (Path) {String} id 회원 식별키
 *
 * @apiParam (Query) date 조회할 날짜 (yyyy-MM-dd)
 *
 * @apiSuccess {Object[]} schedules 스케줄
 * @apiSuccess {String} schedules.time 시간 (HH:mm)
 * @apiSuccess {Object[]} schedules.reservations 예약 목록
 * @apiSuccess {Number} [schedules.reservations.scheduleId] 예약 식별키
 * @apiSuccess {String} schedules.reservations.teacherId 강사 식별키
 * @apiSuccess {String} schedules.reservations.teacherName 강사명
 * @apiSuccess {String} schedules.reservations.status 예약 상태 (NONE:스케줄 없음, USERS:조회 대상 회원의 예약, AVAILABLE:예약 가능, FULL:예약 매진)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "schedules": [
        {
            "time": "06:00",
            "reservations": [
                {
                    "scheduleId": null,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "06:30",
            "reservations": [
                {
                    "scheduleId": null,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                }
            ]
        }
    ]
}
 */