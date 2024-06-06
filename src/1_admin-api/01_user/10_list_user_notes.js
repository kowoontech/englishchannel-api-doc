/**
 * @api {get} /admin/v1/users/{id}/notes 10. 회원 비고 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭 > 예약 등록 > TIP
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserNotes
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1374063899995477/notes?limit=5'
 *
 * @apiParam (Query) [limit] 한페이지에 보여줄 비고 수
 * @apiParam (Query) [page] 조회할 페이지
 *
 * @apiSuccess {Object[]} list 비고 목록
 * @apiSuccess {Number} list.id 비고 식별키
 * @apiSuccess {String} list.content 비고 내용
 * @apiSuccess {String} list.modifiedOn 수정일시 (yyyy-MM-dd HH:mm:ss)
 * @apiSuccess {String} list.modifierName 수정자
 * @apiSuccess {Number} totalCount 전체 비고 수
 * @apiSuccess {Number} page 현재 페이지
 * @apiSuccess {Number} limit 한페이지에 보여줄 비고 수
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
            "id": 452458,
            "content": "Juan 수업 넣지 말 것!",
            "modifiedOn": "2014-06-04 16:48:50",
            "modifierName": "편효린"
        },
        {
            "id": 306750,
            "content": "Christoph 강사 예약 하지 원하지 않음.",
            "modifiedOn": "2014-01-06 10:45:16",
            "modifierName": "권정민"
        }
    ],
    "totalCount": 2,
    "page": 1,
    "limit": 5,
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