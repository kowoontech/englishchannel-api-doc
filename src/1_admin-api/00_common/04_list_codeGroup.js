/**
 * @api {get} /admin/v1/commonCode 04. 코드 그룹 목록
 *
 * @apiDescription 코드 그룹 목록 <br/>
 * 하드코딩 된 테이블입니다. 공통코드 등록, 수정 시 사용합니다.
 *
 * @apiVersion 1.0.0
 * @apiName admin_listGroupCode
 * @apiGroup 1. Admin API > 00. 공통
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/commonCodeGroup'
 *
 *
 * @apiSuccess {Object[]} commonCodeGroup 코드 그룹 목록
 * @apiSuccess {Number} commonCode.codeGroup 그룹코드 식별키
 * @apiSuccess {String} commonCode.codeGroupName 그룹코드명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "commonCodeGroup": [
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분"
        },
        {
            "codeGroup": 200,
            "codeGroupName": "처리상태"
        },
        {
            "codeGroup": 300,
            "codeGroupName": "카드종류"
        },
        {
            "codeGroup": 400,
            "codeGroupName": "근무시간"
        }
    ]
}
 */