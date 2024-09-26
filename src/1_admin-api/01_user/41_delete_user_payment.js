/**
 * @api {delete} /admin/v1/users/{id}/orders/{orderId}/payments/{paymentId} 41. 회원 주문 결제 취소
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_deleteUserOrderPayment
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/admin/v1/users/M1722002661204896/orders/O1722163996604360/payments/P1722166023495462'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {String} orderId 주문 식별키
 * @apiParam (Path) {String} paymentId 결제 식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */