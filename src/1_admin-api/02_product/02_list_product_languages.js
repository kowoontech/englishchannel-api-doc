/**
 * @api {get} /admin/v1/products/languages 02. 상품 언어 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_listProductLanguages
 * @apiGroup 1. Admin API > 02. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/products/languages'
 * 
 * @apiSuccess {Object[]} languages 언어 목록
 * @apiSuccess {String} languages.value Value
 * @apiSuccess {String} languages.label Label
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "languages": [
        {
            "value": "EN",
            "label": "영어"
        },
        {
            "value": "CN",
            "label": "중국어"
        },
        {
            "value": "JP",
            "label": "일본어"
        },
        {
            "value": "KR",
            "label": "한국어"
        }
    ]
}
 */