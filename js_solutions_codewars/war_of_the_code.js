
//____________________________________________________________________________________________________
//----------------------------------------------------------------------------------------------------
//____________________________________________________________________________________________________
// ---------------------------------------------------------------------------------------------------
// ___________________________________________________________________________________________________

//     ####   #####   ####    #####   #   #   #####        #####  #####   #   #   ####   #      #####
//     #      #   #   #   #     #     ##  #   #              #    #       ## ##   #   #  #      #    
//     #      #   #   #    #    #     # # #   #  ###         #    ###     # # #   ####   #      #### 
//     #      #   #   #   #     #     #  ##   #   #          #    #       #   #   #      #      #    
//     ####   #####   ####    #####   #   #    ###           #    #####   #   #   #      #####  #####

//____________________________________________________________________________________________________
//----------------------------------------------------------------------------------------------------
//____________________________________________________________________________________________________
// ---------------------------------------------------------------------------------------------------
// ___________________________________________________________________________________________________

//_____________________________________________________________________________
//
//==========Exercise #1 ===========//
//_____________________________________________________________________________
const yummyFavoriteFoods = (person) => {
    for (let key in person) {
        if (person[key] instanceof Array) {
            console.log(`Hey there, check out these delicious ${key}s: ${person[key].join(", ")}`);
        } 
        else if (typeof person[key] === "object") {
            for (let innerKey in person[key][0]) {
                console.log(`Check out the ${innerKey}? ${person[key][0][innerKey]} sounds turbulicious!`);
            }
        } 
        else {
            console.log(`Now remember, ${key}: ${person[key]}. That's the bombdigs!`);
        }
    }
};
//_____________________________________________________________________________
//
//=======Exercise #2=========//
//_____________________________________________________________________________
class Person {
    constructor(name, age) {
        this.firstName = name;
        this.yearsOld = age;
    }
    sayHello = () => {
        console.log(`Hey there! I'm ${this.firstName}, feeling ${this.yearsOld} years young. Let's rock! 🎸`);
    };
    increaseAge = () => {
        this.yearsOld++;
    };
}
const volcom = new Person("Volcom", 30);
const oakley = new Person("Oakley", 25);
volcom.sayHello();
oakley.sayHello();
volcom.increaseAge();
volcom.increaseAge();
volcom.increaseAge();
volcom.sayHello();
// _______________________________________________________________________________
//
// =============Exercise #3 ============//
//________________________________________________________________________________ 
const checkStringLength = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve("That's a big word, my friend!");
        } else {
            reject("Hmm, seems a bit small to me...");
        }
    });
};
// _______________________________________________________________________________
//
// =============Exercise #4 ============//
//________________________________________________________________________________ 
// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
// Sample Tests
// const { assert } = require("chai");

// describe("Sample test", () => {
//   it("Should pass sample tests", () => {
//     assert.equal(domainName("http://google.com"), "google");
//     assert.equal(domainName("http://google.co.jp"), "google");
//     assert.equal(domainName("www.xakep.ru"), "xakep");
//     assert.equal(domainName("https://youtube.com"), "youtube");
//   })  
// })
// Solution
function domainName(url){
    return url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0];
  }

// _______________________________________________________________________________
//
// =============Exercise #5 ============//
//________________________________________________________________________________
// https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/python
// Write a class called User that is used to calculate the amount that a user will 
// progress through a ranking system similar to the one Codewars uses.

// Business Rules:
// A user starts at rank -8 and can progress all the way to 8.
// There is no 0 (zero) rank. The next rank after -1 is 1.
// Users will complete activities. These activities also have ranks.
// Each time the user completes a ranked activity the users rank progress is 
// updated based off of the activity's rank
// The progress earned from the completed activity is relative to what the user's 
// current rank is compared to the rank of the activity
// A user's rank progress starts off at zero, 
// each time the progress reaches 100 the user's rank is upgraded to the next level
// Any remaining progress earned while in the previous rank will be applied 
// towards the next rank's progress (we don't throw any progress away). The 
// exception is if there is no other rank left to progress towards (Once you reach 
// rank 8 there is no more progression).
// A user cannot progress beyond rank 8.
// The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. 
// Any other value should raise an error.
// The progress is scored like so:

// Completing an activity that is ranked the same as that of the user's will be worth 3 points
// Completing an activity that is ranked one ranking lower than the user's will be worth 1 point
// Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored
// Completing an activity ranked higher than the current user's rank will accelerate 
// the rank progression. The greater the difference between rankings the more the 
// progression will be increased. The formula is 10 * d * d where d equals the 
// difference in ranking between the activity and the user.

