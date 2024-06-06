/**
 * @api {get} /admin/v1/products/types 01. 상품 유형 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_listProductTypes
 * @apiGroup 1. Admin API > 2. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/products/types'
 * 
 * @apiSuccess {Object[]} types 상품 유형 목록
 * @apiSuccess {String} types.value Value
 * @apiSuccess {String} types.label Label
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "types": [
        {
            "value": "CURRICULUM",
            "label": "과정"
        },
        {
            "value": "CONTENTS",
            "label": "컨텐츠"
        },
        {
            "value": "DEVICE",
            "label": "기기"
        },
        {
            "value": "TEXTBOOK",
            "label": "교재"
        },
        {
            "value": "PACKAGE",
            "label": "패키지"
        }
    ]
}
 */