/**
 * @api {put} /admin/v1/products/{id} 06. 상품 수정
 *
 * @apiDescription 상품관리 > 수정
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateUserOrderPayment
 * @apiGroup 1. Admin API > 02. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/products/P1722475920322505' \
 * -H "Content-Type: application/json" \
 * -d "{
           "type": "과정",
           "name": "패키지1",
           "price": 13000
       }"
 *
 * @apiParam (Body) {String} type 과정여부 (체크박스 선택 시 '과정'/ 선택하지 않을 시 null)
 * @apiParam (Body) {String} name 상품명
 * @apiParam (Body) {Number} price 가격
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */