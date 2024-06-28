/**
 * @api {put} /admin/v1/users/{id}/levelTests/{testId} 32. 레벨테스트 수정
 *
 * @apiDescription 회원관리 > 회원 상세 조회 > 테스트 탭<br/>
 * id : 1028151  / testId: 6118 <br/>
 * [NONE, NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS] 는 NONE과 NEVER로만 테스트 해주세요
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateLevelTest
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/users/1028151/levelTests/6118'
 * -H "Content-Type: application/json" \
 * -d "{
    "interviewer": "TEST",
    "studyType": ["NONE"],
    "studyTypeEtc": "수정TEST",
    "consonants":["R"],
    "vowels": ["D"],
    "clarity": "E",
    "intonation": "VK",
    "vocabulary": "AA",
    "verbsTense": "NEVER",
    "agreement": "NEVER",
    "prepositions": "NEVER",
    "articles": "NEVER",
    "plurals": "NEVER",
    "others": "NEVER",
    "comprehension": "AE",
    "confidence": "CL",
    "recommendedLevel": ["R2"]
}"
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {Number} testId 레벨 테스트 식별키
 * 
 * @apiParam (Body) {Number} lessonCount 레슨횟수

* @apiParam (Body) {String} testStartTime 테스트일시(시작) (yyyy-mm-dd HH:mm:ss)
* @apiParam (Body) {String} testEndTime 테스트일시(끝)(yyyy-mm-dd HH:mm:ss)
* @apiParam (Body) {String} interviewer Interviewer
* @apiParam (Body) {String} lbt LBT 테스트결과
* @apiParam (Body) {String} rbt RBT 테스트결과
* @apiParam (Body) {String} obt OBT
* @apiParam (Body) {String} testIp TEST IP
* @apiParam (Body) {String} file 첨부파일
* @apiParam (Body) {String} note 특이사항
* @apiParam (Body) {String} purpose  Purpose of Study
* @apiParam (Body) {String[]} studyType What kind of English do you want to study and learn?<br/>
                                 [NONE: 선택 없음 , EC: English Conversation,<br/>
                                 BE: Business English ,TS:Toeic Speaking , I:Interview ,ETC: ETC]<br>
* @apiParam (Body) {String} studyTypeEtc ETC 이유
* @apiParam (Body) {String} familyBackground  Family Background
* @apiParam (Body) {String} usageType Company or School
* @apiParam (Body) {String} occupation Occupation
* @apiParam (Body) {String} spareTime Spare Time
* @apiParam (Body) {String} Travel Abroad
* @apiParam (Body) {String} futurePlans Future Plans
* @apiParam (Body) {String[]} consonants consonants <br/>
                                 [NONE : 선택 안함, R , L, P, F, B, V, Z, SH, EZH, CH, G, TTH, TH]<br/>
* @apiParam (Body) {String[]} vowels vowels [NONE:선택안함, A,B,C,D,E,F,G,H,I,J,K,L,M,N]
* @apiParam (Body) {String} clarity [clarity] [NONE:선택안함, A,B,C,D,E,F,G,H,I,J,K,L,M,N
* @apiParam (Body) {String} intonation [intonation] [NONE:선택안함, A,B,C,D,E,F,G,H,I,J,K,L,M,N
* @apiParam (Body) {String} vocabulary [vocabulary] [V,L,A,AA,E]
* @apiParam (Body) {String} verbsTense [verbsTense] [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
* @apiParam (Body) {String} agreement [agreement] [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
* @apiParam (Body) {String} prepositions [prepositions] [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
* @apiParam (Body) {String} articles [articles] [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
* @apiParam (Body) {String} plurals [plurals] [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
* @apiParam (Body) {String} others [others] [NEVER, SELDOM, SOMETIMES ,USUALLY, ALWAYS]
* @apiParam (Body) {String} strongPoint strongPoint
* @apiParam (Body) {String} weakPoint weakPoint
* @apiParam (Body) {String} comprehension Comprehension How much does learner understand <br/>
                                     [선택안함:NONE, AN , SP, MP, AE, E]
* @apiParam (Body) {String} confidence confidence [선택안함:NONE, CL , L, A, AA,VC]
* @apiParam (Body) {String[]} recommendedLevel Recommended Level [NONE, R2, R3,R4,R5,R6,R6,R7,R8,R9,ETC]
* @apiParam (Body) {String} recommendedLevelEtc Etc 이유
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */