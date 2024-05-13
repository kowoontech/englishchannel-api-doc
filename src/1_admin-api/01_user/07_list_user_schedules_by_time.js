/**
 * @api {get} /admin/v1/users/{id}/schedules/by-time 07. 회원 시간별 스케줄 조회
 *
 * @apiDescription 조회할 날짜의 6:00~23:30 까지의 스케줄을 조회한다.<br/>
 * 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록 > 일별
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserSchedulesByTime
 * @apiGroup 1. Admin API > 1. 회원관리
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
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
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
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "07:00",
            "reservations": [
                {
                    "scheduleId": null,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9206435,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9209951,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9214349,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "07:30",
            "reservations": [
                {
                    "scheduleId": null,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9206438,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9209954,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9214394,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "08:00",
            "reservations": [
                {
                    "scheduleId": null,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9206441,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9209957,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9214400,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "08:30",
            "reservations": [
                {
                    "scheduleId": null,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9206444,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9209960,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9214397,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "09:00",
            "reservations": [
                {
                    "scheduleId": null,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9206447,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9209963,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9214403,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "09:30",
            "reservations": [
                {
                    "scheduleId": null,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9206450,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9209966,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9214409,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "10:00",
            "reservations": [
                {
                    "scheduleId": null,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9206453,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9209969,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9214406,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "10:30",
            "reservations": [
                {
                    "scheduleId": null,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9206456,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9209972,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9214412,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "11:00",
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
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "11:30",
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
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "12:00",
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
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "12:30",
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
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "13:00",
            "reservations": [
                {
                    "scheduleId": 9207800,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211124,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9212045,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213197,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9208892,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "13:30",
            "reservations": [
                {
                    "scheduleId": 9207797,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211121,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9212090,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213332,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9208889,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "14:00",
            "reservations": [
                {
                    "scheduleId": 9207794,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211118,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9212093,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213329,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9208886,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "14:30",
            "reservations": [
                {
                    "scheduleId": 9207791,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211115,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9212096,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213326,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9208883,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "15:00",
            "reservations": [
                {
                    "scheduleId": 9207788,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211112,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9212099,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213323,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9208880,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "15:30",
            "reservations": [
                {
                    "scheduleId": 9207785,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211109,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9212102,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213320,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9208877,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "16:00",
            "reservations": [
                {
                    "scheduleId": 9207782,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211106,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9212105,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213317,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9208874,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "16:30",
            "reservations": [
                {
                    "scheduleId": 9207779,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211103,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9212108,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "17:00",
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
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "17:30",
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
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213272,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9208826,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "18:00",
            "reservations": [
                {
                    "scheduleId": 9207776,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211100,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9212159,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "FULL"
                },
                {
                    "scheduleId": 9206963,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213275,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9214463,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9208829,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "18:30",
            "reservations": [
                {
                    "scheduleId": 9207773,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211097,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9212162,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "FULL"
                },
                {
                    "scheduleId": 9206966,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213278,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9214466,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9208832,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "19:00",
            "reservations": [
                {
                    "scheduleId": 9207770,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211094,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9212165,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9206969,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213281,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9214469,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9208835,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "19:30",
            "reservations": [
                {
                    "scheduleId": 9207767,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211091,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9212168,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9206972,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213284,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9214472,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9208838,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "20:00",
            "reservations": [
                {
                    "scheduleId": 9207764,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211088,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "FULL"
                },
                {
                    "scheduleId": 9212171,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9206975,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213287,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9214475,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9208841,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "20:30",
            "reservations": [
                {
                    "scheduleId": 9207761,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "FULL"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211085,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "FULL"
                },
                {
                    "scheduleId": 9212174,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9206978,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213290,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9214478,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9208844,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "21:00",
            "reservations": [
                {
                    "scheduleId": 9207758,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "USERS"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211082,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "FULL"
                },
                {
                    "scheduleId": 9212177,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9206981,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213293,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9214481,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9208847,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "21:30",
            "reservations": [
                {
                    "scheduleId": 9207755,
                    "teacherId": "M1400118325784523",
                    "teacherName": "한가영",
                    "status": "USERS"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1695013438115743",
                    "teacherName": "서안나",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9211079,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "FULL"
                },
                {
                    "scheduleId": 9212180,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9206984,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": 9213296,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9214484,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": 9208850,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "AVAILABLE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "22:00",
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
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "22:30",
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
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "23:00",
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
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        },
        {
            "time": "23:30",
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
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1657064932771055",
                    "teacherName": "김나래",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1661138591404520",
                    "teacherName": "최태연",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1681990831501448",
                    "teacherName": "정지은",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1594795852631377",
                    "teacherName": "Steven",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1487640799950353",
                    "teacherName": "Alex",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1698204875465368",
                    "teacherName": "Olivia",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1691559227102239",
                    "teacherName": "Sadie",
                    "status": "NONE"
                },
                {
                    "scheduleId": null,
                    "teacherId": "M1693558129675151",
                    "teacherName": "Tyler",
                    "status": "NONE"
                }
            ]
        }
    ]
}
 */