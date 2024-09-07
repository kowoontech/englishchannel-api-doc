/**
 * @api {get} /admin/v1/products/list 08. 홈페이지관리 > 상품목록조회
 *
 * @apiDescription 주문관리 > 상품 목록 조회
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_listProducts_management
 * @apiGroup 1. Admin API > 02. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/products/list'
 * 
 *
 *
 *
 * @apiSuccess {String} id 상품 식별키
 * @apiSuccess {String} name 상품명
 * @apiSuccess {String} price 상품 가격
 * @apiSuccess {String} curriculumYN 과정여부 (Y:과정 , N:이외)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
[
    {
        "id": "P1722559046496207",
        "name": null,
        "price": 0,
        "curriculumYN": "Y"
    },
    {
        "id": "P1722558926239420",
        "name": null,
        "price": 0,
        "curriculumYN": "N"
    },



]

 */