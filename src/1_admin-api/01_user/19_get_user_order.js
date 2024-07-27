/**
 * @api {get} /admin/v1/users/{id}/orders/{orderId} 19. 회원 주문 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUserOrder
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1374063899995477/orders/O1374064016311096'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {String} orderId 주문 식별키
 * 
 * @apiSuccess {String} id 주문 식별키
 * @apiSuccess {Number} supplyAmount 공급가액 합계
 * @apiSuccess {Number} discountAmount 할인액 합계
 * @apiSuccess {Number} billingAmount 실청구금액 합계
 * @apiSuccess {Number} refundAmount 환불금액 합계
 * @apiSuccess {Object[]} orderProducts 주문 상세 목록
 * @apiSuccess {String} orderProducts.id 주문 상세 식별키
 * @apiSuccess {Number} orderProducts.amount 공급가액
 * @apiSuccess {Number} orderProducts.discountAmount 할인액
 * @apiSuccess {Number} orderProducts.billingAmount 실청구금액
 * @apiSuccess {Number} orderProducts.refundAmount 환불금액
 * @apiSuccess {String} orderProducts.productType 분류
 * @apiSuccess {String} orderProducts.createdOn 주문일시 (yyyy-MM-dd HH:mm)
 * @apiSuccess {String} orderProducts.orderType 구분
 * @apiSuccess {String} orderProducts.retake 등록구분
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": "O1374064016311096",
    "supplyAmount": 1320000,
    "discountAmount": 264000,
    "billingAmount": 1056000,
    "refundAmount": 0,
    "orderProducts": [
        {
            "id": "I1374064016316423",
            "name": "PTG (주2회 3개월)/3개월/24회",
            "amount": 1320000,
            "discountAmount": 264000,
            "billingAmount": 1056000,
            "refundAmount": 0,
            "productType": "과정",
            "createdOn": "2013-07-17 21:26",
            "orderType": "신규"
        }
    ]
}
 */