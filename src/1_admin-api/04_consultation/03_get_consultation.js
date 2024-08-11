/**
 * @api {get} /admin/v1/consultations/{id} 03. 상담고객 상세조회
 *
 * @apiDescription 수정/삭제 시 사용<br/>
 *
 * @apiVersion 1.0.0
 * @apiName admin_getOptions
 * @apiGroup 1. Admin API > 04. 상담관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/consultations/26268'
 *
 * @apiParam (Query) id 상담 식별키
 *
 * @apiSuccess {String} id 상담 식별키
 * @apiSuccess {String} [institutionId] 추천인 식별키
 * @apiSuccess {String} consultationDate 상담일(yyyy-MM-dd HH:mm:ss)
 * @apiSuccess {String} name 성명
 * @apiSuccess {String} gender 성별 남:"M",여:"F"
 * @apiSuccess {String} job 직업
 * @apiSuccess {String} company 회사명
 * @apiSuccess {String} phone 번호
 * @apiSuccess {String} cellPhone 핸드폰번호
 * @apiSuccess {String} foundPath 알게된 동기<br/>
                                                    SIGN, // 간판<br/>
                                                    ONLINE, // 온라인검색<br/>
                                                    RECOMMEND, // 지인추천<br/>
                                                    FAN, // 부채<br/>
                                                    LEAFLET, // 3단리플릿<br/>
                                                    SUBWAY, // 지하철광고<br/>
                                                    ALLIANCE, // 기업제휴<br/>
                                                    ETC, // 기타<br/>
 * @apiSuccess {String} foundPathNote 알게된 동기 설명
 * @apiSuccess {String} visitDate 방문일자(yyyy-MM-dd HH:mm:ss)
 * @apiSuccess {String} details 상담내용
 * @apiSuccess {String} isMember 회원여부
 * @apiSuccess {String} type 상담구분 [  P, // 전화상담<br>
                                              V, // 방문상담<br>
                                              K, // 카카오채널<br>
                                              N, // 네이버예약<br>
                                              F, // 온라인상담<br>
                                              L, // 무료레벨테스트]
 * @apiSuccess {String[]} studyPurposes 공부목적[  COMMON_ENGLISH, // 생활영어<br/>
                                                         WORK, //업무<br/>
                                                         STUDY_ABROAD, // 유학<br/>
                                                         DEVELOPMENT // 자기개<br/>
                                                         EMPLOYMENT // 취업<br/>
                                                         ETC // 기타]
 * @apiSuccess {String} callTime 통화가능시간 [  TIME_01, // 06:30~08:00<br/>
                                                        TIME_02, // 08:00~10:00<br/>
                                                        TIME_03, // 10:00~12:00<br/>
                                                        TIME_04, // 12:00~14:00<br/>
                                                        TIME_05, // 14:00~16:00<br/>
                                                        TIME_06, // 16:00~18:00<br/>
                                                        TIME_07, // 18:00~20:00<br/>
                                                        TIME_08, // 20:00~21:00<br/>
                                                        TIME_09 // 기타]<br/>
 * @apiSuccess {String} status 처리상태 (3:대기중, 4:컨택금지, 5:미방문(통화완료), 6:예약완료,<br/>
                                                   7:미등록(상담완료), 8:등록완료, 9:NoShow, 10:부재중)
 * @apiSuccess {String} file 서버에 저장된 파일명
 * @apiSuccess {String} originalFile 파일명
 * @apiSuccess {String} fileUrl 파일URL
 * @apiSuccess {String} createdBy 등록한사람ID
 * @apiSuccess {String} modifiedBy 수정한사람ID [yyyy-MM-dd HH:mm:ss]
 * @apiSuccess {String} modifiedOn 수정일 [yyyy-MM-dd HH:mm:ss]
 * @apiSuccess {String} details 상담내용
 * @apiSuccess {String} createdName 상담자(등록한사람이름)
 * @apiSuccess {String} modifiedName 상담자(수정한사람이름)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": 26268,
    "consultationDate": "2023-07-18 00:00:00",
    "name": "John Doe",
    "gender": "M",
    "job": "Engineer",
    "company": "ABC Corp",
    "phone": "123456789",
    "cellPhone": "22222222",
    "foundPathNote": "Online search",
    "visitDate": "2023-07-18 00:00:00",
    "details": "Consultation details",
    "isMember": "N",
    "type": "P",
    "studyPurposes": [
        "COMMON_ENGLISH"
    ],
    "etcStudyPurpose": null,
    "email": "john.doe@example.com",
    "status": "3",
    "file": "1721556949596_수정hello.txt",
    "originalFile": "수정hello.txt",
    "fileUrl": "http://localhost:8080/file/download/1721556949596_수정hello.txt/수정hello.txt",
    "createdBy": "U1675406451584692",
    "createdOn": "2023-12-29 21:48:08",
    "modifiedBy": "U1658468539178711",
    "modifiedOn": "2024-07-22 16:40:00",
    "joinPath": "ALLIANCE",
    "callTime": "TIME_02",
    "modifiedName": "박수현",
    "createdName": "박지수"
}
 */