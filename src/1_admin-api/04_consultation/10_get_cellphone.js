/**
 * @api {post} /admin/v1/consultations 10. 연락처 중복 체크
 *
 * @apiDescription 상세조회,등록,수정 시 사용<br/>
 *
 * @apiVersion 1.0.0
 * @apiName admin_getValCellphone
 * @apiGroup 1. Admin API > 4. 상담관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/consultations/cellphone'
 *
 * @apiParam (Body) {String} [cellPhone] 휴대폰번호
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 *
 */