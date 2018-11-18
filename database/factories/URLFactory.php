<?php

use Faker\Generator as Faker;

$factory->define(App\URL::class, function (Faker $faker) {
  return [
      'user_id' => 1,
      'slug' =>  $faker->numberBetween($min = 100000, $max = 999999),
      'redirect_to_url' =>  $faker->url,
  ];
});
