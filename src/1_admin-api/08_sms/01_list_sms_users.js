/**
 * @api {get} /admin/v1/sms/users 01. 발송 대상 목록 조회
 *
 * @apiDescription 공통 > SMS 발송
 *
 * @apiVersion 1.0.0
 * @apiName admin_listSmsUsers
 * @apiGroup 1. Admin API > 08. SMS
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/sms/users?type=S&search=name&keyword=하'
 *
 * @apiParam (Query) {String} type 발송 대상 유형 (S:일반회원, T:강사, A:관리자)
 * @apiParam (Query) {String} search 검색 조건 (name:이름, id:아이디)
 * @apiParam (Query) {String} keyword 검색어

 * @apiSuccess {Object[]} users 발송 대상 목록
 * @apiSuccess {String} users.id 회원 식별키
 * @apiSuccess {String} users.name 이름
 * @apiSuccess {String} users.nameEn 영문 이름
 * @apiSuccess {String} users.cellPhone 휴대폰번호
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 {
     "users": [
         {
             "id": "M1519648304234104",
             "name": "RE-김동하",
             "nameEn": "Dongha Kim",
             "cellPhone": "oM0uUrU29/y8pX8RhMJowA=="
         },
         {
             "id": "M1511408494025832",
             "name": "RE-김하연",
             "nameEn": "Hayeon Kim",
             "cellPhone": "1YbnCAQv003mIo7wZSkhjQ=="
         },
         {
             "id": "M1524297763999142",
             "name": "RE-서민하",
             "nameEn": "Minha Seo",
             "cellPhone": "Tw/eHhP+RYDHm5SISrHs5w=="
         }
     ]
 }
 */