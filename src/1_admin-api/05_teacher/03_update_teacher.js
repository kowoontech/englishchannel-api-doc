/**
 * @api {put} /admin/v1/teachers/{id} 03. 강사수정
 *
 * @apiDescription 강사관리 > 강사상세조회 > 수정 <br/>
 *"Content-Type"은 파일이 있어서 "multipart/form-data"로 해주세요
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateTeacher
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/teachers/500593' \
 * -H "Content-Type: multipart/form-data" \
 * -F "name=수정2" \
 * -F "firstNameEn=jin" \
 * -F "password=1234" \
 * -F "loginId=loginId6666@naver.com" \
 * -F "workType=A" \
 * -F "workTime=SP_4" \
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
 * @apiParam (Body) {String} teacherType 강사타입 [HT, LT]
 * @apiParam (Body) {String} workTime 근무시간[AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4]
 * @apiParam (Body) {String} workType 근무타입[A, C]
 * @apiParam (Body) {String} partnerTeacherId 파트너강사
 * @apiParam (Body) {Boolean} active 활동여부 [true:활동, false:비활동]
 * @apiParam (Body) {String} cellPhone
 * @apiParam (Body) {Number[]} deleteFiles (삭제할 파일 id 목록)
 * @apiParam (Body) {File} files 첨부파일 (같은 파라미터명으로 여러 파일 가능)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */