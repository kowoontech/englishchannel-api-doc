/**
 * @api {get} /admin/v1/orders/calculates 01. 기간별 정산 목록 조회
 *
 * @apiDescription 정산관리 > 기간별정산관리
 *
 * @apiVersion 1.0.0
 * @apiName admin_listOrderCalculates
 * @apiGroup 1. Admin API > 7. 정산
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/orders/calculates?dateFrom=2023-12-01&dateTo=2023-12-31&creatorName=박지수'
 *
 * @apiParam (Query) {String} dateFrom 결제기간 검색 시작일 [yyyy-MM-dd]
 * @apiParam (Query) {String} dateTo  결제기간 검색 종료일[yyyy-MM-dd]
 * @apiParam (Query) {String} creatorName 처리자 검색

 * @apiSuccess {Object[]} summaries 정산 요약 목록
 * @apiSuccess {String} summaries.creatorName 처리자
 * @apiSuccess {Number} summaries.paymentAmount 매출액
 * @apiSuccess {Number} summaries.refundAmount 환불금액
 * @apiSuccess {Object[]} orders 주문 목록
 * @apiSuccess {String} orders.id 주문 식별키
 * @apiSuccess {Number} orders.billingAmount 주문액
 * @apiSuccess {Number} orders.paymentAmount 매출액
 * @apiSuccess {Number} orders.refundAmount 환불금액
 * @apiSuccess {Number} orders.receivableAmount 미수금액
 * @apiSuccess {String} orders.creatorName 처리자
 * @apiSuccess {String} orders.createdOn 주문일시 (yyyy-MM-dd HH:mm:ss)
 * @apiSuccess {String} orders.orderProductName 상품명
 * @apiSuccess {String} orders.userId 회원 식별키
 * @apiSuccess {String} orders.userName 주문자
 * @apiSuccess {Object[]} orders.payments 결제 목록
 * @apiSuccess {Number} orders.payments.paymentAmount 매출액
 * @apiSuccess {Number} orders.payments.refundAmount 환불금액
 * @apiSuccess {String} orders.payments.transactionName 거래처
 * @apiSuccess {Number} orders.payments.installmentMonths 할부개월 (null:일시불)
 * @apiSuccess {String} orders.payments.cardNumber 카드번호
 * @apiSuccess {String} orders.payments.createdOn 결제일시 (yyyy-MM-dd HH:mm:ss)
 * @apiSuccess {String} orders.payments.creatorName 처리자
 * @apiSuccess {String} orders.payments.orderType 구분
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 {
     "summaries": [
         {
             "creatorName": "김새롬",
             "paymentAmount": 765000,
             "refundAmount": 680000
         },
         {
             "creatorName": "박지수",
             "paymentAmount": 29555000,
             "refundAmount": 0
         }
     ],
     "orders": [
         {
             "id": "O1699685966684866",
             "billingAmount": 2320000,
             "paymentAmount": 680000,
             "refundAmount": 680000,
             "receivableAmount": 960000,
             "creatorName": "김새롬",
             "createdOn": "2023-11-11 15:59:26",
             "orderProductName": "NEW PT 24회 3개월/3개월/26회",
             "userName": "김주연:환불",
             "payments": [
                 {
                     "paymentAmount": 1000000,
                     "refundAmount": 0,
                     "transactionName": null,
                     "installmentMonths": 3,
                     "cardNumber": "12345",
                     "createdOn": "2023-11-11 16:04:06",
                     "creatorName": "손진",
                     "orderType": "신규"
                 },
                 {
                     "paymentAmount": 640000,
                     "refundAmount": 0,
                     "transactionName": null,
                     "installmentMonths": null,
                     "cardNumber": "12345",
                     "createdOn": "2023-11-23 18:57:41",
                     "creatorName": "박지수",
                     "orderType": "신규"
                 }
             ]
         },
         {
             "id": "O1700133422903557",
             "billingAmount": 510000,
             "paymentAmount": 510000,
             "refundAmount": 0,
             "receivableAmount": 0,
             "creatorName": "박지수",
             "createdOn": "2023-11-16 20:17:02",
             "orderProductName": "PTM (주2회 3개월)/1개월/9회",
             "userName": "전민경",
             "payments": [
                 {
                     "paymentAmount": 500000,
                     "refundAmount": 0,
                     "transactionName": null,
                     "installmentMonths": null,
                     "cardNumber": null,
                     "createdOn": "2023-11-16 20:18:58",
                     "creatorName": "박지수",
                     "orderType": "신규"
                 },
                 {
                     "paymentAmount": 10000,
                     "refundAmount": 0,
                     "transactionName": null,
                     "installmentMonths": null,
                     "cardNumber": "12345",
                     "createdOn": "2023-12-01 21:14:39",
                     "creatorName": "김새롬",
                     "orderType": "신규"
                 }
             ]
         }
     ]
 }
 */