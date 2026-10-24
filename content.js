// ===== Rhema CBC Revision - Grade 9 Prediction Paper B (KJSEA Predictor 2026) =====
// Runs AFTER index.html main script (DATA7/DATA8/PRED already defined).
// Adds one complete Grade 9 Mathematics prediction paper: 20 Section A MCQs + 20 Section B structured items.
(function(){
"use strict";
if(typeof PRED==="undefined"||!Array.isArray(PRED)){console.warn("Rhema content: PRED not found");return;}

var A=[
["A country recorded the number of registered voters as 22,524,260. What is the total value of digit 5 in the number of voters?",["50,000","600,000","500,000","524,260"],2],
["During a normal mathematics lesson, a learner wrote the following sequence on the chalk board: 8, 16, 32, 64, ___. Find the next number in the sequence.",["96","128","72","144"],1],
["The initial temperature of a certain liquid was recorded as 17 degrees Celsius. The liquid was cooled until its final temperature was -1 degree Celsius. Determine the difference in temperature.",["16 degrees Celsius","19 degrees Celsius","18 degrees Celsius","20 degrees Celsius"],2],
["During opening day, the number of boys who reported in Grade 7 were 20, while girls were 35. Find the ratio of boys to girls who reported on the opening day.",["7:4","4:11","11:4","4:7"],3],
["The cost of a mango is ksh x. Vincy had Ksh 500, which she used to buy 4 mangoes. Express the amount of money she was left with in terms of x.",["500-4x","4x-500","x-500","500-x"],0],
["During a group discussion, a learner picked the linear equation 2x+3y=6 to solve. Find the y-intercept of the equation.",["6","0","3","2"],3],
["The following are pairs of simple inequality statements: x is less than or equal to 6, and x is greater than or equal to -2. Form the compound inequality.",["6 >= x >= -2","-2 <= x <= 6","-2 >= x <= 6","6 <= x >= -2"],1],
["State the order of the matrix shown below. Row 1: 3, -9. Row 2: 5, 15. Row 3: 11, 6.",["3x2","3x3","2x3","4x2"],0],
["A path was created around a circular swimming pool to ensure safety of the children. If the swimming pool had a diameter of 147 m, determine the length of the path in metres. (Take pi = 22/7)",["147","231","16,978.5","462"],3],
["The figure below shows a cube whose total surface area is 216 m squared. Determine the length of one side of the cube in metres.",["12","6","36","14.70"],1],
["One of the laboratory apparatuses was made in the shape of a cone. If it had a base radius of 28 cm and a vertical height of 42 cm, find its volume. (Take pi = 22/7)",["2,464 cubic cm","8,624 cubic cm","34,496 cubic cm","25,872 cubic cm"],2],
["The mass of a cylindrical container and its contents was 15 kg. If it had a density of 30 g per cubic cm, what was its volume in cubic centimetres?",["2,000","0.5","2","500"],3],
["The interior angle of a regular polygon is 4 times its exterior angle. Find the sum of the angles of this regular polygon.",["720 degrees","540 degrees","1,080 degrees","1,440 degrees"],0],
["The distance between two schools on a map is represented by 9 cm. If the actual distance between them is 18 km, find the scale on the map in ratio form.",["1:2,000,000","1:200,000","1:2","1:200"],1],
["The figures below show three triangles. Triangle (a) has sides 5 cm, 4 cm and 8 cm. Triangle (b) has sides 5 cm, 4 cm and 2 cm. Triangle (c) has sides 7.5 cm, 6 cm and 3 cm. Identify the triangles that are similar.",["(a) and (b)","(a) and (c)","(a), (b) and (c)","(b) and (c)"],3],
["An electric pole is supported by a wire. The pole is 12 m high and the wire is anchored 5 m from the base of the pole. Calculate angle x, the angle between the wire and the pole.",["67.38 degrees","90 degrees","22.62 degrees","45 degrees"],2],
["There were 48 men, 80 women and 96 youth at a community HIV/AIDS awareness forum. The facilitator grouped the people in equal number of men, women and youth. What was the largest number of groups formed?",["480","240","16","3"],2],
["The total number of books in a shelf is 12. There are m Mathematics books in the shelf. The number of English books was thrice the number of Mathematics books. The remaining books are Kiswahili books. Which one of the following represents the number of Kiswahili books?",["12-4m","4m-12","12-3m","3m-12"],0],
["There were six cards in a box numbered 1 up to 6. Musyoki picked two cards one after another without replacing. What is the probability that he picked a prime number in both trials?",["9/10","1/5","1/2","1/4"],1],
["A bag contains 2 oranges, 3 mangoes and 5 apples. A fruit was picked at random. What is the probability of picking an avocado?",["1/2","1/5","3/10","0"],3]
];

var B=[
{n:21,q:"Antony made a profit of sh 19,000 from his business. He used sh 13,845 to expand his business and saved the remaining amount.",p:[
 {l:"a",q:"How much money did Antony save?",m:1,a:"19,000 - 13,845 = sh 5,155"},
 {l:"b",q:"Write the amount Antony used to expand the business in words.",m:1,a:"Thirteen thousand, eight hundred and forty-five shillings."},
 {l:"c",q:"Round off the amount Antony used to expand the business to the nearest ten thousand.",m:1,a:"sh 10,000 (13,845 rounds down to 10,000)."}]},
{n:22,q:"A wooden box is in the shape of a cube. The length of the wood is 1.2 m.",p:[
 {l:"a",q:"Determine the volume of the wooden box in cubic metres.",m:2,a:"V = 1.2 x 1.2 x 1.2 = 1.728 cubic metres"},
 {l:"b",q:"Cubical packets of side 15 cm were packed in the box. Determine the number of packets that were packed.",m:2,a:"Packet volume = 0.15 x 0.15 x 0.15 = 0.003375 cubic metres. Number = 1.728 / 0.003375 = 512 packets"}]},
{n:23,q:"The square study room has a length of 91.2 m.",p:[
 {l:"a",q:"Using mathematical tables, find its area in square metres.",m:3,a:"Area = 91.2 x 91.2 = 8,317.44 square metres"},
 {l:"b",q:"A rectangular carpet of measurements 100 cm by 80 cm is laid on the floor. Determine the area left not occupied by the carpet.",m:2,a:"Carpet area = 1 m x 0.8 m = 0.8 square metres. Area left = 8,317.44 - 0.8 = 8,316.64 square metres"}]},
{n:24,q:"Nine workers take 15 days to plough a piece of land.",p:[
 {l:"a",q:"Find the number of workers required to complete the work in 5 days.",m:3,a:"9 workers x 15 days / 5 days = 27 workers"},
 {l:"b",q:"Find the number of workers required to be added on duty.",m:1,a:"27 - 9 = 18 workers"}]},
{n:25,q:"The water tank is 4/5 full of water. A family uses 1/20 of the water each day.",p:[
 {l:"a",q:"Find the fraction of water used in 3 days.",m:2,a:"1/20 x 3 = 3/20"},
 {l:"b",q:"Find the remaining fraction of water at the end of 3 days.",m:2,a:"4/5 - 3/20 = 16/20 - 3/20 = 13/20"}]},
{n:26,q:"During a visit to an agricultural show, Emmah bought 4 mangoes and 6 avocados at ksh 270. The cost of 6 mangoes and 2 avocados was ksh 230.",p:[
 {l:"a",q:"Form two simultaneous equations for the information (let the cost of a mango be m and that of an avocado be a).",m:2,a:"4m + 6a = 270 and 6m + 2a = 230"},
 {l:"b",q:"Solve for the cost of a mango and the cost of an avocado.",m:2,a:"Multiply the second equation by 3: 18m + 6a = 690. Subtract the first: 14m = 420, so m = 30. Then 4(30) + 6a = 270 gives 6a = 150, so a = 25."},
 {l:"c",q:"Find the cost of 4 mangoes and of each avocado.",m:1,a:"4 mangoes = 4 x 30 = ksh 120. Each avocado = ksh 25."}]},
{n:27,q:"Learners wrote the following matrices on a piece of paper for class discussion. Matrix A has row 1: 25, 60, 15 and row 2: 31, 50, 10. Matrix B has row 1: 30, 50, 16 and row 2: 15, 60, 11.",p:[
 {l:"",q:"Find matrix A - B.",m:2,a:"A - B = [25-30, 60-50, 15-16; 31-15, 50-60, 10-11] = [-5, 10, -1; 16, -10, -1]"}]},
{n:28,q:"Owino is now 4 years older than his younger brother Steve. Eight years ago the sum of their ages was 28 years.",p:[
 {l:"a",q:"Form the equations for their present ages.",m:1,a:"Owino = Steve + 4, and (Owino - 8) + (Steve - 8) = 28"},
 {l:"b",q:"Determine their present ages.",m:2,a:"Substitute: (S+4-8) + (S-8) = 28 gives 2S - 12 = 28, so S = 20. Owino = 24. Owino is 24 years old and Steve is 20 years old."}]},
{n:29,q:"Mayoro moulded a solid in the shape of a cone. The slanting height of the cone was 25 cm and the base radius was 3.5 cm. (Take pi = 22/7)",p:[
 {l:"",q:"Determine the total surface area of the cone correct to two decimal places.",m:4,a:"TSA = pi x r x (r + l) = 22/7 x 3.5 x (3.5 + 25) = 11 x 28.5 = 313.50 square cm (2 d.p.)"}]},
{n:30,q:"A cylindrical container of radius 3.6 cm contains some water. A spherical solid of radius 3 cm is dropped into the container. (Take pi = 22/7)",p:[
 {l:"a",q:"Find the volume of the spherical solid.",m:2,a:"V = 4/3 x pi x 3 cubed = 4/3 x 22/7 x 27 = 36 x 22/7 = about 113.14 cubic cm"},
 {l:"b",q:"Determine the rise in the water level in the container correct to two decimal places.",m:2,a:"Base area of cylinder = 22/7 x 3.6 squared = 40.74 square cm. Rise = 113.14 / 40.74 = 2.78 cm (2 d.p.)"}]},
{n:31,q:"A mason placed a pole against a wall. The foot of the pole was 6 m away from the wall and the top of the pole was 4.5 m above the ground.",p:[
 {l:"a",q:"Determine the length of the pole.",m:2,a:"l squared = 6 squared + 4.5 squared = 36 + 20.25 = 56.25, so l = 7.5 m"},
 {l:"b",q:"The volume of the pole is 800 cubic cm and the mass is 3.2 kg. Determine the density of the pole.",m:2,a:"Density = mass / volume = 3,200 g / 800 cubic cm = 4 g per cubic cm"}]},
{n:32,q:"Town A lies at longitude 14 degrees East. Town B lies at longitude 48 degrees West. The local time at town B is 11:56 p.m.",p:[
 {l:"a",q:"Find the difference in longitude and the time difference.",m:2,a:"Difference in longitude = 48 + 14 = 62 degrees. Time difference = 62 x 4 minutes = 248 minutes = 4 hours 8 minutes"},
 {l:"b",q:"Determine the local time at town A.",m:2,a:"Town A is east of town B, so its time is ahead: 11:56 p.m. + 4 h 8 min = 4:04 a.m. the next day."}]},
{n:33,q:"A Kenyan bank bought and sold United Arab Emirates (UAE) dirhams on two different dates. On 1st August 2025 the bank bought at Ksh 28.40 and sold at Ksh 28.90 per dirham. On 16th August 2025 the bank bought at Ksh 28.00 and sold at Ksh 28.40 per dirham. A Kenyan tourist who travelled to UAE on 1st August 2025 converted Ksh 130,050 to UAE dirhams. During her stay she spent 3,520 dirhams. She arrived back in Kenya on 16th August 2025 and converted the remaining dirhams to Kenya shillings at the same bank.",p:[
 {l:"a",q:"Determine the dirhams she received on 1st August 2025.",m:2,a:"The bank sells dirhams to her at the selling rate: 130,050 / 28.90 = 4,500 dirhams"},
 {l:"b",q:"Determine the dirhams she had left after her stay.",m:1,a:"4,500 - 3,520 = 980 dirhams"},
 {l:"c",q:"Determine the amount of money in Ksh that she received from the bank on 16th August 2025.",m:2,a:"The bank buys dirhams at the buying rate: 980 x 28.00 = Ksh 27,440."}]},
{n:34,q:"A design of a window is in the shape of a triangle XYZ.",p:[
 {l:"a",q:"Construct triangle XYZ such that YZ = 6 cm, angle YZX = 50 degrees and angle ZXY = 35 degrees.",m:3,a:"Award: line YZ drawn accurately at 6 cm (1 mark), both base angles measured and drawn correctly (1 mark), triangle completed with vertex X correctly located (1 mark)."},
 {l:"b",q:"Construct a circle that touches all the sides of the triangle and measure its radius.",m:2,a:"Bisect two angles to locate the incentre, then draw the inscribed circle. The measured radius should be about 1.8 cm (accept values close to the accurate drawing)."}]},
{n:35,q:"The changes in temperature were represented by the equation y = 2x + 4.",p:[
 {l:"a",q:"Use the equation to complete the table for x = -3 and x = 1 (given points: x = -2 gives y = 0 and x = 0 gives y = 4).",m:2,a:"x = -3: y = 2(-3) + 4 = -2. x = 1: y = 2(1) + 4 = 6."},
 {l:"b",q:"On the grid provided, draw the graph of y = 2x + 4.",m:2,a:"Plot the points (-3, -2), (-2, 0), (0, 4) and (1, 6), then join them with a straight line passing through all of them."}]},
{n:36,q:"The diagram below represents a sketch of a wall. The wall forms a right-angled triangle with a hypotenuse of 100 m and an angle of 30 degrees at the base.",p:[
 {l:"",q:"Determine the height of the wall.",m:2,a:"Height = 100 x sin 30 degrees = 100 x 0.5 = 50 m"}]},
{n:37,q:"A surveyor recorded the bearings and distance of different places in a school compound as shown. Kitchen: bearing 240 degrees, 130 m from the gate. Classes: bearing 110 degrees, 80 m from the gate. Flagpost: bearing 270 degrees, 80 m from the gate.",p:[
 {l:"",q:"Using the scale 1 cm represents 20 m, draw a surveyor map of the places.",m:5,a:"Scale conversions: 130 m = 6.5 cm and 80 m = 4 cm. From the gate point with a North arrow: Kitchen on bearing 240 degrees at 6.5 cm, Classes on bearing 110 degrees at 4 cm, Flagpost due West (270 degrees) at 4 cm. Award: correct scale conversions (1), correct bearings measured clockwise from North (2), correct line lengths (1), neat labelled diagram with North arrow (1)."}]},
{n:38,q:"Moiben modelled a cube measuring 3 cm as shown.",p:[
 {l:"a",q:"Draw the net of the cube.",m:2,a:"A cross-shaped net of six congruent 3 cm squares: Top, Front and Bottom in a column, with Left, Right and Back squares attached to the sides of the Front square."},
 {l:"b",q:"Calculate the total surface area of the cube from the net.",m:3,a:"Surface area = 6 x s squared = 6 x 3 x 3 = 6 x 9 = 54 square cm"}]},
{n:39,q:"The marks scored by 20 learners in a test were recorded as: 20, 18, 20, 16, 18, 20, 23, 18, 18, 20, 19, 34, 18, 30, 19, 16, 20, 19, 23, 20.",p:[
 {l:"a",q:"Prepare a frequency distribution table for the data.",m:2,a:"Mark 16: frequency 2. Mark 18: 5. Mark 19: 3. Mark 20: 6. Mark 23: 2. Mark 30: 1. Mark 34: 1. Total = 20."},
 {l:"b(i)",q:"Determine the modal mark.",m:1,a:"Modal mark = 20 (highest frequency, 6)."},
 {l:"b(ii)",q:"Determine the median mark.",m:1,a:"Ordered data: the 10th and 11th values are 19 and 20. Median = (19 + 20) / 2 = 19.5"},
 {l:"b(iii)",q:"Determine the mean mark.",m:1,a:"Sum of marks = 405. Mean = 405 / 20 = 20.25"}]},
{n:40,q:"Maxwell rolled a die once.",p:[
 {l:"a",q:"Determine the probability that he obtained an odd number.",m:1,a:"Odd numbers = {1, 3, 5}. P(odd) = 3/6 = 1/2"},
 {l:"b",q:"Determine the probability that he obtained a composite number.",m:1,a:"Composite numbers = {4, 6} (1 is neither prime nor composite). P(composite) = 2/6 = 1/3"},
 {l:"c",q:"Determine the probability that he obtained a factor of 5.",m:1,a:"Factors of 5 on a die = {1, 5}. P = 2/6 = 1/3"}]}
];

PRED.push({id:"g9m2",grade:9,subject:"Mathematics",title:"Grade 9 Mathematics: KJSEA Predictor 2026 - Paper B",A:A,B:B});
})();
