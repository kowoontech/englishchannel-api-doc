/**
 * @api {get} /admin/v1/options 01. 공통 옵션 목록 조회
 *
 * @apiDescription 어드민 옵션에 필요한 데이터 목록 조회<br/>
 * 강사 목록 조회
 *
 * @apiVersion 1.0.0
 * @apiName admin_getOptions
 * @apiGroup 1. Admin API > 0. 공통 API
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/options?fields=TEACHERS'
 *
 * @apiParam (Query) [fields] 조회할 옵션 (,로 복수 가능)<br/>
 * * TEACHERS:담당강사 목록
 *
 * @apiSuccess {Object[]} teachers 담당강사 목록
 * @apiSuccess {String} teachers.value 담당강사 키
 * @apiSuccess {String} teachers.label 담당강사명
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "teachers": [
        {
            "value": "M1400118325784523",
            "label": "한가영"
        },
        {
            "value": "M1487640799950353",
            "label": "Alex"
        },
        {
            "value": "M1594795852631377",
            "label": "Steven"
        },
        {
            "value": "M1657064932771055",
            "label": "김나래"
        },
        {
            "value": "M1661138591404520",
            "label": "최태연"
        },
        {
            "value": "M1681990831501448",
            "label": "정지은"
        },
        {
            "value": "M1691559227102239",
            "label": "Sadie"
        },
        {
            "value": "M1693558129675151",
            "label": "Tyler"
        },
        {
            "value": "M1695013438115743",
            "label": "서안나"
        },
        {
            "value": "M1698204875465368",
            "label": "Olivia"
        }
    ]
}
 */