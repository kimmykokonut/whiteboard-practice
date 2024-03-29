// Container With Most Water

// Given n non - negative integers a1, a2, ..., an, where each represents a point at coordinate(i, ai). 'n' vertical lines are drawn such that the two endpoints of the line i is at(i, ai) and(i, 0).Find two lines, which, together with the x - axis forms a container, such that the container contains the most water.

//   Example:

// Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49
// // Explanation: The maximum area is obtained by selecting the minimum of the heights of the vertical lines ( ex: Math.min(8, 7) === 7) and multiplying it by the width between the lines (index 8 - index 1 === 7 spaces apart).
// //
// Input: array = [1, 5, 4, 3]
// Output: 6
// Explanation:
// 5 and 3 are distance 2 apart. 
// So the size of the base = 2. 
// Height of container = min(5, 3) = 3. 
// So total area = 3 * 2 = 6