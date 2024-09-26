/**
 * @api {get} /admin/v1/templates/excel/users 50. 회원 목록 엑셀
 *
 * @apiDescription 회원관리 > 회원 목록 엑셀다운로드<br/>
 *                  존재하지 않는 데이터들이 있어 기존 프로그램의 모든 필드 출력이 불가합니다.
 *
 * @apiVersion 1.0.0
 * @apiName admin_listUsersexcel
 * @apiGroup 1. Admin API > 01. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/templates/excel/users?createDateFrom=2023-01-01&createDateTo=2023-01-31&registerType=ALL&status=ALL&keyword=이&search=ALL'
 *
 * @apiParam (Query) {String} type 사용자 인지 직원인지 구분 (사용자:S , 직원: A)
 * @apiParam (Query) [createDateFrom] 가입일자 검색 ~부터 (yyyy-mm-dd)
 * @apiParam (Query) [createDateTo] 가입일자 검색 ~까지 (yyyy-mm-dd)
 * @apiParam (Query) [registerType] 등록구분 (ALL: 전체, REGISTERED: 등록회원, UNREGISTERED: 미등록회원)
 * @apiParam (Query) [status] 상태 (ALL: 전체, ACTIVE: 활동, INACTIVE: 비활동)
 * @apiParam (Query) [teacherId] 담당강사 ID
 * @apiParam (Query) [courseStatus] 수강상태 (ALL: 전체, ATTENDING: 수강중, NOT_ATTENDING: 비수강중, WAITING: 대기중)
 * @apiParam (Query) [expireType] 만료구분 (ALL: 전체, EXPIRED: 만료됨, NOT_EXPIRED: 만료안됨)
 * @apiParam (Query) [remainingType] 잔여구분 (ALL: 전체, REMAINING: 잔여있음, NOT_REMAINING: 잔여없음)
 * @apiParam (Query) [search] 검색 선택 (ALL: 전체 , name: 이름, loginId: 아이디, email: 이메일, company: 회사/직장명, phone: 전화번호, cellPhone: 휴대전화번호)
 * @apiParam (Query) [keyword] 검색어
 *
 * @apiSuccess {String} id 회원 식별키
 * @apiSuccess {String} loginId 아이디
 * @apiSuccess {String} email 이메일
 * @apiSuccess {String} name 이름
 * @apiSuccess {String} nameEn 영어이름
 * @apiSuccess {String} gender 성별
 * @apiSuccess {String} phone 유선전화
 * @apiSuccess {String} cellPhone 휴대폰번호
 * @apiSuccess {String} isReceiveSms sms수신여부
 * @apiSuccess {String} isReceiveEmail 이메일수신여부
 * @apiSuccess {String} zipcode 우편번호
 * @apiSuccess {String} address 주소1
 * @apiSuccess {String} detailedAddress 주소2
 * @apiSuccess {String} isOfficeWorker 직장인여부
 * @apiSuccess {String} company 직장/학교
 * @apiSuccess {String} position 직책/학과
 * @apiSuccess {String} joinPath 가입경로  SIGN("10"), // 간판 <br/>
                                       ONLINE("20"), // 온라인검색<br/>
                                       RECOMMEND("30"), // 지인추천<br/>
                                       FAN("40"), // 부채<br/>
                                       LEAFLET("50"), // 3단리플릿<br/>
                                       SUBWAY("60"), // 지하철광고<br/>
                                       ALLIANCE("70"), // 기업제휴<br/>
                                       ETC("900"), // 기타<br/>
 * @apiSuccess {String} language 학습희망
 * @apiSuccess {String} etcLanguage 기타희망
 * @apiSuccess {String} languageSkill 외국어실력
 * @apiSuccess {String} active 상태
 * @apiSuccess {String} createdOn 등록일

 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
[
    {
        "id": "M1674731989462953",
        "loginId": "skyx8957@icloud.com",
        "email": "skyx8957@icloud.com",
        "name": "RE:이윤재",
        "nameEn": null,
        "gender": "M",
        "phone": "010-5020-0547",
        "cellPhone": "syDqwywkULi+3CCo05xafg==",
        "isReceiveSms": true,
        "isReceiveEmail": true,
        "zipcode": null,
        "address": null,
        "detailedAddress": null,
        "isOfficeWorker": true,
        "company": "한일프로텍",
        "position": null,
        "joinPath": null,
        "language": null,
        "etcLanguage": null,
        "languageSkill": "SJPT:,HKC:,TOEIC:,TSC:,기타:,TOEIC-S:,OPIc:",
        "active": true,
        "createdOn": "2023-01-26"
    },
    {
        "id": "M1675149143911667",
        "loginId": "shlee@ktikorea.com",
        "email": "99rokp@daum.net",
        "name": "이상훈",
        "nameEn": null,
        "gender": "M",
        "phone": null,
        "cellPhone": "6XiAr/9E8Mng/vx0oErUkA==",
        "isReceiveSms": true,
        "isReceiveEmail": true,
        "zipcode": null,
        "address": null,
        "detailedAddress": null,
        "isOfficeWorker": true,
        "company": "KTI Korea",
        "position": null,
        "joinPath": "SIGN",
        "language": null,
        "etcLanguage": null,
        "languageSkill": "SJPT:,HKC:,TOEIC:,TSC:,기타:,TOEIC-S:,OPIc:",
        "active": true,
        "createdOn": "2023-01-31"
    },
    {
        "id": "M1675165735705529",
        "loginId": "mvpking1@naver.com",
        "email": "mvpking1@naver.com",
        "name": "이범관",
        "nameEn": null,
        "gender": "M",
        "phone": null,
        "cellPhone": "4RteJamYqYMKh7RwdSIPeg==",
        "isReceiveSms": true,
        "isReceiveEmail": true,
        "zipcode": null,
        "address": null,
        "detailedAddress": null,
        "isOfficeWorker": true,
        "company": "직장인",
        "position": null,
        "joinPath": "RECOMMEND",
        "language": null,
        "etcLanguage": null,
        "languageSkill": "SJPT:,HKC:,TOEIC:,TSC:,기타:,TOEIC-S:,OPIc:",
        "active": true,
        "createdOn": "2023-01-31"
    }
]
}
 */