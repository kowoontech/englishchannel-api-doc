/**
 * @api {get} /admin/v1/users/{id}/orders/{orderId} 19. 회원 주문 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUserOrder
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1722002661204896/orders/O1722163996604360'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {String} orderId 주문 식별키
 * 
 * @apiSuccess {String} id 주문 식별키
 * @apiSuccess {Number} supplyAmount 공급가액 합계
 * @apiSuccess {Number} discountAmount 할인액 합계
 * @apiSuccess {Number} billingAmount 실청구금액 합계
 * @apiSuccess {Number} refundAmount 환불금액 합계
 * @apiSuccess {Boolean} isCancelable 전체 취소 가능 여부
 * @apiSuccess {Object[]} orderProducts 주문 상세 목록
 * @apiSuccess {String} orderProducts.id 주문 상세 식별키
 * @apiSuccess {String} orderProducts.name 상품명
 * @apiSuccess {Number} orderProducts.amount 금액
 * @apiSuccess {Number} orderProducts.paymentAmount 결제금액
 * @apiSuccess {Number} orderProducts.discountAmount 할인액
 * @apiSuccess {Number} orderProducts.billingAmount 실청구금액
 * @apiSuccess {Number} orderProducts.refundAmount 환불금액
 * @apiSuccess {String} orderProducts.productType 분류
 * @apiSuccess {Boolean} orderProducts.hasReservations 예약 여부 (true: 예약 있음)
 * @apiSuccess {Boolean} orderProducts.hasPayments 결제 여부 (true: 결제 있음)
 * @apiSuccess {String} orderProducts.createdOn 주문일시 (yyyy-MM-dd HH:mm)
 * @apiSuccess {String} orderProducts.orderType 구분
 * @apiSuccess {Boolean} orderProducts.refundType 환불 구분 (CANCELABLE: 취소 가능, REFUNDABLE: 환불 가능, REFUNDED: 환불 완료)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
 *     "id": "O1722163996604360",
 *     "supplyAmount": 55000,
 *     "discountAmount": 0,
 *     "billingAmount": 55000,
 *     "refundAmount": 55000,
 *     "orderProducts": [
 *         {
 *             "id": "I1722163996604145",
 *             "name": "PTG (주1회 1개월)/0개월/1회",
 *             "amount": 55000,
 *             "discountAmount": 0,
 *             "billingAmount": 55000,
 *             "refundAmount": 55000,
 *             "productType": "과정",
 *             "createdOn": "2024-07-28 19:53",
 *             "orderType": "신규",
 *             "refundType": "REFUNDED",
 *             "retake": false,
 *             "hasReservations": false,
 *             "hasPayments": true
 *         }
 *     ],
 *     "isCancelable": false
 * }"
 */