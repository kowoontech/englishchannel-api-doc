/**
 * @api {get} /admin/v1/users/{id}/reservations 05. 회원 예약 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭<br/>
 * 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록 > 최근 5회 수강현황<br/>
 * 회원관리 > 회원 목록 조회 > 학습 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserReservations
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1427783489308244/reservations?courseId=52506'
 * 
 * @apiParam (Path) {String} id 회원 식별키
 *
 * @apiParam (Query) courseId 과정 식별키
 * @apiParam (Query) [dateFrom] 수업일 검색 ~부터 (yyyy-mm-dd)
 * @apiParam (Query) [dateTo] 수업일 검색 ~까지 (yyyy-mm-dd)
 * @apiParam (Query) [yearMonth] 수업월 검색 (yyyy-mm)
 * @apiParam (Query) [date] 수업일 검색 (yyyy-mm-dd)
 * @apiParam (Query) [excludeCancel] true: 취소 미포함, false: 포함 (default false)
 * @apiParam (Query) [excludeAttendance] true: 출결완료 미포함, false: 포함 (default false)
 * @apiParam (Query) [limit] 한페이지에 보여줄 예약 수
 * @apiParam (Query) [page] 조회할 페이지
 *
 * @apiSuccess {Object[]} list 예약 목록
 * @apiSuccess {String} list.id 예약 식별키
 * @apiSuccess {String} list.teacherName 강사
 * @apiSuccess {String} list.lessonType 수업
 * @apiSuccess {String} list.date 수업일 (yyyy-mm-dd (EEE))
 * @apiSuccess {String} list.startTime 수업시작시간 (HH:mm)
 * @apiSuccess {String} list.endTime 수업종료시간 (HH:mm)
 * @apiSuccess {String} list.attendanceStatus 출결
 * @apiSuccess {String} list.modifierName 처리직원
 * @apiSuccess {String} list.modifiedOn 처리일 (yyyy-MM-dd)
 * @apiSuccess {String} list.courseName 과정명
 * @apiSuccess {String} list.report 학사보고서
 * 
 * @apiSuccess {Number} totalCount 전체 예약 수
 * @apiSuccess {Number} page 현재 페이지
 * @apiSuccess {Number} limit 한페이지에 보여줄 예약 수
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
            "id": 1366328,
            "teacherName": "송예희",
            "lessonType": "PT",
            "date": "2018-03-05 (Mon)",
            "startTime": "08:00",
            "endTime": "08:30",
            "attendanceStatus": "출석",
            "modifierName": "김조희",
            "modifiedOn": "2018-02-23",
            "courseName": "PTM (주2회 6개월)/29.0회",
            "report": "1:1 inter 17(done) 두번째 다이얼로그 마무리. 주요표현들을 모두 잘기억하고계심."
        },
        {
            "id": 1366327,
            "teacherName": "Brett",
            "lessonType": "PT",
            "date": "2018-03-05 (Mon)",
            "startTime": "07:30",
            "endTime": "08:00",
            "attendanceStatus": "출석",
            "modifierName": "김조희",
            "modifiedOn": "2018-02-23",
            "courseName": "PTM (주2회 6개월)/29.0회",
            "report": "FT about his weekend and how his daughters are doing and what kind of alcohol he drinks when he goes out."
        },
        {
            "id": 1366322,
            "teacherName": "Jason",
            "lessonType": "PT",
            "date": "2018-03-02 (Fri)",
            "startTime": "08:00",
            "endTime": "08:30",
            "attendanceStatus": "출석",
            "modifierName": "김조희",
            "modifiedOn": "2018-02-23",
            "courseName": "PTM (주2회 6개월)/29.0회",
            "report": "Ft  Talked about a custom cabinet he had made in honor of his mother who passed away."
        },
        {
            "id": 1366321,
            "teacherName": "송예희",
            "lessonType": "PT",
            "date": "2018-03-02 (Fri)",
            "startTime": "07:30",
            "endTime": "08:00",
            "attendanceStatus": "출석",
            "modifierName": "김조희",
            "modifiedOn": "2018-02-23",
            "courseName": "PTM (주2회 6개월)/29.0회",
            "report": "1:1 inter 17(#2) 17.2 스크립트 연습. 주요 표현의 의미 확인하고, 발음과 억양 연습. "
        },
        {
            "id": 1359079,
            "teacherName": "Brett",
            "lessonType": "PT",
            "date": "2018-02-21 (Wed)",
            "startTime": "08:00",
            "endTime": "08:30",
            "attendanceStatus": "출석",
            "modifierName": "김조희",
            "modifiedOn": "2018-02-14",
            "courseName": "PTM (주2회 6개월)/29.0회",
            "report": "FT about his recent holiday and certain Korean traditions as well."
        },
        {
            "id": 1342251,
            "teacherName": "Brett",
            "lessonType": "PT",
            "date": "2018-02-28 (Wed)",
            "startTime": "08:00",
            "endTime": "08:30",
            "attendanceStatus": "출석",
            "modifierName": "김조희",
            "modifiedOn": "2018-01-18",
            "courseName": "PTM (주2회 6개월)/29.0회",
            "report": "Ft about shamans and fortune tellers in Korea and experiences of the supernatural and metaphysical."
        },
        {
            "id": 1342250,
            "teacherName": "송예희",
            "lessonType": "PT",
            "date": "2018-02-28 (Wed)",
            "startTime": "07:30",
            "endTime": "08:00",
            "attendanceStatus": "출석",
            "modifierName": "김조희",
            "modifiedOn": "2018-01-18",
            "courseName": "PTM (주2회 6개월)/29.0회",
            "report": "1:1 inter 17(#2) 17.1까지만 진행. 주요 표현의 의미와 확장적 의미 확인하고 예문만들어봄. 자연스러운 억양과 발음 연습.  * next: 1:1 inter 17(#3) "
        },
        {
            "id": 1342246,
            "teacherName": "Brett",
            "lessonType": "PT",
            "date": "2018-02-26 (Mon)",
            "startTime": "07:30",
            "endTime": "08:00",
            "attendanceStatus": "출석",
            "modifierName": "김조희",
            "modifiedOn": "2018-01-18",
            "courseName": "PTM (주2회 6개월)/29.0회",
            "report": "FT about his nephew passing the medical bar exam and giving gifts overseas."
        },
        {
            "id": 1342247,
            "teacherName": "송예희",
            "lessonType": "PT",
            "date": "2018-02-26 (Mon)",
            "startTime": "08:00",
            "endTime": "08:30",
            "attendanceStatus": "출석",
            "modifierName": "김조희",
            "modifiedOn": "2018-01-18",
            "courseName": "PTM (주2회 6개월)/29.0회",
            "report": "1:1 inter 17(#1) 랭귀지박스까지만 진행. 주말에 있으셨던 일과 현사무실 구조 등 설명. 담시간에 17과 끝내기로함. "
        },
        {
            "id": 1342242,
            "teacherName": "송예희",
            "lessonType": "PT",
            "date": "2018-02-21 (Wed)",
            "startTime": "07:30",
            "endTime": "08:00",
            "attendanceStatus": "출석",
            "modifierName": "김조희",
            "modifiedOn": "2018-01-18",
            "courseName": "PTM (주2회 6개월)/29.0회",
            "report": "Free talking about his two daughters"
        }
    ],
    "totalCount": 38,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "startPage": 1,
    "totalPage": 4,
    "endPage": 4,
    "hasNext": false,
    "hasPrev": false,
    "isFirst": true,
    "isLast": true
}
 */