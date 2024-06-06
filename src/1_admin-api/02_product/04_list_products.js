/**
 * @api {get} /admin/v1/products 04. 상품 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_listProducts
 * @apiGroup 1. Admin API > 2. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/products?type=CURRICULUM&language=EN&lessonType=PT'
 * 
 * @apiParam (Query) type 상품 유형
 * @apiParam (Query) [language] 언어
 * @apiParam (Query) [lessonType] 수업 유형
 * 
 * @apiSuccess {Object[]} products 상품 목록
 * @apiSuccess {String} products.id 상품 식별키
 * @apiSuccess {String} products.name 상품명
 * @apiSuccess {String} products.price 상품 가격
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "products": [
        {
            "id": "P1350556710397836",
            "name": "PTG (주1회 1개월)",
            "price": 55000
        },
        {
            "id": "P1350556747894625",
            "name": "PTG (주2회 6개월)",
            "price": 53000
        },
        {
            "id": "P1350566735444807",
            "name": "Plug-in 30분",
            "price": 30000
        },
        {
            "id": "P1357195231862759",
            "name": "MISEC/미수금정보",
            "price": 0
        },
        {
            "id": "P1361514930881960",
            "name": "PTM (주2회 3개월)",
            "price": 60000
        },
        {
            "id": "P1364295608035901",
            "name": "PTG (주2회 3개월)",
            "price": 55000
        },
        {
            "id": "P1364375717944669",
            "name": "PTM (주2회 6개월)",
            "price": 58000
        },
        {
            "id": "P1425279988311032",
            "name": "NEW PT 24회 3개월",
            "price": 65000
        }
    ]
}
 */