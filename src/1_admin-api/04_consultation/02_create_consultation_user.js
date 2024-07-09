/**
 * @api {post} /admin/v1/consultations/{id}/users 02. 상담 회원 등록
 *
 * @apiDescription 회원관리 > 상담관리 > 회원등록 <br/>
 *  test id : 14890 , 14967 , 15001 , 15209
 *
 * @apiVersion 1.0.0
 * @apiName admin_createConsultationUser
 * @apiGroup 1. Admin API > 4. 상담관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/consultations/14949/users'
 * 
 * @apiParam (Path) {Number} id 상담 식별키
 * 
 * @apiSuccess {String} userId 회원 식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "userId": "M1719131763363954"
}
 */