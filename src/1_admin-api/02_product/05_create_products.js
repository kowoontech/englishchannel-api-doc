/**
 * @api {post} api/admin/v1/products 05. 상품 등록
 *
 * @apiDescription 상품관리 > 상품등록
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUserOrderRefund
 * @apiGroup 1. Admin API > 02. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/api/admin/v1/products' \
 * -H "Content-Type: application/json" \
 * -d "{
           "name":"테스트상품",
           "curriculumYN":"Y",
           "price":60000
       }"
 *
 *
 * @apiParam (Body) {String} curriculumYN 과정여부 (Y:과정 , N:이외)
 * @apiParam (Body) {String} name 상품명
 * @apiParam (Body) {Number} price 가격
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */