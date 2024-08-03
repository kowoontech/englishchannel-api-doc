/**
 * @api {get} /admin/v1/products/lessonTypes 03. 상품 수업 유형 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_listProductLessonTypes
 * @apiGroup 1. Admin API > 02. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/products/lessonTypes'
 * 
 * @apiSuccess {Object[]} lessonTypes 수업 유형 목록
 * @apiSuccess {String} lessonTypes.value Value
 * @apiSuccess {String} lessonTypes.label Label
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "lessonTypes": [
        {
            "value": "PT",
            "label": "PT"
        },
        {
            "value": "TT",
            "label": "TT"
        },
        {
            "value": "GT",
            "label": "GT"
        }
    ]
}
 */