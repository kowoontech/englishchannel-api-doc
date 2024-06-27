/**
 * @api {get} /admin/v1/users/{id}/levelTests/{testId} 30. 레벨테스트 상세조회
 *
 * @apiDescription 회원관리 > 회원  상세 조회 > 테스트 탭 <br/>
 * 없는 데이터가 많으니 id : 1028151 , testId : 6118 사용해주세요
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_getLevelTest
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/users/1028151/levelTests/6118'
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {Number} LevelTest 식별키
 * 
 * @apiSuccess {Number} id LevelTest 식별키
 * @apiSuccess {String} userId 회원 식별키
 * @apiSuccess {String} testStartTime 테스트일시(시작) (yyyy-mm-dd HH:mm:ss)
 * @apiSuccess {String} testEndTime 테스트일시(끝)(yyyy-mm-dd HH:mm:ss)
 * @apiSuccess {String} interviewer Interviewer
 * @apiSuccess {String} lbt LBT 테스트결과
 * @apiSuccess {String} rbt RBT 테스트결과
 * @apiSuccess {String} obt OBT
 * @apiSuccess {String} testIp TEST IP
 * @apiSuccess {String} file 첨부파일
 * @apiSuccess {String} note 특이사항
 * @apiSuccess {String} purpose  Purpose of Study
 * @apiSuccess {String} [studyType] What kind of English do you want to study and learn?<br/>
                                    [NONE: 선택 없음 , EC: English Conversation,<br/>
                                    BE: Business English ,TS:Toeic Speaking , I:Interview ,ETC: ETC]<br>
 * @apiSuccess {String} studyTypeEtc ETC 이유
 * @apiSuccess {String} familyBackground  Family Background
 * @apiSuccess {String} usageType Company or School
 * @apiSuccess {String} occupation Occupation
 * @apiSuccess {String} spareTime Spare Time
 * @apiSuccess {String} Travel Abroad
 * @apiSuccess {String} futurePlans Future Plans
 * @apiSuccess {String} [consonants] consonants <br/>
                                    [NONE : 선택 안함, R , L, P, F, B, V, Z, SH, EZH, CH, G, TTH, TH]<br/>
 * @apiSuccess {String} vowels [vowels] [NONE:선택, A,B,C,D,E,F,G,H,I,J,K,L,M,N]
 * @apiSuccess {String} clarity [clarity] [NONE:선택, A,B,C,D,E,F,G,H,I,J,K,L,M,N
 * @apiSuccess {String} intonation [intonation] [NONE:선택, A,B,C,D,E,F,G,H,I,J,K,L,M,N
 * @apiSuccess {String} vocabulary [vocabulary] [V,L,A,AA,E]
 * @apiSuccess {String} verbsTense [verbsTense] [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
 * @apiSuccess {String} agreement [agreement] [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
 * @apiSuccess {String} prepositions [prepositions] [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
 * @apiSuccess {String} articles [articles] [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
 * @apiSuccess {String} plurals [plurals] [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
 * @apiSuccess {String} others [others] [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
 * @apiSuccess {String} strongPoint strongPoint
 * @apiSuccess {String} weakPoint weakPoint
 * @apiSuccess {String} comprehension Comprehension How much does learner understand <br/>
                                        [선택안함:NONE, AN , SP, MP, AE, E]
 * @apiSuccess {String} confidence confidence [선택안함:NONE, CL , L, A, AA,VC]
 * @apiSuccess {String} recommendedLevel Recommended Level [NONE, R2, R3,R4,R5,R6,R6,R7,R8,R9,ETC]
 * @apiSuccess {String} recommendedLevelEtc Etc 이유
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
    "id": 6118,
    "userId": null,
    "testStartTime": null,
    "testEndTime": null,
    "interviewer": "TEST",
    "lbt": null,
    "rbt": null,
    "obt": null,
    "testIp": null,
    "file": null,
    "note": null,
    "purpose": null,
    "studyType": null,
    "studyTypeEtc": "TEST4",
    "familyBackground": null,
    "usageType": null,
    "occupation": null,
    "spareTime": null,
    "travelAbroad": null,
    "futurePlans": null,
    "consonants": null,
    "vowels": null,
    "clarity": "E",
    "intonation": "VK",
    "vocabulary": "AA",
    "verbsTense": "NEVER",
    "agreement": "NEVER",
    "prepositions": "NEVER",
    "articles": "NEVER",
    "plurals": "NEVER",
    "others": "NEVER",
    "strongPoint": null,
    "weakPoint": null,
    "comprehension": "AE",
    "confidence": "CL",
    "comments": null,
    "recommendedLevel": null,
    "recommendedLevelEtc": null
}
 */