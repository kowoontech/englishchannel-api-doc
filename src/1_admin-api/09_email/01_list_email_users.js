/**
 * @api {get} /admin/v1/email/users 01. 발송 대상 목록 조회
 *
 * @apiDescription 공통 > Email 발송
 *
 * @apiVersion 1.0.0
 * @apiName admin_listEmailUsers
 * @apiGroup 1. Admin API > 09. Email
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/email/users?type=S&search=name&keyword=하'
 *
 * @apiParam (Query) {String} type 발송 대상 유형 (S:일반회원, T:강사, A:관리자)
 * @apiParam (Query) {String} search 검색 조건 (name:이름, id:아이디)
 * @apiParam (Query) {String} keyword 검색어

 * @apiSuccess {Object[]} users 발송 대상 목록
 * @apiSuccess {String} users.id 회원 식별키
 * @apiSuccess {String} users.name 이름
 * @apiSuccess {String} users.nameEn 영문 이름
 * @apiSuccess {String} users.email 이메일
 * @apiSuccess {String} users.loginId 아이디
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 {
{
    "users": [
        {
            "id": "M1519648304234104",
            "name": "RE-김동하",
            "nameEn": "Dongha Kim",
            "loginId": "huggun@hanmail.net",
            "email": "kimdongha1984@gmail.com"
        },
        {
            "id": "M1511408494025832",
            "name": "RE-김하연",
            "nameEn": "Hayeon Kim",
            "loginId": "aqua7583@naver.com",
            "email": "aqua7583@naver.com"
        },
        {
            "id": "M1524297763999142",
            "name": "RE-서민하",
            "nameEn": "Minha Seo",
            "loginId": "yellow0824@naver.com",
            "email": "yellow0824@naver.com"
        },
        {
            "id": "M1502520988970956",
            "name": "RE-이하늘",
            "nameEn": "Ha-neul Lee",
            "loginId": "skyfl94@naver.com",
            "email": "skyfl94@naver.com"
        },

 }
 */