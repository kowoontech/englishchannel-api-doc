/**
 * @api {post} /admin/v1/users/{id}/levelTests 31. 레벨 테스트 등록
 *
 * @apiDescription 회원관리 > 회원 상세 조회 > 테스트 탭 <br/>
 * 없는 데이터가 많으니 id : 1028151 사용해주세요<br/>
 * "Content-Type"은 파일이 있어서 "multipart/form-data"로 해주세요
 *
 * @apiVersion 1.0.0
 * @apiName admin_creatLevelTest
 * @apiGroup 1. Admin API > 1. 회원
 *
 * @apiExample {curl} REQUEST
 * curl -i -X POST 'http://localhost:8080/admin/v1/users/1028151/levelTests' \
 * -H "Content-Type: multipart/form-data" \
 * -F "note=테스트4" \
 * -F "interviewer=TEST999" \
 * -F "studyType=NONE" \
 * -F "studyType=EC" \
 * -F "studyTypeEtc=TEST4" \
 * -F "consonants=R" \
 * -F "consonants=G" \
 * -F "vowels=D" \
 * -F "vowels=J" \
 * -F "clarity=10" \
 * -F "intonation=20" \
 * -F "vocabulary=30" \
 * -F "verbsTense=10 " \
 * -F "agreement=10" \
 * -F "prepositions=10" \
 * -F "articles=40 " \
 * -F "plurals=30" \
 * -F "others=10" \
 * -F "comprehension=10" \
 * -F "confidence=20" \
 * -F "recommendedLevel=R2" \
 * -F "recommendedLevel=R3"
 *
 * @apiParam (Path) {String} id 회원 식별키
 * 
 * @apiParam (Body) {String} testStartTime 테스트일시(시작) (yyyy-mm-dd HH:mm:ss)
 * @apiParam (Body) {String} interviewer interviewer Interviewer
 * @apiParam (Body) {String} lbt LBT 테스트결과
 * @apiParam (Body) {String} rbt RBT 테스트결과
 * @apiParam (Body) {String} obt OBT
 * @apiParam (Body) {String} testIp TEST IP
 * @apiParam (Body) {File} file 첨부파일
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
 * @apiParam (Body) {String[]} recommendedLevel Recommended Level [ R2:Pre// R3:300// R4:400//R5:500 //R6:600//R7:700://R8: 800//R9:900//ETC:ETC]
 * @apiParam (Body) {String} recommendedLevelEtc Etc 이유
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */