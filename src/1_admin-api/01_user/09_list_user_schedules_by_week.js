/**
 * @api {get} /admin/v1/users/{id}/schedules/by-week 09. 회원 날짜에 주별 스케줄 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록 > 주별<br/>
 * 조회할 기간의 6:00~23:30 까지의 스케줄을 조회한다.
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserSchedulesByWeek
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1699689011700418/schedules/by-week?dateMonth=2024-01&week=4&teacherId=M1661138591404520&assistantTeacherId=M1657064932771055'
 * 
 * @apiParam (Path) {String} id 회원 식별키
 *
 * @apiParam (Query) dateMonth 조회할 날짜 (yyyy-MM)
 * @apiParam (Query) week 조회할 주차
 * @apiParam (Query) teacherId 조회할 담임강사 식별키
 * @apiParam (Query) assistantTeacherId 조회할 부담임 강사 식별키
 *
 * @apiSuccess {Object[]} schedules 스케줄
 * @apiSuccess {String} schedules.time 시간 (HH:mm)
 * @apiSuccess {Object[]} schedules.reservations 예약 목록
 * @apiSuccess {String} schedules.reservations.date 날짜 (yyyy-MM-dd)
 * @apiSuccess {Number} [schedules.reservations.teacherScheduleId] 담임강사 스케줄 식별키
 * @apiSuccess {String} schedules.reservations.teacherStatus 담임강사 예약 상태 (NONE:스케줄 없음, USERS:조회 대상 회원의 예약, AVAILABLE:예약 가능, FULL:예약 매진)
 * @apiSuccess {Number} [schedules.reservations.assistantTeacherScheduleId] 부담임강사 스케줄 식별키
 * @apiSuccess {String} schedules.reservations.assistantTeacherStatus 부담임강사 예약 상태 (NONE:스케줄 없음, USERS:조회 대상 회원의 예약, AVAILABLE:예약 가능, FULL:예약 매진)
 * @apiSuccess {Object[]} schedules.reservations.teachers 강사 목록
 * @apiSuccess {Number} schedules.reservations.teachers.id 강사 식별키
 * @apiSuccess {String} schedules.reservations.teachers.name 강사명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "schedules": [
        {
            "time": "06:00",
            "reservations": [
                {
                    "date": "2024-01-24",
                    "teacherScheduleId": null,
                    "teacherStatus": "NONE",
                    "assistantTeacherScheduleId": null,
                    "assistantTeacherStatus": "NONE",
                    "teachers": []
                },
                {
                    "date": "2024-01-25",
                    "teacherScheduleId": null,
                    "teacherStatus": "NONE",
                    "assistantTeacherScheduleId": null,
                    "assistantTeacherStatus": "NONE",
                    "teachers": []
                }
            ]
        },
        {
            "time": "06:30",
            "reservations": [
                {
                    "date": "2024-01-24",
                    "teacherScheduleId": null,
                    "teacherStatus": "NONE",
                    "assistantTeacherScheduleId": null,
                    "assistantTeacherStatus": "NONE",
                    "teachers": []
                },
                {
                    "date": "2024-01-25",
                    "teacherScheduleId": null,
                    "teacherStatus": "NONE",
                    "assistantTeacherScheduleId": null,
                    "assistantTeacherStatus": "NONE",
                    "teachers": []
                }
            ]
        }
    ]
}
 */