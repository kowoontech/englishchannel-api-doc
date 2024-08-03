/**
 * @api {get} /admin/v1/users/{id} 02. 회원 기본정보 조회
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 기본 탭
 *
 * @apiVersion 1.0.0
 * @apiName admin_getUser
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/14011'
 *
 * @apiParam (Path) {String} id 회원 식별키
 *
 * @apiSuccess {String} id 회원 식별키 (이름 옆에 표시)
 * @apiSuccess {String} name 이름
 * @apiSuccess {String} [firstNameEn] 영문 이름
 * @apiSuccess {String} [lastNameEn] 영문 성
 * @apiSuccess {String} [nickname] 닉네임
 * @apiSuccess {String} [textbook] 교재
 * @apiSuccess {String} loginId 아이디
 * @apiSuccess {String} email 이메일
 * @apiSuccess {Boolean} isReceiveEmail 이메일 수신 여부
 * @apiSuccess {String} gender 성별 (M:남, F:여)
 * @apiSuccess {String} [phone] 유선전화
 * @apiSuccess {String} [phoneType] 유선전화 구분 (H:자택, C:직장)
 * @apiSuccess {String} cellPhone 휴대전화
 * @apiSuccess {Boolean} isReceiveSms SMS 수신 여부
 * @apiSuccess {Boolean} isOfficeWorker 직장인 여부
 * @apiSuccess {String} [company] 직장/학교
 * @apiSuccess {String} [position] 직책/학과
 * @apiSuccess {String} [note] 특이사항
 * @apiSuccess {String} createDateTime 등록일
 * @apiSuccess {Boolean} isActive 상태 (활동 여부)
 * @apiSuccess {String} [zipcode] 우편번호
 * @apiSuccess {String} [address] 주소
 * @apiSuccess {String} [detailedAddress] 상세주소
 * @apiSuccess {String} [addressType] 주소 구분 (H:자택, C:직장)
 * @apiSuccess {String} [joinPath] 가입 경로 (SIGN:간판, ONLINE:온라인검색, RECOMMEND:지인추천, FAN:부채, LEAFLET:3단리플릿, SUBWAY:지하철광고, ALLIANCE:기업제휴, ETC:기타)
 * @apiSuccess {String[]} languages 학습 희망 언어 목록 (EN:영어, CN:중국어, JP:일본어, KR:한국어, ETC:기타)
 * @apiSuccess {String} [etcLanguage] 기타 학습 희망 언어
 * @apiSuccess {Object[]} languageSkills 외국어 실력 목록
 * @apiSuccess {String} languageSkills.languageTest 외국어 시험 (SJPT:SJPT, HKC:HKC, TOEIC:TOEIC, TSC:TSC, TOEIC_S:TOEIC-S, OPIC:OPIc, ETC:기타)
 * @apiSuccess {String} [languageSkills.score] 점수
 * @apiSuccess {String} [foreignCountry] 외국 거주 경험 국가명
 * @apiSuccess {String} [foreignPeriod] 외국 거주 경험 기간
 * @apiSuccess {String} [foreignPurpose] 외국 거주 경험 목적
 * @apiSuccess {String[]} coursePurposes 수강 목적 목록 (STUDY_ABROAD:유학, TEST:시험, EMPLOYMENT:취업, WORK:업무, DEVELOPMENT:자기개발)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": "rosyeos",
    "name": "RE:김미경",
    "firstNameEn": "Mikyung",
    "lastNameEn": "Kim",
    "nickname": "Cathy Kim",
    "textbook": "SPEAK YOUR MIND 1",
    "loginId": "mkkim@eosi.kr",
    "email": "mkkim@eosi.kr",
    "isReceiveEmail": false,
    "gender": "F",
    "phone": "",
    "phoneType": "H",
    "cellPhone": "fCH710Q/N+d9L7co4axhXQ==",
    "isReceiveSms": true,
    "isOfficeWorker": false,
    "company": "대표이사, 고문님지인",
    "position": "",
    "note": "▣ 고정예약자 : 11월>월/수 오후 8시 랜덤 원어민 PT (원어민 선생님 수업 선호하심/Erin,Alex선호)  LDF 메일발송 필요 X 16보7060  47거5732 33조 8332 39마3200",
    "createDateTime": "2007-04-03T00:00:00",
    "isActive": true,
    "zipcode": "152-848",
    "address": "서울 구로구 구로3동",
    "detailedAddress": "184-1 우림e-Biz2차 202호",
    "addressType": "H",
    "joinPath": "LEAFLET",
    "languages": [
        "EN"
    ],
    "languageSkills": [
        {
            "languageTest": "SJPT",
            "score": null
        },
        {
            "languageTest": "HKC",
            "score": null
        },
        {
            "languageTest": "TOEIC",
            "score": null
        },
        {
            "languageTest": "TSC",
            "score": null
        },
        {
            "languageTest": "ETC",
            "score": null
        },
        {
            "languageTest": "TOEIC_S",
            "score": null
        },
        {
            "languageTest": "OPIC",
            "score": null
        }
    ],
    "foreignCountry": "",
    "foreignPeriod": "",
    "foreignPurpose": "",
    "coursePurposes": [
        "WORK",
        "DEVELOPMENT"
    ]
}
 * 
 * @apiError (Error) {404} admin-api-0200 USER_NOT_FOUND
 * @apiErrorExample {json} USER_NOT_FOUND
 * HTTP/1.1 404
 * {
 *     "code": "admin-api-0200",
 *     "message": "사용자를 찾을 수 없습니다."
 * }
 */