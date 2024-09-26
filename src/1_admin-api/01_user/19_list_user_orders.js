/**
 * @api {get} /admin/v1/users/{id}/orders 18. 회원 주문 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserOrders
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1374063899995477/orders'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * 
 * @apiSuccess {Object[]} order 주문 목록
 * @apiSuccess {String} order.id 주문 식별키
 * @apiSuccess {Number} order.supplyAmount 공급가액
 * @apiSuccess {Number} order.discountAmount 할인액
 * @apiSuccess {Number} order.billingAmount 주문금액
 * @apiSuccess {Number} order.paymentAmount 매출액
 * @apiSuccess {Number} order.receivableAmount 미수금
 * @apiSuccess {String} order.createdOn 주문일시 (yyyy-MM-dd HH:mm)
 * @apiSuccess {String} order.creatorName 처리자
 * @apiSuccess {String} order.orderProductName 상품명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "order": [
        {
            "id": "O1374064016311096",
            "supplyAmount": 1320000,
            "discountAmount": 264000,
            "billingAmount": 1056000,
            "paymentAmount": 1056000,
            "receivableAmount": 0,
            "createdOn": "2013-07-17 21:26",
            "creatorName": "김현희",
            "orderProductName": "PTG (주2회 3개월)/3개월/24회"
        },
        {
            "id": "O1380100895273346",
            "supplyAmount": 1320000,
            "discountAmount": 264000,
            "billingAmount": 1056000,
            "paymentAmount": 1056000,
            "receivableAmount": 0,
            "createdOn": "2013-09-25 18:21",
            "creatorName": "김현희",
            "orderProductName": "PTG (주2회 3개월)/3개월/24회"
        },
        {
            "id": "O1389141061183888",
            "supplyAmount": 1320000,
            "discountAmount": 264000,
            "billingAmount": 1056000,
            "paymentAmount": 1056000,
            "receivableAmount": 0,
            "createdOn": "2014-01-08 09:31",
            "creatorName": "권정민",
            "orderProductName": "PTG (주2회 3개월)/3개월/24회"
        },
        {
            "id": "O1396685391422969",
            "supplyAmount": 1320000,
            "discountAmount": 264000,
            "billingAmount": 1056000,
            "paymentAmount": 1056000,
            "receivableAmount": 0,
            "createdOn": "2014-04-05 17:09",
            "creatorName": "김현희",
            "orderProductName": "PTG (주2회 3개월)/3개월/24회"
        },
        {
            "id": "O1407978923393461",
            "supplyAmount": 1320000,
            "discountAmount": 264000,
            "billingAmount": 1056000,
            "paymentAmount": 1056000,
            "receivableAmount": 0,
            "createdOn": "2014-08-14 10:15",
            "creatorName": "권정민",
            "orderProductName": "PTG (주2회 3개월)/3개월/24회"
        }
    ]
}
 */