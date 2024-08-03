/**
 * @api {post} /admin/v1/users/{id}/orders/{orderId}/orderProducts/{orderProductId}/refund 41. 회원 주문 환불 등록
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUserOrderRefund
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/users/M1722002661204896/orders/O1722163996604360/orderProducts/I1722163996604145/refund' \
 * -H "Content-Type: application/json" \
 * -d "{
 *     "refundDate": "2024-07-29",
 *     "cardAmount": 55000,
 *     "cashAmount": null,
 *     "depositAmount": null,
 *     "bank": null,
 *     "accountNumber": null,
 *     "refundReason": ""
 * }"
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {String} orderId 주문 식별키
 * @apiParam (Path) {String} orderProductId 주문 상세 식별키
 *
 * @apiParam (Body) {String} refundDate 환불일 (yyyy-MM-dd)
 * @apiParam (Body) {Number} [cardAmount] 카드금액
 * @apiParam (Body) {Number} [cashAmount] 현금금액
 * @apiParam (Body) {Number} [depositAmount] 계좌이체
 * @apiParam (Body) {String} [bank] 은행명
 * @apiParam (Body) {String} [accountNumber] 계좌번호
 * @apiParam (Body) {String} [refundReason] 환불사유
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */