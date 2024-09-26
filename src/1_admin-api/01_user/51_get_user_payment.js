/**
 * @api {get} /admin/v1/users/{id}/orders/{orderId}/payments/{paymentId} 51. 회원 주문 결제 상세조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUserPayment
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/api/admin/v1/users/M1724922936146796/orders/O1724939709739071/payments/P1724992366486176'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {String} orderId 주문 식별키
 * @apiParam (Path) {String} paymentId 결제 식별키
 *
 * @apiParam (Body) {String} id 결제 식별키
 * @apiParam (Body) {String} modifiedBy 처리자 식벌키
 * @apiParam (Body) {String} cardCompany 카드종류
 * @apiParam (Body) {String} cardNumber 카드번호
 * @apiParam (Body) {Number} installmentMonths 할개월수 (숫자만, 0 또는 null: 일시불)
 * @apiParam (Body) {String} approvalNumber 승인번호
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": "P1724992366486176",
    "cardCompany": "KB",
    "cardNumber": "1212343412123434",
    "approvalNumber": "123",
    "modifiedBy": "U1370839971594082",
    "modifiedName": "채인숙"
}
 */