/**
 * @api {get} /admin/v1/users/{id}/schedules/by-date 08. 회원 날짜별 스케줄 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록 > 주별<br/>
 * 조회할 기간의 6:00~23:30 까지의 스케줄을 조회한다.
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserSchedulesByDate
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1699689011700418/schedules/by-date?dateFrom=2024-01-24&dateTo=2024-01-31&teacherId=M1661138591404520&assistantTeacherId=M1657064932771055'
 * 
 * @apiParam (Path) {String} id 회원 식별키
 *
 * @apiParam (Query) dateFrom 조회할 날짜 ~부터 (yyyy-MM-dd)
 * @apiParam (Query) dateTo 조회할 날짜 ~까지 (yyyy-MM-dd)
 * @apiParam (Query) teacherId 조회할 담임강사 식별키
 * @apiParam (Query) assistantTeacherId 조회할 부담임 강사 식별키
 *
 * @apiSuccess {Object[]} schedules 스케줄
 * @apiSuccess {String} schedules.date 날짜 (yyyy-MM-dd)
 * @apiSuccess {String} schedules.time 시간 (HH:mm)
 * @apiSuccess {Number} [schedules.teacherScheduleId] 담임강사 스케줄 식별키
 * @apiSuccess {String} schedules.teacherStatus 담임강사 예약 상태 (NONE:스케줄 없음, USERS:조회 대상 회원의 예약, AVAILABLE:예약 가능, FULL:예약 매진)
 * @apiSuccess {Number} [schedules.assistantTeacherScheduleId] 부담임강사 스케줄 식별키
 * @apiSuccess {String} schedules.assistantTeacherStatus 부담임강사 예약 상태 (NONE:스케줄 없음, USERS:조회 대상 회원의 예약, AVAILABLE:예약 가능, FULL:예약 매진)
 * 
 * @apiSuccess {Object[]} schedules.teachers 강사 목록
 * @apiSuccess {Number} schedules.teachers.id 강사 식별키
 * @apiSuccess {String} schedules.teachers.name 강사명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "schedules": [
        {
            "date": "2024-01-24",
            "time": "06:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-24",
            "time": "06:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-24",
            "time": "07:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "07:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "08:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "08:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "09:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "09:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "10:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "10:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "11:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-24",
            "time": "11:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-24",
            "time": "12:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-24",
            "time": "12:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-24",
            "time": "13:00",
            "teacherScheduleId": 9211805,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210911,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "13:30",
            "teacherScheduleId": 9211988,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210914,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "14:00",
            "teacherScheduleId": 9211985,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210917,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "14:30",
            "teacherScheduleId": 9211982,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210920,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "15:00",
            "teacherScheduleId": 9211979,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210923,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "15:30",
            "teacherScheduleId": 9211976,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210926,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "16:00",
            "teacherScheduleId": 9211973,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210929,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "16:30",
            "teacherScheduleId": 9211970,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210932,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "17:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-24",
            "time": "17:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "18:00",
            "teacherScheduleId": 9211880,
            "teacherStatus": "FULL",
            "assistantTeacherScheduleId": 9210860,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "18:30",
            "teacherScheduleId": 9211883,
            "teacherStatus": "FULL",
            "assistantTeacherScheduleId": 9210857,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "19:00",
            "teacherScheduleId": 9211886,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210851,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "19:30",
            "teacherScheduleId": 9211889,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210848,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "20:00",
            "teacherScheduleId": 9211892,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210845,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "20:30",
            "teacherScheduleId": 9211895,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210854,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "21:00",
            "teacherScheduleId": 9211898,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210842,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "21:30",
            "teacherScheduleId": 9211901,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210839,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-24",
            "time": "22:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-24",
            "time": "22:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-24",
            "time": "23:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-24",
            "time": "23:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "06:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "06:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "07:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "07:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "08:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "08:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "09:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "09:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "10:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "10:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "11:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "11:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "12:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "12:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "13:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210956,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "13:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210953,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "14:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210950,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "14:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210947,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "15:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210944,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "15:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210941,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "16:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210938,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "16:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210935,
            "assistantTeacherStatus": "FULL",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "17:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "17:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "18:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210863,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "18:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210866,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "19:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210869,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "19:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210872,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "20:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210875,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "20:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210878,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "21:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210881,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "21:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9210884,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-25",
            "time": "22:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "22:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "23:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-25",
            "time": "23:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-26",
            "time": "06:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-26",
            "time": "06:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-26",
            "time": "07:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "07:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "08:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "08:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "09:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "09:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "10:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "10:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "11:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-26",
            "time": "11:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-26",
            "time": "12:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-26",
            "time": "12:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-26",
            "time": "13:00",
            "teacherScheduleId": 9211808,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210959,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "13:30",
            "teacherScheduleId": 9211946,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210962,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "14:00",
            "teacherScheduleId": 9211943,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210965,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "14:30",
            "teacherScheduleId": 9211940,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210968,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "15:00",
            "teacherScheduleId": 9211937,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210971,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "15:30",
            "teacherScheduleId": 9211934,
            "teacherStatus": "FULL",
            "assistantTeacherScheduleId": 9210974,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "16:00",
            "teacherScheduleId": 9211931,
            "teacherStatus": "FULL",
            "assistantTeacherScheduleId": 9210977,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "16:30",
            "teacherScheduleId": 9211928,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210980,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "17:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-26",
            "time": "17:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "18:00",
            "teacherScheduleId": 9211925,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210908,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "18:30",
            "teacherScheduleId": 9211922,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210905,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "19:00",
            "teacherScheduleId": 9211919,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210902,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "19:30",
            "teacherScheduleId": 9211916,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210899,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "20:00",
            "teacherScheduleId": 9211913,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210896,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "20:30",
            "teacherScheduleId": 9211910,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210893,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "21:00",
            "teacherScheduleId": 9211907,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210890,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "21:30",
            "teacherScheduleId": 9211904,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210887,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-26",
            "time": "22:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-26",
            "time": "22:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-26",
            "time": "23:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-26",
            "time": "23:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "06:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "06:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "07:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "07:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "08:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "08:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "09:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "09:30",
            "teacherScheduleId": 9211991,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210983,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "10:00",
            "teacherScheduleId": 9211994,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210986,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "10:30",
            "teacherScheduleId": 9211997,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210989,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "11:00",
            "teacherScheduleId": 9212000,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210992,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "11:30",
            "teacherScheduleId": 9212003,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210995,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "12:00",
            "teacherScheduleId": 9212006,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9210998,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "12:30",
            "teacherScheduleId": 9212009,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211001,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "13:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": 9211004,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "13:30",
            "teacherScheduleId": 9212012,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "14:00",
            "teacherScheduleId": 9212015,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211007,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "14:30",
            "teacherScheduleId": 9212018,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211010,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "15:00",
            "teacherScheduleId": 9212021,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211013,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "15:30",
            "teacherScheduleId": 9212024,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211016,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "16:00",
            "teacherScheduleId": 9212027,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211019,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "16:30",
            "teacherScheduleId": 9212030,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211022,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "17:00",
            "teacherScheduleId": 9212033,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211025,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "17:30",
            "teacherScheduleId": 9212036,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211028,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-27",
            "time": "18:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "18:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "19:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "19:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "20:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "20:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "21:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "21:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "22:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "22:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "23:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-27",
            "time": "23:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "06:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "06:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "07:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "07:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "08:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "08:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "09:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "09:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "10:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "10:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "11:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "11:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "12:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "12:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "13:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "13:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "14:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "14:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "15:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "15:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "16:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "16:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "17:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "17:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "18:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "18:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "19:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "19:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "20:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "20:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "21:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "21:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "22:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "22:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "23:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-28",
            "time": "23:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-29",
            "time": "06:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-29",
            "time": "06:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-29",
            "time": "07:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "07:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "08:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "08:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "09:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "09:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "10:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "10:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "11:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-29",
            "time": "11:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-29",
            "time": "12:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-29",
            "time": "12:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-29",
            "time": "13:00",
            "teacherScheduleId": 9212039,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "13:30",
            "teacherScheduleId": 9212048,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "14:00",
            "teacherScheduleId": 9212051,
            "teacherStatus": "FULL",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "14:30",
            "teacherScheduleId": 9212054,
            "teacherStatus": "FULL",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "15:00",
            "teacherScheduleId": 9212057,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "15:30",
            "teacherScheduleId": 9212060,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "16:00",
            "teacherScheduleId": 9212063,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "16:30",
            "teacherScheduleId": 9212066,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "17:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-29",
            "time": "17:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "18:00",
            "teacherScheduleId": 9212111,
            "teacherStatus": "FULL",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "18:30",
            "teacherScheduleId": 9212114,
            "teacherStatus": "FULL",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "19:00",
            "teacherScheduleId": 9212117,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "19:30",
            "teacherScheduleId": 9212120,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "20:00",
            "teacherScheduleId": 9212123,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "20:30",
            "teacherScheduleId": 9212126,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "21:00",
            "teacherScheduleId": 9212129,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "21:30",
            "teacherScheduleId": 9212132,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-29",
            "time": "22:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-29",
            "time": "22:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-29",
            "time": "23:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-29",
            "time": "23:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-30",
            "time": "06:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-30",
            "time": "06:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-30",
            "time": "07:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "07:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "08:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "08:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "09:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "09:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "10:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "10:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "11:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-30",
            "time": "11:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-30",
            "time": "12:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-30",
            "time": "12:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-30",
            "time": "13:00",
            "teacherScheduleId": 9212042,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211031,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "13:30",
            "teacherScheduleId": 9212087,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211034,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "14:00",
            "teacherScheduleId": 9212084,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211037,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "14:30",
            "teacherScheduleId": 9212081,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211040,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "15:00",
            "teacherScheduleId": 9212078,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211043,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "15:30",
            "teacherScheduleId": 9212075,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211046,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "16:00",
            "teacherScheduleId": 9212072,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211049,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "16:30",
            "teacherScheduleId": 9212069,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211052,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "17:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-30",
            "time": "17:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "18:00",
            "teacherScheduleId": 9212156,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211055,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "18:30",
            "teacherScheduleId": 9212153,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211058,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "19:00",
            "teacherScheduleId": 9212150,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211061,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "19:30",
            "teacherScheduleId": 9212147,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211064,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "20:00",
            "teacherScheduleId": 9212144,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211067,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "20:30",
            "teacherScheduleId": 9212138,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211070,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "21:00",
            "teacherScheduleId": 9212141,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211073,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "21:30",
            "teacherScheduleId": 9212135,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211076,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-30",
            "time": "22:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-30",
            "time": "22:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-30",
            "time": "23:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-30",
            "time": "23:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-31",
            "time": "06:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-31",
            "time": "06:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-31",
            "time": "07:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "07:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "08:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "08:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "09:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "09:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "10:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "10:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1695013438115743",
                    "name": "서안나"
                },
                {
                    "id": "M1594795852631377",
                    "name": "Steven"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "11:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-31",
            "time": "11:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-31",
            "time": "12:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-31",
            "time": "12:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-31",
            "time": "13:00",
            "teacherScheduleId": 9212045,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211124,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "13:30",
            "teacherScheduleId": 9212090,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211121,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "14:00",
            "teacherScheduleId": 9212093,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211118,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "14:30",
            "teacherScheduleId": 9212096,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211115,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "15:00",
            "teacherScheduleId": 9212099,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211112,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "15:30",
            "teacherScheduleId": 9212102,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211109,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "16:00",
            "teacherScheduleId": 9212105,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211106,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "16:30",
            "teacherScheduleId": 9212108,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211103,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "17:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-31",
            "time": "17:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": [
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "18:00",
            "teacherScheduleId": 9212159,
            "teacherStatus": "FULL",
            "assistantTeacherScheduleId": 9211100,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "18:30",
            "teacherScheduleId": 9212162,
            "teacherStatus": "FULL",
            "assistantTeacherScheduleId": 9211097,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1400118325784523",
                    "name": "한가영"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "19:00",
            "teacherScheduleId": 9212165,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211094,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "19:30",
            "teacherScheduleId": 9212168,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211091,
            "assistantTeacherStatus": "AVAILABLE",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1657064932771055",
                    "name": "김나래"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "20:00",
            "teacherScheduleId": 9212171,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211088,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "20:30",
            "teacherScheduleId": 9212174,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211085,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "21:00",
            "teacherScheduleId": 9212177,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211082,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "21:30",
            "teacherScheduleId": 9212180,
            "teacherStatus": "AVAILABLE",
            "assistantTeacherScheduleId": 9211079,
            "assistantTeacherStatus": "FULL",
            "teachers": [
                {
                    "id": "M1681990831501448",
                    "name": "정지은"
                },
                {
                    "id": "M1691559227102239",
                    "name": "Sadie"
                },
                {
                    "id": "M1661138591404520",
                    "name": "최태연"
                },
                {
                    "id": "M1487640799950353",
                    "name": "Alex"
                },
                {
                    "id": "M1698204875465368",
                    "name": "Olivia"
                }
            ]
        },
        {
            "date": "2024-01-31",
            "time": "22:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-31",
            "time": "22:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-31",
            "time": "23:00",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        },
        {
            "date": "2024-01-31",
            "time": "23:30",
            "teacherScheduleId": null,
            "teacherStatus": "NONE",
            "assistantTeacherScheduleId": null,
            "assistantTeacherStatus": "NONE",
            "teachers": []
        }
    ]
}
 */