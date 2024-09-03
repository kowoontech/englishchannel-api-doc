/**
 * @api {get} /admin/v1/users/{id}/orders/{orderId}/payments 37. 회원 주문 결제/환불 목록 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 주문 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUserOrderPayments
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/api/admin/v1/users/1038929/orders/O1523931572152363/payments'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {String} orderId 주문 식별키
 *
 * @apiSuccess {Number} billingAmount 실청구금액
 * @apiSuccess {Number} paymentAmount 결제금액
 * @apiSuccess {Number} refundAmount 환불금액
 * @apiSuccess {Number} receivableAmount 미수금액
 * @apiSuccess {Object[]} payments 결제 목록
 * @apiSuccess {String} payments.id 결제 식별키
 * @apiSuccess {String} payments.paymentDate 결제일 (yyyy-MM-dd)
 * @apiSuccess {String} payments.type 결제구분 (취소, 신규, 회수, 환불, 변경)
 * @apiSuccess {String} payments.paymentMethod 결제방식 (카드, 예금, 현금)
 * @apiSuccess {Number} payments.paymentAmount 결제금액
 * @apiSuccess {String} payments.accountHolder 예금자명
 * @apiSuccess {String} payments.code 카드사번호
 * @apiSuccess {String} payments.codeName 카드사
 * @apiSuccess {String} payments.cardNumber 카드번호
 * @apiSuccess {Number} payments.installmentMonths 카드할부 개월수 (null: 일시불)
 * @apiSuccess {String} payments.installmentMonthsLabel 카드할부 (n개월, 일시불)
 * @apiSuccess {String} payments.approvalNumber 카드승인번호
 * @apiSuccess {String} payments.memo 결제메모
 * @apiSuccess {String} payments.modifiedBy 처리자 식별키
 * @apiSuccess {String} payments.modifierName 처리자
 * @apiSuccess {Boolean} payments.isCancelable 취소 가능 여부
 * @apiSuccess {Object[]} refunds 환불 목록
 * @apiSuccess {String} refunds.id 환불 식별키
 * @apiSuccess {String} refunds.refundDate 환불일 (yyyy-MM-dd)
 * @apiSuccess {String} refunds.orderProductName 상품명
 * @apiSuccess {Number} refunds.refundAmount 환불금액
 * @apiSuccess {Number} refunds.cardAmount 카드금액
 * @apiSuccess {Number} refunds.cashAmount 현금금액
 * @apiSuccess {Number} refunds.depositAmount 계좌이체금액
 * @apiSuccess {String} refunds.bank 은행명
 * @apiSuccess {String} refunds.accountNumber 계좌번호
 * @apiSuccess {String} refunds.refundReason 환불사유
 * @apiSuccess {String} refunds.modifierName 처리자
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 * "{
        "billingAmount": 1830000,
        "paymentAmount": 1830000,
        "refundAmount": 0,
        "receivableAmount": 0,
        "payments": [
            {
                "id": "PD10170249385538",
                "paymentDate": "2018-04-17",
                "type": "신규",
                "paymentMethod": "카드",
                "paymentAmount": 1830000,
                "accountHolder": null,
                "code": "2090011",
                "codeName": "하나",
                "cardNumber": "7sBuyxaJxOCSDDIJ/J2ld3QK4s5EObspl6ZA7ZdiyYc=",
                "installmentMonths": 3,
                "installmentMonthsLabel": "3개월",
                "approvalNumber": "04254398",
                "memo": null,
                "modifiedBy": "U1504679573048501",
                "modifierName": "박윤수",
                "isCancelable": true
            }
        ],
        "refunds": []
    }"
 */