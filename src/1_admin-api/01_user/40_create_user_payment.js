/**
 * @api {post} /admin/v1/users/{id}/orders/{orderId}/payments 39. 회원 주문 결제 등록
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUserOrderPayment
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/users/M1722002661204896/orders/O1722163996604360/payments' \
 * -H "Content-Type: application/json" \
 * -d "{
           "type": "I",
           "paymentDate": "2024-07-28",
           "cashAmount": null,
           "isReceiptIssued": false,
           "receiptNumber": "",
           "depositAmount": null,
           "accountHolder": "테스터",
           "receivableAmount": 440000,
           "recallDate": null,
           "receivableReason": "test",
           "memo": "test",
           "cards": [
               {
                   "amount": 10000,
                   "code": "2090073",
                   "cardNumber": "12345",
                   "installmentMonths": 0,
                   "approvalNumber": ""
               },
               {
                   "amount": 30000,
                   "code": "2090074",
                   "cardNumber": "00000",
                   "installmentMonths": 0,
                   "approvalNumber": ""
               }
           ]
       }"
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {String} orderId 주문 식별키
 *
 * @apiParam (Body) {String} type 결제구분 (I:신규, P:회수, T:변경)
 * @apiParam (Body) {String} paymentDate 결제일 (yyyy-MM-dd)
 * @apiParam (Body) {Number} [cashAmount] 현금금액
 * @apiParam (Body) {Boolean} [isReceiptIssued] 현금영수증 여부
 * @apiParam (Body) {String} [receiptNumber] 현금영수증 번호
 * @apiParam (Body) {Number} [depositAmount] 예금금액
 * @apiParam (Body) {String} [accountHolder] 예금자명
 * @apiParam (Body) {Number} receivableAmount 미수금액
 * @apiParam (Body) {String} [recallDate] 회수예정일 (yyyy-MM-dd)
 * @apiParam (Body) {String} [receivableReason] 미수금사유
 * @apiParam (Body) {String} [memo] 결제메모
 * @apiParam (Body) {Object[]} [cards] 카드결제 목록
 * @apiParam (Body) {Number} cards.amount 결제금액
 * @apiParam (Body) {String} cards.code 카드종류(코드)
 * @apiParam (Body) {String} cards.cardNumber 카드번호
 * @apiParam (Body) {Number} [cards.installmentMonths] 할개월수 (숫자만, 0 또는 null: 일시불)
 * @apiParam (Body) {String} [cards.approvalNumber] 승인번호
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */