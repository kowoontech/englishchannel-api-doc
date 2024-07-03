/**
 * @api {put} /admin/v1/users/{id}/levelTests/{testId} 32. 레벨테스트 수정
 *
 * @apiDescription 회원관리 > 회원 상세 조회 > 테스트 탭<br/>
 * id : 1028151  / testId: 6145 <br/>
 *
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateLevelTest
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/users/1028151/levelTests/6118'
 * -H "Content-Type: application/json" \
 * -d "{
                  "note" : "수정 테스트4",
                  "interviewer": "TEST999",
                  "studyType": ["NONE","EC"],
                  "studyTypeEtc": "TEST4",
                  "consonants": ["R","G"],
                  "vowels": ["D","J"],
                  "clarity": "10",
                  "intonation": "20",
                  "vocabulary": "30",
                  "verbsTense": "10 ",
                  "agreement": "10",
                  "prepositions": "10",
                  "articles": "40 ",
                  "plurals": "30",
                  "others": "10",
                  "comprehension": "10",
                  "confidence": "20",
                  "recommendedLevel":["R2","R3"]
              }"
 *
 * @apiParam (Path) {String} id 회원 식별키
 * @apiParam (Path) {Number} testId 레벨 테스트 식별키
 * 
 * @apiParam (Body) {String} testStartTime 테스트일시(시작) (yyyy-mm-dd HH:mm:ss)
 * @apiParam (Body) {String} interviewer interviewer Interviewer
 * @apiParam (Body) {String} lbt LBT 테스트결과
 * @apiParam (Body) {String} rbt RBT 테스트결과
 * @apiParam (Body) {String} obt OBT
 * @apiParam (Body) {String} testIp TEST IP
 * @apiParam (Body) {String} file 첨부파일
 * @apiParam (Body) {String} note 특이사항
 * @apiParam (Body) {String} purpose Purpose of Study
 * @apiParam (Body) {String[]} studyType What kind of English do you want to study and learn?<br/>
                                         [NONE: 선택 없음 , EC: English Conversation,<br/>
                                         BE: Business English ,TS:Toeic Speaking , I:Interview ,ETC: ETC]<br>
 * @apiParam (Body) {String} studyType ETC 이유
 * @apiParam (Body) {String} familyBackground Family Background
 * @apiParam (Body) {String} usageType Company or School
 * @apiParam (Body) {String} occupation  Occupation
 * @apiParam (Body) {String} spareTime Spare Time
 * @apiParam (Body) {String} Travel Abroad
 * @apiParam (Body) {String} futurePlans Future Plans
 * @apiParam (Body) {String[]} consonants consonants <br/>
                                        [NONE : 선택 안함, R , L, P, F, B, V, Z, SH, EZH, CH, G, TTH, TH]<br/>
 * @apiParam (Body) {String[]} vowels vowels [NONE:선택안함, A,B,C,D,E,F,G,H,I,J,K,L,M,N]
 * @apiParam (Body) {String} clarity Clarity(10:hard to understand ,20:average ,30:easy to understand)
 * @apiParam (Body) {String} intonation Intonation(10:very Korean ,20:a bit Korean,30:acceptable ,40:near native)
 * @apiParam (Body) {String} vocabulary Vocabulary(10:very limited ,20:limited ,30:average ,40:above average ,50:extensive)
 * @apiParam (Body) {String} verbsTense Verbs tense(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)
 * @apiParam (Body) {String} agreement Agreement(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)
 * @apiParam (Body) {String} prepositions Prepositions(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)
 * @apiParam (Body) {String} articles Articles(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)
 * @apiParam (Body) {String} plurals Plurals(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)
 * @apiParam (Body) {String} others Others(10:Never ,20:Seldom ,30:Sometimes,40:Usually,50:Always)
 * @apiParam (Body) {String} strongPoint strongPoint
 * @apiParam (Body) {String} weakPoint weakPoint
 * @apiParam (Body) {String} comprehension Comprehension How much does learner understand<br/>
                                            (10:almost nothing ,20:some parts ,30:most parts ,40:almost everything ,50:everything)

 * @apiParam (Body) {String} confidence Confidence(10:completely lacking ,20:lacking ,30:average ,40:above average,50:very confident)
 * @apiParam (Body) {String[]} recommendedLevel Recommended Level [NONE(선택안함), R2, R3,R4,R5,R6,R6,R7,R8,R9,ETC]
 * @apiParam (Body) {String} recommendedLevelEtc Etc 이유
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */