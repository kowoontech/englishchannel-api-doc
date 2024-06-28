/**
 * @api {get} /admin/v1/users/{id}/levelTests/{testId} 30. 레벨테스트 상세조회
 *
 * @apiDescription 회원관리 > 회원  상세 조회 > 테스트 탭 <br/>
 * 없는 데이터가 많으니 id : 1028151 , testId : 6118 사용해주세요 <br/>
 * [NONE, NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS] 는 NONE과 NEVER로만 테스트 해주세요
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
 * @apiSuccess {Object[]} levelTest LevelTest 정보
 * @apiSuccess {Long} levelTest.id 테스트 식별키
 * @apiSuccess {String} levelTest.Id 회원 식별키
 * @apiSuccess {String} levelTest.testStartTime 테스트일시(시작) (yyyy-mm-dd HH:mm:ss)
 * @apiSuccess {String} levelTest.testEndTime 테스트일시(끝)(yyyy-mm-dd HH:mm:ss)
 * @apiSuccess {String} levelTest.interviewer Interviewer
 * @apiSuccess {String} levelTest.lbt LBT 테스트결과
 * @apiSuccess {String} levelTest.rbt RBT 테스트결과
 * @apiSuccess {String} levelTest.obt OBT
 * @apiSuccess {String} levelTest.testIp TEST IP
 * @apiSuccess {String} levelTest.file 첨부파일
 * @apiSuccess {String} levelTest.note 특이사항
 * @apiSuccess {String} levelTest.purpose  Purpose of Study
 * @apiSuccess {String} levelTest.studyType What kind of English do you want to study and learn?<br/>
                                    (사용x , 아래 studyType 사용해주세요)
 * @apiSuccess {String} levelTest.studyTypeEtc ETC 이유
 * @apiSuccess {String} levelTest.familyBackground  Family Background
 * @apiSuccess {String} levelTest.usageType Company or School
 * @apiSuccess {String} levelTest.occupation Occupation
 * @apiSuccess {String} levelTest.spareTime Spare Time
 * @apiSuccess {String} levelTest.Travel Abroad
 * @apiSuccess {String} levelTest.futurePlans Future Plans
 * @apiSuccess {String} levelTest.consonants consonants(사용x, 아래 consonants 사용해주세요)
 * @apiSuccess {String} levelTest.vowels vowels(사용x, 아래 vowels 사용해주세요)
 * @apiSuccess {String} levelTest.clarity clarity [NONE:선택, A,B,C,D,E,F,G,H,I,J,K,L,M,N
 * @apiSuccess {String} levelTest.intonation intonation [NONE:선택, A,B,C,D,E,F,G,H,I,J,K,L,M,N
 * @apiSuccess {String} levelTest.vocabulary vocabulary [V,L,A,AA,E]
 * @apiSuccess {String} levelTest.verbsTense verbsTense [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
 * @apiSuccess {String} levelTest.agreement agreement [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
 * @apiSuccess {String} levelTest.prepositions prepositions [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
 * @apiSuccess {String} levelTest.articles articles [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
 * @apiSuccess {String} levelTest.plurals plurals [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
 * @apiSuccess {String} levelTest.others others [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
 * @apiSuccess {String} levelTest.strongPoint strongPoint
 * @apiSuccess {String} levelTest.weakPoint weakPoint
 * @apiSuccess {String} levelTest.comprehension Comprehension How much does learner understand <br/>
                                        [선택안함:NONE, AN , SP, MP, AE, E]
 * @apiSuccess {String} levelTest.confidence confidence [선택안함:NONE, CL , L, A, AA,VC]
 * @apiSuccess {String} levelTest.recommendedLevel Recommended Level(사용x 아래 recommendedLevel 사용해주세요 )
 * @apiSuccess {String} levelTest.recommendedLevelEtc Etc 이유
 *
 * @apiSuccess {String[]} recommendedLevel Recommended Level [NONE, R2, R3,R4,R5,R6,R6,R7,R8,R9,ETC]
 * @apiSuccess {String[]} vowels vowels(NONE,A,B,C,D,E,F,G,H,I,J,K,L,M,N)
 * @apiSuccess {String[]} consonaants consonaants(NONE, R,L,P,F,B,V,Z,SH,EZH,CH,G,TTH,TH)
 * @apiSuccess {String[]} studyType studyType(NONE, EC,BE,TS,I,ETC)
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