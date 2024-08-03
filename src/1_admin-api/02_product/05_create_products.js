/**
 * @api {post} admin/v1/products 05. 상품 등록
 *
 * @apiDescription 상품관리 > 상품등록
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUserOrderRefund
 * @apiGroup 1. Admin API > 02. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/products' \
 * -H "Content-Type: application/json" \
 * -d "{
           "type": "과정",
           "name": "패키지1",
           "price": 13000
       }"
 *
 *
 * @apiParam (Body) {String} type 과정여부 (체크박스 선택 시 '과정'/ 선택하지 않을 시 null)
 * @apiParam (Body) {String} name 상품명
 * @apiParam (Body) {Number} price 가격
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */