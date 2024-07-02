/**
 * @api {put} /admin/v1/teachers/{id} 03. 강사수정
 *
 * @apiDescription 강사관리 > 강사상세조회 > 수정
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateUser
 * @apiGroup 1. Admin API > 5. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/500593' \
 * -H "Content-Type: application/json" \
 * -d "{
           "name" : "강사수정222",
           "firstNameEn" : "hong",
           "lastNameEn" : "gildong",
           "password" : "임시 비밀번호",
           "email": "ddd@naver.com",
           "gender" :"F",
           "workStartDate" : "2021-12-12",
           "type" :"HT",
           "workTime" : "AM_16",
           "workType" : "A",
           "partnerTeacherId" :"M1567752637796763",
           "active": true,
           "cellPhone" :"010-2222-2222"

       }"
 *
 * @apiParam (Path) {String} [id] 강사 식별키
 * 
 * @apiParam (Body) {String} name 이름
 * @apiParam (Body) {String} firstNameEn 이름
 * @apiParam (Body) {String} lastNameEn 성
 * @apiParam (Body) {String} loginId 강사아이디
 * @apiParam (Body) {String} password 비밀번호
 * @apiParam (Body) {String} email 이메일
 * @apiParam (Body) {String} gender 성별[F,M]
 * @apiParam (Body) {String} workStartDate 근무시작일[yyyy-MM-dd]
 * @apiParam (Body) {String} type 강사타입 [HT, LT]
 * @apiParam (Body) {String} workTime 근무시간[AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4]
 * @apiParam (Body) {String} workType 근무타입[A, C]
 * @apiParam (Body) {String} partnerTeacherId 파트너강사
 * @apiParam (Body) {String} active 활동여부 [true:활동, false:비활동]
 * @apiParam (Body) {String} cellPhone
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */