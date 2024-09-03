/**
 * @api {get} /admin/v1/users/{id}/courses 04. 회원 과정(수강) 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭 > 과정 정보<br/>
 * 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록 > 과정 정보<br/>
 * 회원관리 > 회원 목록 조회 > 수강 탭<br/>
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserCourses
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1672401688362469/courses?status=VALID'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * 
 * @apiParam (Query) status 조회할 수강 상태 (VALID: 기본 조회, ATTENDING: 수강중, WAITING: 대기중, COMPLETE: 수강완료, REFUND: 환불)
 * @apiParam (Query) [limit] 한페이지에 보여줄 과정 수
 * @apiParam (Query) [page] 조회할 페이지
 *
 * @apiSuccess {Object[]} list 과정 목록
 * @apiSuccess {Number} list.id 과정 식별키
 * @apiSuccess {String} list.name 과정명
 * @apiSuccess {Number} list.lessonCount 레슨횟수
 * @apiSuccess {Number} list.assignmentCount 배정횟수
 * @apiSuccess {Number} list.remainCount 잔여횟수
 * @apiSuccess {String} list.startDate 수강기간 시작일 (yyyy-mm-dd)
 * @apiSuccess {String} list.endDate 수강기간 종료일 (yyyy-mm-dd)
 * @apiSuccess {String} list.teacherId 담임강사 식별키
 * @apiSuccess {String} list.teacherName 담임강사명
 * @apiSuccess {String} [list.assistantTeacherId] 부담임강사 식별키
 * @apiSuccess {String} [list.assistantTeacherName] 부담임강사명
 * @apiSuccess {String} list.createDate 등록일 (yyyy-mm-dd)
 * @apiSuccess {String} list.status 상태(대기:WAITING, 정상:NORMAL, 취소:CANCEL)
 * 
 * @apiSuccess {Number} totalCount 전체 과정 수
 * @apiSuccess {Number} page 현재 페이지
 * @apiSuccess {Number} limit 한페이지에 보여줄 과정 수
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
            "id": 75615,
            "name": "PTG (주2회 3개월)/50.0회",
            "lessonCount": 50.0,
            "assignmentCount": 0.0,
            "remainCount": 50.0,
            "startDate": "2023-12-30",
            "endDate": "2024-12-29",
            "teacherId": "M1695013438115743",
            "teacherName": "서안나",
            "assistantTeacherId": "M1681990831501448",
            "assistantTeacherName": "정지은",
            "createDate": "2023-12-30",
            "status": "정상"
        },
        {
            "id": 73912,
            "name": "PTM (주2회 3개월)/26.0회",
            "lessonCount": 26.0,
            "assignmentCount": 26.0,
            "remainCount": 0.0,
            "startDate": "2023-07-19",
            "endDate": "2024-01-28",
            "teacherId": "M1400118325784523",
            "teacherName": "한가영",
            "assistantTeacherId": "M1657064932771055",
            "assistantTeacherName": "김나래",
            "createDate": "2023-07-19",
            "status": "정상"
        }
    ],
    "totalCount": 4,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "startPage": 1,
    "totalPage": 1,
    "endPage": 1,
    "hasNext": false,
    "hasPrev": false,
    "isFirst": true,
    "isLast": true
}
 */