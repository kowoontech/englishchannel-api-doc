/**
 * @api {post} /admin/v1/users/{id}/orders/{orderId}/payments 39. 회원 주문 결제 등록
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUserOrderPayment
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/users/M1450151088851593/orders/O1450151124963516/payments' \
 * -H "Content-Type: application/json" \
 * -d ""
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {String} orderId 주문 식별키
 *
 * @apiSuccess {String} type 결제구분 (I:신규, P:회수, T:변경)
 * @apiSuccess {String} paymentDate 결제일 (yyyy-MM-dd)
 * @apiSuccess {Number} [cashAmount] 현금금액
 * @apiSuccess {Number} [depositAmount] 예금금액
 * @apiSuccess {Boolean} [isReceiptIssued] 현금영수증 여부
 * @apiSuccess {String} [receiptNumber] 현금영수증 번호
 * @apiSuccess {String} [accountHolder] 예금자명
 * @apiSuccess {Number} receivableAmount 미수금액
 * @apiSuccess {String} [receivableReason] 미수금사유
 * @apiSuccess {String} [memo] 결제메모
 * @apiSuccess {Object[]} [cards] 카드결제 목록
 * @apiSuccess {Number} cards.amount 결제금액
 * @apiSuccess {String} cards.cardCompany 카드종류 (카드종류는 '01. 공통 옵션 목록 조회'에서 조회할 수 있습니다.)
 * @apiSuccess {String} cards.cardNumber 카드번호
 * @apiSuccess {Number} [cards.installmentMonths] 할개월수 (숫자만, 0 또는 null: 일시불)
 * @apiSuccess {String} [cards.approvalNumber] 승인번호
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */