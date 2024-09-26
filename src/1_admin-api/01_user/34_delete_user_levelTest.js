/**
 * @api {delete} /admin/v1/users/{id}/levelTests/{testId} 34. 레벨테스트 삭제
 *
 * @apiDescription 회원관리 > 상세조회 > 테스트탭 <br/>
 * id : 1028151  / testId : 6118
 *
 * @apiVersion 1.0.0
 * @apiName admin_User_DELETE_LevelTest
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X DELETE 'http://localhost:8080/admin/v1/users/1028151/levelTests/6118'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {String} testId 테스트 식별키
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */