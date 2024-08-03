/**
 * @api {get} /admin/v1/products 04. 상품 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_listProducts
 * @apiGroup 1. Admin API > 02. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/products?type=DEVICE'
 * 
 * @apiParam (Query) type 상품 유형
 * @apiParam (Query) [language] 언어
 * @apiParam (Query) [lessonType] 수업 유형
 * 
 * @apiSuccess {Object[]} products 상품 목록
 * @apiSuccess {String} products.id 상품 식별키
 * @apiSuccess {String} products.name 상품명
 * @apiSuccess {String} products.price 상품 가격
 * @apiSuccess {Object[]} products.options 옵션 목록
 * @apiSuccess {String} products.options.value Value
 * @apiSuccess {String} products.options.label Label
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "products": [
        {
            "id": "P1350566928359647",
            "name": "맥북에어 - 11.6(128 Flash)",
            "price": 1390000,
            "options": [
                {
                    "value": "색상:Silver",
                    "label": "Silver"
                }
            ]
        },
        {
            "id": "P1352098696544281",
            "name": "아이패드 미니 - 16G",
            "price": 420000,
            "options": [
                {
                    "value": "색상:White",
                    "label": "White"
                },
                {
                    "value": "색상:Black",
                    "label": "Black"
                }
            ]
        },
        {
            "id": "P1352098762823637",
            "name": "아이패드 미니 - 32G",
            "price": 540000,
            "options": [
                {
                    "value": "색상:White",
                    "label": "White"
                },
                {
                    "value": "색상:Black",
                    "label": "Black"
                }
            ]
        },
        {
            "id": "P1352098835580142",
            "name": "아이패드 미니 - 64G",
            "price": 660000,
            "options": [
                {
                    "value": "색상:White",
                    "label": "White"
                },
                {
                    "value": "색상:Black",
                    "label": "Black"
                }
            ]
        },
        {
            "id": "P1352098897939225",
            "name": "아이패드4 - 32G",
            "price": 740000,
            "options": [
                {
                    "value": "색상:White",
                    "label": "White"
                },
                {
                    "value": "색상:Black",
                    "label": "Black"
                }
            ]
        },
        {
            "id": "P1363942256811053",
            "name": "맥북에어  - 11.6(64 Flash)",
            "price": 1290000,
            "options": [
                {
                    "value": "색상:Silver",
                    "label": "Silver"
                }
            ]
        }
    ]
}
 */