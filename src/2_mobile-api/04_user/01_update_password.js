/**
 * @api {put} /mobile/v1/password 01. 비밀번호 변경
 *
 * @apiDescription 햄버거메뉴 > 더보기 > 비밀번호 변경
 *
 * @apiVersion 1.0.0
 * @apiName mobile_updatepassword
 * @apiGroup 2. Mobile API > 04. 회원정보
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http:/localhost:8080/mobile/v1/password' \
 * -H "Content-Type: application/json" \
 * -d "{
           "password":"dus12345",
           "newPassword":"dus1234",
           "checkPassword" :"dus1234"
       }"
 *
 * @apiParam (Body) {String} password 현재 비밀번호
 * @apiParam (Body) {String} newPassword 새비밀번호
 * @apiParam (Body) {String} checkPassword 새비밀번호확인

 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 *
 {
     "message": "비밀번호가 변경되었습니다."
 }
 */