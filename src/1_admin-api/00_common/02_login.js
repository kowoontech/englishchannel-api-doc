/**
 * @api {post} /admin/v1/login 02. 로그인
 *
 * @apiDescription 어드민 로그인<br/>
 * 모든 API 요청의 header에 Login-Profile=test 를 넣으면 로그인 우회<br/>
 * Token은 각 요청 Header에 Authorization으로 넣어주시면 됩니다. (Bearer 이런거 없이 토큰만)
 *
 * @apiVersion 1.0.0
 * @apiName admin_login
 * @apiGroup 1. Admin API > 00. 공통
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/login' \
 * -H "Content-Type: application/json" \
 * -d "{
    "type": "A",
    "id": "123123123123@naver.com",
    "password": "1111"
}"
 * 
 * @apiParam (Body) {String} type 로그인 유형 (T: 강사, A:운영자)
 * @apiParam (Body) {String} id 로그인 아이디
 * @apiParam (Body) {String} password 비밀번호
 * 
 * @apiSuccess {String} id 회원 식별키
 * @apiSuccess {String} name 이름
 * @apiSuccess {String} token access token
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": "M1568918323745589",
    "name": "test",
    "token": "1234567890"
}
 */