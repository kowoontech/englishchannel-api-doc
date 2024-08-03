/**
 * @api {get} /admin/v1/products/list 08. 주문관리 > 상품 목록
 *
 * @apiDescription 주문관리 > 상품 목록 조회
 * 
 *
 * @apiVersion 1.0.0
 * @apiName admin_listProducts_management
 * @apiGroup 1. Admin API > 02. 상품
 *
 * @apiExample {curl} REQUEST
 * curl -i -X GET 'http://localhost:8080/admin/v1/products/list'
 * 
 *
 *
 * @apiSuccess {String} id 상품 식별키
 * @apiSuccess {String} name 상품명
 * @apiSuccess {String} price 상품 가격
 * @apiSuccess {String} type (상세화면에서 CURRICULUM: 과정여부 체크된 것<br/>
                                        null,CONTENTS, DEVICE,TEXTBOOK,PACKAGE : 체크되지않은것)
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
{
[
    {
        "id": "P1722559046496207",
        "name": null,
        "price": 0,
        "type": "CURRICULUM"
    },
    {
        "id": "P1722558926239420",
        "name": null,
        "price": 0,
        "type": "CURRICULUM"
    },
    {
        "id": "P1722558905397978",
        "name": null,
        "price": 0,
        "type": "CURRICULUM"
    },
    {
        "id": "P1722558830672512",
        "name": null,
        "price": 0,
        "type": "CURRICULUM"
    },
    {
        "id": "P1722558805460371",
        "name": null,
        "price": 0,
        "type": "CURRICULUM"
    },
    {
        "id": "P1722556893281030",
        "name": "패키지이름",
        "price": 12000,
        "type": "PACKAGE"
    },
    {
        "id": "P1722556834089167",
        "name": null,
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1722556783698895",
        "name": null,
        "price": 0,
        "type": "CONTENTS"
    },
    {
        "id": "P1722556007318912",
        "name": "과정111",
        "price": 13000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1722555561655498",
        "name": "과정111",
        "price": 13000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1722554946190682",
        "name": null,
        "price": 0,
        "type": "CURRICULUM"
    },
    {
        "id": "P1722490344592901",
        "name": "패키지1",
        "price": 13000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1722478885795929",
        "name": null,
        "price": 0,
        "type": "PACKAGE"
    },
    {
        "id": "P1722478832696425",
        "name": "패키지1",
        "price": 13000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1722478594529166",
        "name": null,
        "price": 0,
        "type": "PACKAGE"
    },
    {
        "id": "P1722478523511589",
        "name": null,
        "price": 0,
        "type": "PACKAGE"
    },
    {
        "id": "P1722477961323174",
        "name": null,
        "price": 0,
        "type": "PACKAGE"
    },
    {
        "id": "P1722476566849400",
        "name": "패키지1",
        "price": 13000,
        "type": "PACKAGE"
    },
    {
        "id": "P1722476414205200",
        "name": "과정6",
        "price": 13000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1350566344583803",
        "name": "중국어 CUBE 1",
        "price": 15000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566453785520",
        "name": "Next Step - Meeting",
        "price": 10000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566465417574",
        "name": "Next Step - Negotiations",
        "price": 10000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566488827595",
        "name": "Next Step - Customer Service",
        "price": 10000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566520132509",
        "name": "Next Step - Interview",
        "price": 10000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566540151135",
        "name": "Next Step - Hotel",
        "price": 10000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566566057604",
        "name": "Next Step - Airport",
        "price": 10000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566585140918",
        "name": "Next Step - Banking1",
        "price": 10000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566595661747",
        "name": "Next Step - Banking2",
        "price": 10000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566615655511",
        "name": "Next Step - Golf",
        "price": 10000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566637163627",
        "name": "Next Step - in Flight",
        "price": 10000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566735444807",
        "name": "Plug-in 30분",
        "price": 30000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1350566928359647",
        "name": "맥북에어 - 11.6(128 Flash)",
        "price": 1390000,
        "type": "DEVICE"
    },
    {
        "id": "P1352098696544281",
        "name": "아이패드 미니 - 16G",
        "price": 420000,
        "type": "DEVICE"
    },
    {
        "id": "P1352098762823637",
        "name": "아이패드 미니 - 32G",
        "price": 540000,
        "type": "DEVICE"
    },
    {
        "id": "P1352098835580142",
        "name": "아이패드 미니 - 64G",
        "price": 660000,
        "type": "DEVICE"
    },
    {
        "id": "P1352098897939225",
        "name": "아이패드4 - 32G",
        "price": 740000,
        "type": "DEVICE"
    },
    {
        "id": "P1357195231862759",
        "name": "MISEC/미수금정보",
        "price": 0,
        "type": "CURRICULUM"
    },
    {
        "id": "P1361351419323243",
        "name": "Next Step - Meeting",
        "price": 90000,
        "type": "CONTENTS"
    },
    {
        "id": "P1361351478500938",
        "name": "Next Step - Negotiations",
        "price": 90000,
        "type": "CONTENTS"
    },
    {
        "id": "P1361351523179460",
        "name": "Next Step - Customer Service",
        "price": 90000,
        "type": "CONTENTS"
    },
    {
        "id": "P1361351562919081",
        "name": "Next Step - Interview",
        "price": 90000,
        "type": "CONTENTS"
    },
    {
        "id": "P1361351611766688",
        "name": "Next Step - Hotel",
        "price": 90000,
        "type": "CONTENTS"
    },
    {
        "id": "P1361351643010697",
        "name": "Next Step - Airport",
        "price": 90000,
        "type": "CONTENTS"
    },
    {
        "id": "P1361351677322920",
        "name": "Next Step - Banking1",
        "price": 90000,
        "type": "CONTENTS"
    },
    {
        "id": "P1361351723763253",
        "name": "Next Step - Banking2",
        "price": 90000,
        "type": "CONTENTS"
    },
    {
        "id": "P1361351762137021",
        "name": "Next Step - Golf",
        "price": 90000,
        "type": "CONTENTS"
    },
    {
        "id": "P1361351796074723",
        "name": "Next Step - in Flight",
        "price": 90000,
        "type": "CONTENTS"
    },
    {
        "id": "P1361352005581359",
        "name": "Next Step - Hospital",
        "price": 90000,
        "type": "CONTENTS"
    },
    {
        "id": "P1361352132392303",
        "name": "Next Step - Hospital",
        "price": 10000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1361514930881960",
        "name": "PTM (주2회 3개월)",
        "price": 60000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1361958543920047",
        "name": "First Choice",
        "price": 18000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1361958587296434",
        "name": "one:one",
        "price": 23000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1361958640682899",
        "name": "Market Leader Pre-Inter",
        "price": 22000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1361958707921831",
        "name": "Voca in Use",
        "price": 22000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1363236393144588",
        "name": "무료체험_Next Step - Hospital",
        "price": 0,
        "type": "CONTENTS"
    },
    {
        "id": "P1363942256811053",
        "name": "맥북에어  - 11.6(64 Flash)",
        "price": 1290000,
        "type": "DEVICE"
    },
    {
        "id": "P1364295608035901",
        "name": "PTG (주2회 3개월)",
        "price": 55000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1364375717944669",
        "name": "PTM (주2회 6개월)",
        "price": 58000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1366362304202222",
        "name": "Beanstalk 1",
        "price": 10000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1370404771897634",
        "name": "Market Leader-Intermediate",
        "price": 29000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1370406769937315",
        "name": "Market Leader-pre intermediate",
        "price": 29000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1370423957848299",
        "name": "PT/TT (구로)",
        "price": 37500,
        "type": "CURRICULUM"
    },
    {
        "id": "P1425279988311032",
        "name": "NEW PT 24회 3개월",
        "price": 65000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1425280052646471",
        "name": "NEW TT 24회 3개월",
        "price": 65000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1502855319872286",
        "name": "Smart Choice Starter(mp3)",
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1502855341952212",
        "name": "Smart Choice 1(mp3)",
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1502855358260400",
        "name": "Smart Choice 2(mp3)",
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1545895635956364",
        "name": "Business Result Intermediate(mp3)",
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1545895667807809",
        "name": "Business Result Upper-intermediate(mp3)",
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1545895678477639",
        "name": "Business Result Elementary(mp3)",
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1550827522833369",
        "name": "2nd BR Elementary(mp3)",
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1550827545093023",
        "name": "2nd BR Upper-intermediate(mp3)",
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1550827558702657",
        "name": "2nd BR Intermediate(mp3)",
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1550827747588318",
        "name": "Communicating in Business English(mp3)",
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1575887209875705",
        "name": "Business Essentials Book 1(mp3)",
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "c300",
        "name": "CUBE 300",
        "price": 135000,
        "type": "CONTENTS"
    },
    {
        "id": "P1620907124055360",
        "name": "단기과정",
        "price": 70000,
        "type": "CURRICULUM"
    },
    {
        "id": "c400",
        "name": "CUBE 400",
        "price": 135000,
        "type": "CONTENTS"
    },
    {
        "id": "c500",
        "name": "CUBE 500",
        "price": 135000,
        "type": "CONTENTS"
    },
    {
        "id": "c600",
        "name": "CUBE 600",
        "price": 135000,
        "type": "CONTENTS"
    },
    {
        "id": "c700",
        "name": "CUBE 700",
        "price": 135000,
        "type": "CONTENTS"
    },
    {
        "id": "c800",
        "name": "CUBE 800",
        "price": 135000,
        "type": "CONTENTS"
    },
    {
        "id": "c900",
        "name": "CUBE 900",
        "price": 135000,
        "type": "CONTENTS"
    },
    {
        "id": "P1350556710397836",
        "name": "PTG (주1회 1개월)",
        "price": 55000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1350556747894625",
        "name": "PTG (주2회 6개월)",
        "price": 53000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1350556829139032",
        "name": "TTE (주1회 1개월)",
        "price": 62000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1350556852378513",
        "name": "TTE (주2회 3개월)",
        "price": 60000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1575887230426294",
        "name": "Business Essentials Book 2(mp3)",
        "price": 0,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350556874574950",
        "name": "TTE (주2회 6개월)",
        "price": 58000,
        "type": "CURRICULUM"
    },
    {
        "id": "P1350564934045170",
        "name": "CUBE 300",
        "price": 15000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350564945662343",
        "name": "CUBE 400",
        "price": 15000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350564956765554",
        "name": "CUBE 500",
        "price": 15000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566292292050",
        "name": "CUBE 600",
        "price": 15000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566301004245",
        "name": "CUBE 700",
        "price": 15000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566314462525",
        "name": "CUBE 800",
        "price": 15000,
        "type": "TEXTBOOK"
    },
    {
        "id": "P1350566326017717",
        "name": "CUBE 900",
        "price": 15000,
        "type": "TEXTBOOK"
    },
    {
        "id": "tsi",
        "name": "토익스피킹 Intensive",
        "price": 135000,
        "type": "CONTENTS"
    },
    {
        "id": "tspre",
        "name": "토익스피킹 Pre-Course",
        "price": 135000,
        "type": "CONTENTS"
    },
    {
        "id": "tsr",
        "name": "토익스피킹 Regular",
        "price": 135000,
        "type": "CONTENTS"
    },
    {
        "id": "tst",
        "name": "토익스피킹 Test",
        "price": 135000,
        "type": "CONTENTS"
    }
]

 */