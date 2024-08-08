/**
 * @api {get} /admin/v1/teachers/{id} 02. 강사 상세조회
 *
 * @apiDescription  상세보기/ 수정/삭제 시 사용<br/>
 *
 * @apiVersion 1.0.0
 * @apiName admin_getOptions
 * @apiGroup 1. Admin API > 05. 강사
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/teachers/M1574925585880330'
 *
 * @apiParam (Query) id 강사 식별키
 *
 * @apiSuccess {String} id 강사 식별키
 * @apiSuccess {String} loginId 강사 아이디
 * @apiSuccess {String} name 강사명
 * @apiSuccess {String} nameEn 영어이름
 * @apiSuccess {String} lastNameEn 성
 * @apiSuccess {String} lastNameEn 이름
 * @apiSuccess {String} password 비밀번호
 * @apiSuccess {String} email 이메일
 * @apiSuccess {String} gender 성별 [F,M]
 * @apiSuccess {String} cellPhone 전화번호
 * @apiSuccess {String} type 강사타입 [HT, LT]
 * @apiSuccess {String} workStartDate 근무시작일[yyyy-MM-dd]
 * @apiSuccess {String} language 언어 [ ENGLISH, CHINESE, JAPANESE]
 * @apiSuccess {String} workTime 근무시간[AM_16, PM_16, SP_16, AM_8, PM_8, SP_10, SP_4]
 * @apiSuccess {String} workType 근무타입[A, C]
 * @apiSuccess {String} partnerTeacherId 파트너강사
 * @apiSuccess {Boolean} active 활동여부 [true:활동, false:비활동]
 * @apiSuccess {Object[]} files 첨부파일 목록
 * @apiSuccess {Number} files.id 첨부파일 식별키
 * @apiSuccess {String} files.file 파일명
 * @apiSuccess {String} files.originalFile 실제 파일명
 * @apiSuccess {String} files.url 다운로드 URL
 *
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": "M1574925585880330",
    "loginId": "joyjoyjoy20@naver.com",
    "name": "나기쁨",
    "nameEn": "Joy Na",
    "lastNameEn": "Na",
    "firstNameEn": "Joy",
    "password": "e10adc3949ba59abbe56e057f20f883e",
    "email": "joyjoyjoy20@naver.com",
    "gender": "F",
    "cellPhone": "UdWtv6wc/t4H/Qfph7VnyA==",
    "type": "HT",
    "workStartDate": "2019-12-02",
    "language": "ENGLISH",
    "workTime": "PM_16",
    "workType": "A",
    "partnerTeacherId": "M1567752637796763",
    "active": false,
    "files": [
        {
            "id": 1,
            "file": "1722059534694_1.jpeg",
            "originalFile": "1.jpeg",
            "url": "http://englishchannel.co.kr:8080/file/download/1722059534694_1.jpeg/1.jpeg"
        },
        {
            "id": 2,
            "file": "1722059534694_2.jpeg",
            "originalFile": "2.jpeg",
            "url": "http://englishchannel.co.kr:8080/file/download/1722059534694_2.jpeg/2.jpeg"
        }
    ]
}
 */