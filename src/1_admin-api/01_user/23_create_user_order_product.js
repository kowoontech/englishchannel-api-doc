/**
 * @api {post} /admin/v1/users/{id}/orders/products 23. 회원 주문 상품 등록 (주문 등록)
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 상담 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUserOrderProduct
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/users/M1374063899995477/orders/products' \
 * -H "Content-Type: application/json" \
 * -d "{
           "productId":"P1725650808085698",
           "months": 1,
           "quantity":6,
           "teacherId":"M1709859614116619",
           "assistantTeacherId":"M1681990831501448",
           "isRetake":true,
           "retakeTeacherId":"M1681990831501448",
           "retakeNote":"수업만족",
           "billingAmount":70000
       }"
 *
 * @apiParam (Path) {String} id 회원 식별키
 * 
 * @apiParam (Body) {String} [orderId] 주문 번호 (기존 주문에 주문 추가시)
 * @apiParam (Body) {String} productId 상품 식별키
 * @apiParam (Body) {Number} [months] 설정 개월
 * @apiParam (Body) {Number} [quantity] 설정 횟수
 * @apiParam (Body) {String} [teacherId] 담임 강사 식별키
 * @apiParam (Body) {String} [assistantTeacherId] 부담임 강사 식별키
 * @apiParam (Body) {Boolean} [isRetake] 등록 구분 (신규: false, 재등록: true)
 * @apiParam (Body) {String} [retakeTeacherId] 재등록 대상 강사 식별키
 * @apiParam (Body) {String} [retakeNote] 재등록 사유
 * @apiParam (Body) {Number} [discountAmount] 할인 금액
 * @apiParam (Body) {Number} billingAmount 청구 금액
 * @apiParam (Body) {String} [productOption] 상품 옵션
 * 
 * @apiSuccess {String} orderId 주문 식별키 (신규 주문은 새로 생성된 식별키, 기존 주문은 기존 주문의 식별키 그대로)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 {
    "orderId": "O1725653297500048"
}
 */