// Logic Examples:
// If a user ranked -8 completes an activity ranked -7 they will receive 10 progress
// If a user ranked -8 completes an activity ranked -6 they will receive 40 progress
// If a user ranked -8 completes an activity ranked -5 they will receive 90 progress
// If a user ranked -8 completes an activity ranked -4 they will receive 160 progress, 
// resulting in the user being upgraded to rank -7 and having earned 60 progress towards their next rank
// If a user ranked -1 completes an activity ranked 1 they will receive 10 progress (remember, zero rank is ignored)
// Code Usage Examples:
// user = User()
// user.rank # => -8
// user.progress # => 0
// user.inc_progress(-7)
// user.progress # => 10
// user.inc_progress(-5) # will add 90 progress
// user.progress # => 0 # progress is now zero
// user.rank # => -7 # rank was upgraded to -7
// Note: Codewars no longer uses this algorithm for its own ranking system. It uses a 
// pure Math based solution that gives consistent results no matter what order a set 
// of ranked activities are completed at.
// Solution
// 1
// # TODO: create the User class
// 2
// # it must support rank, progress, and the inc_progress(rank) method
// Sample Tests
// 30
//     test.assert_equals(user.rank, -8)
// 31
//     test.assert_equals(user.progress, 90)
// 32
// ​
// 33
// @test.it("[-4]")
// 34
// def _():
// 35
//     user = User()
// 36
//     user.inc_progress(-4)
// 37
//     test.assert_equals(user.rank, -7)
// 38
//     test.assert_equals(user.progress, 60)
// 39
// ​
// 40
// @test.it("[1, 1]")
// 41
// def _():
// 42
//     user = User()
// 43
//     user.inc_progress(1)
// 44
//     test.assert_equals(user.rank, -2)
// 45
//     test.assert_equals(user.progress, 40)
// 46
//     user.inc_progress(1)
// 47
//     test.assert_equals(user.rank, -2)
// 48
//     test.assert_equals(user.progress, 80)
// Python Solution_________________________________________________________________________________________________________
// class User:
//     def __init__(self):
//         self.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8]
//         self.rank_index = 0
//         self.progress = 0
    
//     @property
//     def rank(self):
//         return self.ranks[self.rank_index]
//     def inc_progress(self, activity_rank):
//         if activity_rank not in self.ranks:
//             raise ValueError("Invalid rank")
//         activity_index = self.ranks.index(activity_rank)
//         rank_diff = activity_index - self.rank_index
//         if rank_diff == 0:
//             self.progress += 3
//         elif rank_diff == -1:
//             self.progress += 1
//         elif rank_diff > 0:
//             self.progress += 10 * rank_diff * rank_diff
//         while self.progress >= 100:
//             self.progress -= 100
//             self.rank_index += 1
//             if self.rank == 8:
//                 self.progress = 0
//                 break
//         if self.rank_index >= len(self.ranks) - 1:
//             self.rank_index = len(self.ranks) - 1
//             self.progress = 0
// Javascript Solution_______________________________________________________________________________________________________
class User {
    constructor() {
      this._rank = -8;
      this.progress = 0;
      this.maxRank = 8;
    }
  
    get rank() {
      return this._rank;
    }
  
    set rank(value) {
      if (value === 0) value = 1;
      this._rank = value;
    }
  
    updateProgress(points) {
      if (this.rank < this.maxRank) {
        this.progress += points;
  
        while (this.progress >= 100 && this.rank < this.maxRank) {
          this.progress -= 100;
          this.rank += (this.rank === -1) ? 2 : 1;
          if (this.rank === this.maxRank) this.progress = 0;
        }
      }
    }
  
    calculateProgress(activityRank) {
      if (activityRank === 0 || activityRank < -8 || activityRank > 8) {
        throw new Error("Invalid rank value");
      }
  
      let rankDiff = activityRank - this.rank;
  
      if (this.rank < 0 && activityRank > 0) rankDiff -= 1;
      if (this.rank > 0 && activityRank < 0) rankDiff += 1;
  
      if (rankDiff === 0) return 3;
      if (rankDiff === -1) return 1;
      if (rankDiff < -1) return 0;
      return 10 * rankDiff * rankDiff;
    }
  
    incProgress(activityRank) {
      let points = this.calculateProgress(activityRank);
      this.updateProgress(points);
    }
  }
//____________________________________________________________________________________________________
//----------------------------------------------------------------------------------------------------
//____________________________________________________________________________________________________
// ---------------------------------------------------------------------------------------------------
// ___________________________________________________________________________________________________
// ---------------------------------------------------------------------------------------------------
// ___________________________________________________________________________________________________
// |  ####   #####   ####    #####   #   #   #####        #####  #####   #   #   ####   #      ##### |
// |  #      #   #   #   #     #     ##  #   #              #    #       ## ##   #   #  #      #     |
// |  #      #   #   #    #    #     # # #   #  ###         #    ###     # # #   ####   #      ####  |
// |  #      #   #   #   #     #     #  ##   #   #          #    #       #   #   #      #      #     |
// |  ####   #####   ####    #####   #   #    ###           #    #####   #   #   #      #####  ##### |
// |_________________________________________________________________________________________________|
//____________________________________________________________________________________________________
//----------------------------------------------------------------------------------------------------
//____________________________________________________________________________________________________
// ---------------------------------------------------------------------------------------------------
// ___________________________________________________________________________________________________
// ---------------------------------------------------------------------------------------------------