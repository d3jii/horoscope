// Generated by CoffeeScript 1.10.0
(function() {
  var ZodiacArray, birthdayIsntValid, getSign, getZodiac, handleMonths, yearIsntValid, MonthsMeta, monthDayRange, monthHandler, febLeapCheck;

  

  //tf Element 0 (false) sign to return if day is not <= true_range.. 1 is the sign to return otherwise.
  MonthsMeta = {
    1:{'trueRange':19 , tf:['Aquarius','Capricorn']},
    2:{'trueRange':18 , tf:['Pisces','Aquarius']},
    3:{'trueRange':20 , tf:['Aries','Pisces']},
    4:{'trueRange':19 , tf:['Taurus','Aries']},
    5:{'trueRange':20 , tf:['Gemini','Taurus']},
    6:{'trueRange':20 , tf:['Cancer','Gemini']},
    7:{'trueRange':22 , tf:['Leo','Cancer']},
    8:{'trueRange':22 , tf:['Virgo','Leo']},
    9:{'trueRange':22 , tf:['Libra','Virgo']},
    10:{'trueRange':22 , tf:['Scorpio','Libra']},
    11:{'trueRange':21 , tf:['Sagittarius','Scorpio']},
    12:{'trueRange':21 , tf:['Capricorn','Sagittarius']},
  }

  monthHandler = function(day,month){
    var monthMeta = MonthsMeta[month];
    var trueRange = monthMeta['trueRange'];
    return monthMeta['tf'][+(day <= trueRange)]; 

  }

  getSign = function(month, day, overrideErrors) {
    var errorMessage;
    if (overrideErrors == null) {
      overrideErrors = false;
    }
    if (overrideErrors) {
      if (birthdayIsntValid(month, day)) {
        return null;
      } else {
        return handleMonths[month](day,month);
      }
    } else {
      if (birthdayIsntValid(month, day)) {
        errorMessage = 'Horoscope.js/getSign(): month should be numbers 1-12 and days should be numbers between 1-31 depending on month length';
        throw new Error(errorMessage);
      } else {
        return handleMonths[month](day,month);
      }
    }
  };

  handleMonths = {
    1: monthHandler,
    2: monthHandler,
    3: monthHandler,
    4: monthHandler,
    5: monthHandler,
    6: monthHandler,
    7: monthHandler,
    8: monthHandler,
    9: monthHandler,
    10: monthHandler,
    11: monthHandler,
    12: monthHandler
  };
 
 febLeapCheck = function(){
  var currentYear = new Date().getFullYear();
  //get last day of current year
  return new Date(currentYear , 2 , 0).getDate();
 }

 monthDayRange = {
    1: 31,
    2: febLeapCheck(),
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  };

  birthdayIsntValid = function(m, d) {
    if (typeof m !== 'number' || typeof d !== 'number' || m < 1 || m > 12 || d < 1 || d > monthDayRange[m]) {
      return true;
    } else {
      return false;
    }
  };

  getZodiac = function(year, overrideErrors) {
    var errorMessage;
    if (overrideErrors == null) {
      overrideErrors = false;
    }
    if (overrideErrors) {
      if (yearIsntValid(year)) {
        return null;
      } else {
        return ZodiacArray[year % 12];
      }
    } else {
      if (yearIsntValid(year)) {
        errorMessage = 'Year isnt valid';
        throw new Error(errorMessage);
      } else {
        return ZodiacArray[year % 12];
      }
    }
  };

  ZodiacArray = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat'];

  yearIsntValid = function(year) {
    if (!year || typeof year !== 'number' || year.toString().length !== 4) {
      return true;
    } else {
      return false;
    }
  };

  module.exports.getSign = getSign;

  module.exports.getZodiac = getZodiac;

}).call(this);
