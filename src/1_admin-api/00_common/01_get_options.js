/**
 * @api {get} /admin/v1/options 01. 공통 옵션 목록 조회
 *
 * @apiDescription 어드민 옵션에 필요한 데이터 목록 조회<br/>
 * 강사 목록<br/>
 * 상담사 목록
 *
 * @apiVersion 1.0.0
 * @apiName admin_getOptions
 * @apiGroup 1. Admin API > 0. 공통 API
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/options?fields=TEACHERS'
 *
 * @apiParam (Query) fields 조회할 옵션 (,로 복수 가능)<br/>
 * * TEACHERS:담당강사 목록
 * * CONSULTANTS:상담사 목록
 *
 * @apiSuccess {Object[]} [teachers] 담당강사 목록
 * @apiSuccess {String} teachers.value 담당강사 키
 * @apiSuccess {String} teachers.label 담당강사명
 * @apiSuccess {Object[]} [consultants] 상담사 목록
 * @apiSuccess {String} consultants.value 상담사 키
 * @apiSuccess {String} consultants.label 상담사명
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
            "value": "M1695013438115743",
            "label": "서안나"
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
            "value": "M1594795852631377",
            "label": "Steven"
        },
        {
            "value": "M1487640799950353",
            "label": "Alex"
        },
        {
            "value": "M1698204875465368",
            "label": "Olivia"
        },
        {
            "value": "M1691559227102239",
            "label": "Sadie"
        },
        {
            "value": "M1693558129675151",
            "label": "Tyler"
        }
    ],
    "consultants": [
        {
            "value": "U1370839971594082",
            "label": "채인숙"
        },
        {
            "value": "U1629938464848865",
            "label": "신원준2"
        },
        {
            "value": "U1643253882478908",
            "label": "최지혜"
        },
        {
            "value": "U1658468539178711",
            "label": "박수현"
        },
        {
            "value": "U1670565899112697",
            "label": "한시내"
        },
        {
            "value": "U1675406451584692",
            "label": "박지수"
        },
        {
            "value": "U1684455278686108",
            "label": "김새롬"
        }
    ]
}
 */