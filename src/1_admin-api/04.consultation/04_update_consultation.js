/**
 * @api {put} /admin/v1/consultations/{id} 04. 기본정보수정
 *
 * @apiDescription 상담관리 > 상세관리수정
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateUser
 * @apiGroup 1. Admin API > 4. 상담관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/consultations/522' \
 * -H "Content-Type: application/json" \
 * -d "{
           "job":"학생"
       }"
 *
 * @apiParam (Path) {Long} [id] 상담식별키
 * 
 * @apiParam (Body) {String} type 상담구분 [  P, // 전화상담<br/>
                                          V, // 방문상담<br/>
                                          K, // 카카오채널<br/>
                                          N, // 네이버예약<br/>
                                          F, // 온라인상담<br/>
                                          L, // 무료레벨테스트]<br/>
 * @apiParam (Body) {String} status 처리상태 [  WAITING("3"), // 대기<br/>
                                            // 컨텍금지<br/>
                                            NO_CONTACT("4"),<br/>
                                            UNVISITED("5"),<br/>
                                            RESERVED("6"),<br/>
                                            NOT_REGISTERED("7"),<br/>
                                            REGISTERED("8"),<br/>
                                            NO_SHOW("9"),<br/>
                                            MISSED("10"),]<br/>
 * @apiParam (Body) {String} name 이름
 * @apiParam (Body) {String} gender 성별 [    M: 남성,  F:여성]
 * @apiParam (Body) {String} callTime 통화 가능 시간 [  TIME_01("10"), // 06:30~08:00<br/>
                                                  TIME_02("20"), // 08:00~10:00<br/>
                                                  TIME_03("30"), // 10:00~12:00<br/>
                                                  TIME_04("40"), // 12:00~14:00<br/>
                                                  TIME_05("50"), // 14:00~16:00<br/>
                                                  TIME_06("60"), // 16:00~18:00<br/>
                                                  TIME_07("70"), // 18:00~20:00<br/>
                                                  TIME_08("80"), // 20:00~21:00<br/>
                                                  TIME_09("90"),]<br/>
 * @apiParam (Body) {String} phone 전화번호
 * @apiParam (Body) {String} cellPhone 핸드폰번호
 * @apiParam (Body) {String} email 이메일
 * @apiParam (Body) {String[]} studyPurposes 공부목적[  COMMON_ENGLISH("10"), // 생활영어<br/>
                                                    WORK("20"), //업무<br/>
                                                    STUDY_ABROAD("30"), // 유학<br/>
                                                    DEVELOPMENT("40"), // 자기개<br/>
                                                    EMPLOYMENT("50"), // 취업<br/>
                                                    ETC("60") // 기타<br/>
                                                    ;]
 * @apiParam (Body) {String} foundPath 알게된동기 [    SIGN("10"), // 간판<br/>
                                                  ONLINE("20"), // 온라인검색<br/>
                                                  RECOMMEND("30"), // 지인추천<br/>
                                                  FAN("40"), // 부채<br/>
                                                  LEAFLET("50"), // 3단리플릿<br/>
                                                  SUBWAY("60"), // 지하철광고<br/>
                                                  ALLIANCE("70"), // 기업제휴<br/>
                                                  ETC("900"), // 기타<br/>
                                                  ;]
 * @apiParam (Body) {String} foundPathNote 알게된 동기 이유
 * @apiParam (Body) {String} job 직업
 * @apiParam (Body) {String} company 회사명
 * @apiParam (Body) {String} consultationDate 상담일
 * @apiParam (Body) {String} visitDate 방문일[yyyy-MM-dd HH:mm:ss]
 * @apiParam (Body) {String} details 상담내용
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */