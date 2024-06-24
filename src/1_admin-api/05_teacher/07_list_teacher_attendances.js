/**
 * @api {get} /admin/v1/teachers/attendances 07. 출석/결석률 조회
 *
 * @apiDescription 강사관리 > 출석률/결석률
 *
 * @apiVersion 1.0.0
 * @apiName admin_listTeacherAttendances
 * @apiGroup 1. Admin API > 5. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/teachers/attendances?status=Y&yearMonth=2024-01'
 *
 * @apiParam (Query) status 조회할 출결상태 (Y:출석, N:결석)
 * @apiParam (Query) yearMonth 조회할 년월 (yyyy-MM)
 *
 * @apiSuccess {Object[]} schedules 출결 스케줄
 * @apiSuccess {String} schedules.date 날짜 (yyyy-MM-dd)
 * @apiSuccess {Object[]} schedules.attendances 날짜별 강사 출석/결석 목록 (HT->LT 순서, AVG 포함)
 * @apiSuccess {String} schedules.attendances.name 강사명
 * @apiSuccess {Number} schedules.attendances.reservationCount 전체 예약 수
 * @apiSuccess {Number} schedules.attendances.attendanceCount 출석/결석 수
 * @apiSuccess {Number} schedules.attendances.attendanceRate 출석/결석률
 * @apiSuccess {Object[]} totalAttendances 출석/결석률 합계
 * @apiSuccess {String} totalAttendances.name 강사명
 * @apiSuccess {Number} totalAttendances.reservationCount 전체 예약 수
 * @apiSuccess {Number} totalAttendances.attendanceCount 출석/결석 수
 * @apiSuccess {Number} totalAttendances.attendanceRate 출석/결석률
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "schedules": [
        {
            "date": "2024-01-01",
            "attendances": [
                {
                    "name": "한가영",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "서안나",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "김나래",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "최태연",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "정지은",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "HT Avg.",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "Steven",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "Alex",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "Olivia",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "Sadie",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "Tyler",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "LT Avg.",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                }
            ]
        },
        {
            "date": "2024-01-02",
            "attendances": [
                {
                    "name": "한가영",
                    "reservationCount": 0,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "서안나",
                    "reservationCount": 2,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "김나래",
                    "reservationCount": 14,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "최태연",
                    "reservationCount": 10,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "정지은",
                    "reservationCount": 6,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "HT Avg.",
                    "reservationCount": 32,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "Steven",
                    "reservationCount": 4,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "Alex",
                    "reservationCount": 13,
                    "attendanceCount": 2,
                    "attendanceRate": "15.38"
                },
                {
                    "name": "Olivia",
                    "reservationCount": 8,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "Sadie",
                    "reservationCount": 11,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "Tyler",
                    "reservationCount": 6,
                    "attendanceCount": 0,
                    "attendanceRate": "0.00"
                },
                {
                    "name": "LT Avg.",
                    "reservationCount": 42,
                    "attendanceCount": 2,
                    "attendanceRate": "4.76"
                }
            ]
        }
    ],
    "totalAttendances": [
        {
            "name": "한가영",
            "reservationCount": 218,
            "attendanceCount": 2,
            "attendanceRate": "0.92"
        },
        {
            "name": "서안나",
            "reservationCount": 49,
            "attendanceCount": 0,
            "attendanceRate": "0.00"
        },
        {
            "name": "김나래",
            "reservationCount": 148,
            "attendanceCount": 2,
            "attendanceRate": "1.35"
        },
        {
            "name": "최태연",
            "reservationCount": 70,
            "attendanceCount": 6,
            "attendanceRate": "8.57"
        },
        {
            "name": "정지은",
            "reservationCount": 60,
            "attendanceCount": 4,
            "attendanceRate": "6.67"
        },
        {
            "name": "HT Avg.",
            "reservationCount": 545,
            "attendanceCount": 14,
            "attendanceRate": "2.57"
        },
        {
            "name": "Steven",
            "reservationCount": 48,
            "attendanceCount": 0,
            "attendanceRate": "0.00"
        },
        {
            "name": "Alex",
            "reservationCount": 146,
            "attendanceCount": 2,
            "attendanceRate": "1.37"
        },
        {
            "name": "Olivia",
            "reservationCount": 62,
            "attendanceCount": 0,
            "attendanceRate": "0.00"
        },
        {
            "name": "Sadie",
            "reservationCount": 210,
            "attendanceCount": 5,
            "attendanceRate": "2.38"
        },
        {
            "name": "Tyler",
            "reservationCount": 44,
            "attendanceCount": 1,
            "attendanceRate": "2.27"
        },
        {
            "name": "LT Avg.",
            "reservationCount": 510,
            "attendanceCount": 8,
            "attendanceRate": "1.57"
        }
    ]
}
 */