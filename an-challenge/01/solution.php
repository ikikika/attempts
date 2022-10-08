<?php

/*

PHP version

Task: When given a pattern and an input string, check if the input string matches the pattern.

Assumption: each repeated substring are of the same length

Example:

pattern: xyx
inputstring: abcjklabc
output: true

pattern: xxy
inputstring: abcjklabc
output: false

To run this code, 
1. ensure a server solution stack like XAMPP is installed
2. ensure apache server is running
2. in a browser, run `solution.php` from the containing folder within the apache localhost environment

*/



function matchPattern($inputString, $pattern) {
  
  $messageSuccess = "Input string matches pattern";
  $messageFail = "Input string does not match pattern";

  $n = strlen($inputString);
  $m = strlen($pattern);

  // If n not divisible by m, automatically output false
  if ($n % $m) {
    echo $messageFail;
    return;
  }

  // get length of each substring
  $p = $n / $m;

  
  // split inputString into substrings
  $substrings = str_split($inputString, $p);
  

  // map pattern to substrings
  $mapping = [];
  for ($i = 0; $i < $m; $i++) {
    array_push($mapping, [$pattern[$i], $substrings[$i]]);
  }
  
  // remove duplicate substrings
  $mapping = array_multidimensional_unique($mapping);
  
  // each character in pattern should correspond to only one substring
  $check = [];
  for ($j = 0; $j < sizeof($mapping); $j++) {
    array_push($check, $mapping[$j][0]);
  }

  // if each character in pattern correspond to more than 1 substring,
  // means inputString not matching pattern
  if ( count($check) !== count(array_unique($check)) ){
    echo $messageFail;
  } else {
    echo $messageSuccess;
  }
}

function array_multidimensional_unique($input){
  $serialized_array = array_map("serialize", $input);
  foreach ($serialized_array as $key => $val) {
      $result[$val] = true;
  }
  $output = array_map("unserialize", (array_keys($result)));
  return $output;
}

$pattern = isset($_GET['pattern']) ? $_GET['pattern'] : 'xyx';
$inputString = isset($_GET['inputString']) ? $_GET['inputString'] : 'abcjklabc';
matchPattern($inputString, $pattern);

?>

<form style="margin-top: 20px;">
  <div style="float: left;">
    <label for="pattern">Pattern:</label><br>
    <input type="text" id="pattern" name="pattern" value="<?= $pattern ?>" />
  </div>
  <div style="float: left;">
    <label for="inputString">Input string:</label><br>
    <input type="text" id="inputString" name="inputString" value="<?= $inputString ?>" />
  </div>
  <div>
    <br>
    <input type="submit" />
  </div>
</form>




