/**
 * @api {put} /admin/v1/products/{id} 06. 상품 수정
 *
 * @apiDescription 상품관리 > 수정
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateUserOrderProduct
 * @apiGroup 1. Admin API > 02. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/products/P1722475920322505' \
 * -H "Content-Type: application/json" \
 * -d "{
                  "name":"테스트상품",
                  "curriculumYN":"Y",
                  "price":60000
              }"
 *
 * @apiParam (Body) {String} curriculumYN 과정여부 (Y:과정 , N:이외)
 * @apiParam (Body) {String} name 상품명
 * @apiParam (Body) {Number} price 가격
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */