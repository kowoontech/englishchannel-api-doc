/**
 * @api {post} /admin/v1/consultations/history/{id} 06. 추가 상담 등록
 *
 * @apiDescription 상담관리 > 상세페이지조회 > 추가 상담 이력 <br/>
 * 상세 페이지 누를 시 상담 식별키 넘겨 받음-> 식별키 가지고 추가 상담 이력 출력
 *
 * @apiVersion 1.0.0
 * @apiName admin_createUserConsultation
 * @apiGroup 1. Admin API > 04. 상담관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/consultations/history/520' \
 * -H "Content-Type: application/json" \
 * -d "{
           "details" : "ㅇㅇㅇㅇ"
       }"
 *
 * @apiParam (Path) {String} id 상담 식별키
 * 
 * @apiParam (Body) {String} details 내용
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */