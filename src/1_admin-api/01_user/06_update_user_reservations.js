/**
 * @api {put} /admin/v1/users/{id}/reservations 06. 회원 예약 수정(취소)
 *
 * @apiDescription 회원관리 > 회원 목록 조회 > 예약 탭<br/>
 * - 예약 취소
 *
 * @apiVersion 1.0.0
 * @apiName admin_updateUserReservations
 * @apiGroup 1. Admin API > 1. 회원관리
 *
 * @apiExample {curl} REQUEST
 * curl -i -X PUT 'http://localhost:8080/admin/v1/users/M1427783489308244/reservations' \
 * -H "Content-Type: application/json" \
 * -d "{
    "reservations": [
        {
            "id": 1,
            "isCancel": true,
            "cancelReason": "취소 사유"
        }
    ]
}"
 *
 * @apiParam (Path) {String} id 회원 식별키
 * 
 * @apiParam (Body) {Object[]} reservations 수정할 예약 목록
 * @apiParam (Body) {Number} reservations.id 예약 식별키
 * @apiParam (Body) {Boolean} [reservations.isCancel] 취소 여부 (예약 취소시 true)
 * @apiParam (Body) {String} [reservations.cancelReason] 취소 사유
 *
 * @apiSuccessExample {json} SUCCESS
 * HTTP/1.1 200
 */