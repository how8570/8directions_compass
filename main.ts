let facing_degree = 0
/**
 * 按 A 顯示角度
 * 
 * debug 用
 */
/**
 * 實作角度區間為 ( θ_1 , θ_2 ]   (左開又閉)
 * 
 * 參考角度如下:
 * 
 *                            (337.5)                  (22.5)
 * 
 *                                             N(0)
 * 
 *                   (315)NW               |                 NE(45)
 * 
 *                                 \              |               /
 * 
 *       (292.5)                   \          |          /                    (67.5) 
 * 
 *                                         \      |     /
 * 
 *                  (270)W---------------+----------------E(90)
 * 
 *                                         /      |    \
 * 
 *       (247.5)                   /          |         \                      (112.5)
 * 
 *                                 /              |              \
 * 
 *                   (225)SW               |                 SE(135)
 * 
 *                                            S(180)
 * 
 *                            (202.5)                   (157.5)
 * 
 * #### 注意北方的邏輯
 * 
 * 可分為
 * 
 * 分為 337.5~0度(360度) "或" 0~22.5度 兩邊
 */
input.onButtonPressed(Button.A, function () {
    basic.showNumber(facing_degree)
})
basic.forever(function () {
    facing_degree = input.compassHeading()
    if (22.5 < facing_degree && facing_degree <= 67.5) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (67.5 < facing_degree && facing_degree <= 112.5) {
        basic.showArrow(ArrowNames.East)
    } else if (112.5 < facing_degree && facing_degree <= 157.5) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (157.5 < facing_degree && facing_degree <= 202.5) {
        basic.showArrow(ArrowNames.South)
    } else if (202.5 < facing_degree && facing_degree <= 247.5) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (247.5 < facing_degree && facing_degree <= 292.5) {
        basic.showArrow(ArrowNames.West)
    } else if (292.5 < facing_degree && facing_degree <= 337.5) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (337.5 <= facing_degree || facing_degree < 22.5) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showString("ERROR")
        basic.showIcon(IconNames.Sad)
    }
})
