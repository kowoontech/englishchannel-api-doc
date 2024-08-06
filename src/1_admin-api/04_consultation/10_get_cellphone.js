/**
 * @api {post} /admin/v1/consultations/cellpnone 10. 연락처 중복 체크
 *
 * @apiDescription 상세조회,등록,수정 시 사용<br/>
 * 중복된 연락처 확인을 위해서는 {"cellPhone" : "020-3333-3333"} 사용해주세요
 *
 * @apiVersion 1.0.0
 * @apiName admin_getValCellphone
 * @apiGroup 1. Admin API > 04. 상담관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/consultations/cellphone'
 *
 * @apiParam (Body) {String} cellPhone 휴대폰번호
 *
 * @apiSuccess {String} message 유효성 검사 결과

 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "message": "중복된 연락처가 있습니다."
}
 */