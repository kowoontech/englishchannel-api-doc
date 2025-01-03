/**
 * @api {get} /admin/v1/reservations/report 01. 학사보고서 목록 조회
 *
 * @apiDescription 회원관리 > 학사보고서<br/>
 * 운영자 계정 : 회원관리 > 학사보고서 <br/>
 * 강사 계정 : 학사보고서 <br/>
 * 계정에 동일한 api를 사용하기 위해 userType 추가했습니다. 강사 계정 페이지 조회 시 사용할 api는 userType=T 필수값입니다.
 *
 * @apiVersion 1.0.0
 * @apiName listReport
 * @apiGroup 1. Admin API > 03. 학사보고서
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/reservations/report?dateFrom=2024-01-01&dateTo=2024-01-31&reportCondition=REPORT'
 *
 * @apiParam (Query) dateFrom 가입일자 검색 ~부터 (yyyy-mm-dd)
 * @apiParam (Query) dateTo 가입일자 검색 ~까지 (yyyy-mm-dd)
 * @apiParam (Query) [teacherId] 강사식별키
 * @apiParam (Query) [search] 검색 선택(이름)
 * @apiParam (Query) [keyword] 검색어
 * @apiParam (Query) reportCondition 검색조건 (ALL: 전체, COMPLETED: 출석, PENDING: 미작성)
 * @apiParam (Query) userType 계정구분 (강사:T , 운영자: A)
 * @apiParam (Query) limit 한페이지에 보여줄 회원 수
 * @apiParam (Query) page 조회할 페이지
 * @apiParam (Query) order 정렬 선택 (정렬순서 강사우선 or 강사 : teacher / 정렬순서 시간우선 or 수강시간: date / 회원명: name , 과정:courseName ,<br/>
                                        잔여횟수: remainingCount , 예약횟수: assignmentCount , lessonCount: 수강회차)
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
 * @apiSuccess {Number} list.content 학사보고서(null일시 등록버튼 / 예약식별키일시 수정버튼)
 * @apiSuccess {Number} list.todayLesson today lesson
 * @apiSuccess {Number} list.nextLesson next lesson
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
            "content": null,
            "todayLesson": null,
            "nextLesson": null
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