/**
 * @api {delete} /admin/v1/users/{id}/consultations/{consultationId} 37. 회원 상담 삭제
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 상담 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_deleteUserConsultation
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/admin/v1/users/M1374063899995477/consultations/6651'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {Number} consultationId 상담 식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */