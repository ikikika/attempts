<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });



Route::group(['prefix'=>'api'], function(){
  Route::post('login', 'API\UserController@login');
});
Route::group(['prefix'=>'admin', 'middleware' => 'auth:api'], function(){
  Route::post('register', 'API\UserController@register');
  Route::post('user', 'API\UserController@user');
  Route::get('logout', 'API\UserController@logout');
  Route::resource('urls', 'API\URLController');
});

Route::get('/{slug}', 'API\URLController@redirect_slug');
