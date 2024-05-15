/**
 * @api {get} /admin/v1/users/{id}/courses 05. 회원 예약 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭<br/>
 * 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserReservations
 * @apiGroup 1. Admin API > 1. 회원관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1427783489308244/reservations?courseId=75508'
 * 
 * @apiParam (Path) {String} id 회원 식별키
 *
 * @apiParam (Query) courseId 과정 식별키
 * @apiParam (Query) [dateFrom] 수업일 검색 ~부터 (yyyy-mm-dd)
 * @apiParam (Query) [dateTo] 수업일 검색 ~까지 (yyyy-mm-dd)
 * @apiParam (Query) [includeCancel] true: 취소포함
 * @apiParam (Query) [includeAttendance] true: 출결완료포함
 * @apiParam (Query) [limit] 한페이지에 보여줄 예약 수
 * @apiParam (Query) [page] 조회할 페이지
 *
 * @apiSuccess {Object[]} list 예약 목록
 * @apiSuccess {String} list.id 예약 식별키
 * @apiSuccess {String} list.teacherName 강사
 * @apiSuccess {String} list.lessonType 수업
 * @apiSuccess {String} list.date 수업일
 * @apiSuccess {String} list.startTime 수업시작시간
 * @apiSuccess {String} list.endTime 수업종료시간
 * @apiSuccess {String} list.attendanceStatus 출결 (Y: 출석, N: 결석, R: 예약)
 * @apiSuccess {String} list.modifierName 처리직원
 * @apiSuccess {String} list.modifiedOn 처리일
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
            "id": 2626222,
            "teacherName": "Alex",
            "lessonType": null,
            "date": "2024-01-20",
            "startTime": "12:00:00",
            "endTime": "12:30:00",
            "attendanceStatus": "R",
            "modifierName": "채안나",
            "modifiedOn": "2023-12-30"
        },
        {
            "id": 2626223,
            "teacherName": "Alex",
            "lessonType": null,
            "date": "2024-01-20",
            "startTime": "12:30:00",
            "endTime": "13:00:00",
            "attendanceStatus": "R",
            "modifierName": "채안나",
            "modifiedOn": "2023-12-30"
        }
    ],
    "totalCount": 2,
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