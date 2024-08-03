/**
 * @api {get} /admin/v1/products/{id} 07. 상품 상세 조회
 *
 * @apiDescription 상품관리 > 상품 조회
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUserProduct
 * @apiGroup 1. Admin API > 02. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/products/P1722476566849400'
 *
 * @apiParam (Path) {String} id 상품 식별키
 *
 * @apiSuccess {String} id 상품 식별키
 * @apiSuccess {String} type 과정여부 체크(CURRICULUM시에 체크<br/>
                                             null,CONTENTS, DEVICE,TEXTBOOK,PACKAGE : 체크되지않은것)
 * @apiSuccess {String} [language] 언어(EN:영어, CN:중국어, JP:일본어, KR:한국어)
 * @apiSuccess {String} [lessonType] 수업유형(PT, TT, GT)
 * @apiSuccess {String} name 상품명
 * @apiSuccess {String} price 가격
 * @apiSuccess {String} [quantityUnit] 수량(단위)
 * @apiSuccess {Object[]} [options] 옵션목록
 * @apiSuccess {String} [sort] 정렬순서
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": "P1722478832696425",
    "type": "TEXTBOOK",
    "language": "영어",
    "lessonType": "PT",
    "name": "패키지1",
    "price": 13000,
    "quantityUnit": "개",
    "options": [
        "SILVER",
        "SILVER"
    ],
    "sort": 82
}
 */