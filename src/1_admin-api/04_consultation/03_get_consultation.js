/**
 * @api {get} /admin/v1/consultations/{id} 03. 상담고객 상세조회
 *
 * @apiDescription 수정/삭제 시 사용<br/>
 *
 * @apiVersion 1.0.0
 * @apiName admin_getOptions
 * @apiGroup 1. Admin API > 4. 상담관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/consultations/14890'
 *
 * @apiParam (Query) id 상담 식별키
 *
 * @apiSuccess {Object[]} [consultation] 상담 정보
 * @apiSuccess {String} consultation.id 상담 식별키
 * @apiSuccess {String} consultation.institutionId 추천인 식별키
 * @apiSuccess {String} consultation.consultationDate 상담일(yyyy-MM-dd HH:mm:ss)
 * @apiSuccess {String} consultation.name 성명
 * @apiSuccess {String} consultation.gender 성별 남:"M",여:"F"
 * @apiSuccess {String} consultation.job 직업
 * @apiSuccess {String} consultation.company 회사명
 * @apiSuccess {String} consultation.phone 번호
 * @apiSuccess {String} consultation.cellPhone 핸드폰번호
 * @apiSuccess {String} consultation.joinPath 알게된 동기<br/>
                                                    SIGN, // 간판<br/>
                                                    ONLINE, // 온라인검색<br/>
                                                    RECOMMEND, // 지인추천<br/>
                                                    FAN, // 부채<br/>
                                                    LEAFLET, // 3단리플릿<br/>
                                                    SUBWAY, // 지하철광고<br/>
                                                    ALLIANCE, // 기업제휴<br/>
                                                    ETC, // 기타<br/>
 * @apiSuccess {String} consultation.foundPathNote 알게된 동기 설명
 * @apiSuccess {String} consultation.visitDate 방문일자
 * @apiSuccess {String} consultation.details 상담내용
 * @apiSuccess {String} consultation.isMember 회원여부
 * @apiSuccess {String} consultation.type 상담구분 [  P, // 전화상담<br>
                                              V, // 방문상담<br>
                                              K, // 카카오채널<br>
                                              N, // 네이버예약<br>
                                              F, // 온라인상담<br>
                                              L, // 무료레벨테스트]
 * @apiSuccess {String} consultation.studyPurpose 공부목적[  COMMON_ENGLISH("10"), // 생활영어<br/>
                                                         WORK("20"), //업무<br/>
                                                         STUDY_ABROAD("30"), // 유학<br/>
                                                         DEVELOPMENT("40"), // 자기개<br/>
                                                         EMPLOYMENT("50"), // 취업<br/>
                                                         ETC("60") // 기타]
 * @apiSuccess {String} consultation.callTime 통화가능시간 [  TIME_01("10"), // 06:30~08:00<br/>
                                                        TIME_02("20"), // 08:00~10:00<br/>
                                                        TIME_03("30"), // 10:00~12:00<br/>
                                                        TIME_04("40"), // 12:00~14:00<br/>
                                                        TIME_05("50"), // 14:00~16:00<br/>
                                                        TIME_06("60"), // 16:00~18:00<br/>
                                                        TIME_07("70"), // 18:00~20:00<br/>
                                                        TIME_08("80"), // 20:00~21:00<br/>
                                                        TIME_09("90"), // 기타]<br/>
 * @apiSuccess {String} consultation.status 처리상태 WAITING("3"), // 대기<br/>
                                                   NO_CONTACT("4"),<br/>
                                                   UNVISITED("5"),<br/>
                                                   RESERVED("6"),<br/>
                                                   NOT_REGISTERED("7"),<br/>
                                                   REGISTERED("8"),<br/>
                                                   NO_SHOW("9"),<br/>
                                                   MISSED("10"),<br/>
 * @apiSuccess {String} consultation.statuses 사용X
 * @apiSuccess {String} consultation.levelTestType  [R 밖에 없음.]
 * @apiSuccess {String} consultation.levelTestAnswer 사용X
 * @apiSuccess {String} consultation.levelTestCorrectCount 정답수
 * @apiSuccess {String} consultation.createdOn 등록일 [yyyy-MM-dd HH:mm:ss]
 * @apiSuccess {String} consultation.createdBy 등록한사람ID
 * @apiSuccess {String} consultation.modifiedBy 수정한사람ID [yyyy-MM-dd HH:mm:ss]
 * @apiSuccess {String} consultation.modifiedOn 수정일 [yyyy-MM-dd HH:mm:ss]
 * @apiSuccess {String} consultation.details 상담내용
 * @apiSuccess {String} consultation.creatorName 사용X

 * @apiSuccess {String} createdName 상담자(등록한사람이름)
 * @apiSuccess {String} modifiedName 상담자(수정한사람이름)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "consultation": {
        "id": 14890,
        "institutionId": "C1352081511487906",
        "consultationDate": "2020-07-28 14:00:00",
        "name": "이우정:상담완료",
        "gender": "M",
        "job": "직장인",
        "company": "(주)후이즈",
        "phone": null,
        "cellPhone": "5gz14POxRDFNoPlTCEGupw==",
        "foundPath": "20",
        "foundPathNote": "워크인",
        "visitDate": "2020-07-28T14:00:00",
        "details": "* 워크인,이신종님과 같이옴 * 해외시장확장으로 전반적 영어실력향상 원함 * 점심시간에 잠시 나오신거라 레벨테스트까지 할시간없어  정규코스, 5%할인까지 안내드림 * 큐브정규코스, 온라인학습 안내드림 * 가격듣고는 일단 알겠다고 바로나가심",
        "isMember": "N",
        "type": "V",
        "studyPurpose": "10",
        "etcStudyPurpose": null,
        "callTime": "90",
        "email": "010-3790-2702",
        "status": "7",
        "statuses": null,
        "levelTestType": null,
        "levelTestAnswer": null,
        "levelTestCorrectCount": null,
        "createdBy": "U1585270523092843",
        "createdOn": "2020-07-28 14:23:41",
        "modifiedBy": "U1585270523092843",
        "modifiedOn": "2020-07-28",
        "creatorName": null
    },
    "createdName": "양은진",
    "modifiedName": "양은진"
}
 */