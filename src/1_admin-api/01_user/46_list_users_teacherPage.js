/**
 * @api {get} /teacher/v1/users 46. 강사 계정 - 회원목록
 *
 * @apiDescription 강사 계정 로그인 시 회원 목록 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUsers_teacherPage
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/teacher/v1/users?today=false'
 *
 * @apiParam (Query) {boolean} today 학생 구분 (전체: false / 오늘예약 : true)
 * @apiParam (Query) [teacherId] 강사 강사식별키
 * @apiParam (Query) [search] 검색조건
 * @apiParam (Query) [keyword] 검색내용
 * @apiParam (Query) [limit] 한페이지에 보여줄 회원 수
 * @apiParam (Query) [page] 조회할 페이지
 *
 * @apiSuccess {Object[]} list 회원 목록
 * @apiSuccess {String} list.id 회원 식별키
 * @apiSuccess {String} list.name 이름
 * @apiSuccess {String} list.textbook 교재
 * @apiSuccess {String} list.startTime 수업시간(시작)
 * @apiSuccess {String} list.endTime 수업시간(종료)
 * @apiSuccess {String} list.teacherName 강사명
 * @apiSuccess {Number} totalCount 전체 회원 수
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
            "id": "M1723209450019027",
            "name": "학생1",
            "textbook": "교재11",
            "startTime": null,
            "endTime": null,
            "teacherName": null
        },
        {
            "id": "M1723209393285284",
            "name": "학생1",
            "textbook": "교재11",
            "startTime": null,
            "endTime": null,
            "teacherName": null
        },
        {
            "id": "M1723185874746952",
            "name": "강사테스트",
            "textbook": null,
            "startTime": null,
            "endTime": null,
            "teacherName": null
        },
        {
            "id": "M1723181199400889",
            "name": "TEST이름",
            "textbook": null,
            "startTime": null,
            "endTime": null,
            "teacherName": null
        },
        {
            "id": "M1723181139822358",
            "name": "TEST이름",
            "textbook": null,
            "startTime": null,
            "endTime": null,
            "teacherName": null
        },
        {
            "id": "M1723181061269819",
            "name": "TEST이름",
            "textbook": null,
            "startTime": null,
            "endTime": null,
            "teacherName": null
        },
        {
            "id": "M1723180727681590",
            "name": "TEST이름",
            "textbook": null,
            "startTime": null,
            "endTime": null,
            "teacherName": null
        },
        {
            "id": "M1723180073783614",
            "name": "TEST이름",
            "textbook": null,
            "startTime": null,
            "endTime": null,
            "teacherName": null
        },
        {
            "id": "M1723180046288196",
            "name": "TEST이름",
            "textbook": null,
            "startTime": null,
            "endTime": null,
            "teacherName": null
        },
        {
            "id": "M1723179793913079",
            "name": "TEST이름",
            "textbook": null,
            "startTime": null,
            "endTime": null,
            "teacherName": null
        }
    ],
    "totalCount": 4921,
    "page": 1,
    "limit": 10,
    "pageSize": 10,
    "endPage": 10,
    "startPage": 1,
    "totalPage": 493,
    "hasNext": true,
    "isFirst": true,
    "isLast": false,
    "hasPrev": false
}
 */