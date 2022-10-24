<?php

namespace App\Repository;

use App\URL;
use Carbon\Carbon;

class URLcache
{

  CONST CACHE_KEY = 'URLs';

  public function all()
  {
     $key= "all";
     $cacheKey= $this->getCacheKey($key);
     $cacheExpire = Carbon::now()->addMinutes(5);

     return cache()->remember($cacheKey, $cacheExpire, function(){
       return URL::all();
     });     
  }

  public function getCacheKey( $key )
  {
    return self::CACHE_KEY.".$key";
  }

}
