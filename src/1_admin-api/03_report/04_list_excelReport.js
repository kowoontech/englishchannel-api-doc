/**
 * @api {get} /admin/v1/templates/excel/report 04. 학사보고서 엑셀
 *
 * @apiDescription 회원관리 > 학사보고서 > 엑셀 다운로드 시 필요한 학사보고서 목록<br/>
 * 운영자 계정 : 회원관리 > 학사보고서 <br/>
 * 강사 계정 : 학사보고서 <br/>
 * 계정에 동일한 api를 사용하기 위해 userType 추가했습니다. 강사 계정 페이지 조회 시 사용할 api는 userType=T 필수값입니다.<br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName listReportexcel
 * @apiGroup 1. Admin API > 03. 학사보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/templates/excel/report?dateFrom=2023-01-01&dateTo=2023-01-31&userType=A&keyword=김보경'
 *
 * @apiParam (Query) [dateFrom] 가입일자 검색 ~부터 (yyyy-mm-dd)
 * @apiParam (Query) [dateTo] 가입일자 검색 ~까지 (yyyy-mm-dd)
 * @apiParam (Query) [teacherId] 강사식별키
 * @apiParam (Query) [keyword] 검색어
 * @apiParam (Query) [reportCondition] 검색조건 (ALL: 전체, ATTENDANCE: 출석, REPORT: 미작성)
 * @apiParam (Query) userType 계정구분 (강사:T , 운영자: A)
 *
 * @apiSuccess {Number} id (예약식별키 no)
 * @apiSuccess {String} date 수강시간(날짜)
 * @apiSuccess {String} startTime 수강시간(시작)
 * @apiSuccess {String} endTime 수강시간(종료)
 * @apiSuccess {String} userName 회원명
 * @apiSuccess {String} cellPhone 휴대폰번호번호
 * @apiSuccess {Number} lessonCount 수강회차
 * @apiSuccess {Number} remainCount 잔여회차
 * @apiSuccess {Number} assignmentCount 출석회차
 * @apiSuccess {String} attendanceStatus 출석여부(출석, 결석, 예약)
 * @apiSuccess {String} report report학사보고서내용
 * @apiSuccess {String} todayLesson todayLesson
 * @apiSuccess {String} nextLesson nextLesson
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
    {
        "no": 2408099,
        "date": "2023-01-03",
        "startTime": "16:30:00",
        "endTime": "17:00:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2408100,
        "date": "2023-01-03",
        "startTime": "17:00:00",
        "endTime": "17:30:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2397062,
        "date": "2023-01-10",
        "startTime": "13:00:00",
        "endTime": "13:30:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2397063,
        "date": "2023-01-10",
        "startTime": "13:30:00",
        "endTime": "14:00:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2397070,
        "date": "2023-01-13",
        "startTime": "13:00:00",
        "endTime": "13:30:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2397071,
        "date": "2023-01-13",
        "startTime": "13:30:00",
        "endTime": "14:00:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2397064,
        "date": "2023-01-17",
        "startTime": "13:00:00",
        "endTime": "13:30:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2397065,
        "date": "2023-01-17",
        "startTime": "13:30:00",
        "endTime": "14:00:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2397072,
        "date": "2023-01-20",
        "startTime": "13:00:00",
        "endTime": "13:30:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2397073,
        "date": "2023-01-20",
        "startTime": "13:30:00",
        "endTime": "14:00:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2397074,
        "date": "2023-01-27",
        "startTime": "13:00:00",
        "endTime": "13:30:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2397075,
        "date": "2023-01-27",
        "startTime": "13:30:00",
        "endTime": "14:00:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2397066,
        "date": "2023-01-31",
        "startTime": "13:00:00",
        "endTime": "13:30:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    },
    {
        "no": 2397067,
        "date": "2023-01-31",
        "startTime": "13:30:00",
        "endTime": "14:00:00",
        "attendanceStatus": "Y",
        "report": null,
        "todayLesson": null,
        "nextLesson": null,
        "userName": "김보경",
        "cellPhone": "xZ95fw2jfA26BoRQut0mRw==",
        "lessoncount": 24.0,
        "assignedLessonCount": 24.0,
        "remainingLessonCount": 0.0
    }
 */