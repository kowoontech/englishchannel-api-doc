/**
 * @api {post} /admin/v1/teachers/{id}/schedules 06. 강사 스케줄 저장
 *
 * @apiDescription 강사관리 > 강의OPEN(주별)<br/>
 * 선택한 스케줄은 등록하고, 선택하지 않은 스케줄은 삭제한다.
 *
 * @apiVersion 1.0.0
 * @apiName admin_createTeacherSchedules
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/teachers/M1695013438115743/schedules'
 * -H "Content-Type: application/json" \
 * -d "{
    "dateFrom": "2023-10-04",
    "dateTo": "2023-10-05",
    "workTime": "AM_16",
    "schedules": [
        {
            "date": "2023-10-04",
            "time": "06:30"
        },
        {
            "date": "2023-10-04",
            "time": "07:00"
        },
        {
            "date": "2023-10-04",
            "time": "07:30"
        },
        {
            "date": "2023-10-04",
            "time": "08:00"
        },
        {
            "date": "2023-10-04",
            "time": "08:30"
        },
        {
            "date": "2023-10-04",
            "time": "09:00"
        },
        {
            "date": "2023-10-04",
            "time": "09:30"
        },
        {
            "date": "2023-10-04",
            "time": "10:00",
            "isScheduled": true
        },
        {
            "date": "2023-10-04",
            "time": "11:00"
        },
        {
            "date": "2023-10-05",
            "time": "06:30"
        },
        {
            "date": "2023-10-05",
            "time": "07:00"
        },
        {
            "date": "2023-10-05",
            "time": "07:30"
        },
        {
            "date": "2023-10-05",
            "time": "08:00"
        },
        {
            "date": "2023-10-05",
            "time": "08:30"
        },
        {
            "date": "2023-10-05",
            "time": "09:00"
        },
        {
            "date": "2023-10-05",
            "time": "09:30"
        },
        {
            "date": "2023-10-05",
            "time": "10:00"
        },
        {
            "date": "2023-10-05",
            "time": "11:00"
        }
    ]
}"
 * 
 * @apiParam (Path) {String} id 강사 식별키
 * 
 * @apiParam (Body) {String} dateFrom 조회 시작일 (yyyy-MM-dd, 조회 시작일 ~ 종료일 사이의 선택하지 않은 스케줄은 모두 삭제)
 * @apiParam (Body) {String} dateTo 조회 종료일 (yyyy-MM-dd)
 * @apiParam (Body) {String} [workTime] 근무시간 (NULL, AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4)
 * @apiParam (Body) {Object[]} schedules 선택한 스케줄 목록
 * @apiParam (Body) {String} schedules.date 날짜 (yyyy-MM-dd)
 * @apiParam (Body) {String} schedules.time 시간 (HH:mm)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */