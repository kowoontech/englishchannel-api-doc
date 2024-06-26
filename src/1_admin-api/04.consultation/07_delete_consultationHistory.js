 /**
  * @api {delete} /admin/v1/consultations/history/{id} 07. 추가 상담 삭제
  *
  * @apiDescription 상담관리 > 상세조회 페이지
  *
  * @apiVersion 1.0.0
  * @apiName admin_deleteConsultationHistory
  * @apiGroup 1. Admin API > 4. 상담관리
  *
  * @apiExample {curl} REQUEST
  * curl -i -X DELETE 'http://localhost:8080/admin/v1/users/notes/2610931'
  *
  * @apiParam (Path) {String} id 추가 상담 식별키
  *
  * @apiSuccessExample {json} SUCCESS
  * HTTP/1.1 200
  */