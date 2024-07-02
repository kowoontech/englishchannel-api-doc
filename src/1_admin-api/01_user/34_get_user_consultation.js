/**
 * @api {get} /admin/v1/users/{id}/consultations/{consultationId} 34. 회원 상담 상세 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 상담 탭
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUserConsultation
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1374063899995477/consultations/6651'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {Number} consultationId 상담 식별키
 *
 * @apiSuccess {Number} id 상담 식별키
 * @apiSuccess {String} consultationDate 상담날짜 (yyyy-mm-dd HH:mm)
 * @apiSuccess {String} type 구분
 * @apiSuccess {String} details 상담내용
 * @apiSuccess {String} createdBy 상담직원 식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 {
     "id": 6651,
     "consultationDate": "2013-08-16 07:00",
     "type": "ETC",
     "details": "정세진 학생과 쌍둥이 자매.고3이며 대입 수시 면접 준비로 주2회 수업 나옴. 승무원 학교 갈 예정임.",
     "createdBy": "U1370415306178081"
 }
 */