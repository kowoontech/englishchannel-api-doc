/**
 * @api {get} /admin/v1/reservations/report 01. 학사보고서 목록 조회
 *
 * @apiDescription 회원관리 > 학사보고서<br/>
 * 회원관리 > 학사보고서
 *
 * @apiVersion 1.0.0
 * @apiName listReport
 * @apiGroup 1. Admin API > 3. 학사보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/reservations/report?dateFrom=2024-01-01&dateTo=2024-01-31&reportCondition=REPORT&reportSort=TIME'
 *
 * @apiParam (Query) dateFrom 가입일자 검색 ~부터 (yyyy-mm-dd)
 * @apiParam (Query) dateTo 가입일자 검색 ~까지 (yyyy-mm-dd)
 * @apiParam (Query) teacherId 강사식별키
 * @apiParam (Query) search 검색 선택(이름)
 * @apiParam (Query) keyword 검색어
 * @apiParam (Query) courseStatus 정렬순서 ( TIME: 시간, TEACHER: 강사)
 * @apiParam (Query) reportCondition 검색조건 (ALL: 전체, ATTENDANCE: 출석, REPORT: 미작성)
 * @apiParam (Query) limit 한페이지에 보여줄 회원 수
 * @apiParam (Query) page 조회할 페이지
 * @apiParam (Query) order 정렬 선택
 * @apiParam (Query) direction 정렬 방향 (ASD: 오름차순, DESC: 내림차순)
 *
 * @apiSuccess {Object[]} list 학사 보고서 목록
 * @apiSuccess {long} list.id 학사보고서 식별키(예약식별키)
 * @apiSuccess {String} list.date 예약일
 * @apiSuccess {String} list.startTime 예약시작시간
 * @apiSuccess {String} list.endTime 예약종료시간
 * @apiSuccess {String} list.teacherName 강사명
 * @apiSuccess {String} list.userName 학생명
 * @apiSuccess {String} list.courseName 강의명
 * @apiSuccess {Number} list.lessonCount 수강회차
 * @apiSuccess {Number} list.remainCount 잔여회차
 * @apiSuccess {Number} list.assignmentCount 출석회차
 * @apiSuccess {Number} list.assignmentCount 출석회차
 * @apiSuccess {Number} list.attendanceStatus 출석여부(출석, 결석, 예약)
 * @apiSuccess {Number} list.report 학사보고서(null일시 등록버튼 / 예약식별키일시 수정버튼)
 * @apiSuccess {Number} totalCount 전체 예약 수
 * @apiSuccess {Number} page 현재 페이지
 * @apiSuccess {Number} limit 한페이지에 보여줄 페이지 수
 * @apiSuccess {Number} totalPage 전체 페이지 수
 * @apiSuccess {Number} startPage 페이징 영역에 노출될 첫 페이지
 * @apiSuccess {Number} endPage 페이징 영역에 노출될 마지막 페이지
 * @apiSuccess {Boolean} hasPrev 전 페이징 영역 존재 여부
 * @apiSuccess {Boolean} hasNext 다음 페이징 영역 존재 여부
 * @apiSuccess {Boolean} isFirst 첫 페이징 영역 여부
 * @apiSuccess {Boolean} isLast 마지막 페이징 영역 여부
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "list": [
        {
            "id": 2624692,
            "date": "2024-01-31 (Wed)",
            "startTime": "21:30",
            "endTime": "22:00",
            "teacherName": "한가영",
            "userName": "조아라",
            "courseName": "NEW PT 24회 3개월",
            "lessonCount": 26.0,
            "remainCount": 5.0,
            "assignmentCount": 21.0,
            "attendanceStatus": "예약",
            "report": null
        },
        {
            "id": 2621583,
            "date": "2024-01-31 (Wed)",
            "startTime": "21:30",
            "endTime": "22:00",
            "teacherName": "김나래",
            "userName": "RE:김동우",
            "courseName": "PTM (주2회 3개월)",
            "lessonCount": 55.0,
            "remainCount": 43.0,
            "assignmentCount": 12.0,
            "attendanceStatus": "예약",
            "report": null
        },
        {
            "id": 2624691,
            "date": "2024-01-31 (Wed)",
            "startTime": "21:00",
            "endTime": "21:30",
            "teacherName": "한가영",
            "userName": "조아라",
            "courseName": "NEW PT 24회 3개월",
            "lessonCount": 26.0,
            "remainCount": 5.0,
            "assignmentCount": 21.0,
            "attendanceStatus": "예약",
            "report": null
        },
        {
            "id": 2621582,
            "date": "2024-01-31 (Wed)",
            "startTime": "21:00",
            "endTime": "21:30",
            "teacherName": "김나래",
            "userName": "RE:김동우",
            "courseName": "PTM (주2회 3개월)",
            "lessonCount": 55.0,
            "remainCount": 43.0,
            "assignmentCount": 12.0,
            "attendanceStatus": "예약",
            "report": null
        },
        {
            "id": 2621249,
            "date": "2024-01-31 (Wed)",
            "startTime": "20:30",
            "endTime": "21:00",
            "teacherName": "김나래",
            "userName": "RE:김동우",
            "courseName": "PTM (주2회 3개월)",
            "lessonCount": 55.0,
            "remainCount": 43.0,
            "assignmentCount": 12.0,
            "attendanceStatus": "예약",
            "report": null
        },
        {
            "id": 2620327,
            "date": "2024-01-31 (Wed)",
            "startTime": "20:30",
            "endTime": "21:00",
            "teacherName": "한가영",
            "userName": "정혜정:홀딩2/16",
            "courseName": "NEW PT 24회 3개월",
            "lessonCount": 26.0,
            "remainCount": 8.0,
            "assignmentCount": 18.0,
            "attendanceStatus": "예약",
            "report": null
        },
        {
            "id": 2621248,
            "date": "2024-01-31 (Wed)",
            "startTime": "20:00",
            "endTime": "20:30",
            "teacherName": "김나래",
            "userName": "RE:김동우",
            "courseName": "PTM (주2회 3개월)",
            "lessonCount": 55.0,
            "remainCount": 43.0,
            "assignmentCount": 12.0,
            "attendanceStatus": "예약",
            "report": null
        },
        {
            "id": 2620326,
            "date": "2024-01-31 (Wed)",
            "startTime": "20:00",
            "endTime": "20:30",
            "teacherName": "한가영",
            "userName": "정혜정:홀딩2/16",
            "courseName": "NEW PT 24회 3개월",
            "lessonCount": 26.0,
            "remainCount": 8.0,
            "assignmentCount": 18.0,
            "attendanceStatus": "예약",
            "report": null
        },
        {
            "id": 2622149,
            "date": "2024-01-31 (Wed)",
            "startTime": "19:30",
            "endTime": "20:00",
            "teacherName": "Sadie",
            "userName": "박지혜A",
            "courseName": "NEW PT 24회 3개월",
            "lessonCount": 26.0,
            "remainCount": 2.0,
            "assignmentCount": 24.0,
            "attendanceStatus": "예약",
            "report": null
        },
        {
            "id": 2621936,
            "date": "2024-01-31 (Wed)",
            "startTime": "19:30",
            "endTime": "20:00",
            "teacherName": "한가영",
            "userName": "김동희",
            "courseName": "NEW PT 24회 3개월",
            "lessonCount": 27.5,
            "remainCount": 17.0,
            "assignmentCount": 10.5,
            "attendanceStatus": "예약",
            "report": null
        }
    ],
    "totalCount": 1055,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "totalPage": 106,
    "startPage": 1,
    "endPage": 10,
    "hasNext": true,
    "isFirst": true,
    "isLast": false,
    "hasPrev": false
}
 */