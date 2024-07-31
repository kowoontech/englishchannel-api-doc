/**
 * @api {get} /admin/v1/commonCode 04. 공통코드 목록
 *
 * @apiDescription 공통 코드 목록 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_listCommonCode
 * @apiGroup 1. Admin API > 0. 공통 API
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/localhost:8080/admin/v1/commonCode'
 *
 *
 * @apiSuccess {Object[]} commonCode 공통코드목록
 * @apiSuccess {Number} commonCode.codeGroup 그룹코드 식별키
 * @apiSuccess {String} commonCode.codeGroupName 그룹코드명
 * @apiSuccess {Number} commonCode.code 코드 식별키
 * @apiSuccess {String} commonCode.name 코드명
 * @apiSuccess {Number} commonCode.sort 코드순서
 * @apiSuccess {String} commonCode.useYn 활성 여부 ()
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "commonCode": [
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 11,
            "name": "수정",
            "sort": 5,
            "useYn": "Y"
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 12,
            "name": "이메일상담12",
            "sort": 3,
            "useYn": "Y"
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 13,
            "name": "이메일상담13",
            "sort": 3,
            "useYn": null
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 14,
            "name": "이메일상담14",
            "sort": 3,
            "useYn": null
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 15,
            "name": "이메일상담15",
            "sort": 3,
            "useYn": null
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 16,
            "name": "이메일상담16",
            "sort": 3,
            "useYn": "N"
        },
        {
            "codeGroup": 200,
            "codeGroupName": "처리상태",
            "code": 20,
            "name": "이메일상담16",
            "sort": 3,
            "useYn": "N"
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 200,
            "name": "이메일상담2",
            "sort": 1,
            "useYn": "Y"
        },
        {
            "codeGroup": 200,
            "codeGroupName": "처리상태",
            "code": 200,
            "name": "처리상태1",
            "sort": 2,
            "useYn": "Y"
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 300,
            "name": "이메일상담3",
            "sort": 1,
            "useYn": "Y"
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 400,
            "name": "이메일상담4",
            "sort": 1,
            "useYn": "Y"
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 500,
            "name": "이메일상담5",
            "sort": 1,
            "useYn": null
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 600,
            "name": "이메일상담6",
            "sort": 2,
            "useYn": null
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 700,
            "name": "이메일상담7",
            "sort": 2,
            "useYn": "Y"
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 800,
            "name": "이메일상담8",
            "sort": 3,
            "useYn": "Y"
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 900,
            "name": "이메일상담9",
            "sort": 3,
            "useYn": "Y"
        },
        {
            "codeGroup": 100,
            "codeGroupName": "상담구분",
            "code": 1000,
            "name": "이메일상담10",
            "sort": 3,
            "useYn": "Y"
        }
    ]
}
 */