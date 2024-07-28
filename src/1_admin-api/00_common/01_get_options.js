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
 * * MEMBER_CONSULTATION_TYPES:회원 상담 구분 목록
 * * CARD_COMPANIES:카드종류 목록
 *
 * @apiSuccess {Object[]} [teachers] 담당강사 목록
 * @apiSuccess {String} teachers.value 담당강사 키
 * @apiSuccess {String} teachers.label 담당강사명
 * @apiSuccess {Object[]} [consultants] 상담사 목록
 * @apiSuccess {String} consultants.value 상담사 키
 * @apiSuccess {String} consultants.label 상담사명
 * @apiSuccess {Object[]} [memberConsultationTypes] 회원 상담 구분 목록
 * @apiSuccess {String} memberConsultationTypes.value 회원 상담 구분 키
 * @apiSuccess {String} memberConsultationTypes.label 회원 상담 구분명
 * @apiSuccess {Object[]} [cardCompanies] 카드종류 목록
 * @apiSuccess {String} cardCompanies.value 카드종류 키
 * @apiSuccess {String} cardCompanies.label 카드종류
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 {
    "teachers": [
        {
            "value": "500982",
            "label": "강사수정222"
        },
        {
            "value": "M1400118325784523",
            "label": "한가영"
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
        }
    ],
    "memberConsultationTypes": [
        {
            "value": "COURSE_REGISTRATION",
            "label": "수강등록"
        },
        {
            "value": "PROGRESS",
            "label": "진도"
        }
    ],
    "cardCompanies": [
        {
            "value": "KB",
            "label": "KB"
        },
        {
            "value": "NH",
            "label": "농협NH"
        }
    ]
 }
 */