/**
 * @api {get} /admin/v1/users/{id}/ldfs 24. 회원 LDF 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > LDF 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserLdfs
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 *  curl -i -X GET 'http://localhost:8080/admin/v1/users/M1654741178072018/ldfs
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Query) date 날짜 (yyyy-mm-dd)
 * @apiParam (Query) limit 한페이지에 보여줄 LDF 수
 * @apiParam (Query) page 조회할 페이지
 *
 * @apiSuccess {Object[]} list LDF 목록
 * @apiSuccess {String} list.id 예약 식별키
 * @apiSuccess {String} list.date 수업일  (yyyy-mm-dd (EEE))
 * @apiSuccess {String} list.startTime 수업시작시간 (HH:mm)
 * @apiSuccess {String} list.endTime 수업종료시간 (HH:mm)
 * @apiSuccess {String} list.courseName 강의명
 * @apiSuccess {String} list.content 콘텐츠
 * @apiSuccess {String} list.teacherName 강사명
 * @apiSuccess {Number} list.attendanceStatus 출석여부(출석/ 결석/ 예약) 출석 시 등록 버튼 출력.
 * @apiSuccess {Number} list.ldfId  LDF 파일 유무 (파일이 있을 시 LDF 식별키/없을 시 NULL)
 * @apiSuccess {Number} list.teacherName 강사명
 * @apiSuccess {Number} page 현재 페이지
 * @apiSuccess {Number} limit 한페이지에 보여줄 회원 수
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
            "id": 2533960,
            "date": "2023-07-27 (Thu)",
            "startTime": "15:00",
            "endTime": "15:30",
            "courseName": "PTM (주2회 3개월)/26.0회",
            "content": null,
            "teacherName": "한가영",
            "attendanceStatus": "출석",
            "ldfId": null,
            "email": "gone93z@naver.com"
        },
        {
            "id": 2533961,
            "date": "2023-07-27 (Thu)",
            "startTime": "15:30",
            "endTime": "16:00",
            "courseName": "PTM (주2회 3개월)/26.0회",
            "content": null,
            "teacherName": "한가영",
            "attendanceStatus": "출석",
            "ldfId": 333965,
            "email": "gone93z@naver.com"
        },
        {
            "id": 2502187,
            "date": "2023-07-21 (Fri)",
            "startTime": "16:30",
            "endTime": "17:00",
            "courseName": "PTM (주2회 3개월)/26.0회",
            "content": null,
            "teacherName": "한가영",
            "attendanceStatus": "출석",
            "ldfId": null,
            "email": "gone93z@naver.com"
        },
        {
            "id": 2502186,
            "date": "2023-07-21 (Fri)",
            "startTime": "16:00",
            "endTime": "16:30",
            "courseName": "PTM (주2회 3개월)/26.0회",
            "content": null,
            "teacherName": "한가영",
            "attendanceStatus": "출석",
            "ldfId": null,
            "email": "gone93z@naver.com"
        },
        {
            "id": 2502184,
            "date": "2023-07-14 (Fri)",
            "startTime": "16:00",
            "endTime": "16:30",
            "courseName": "PTM (주2회 3개월)/26.0회",
            "content": null,
            "teacherName": "한가영",
            "attendanceStatus": "출석",
            "ldfId": null,
            "email": "gone93z@naver.com"
        },
        {
            "id": 2502185,
            "date": "2023-07-14 (Fri)",
            "startTime": "16:30",
            "endTime": "17:00",
            "courseName": "PTM (주2회 3개월)/26.0회",
            "content": null,
            "teacherName": "한가영",
            "attendanceStatus": "출석",
            "ldfId": 331048,
            "email": "gone93z@naver.com"
        },
        {
            "id": 2502181,
            "date": "2023-07-26 (Wed)",
            "startTime": "16:30",
            "endTime": "17:00",
            "courseName": "PTM (주2회 3개월)/26.0회",
            "content": null,
            "teacherName": "한가영",
            "attendanceStatus": "결석",
            "ldfId": null,
            "email": "gone93z@naver.com"
        },
        {
            "id": 2502180,
            "date": "2023-07-26 (Wed)",
            "startTime": "16:00",
            "endTime": "16:30",
            "courseName": "PTM (주2회 3개월)/26.0회",
            "content": null,
            "teacherName": "한가영",
            "attendanceStatus": "결석",
            "ldfId": null,
            "email": "gone93z@naver.com"
        },
        {
            "id": 2502179,
            "date": "2023-07-19 (Wed)",
            "startTime": "16:30",
            "endTime": "17:00",
            "courseName": "PTM (주2회 3개월)/26.0회",
            "content": null,
            "teacherName": "한가영",
            "attendanceStatus": "출석",
            "ldfId": 332036,
            "email": "gone93z@naver.com"
        },
        {
            "id": 2502178,
            "date": "2023-07-19 (Wed)",
            "startTime": "16:00",
            "endTime": "16:30",
            "courseName": "PTM (주2회 3개월)/26.0회",
            "content": null,
            "teacherName": "한가영",
            "attendanceStatus": "출석",
            "ldfId": null,
            "email": "gone93z@naver.com"
        }
    ],
    "totalCount": 94,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "startPage": 1,
    "totalPage": 10,
    "endPage": 10,
    "hasNext": false,
    "isFirst": true,
    "isLast": true,
    "hasPrev": false
}
*/


