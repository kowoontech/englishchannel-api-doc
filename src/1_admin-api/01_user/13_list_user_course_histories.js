/**
 * @api {get} /admin/v1/users/{id}/courses/{courseId}/histories 13. 회원 수강관리이력 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 수강 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserCourseHistories
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1672401688362469/courses/75615/histories'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {Number} courseId 수강 식별키
 * 
 * @apiParam (Query) [limit] 한페이지에 보여줄 이력 수
 * @apiParam (Query) [page] 조회할 페이지
 *
 * @apiSuccess {Object[]} list 이력 목록
 * @apiSuccess {Number} list.id 이력 식별키
 * @apiSuccess {String} list.modifiedOn 날짜 (yyyy-mm-dd HH:mm:ss)
 * @apiSuccess {String} list.modifierName 처리자
 * @apiSuccess {String} list.type 구분
 * @apiSuccess {String} list.content 내용
 * 
 * @apiSuccess {Number} totalCount 전체 이력 수
 * @apiSuccess {Number} page 현재 페이지
 * @apiSuccess {Number} limit 한페이지에 보여줄 이력 수
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
            "id": 3817438,
            "modifiedOn": "2023-12-30 14:35:53",
            "modifierName": "손진",
            "type": "변경",
            "content": "레슨횟수 : 54.0 -&gt; 50(수강권추가구매)<br>수강시작일 : 2024-01-06 -&gt; 2023-12-30(어플 사용을 위해 수강시작일 임시변경)<br>수강종료일 : 2024-04-05 -&gt; 2024-12-29(어플 사용을 위해 수강시작일 임시변경)"
        },
        {
            "id": 3817435,
            "modifiedOn": "2023-12-30 14:32:36",
            "modifierName": "손진",
            "type": "주문",
            "content": "PTG (주2회 3개월)/54회"
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