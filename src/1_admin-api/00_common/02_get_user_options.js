/**
 * @api {get} /admin/v1/users/{userId}/options 02. 회원 옵션 목록 조회
 *
 * @apiDescription 어드민 옵션에 필요한 데이터 목록 조회
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUserOptions
 * @apiGroup 1. Admin API > 0. 공통 API
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/M1703814296618972/options?fields=COURSES'
 *
 * @apiParam (Query) [fields] 조회할 옵션 (,로 복수 가능)<br/>
 * * COURSES:과정 목록
 *
 * @apiSuccess {Object[]} courses 과정 목록
 * @apiSuccess {String} courses.value 과정 키
 * @apiSuccess {String} courses.label 과정명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "courses": [
        {
            "value": "75587",
            "label": "NEW PT 24회 3개월/26.0회"
        }
    ]
}
 */