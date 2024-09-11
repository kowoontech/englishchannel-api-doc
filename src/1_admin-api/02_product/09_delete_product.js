/**
 * @api {delete} /admin/v1/products/{id} 09. 상품 삭제
 *
* @apiDescription 상품관리 > 삭제
 *
 * @apiVersion 1.0.0
 * @apiName admin_deleteProduct
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/admin/v1/users/M1701411293447353'
 *
 * @apiParam (Path) {String} id 상품 식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */