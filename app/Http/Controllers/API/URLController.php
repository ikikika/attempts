<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Facades\App\Repository\URLcache;
use App\URL;
use App\VisitorsLog;

class URLController extends Controller
{
    public function redirect_slug(Request $request, $slug)
    {
      $customSlug = URL::where('custom_slug', $slug)->first();

      if( $customSlug ){
        return redirect($customSlug->redirect_to_url, 301);
      } else {

        $slug = URL::where('slug', $slug)->first();

        if( $slug ){

          $log = new VisitorsLog;
          $log->slug_id = $slug->id;
          $log->ip_add = $request->ip();
          $log->save();

          return redirect($slug->redirect_to_url, 301);

        } else {
          abort(404);
        }

      }
    }

    public function index()
    {
        $urls = URLcache::all();

        return response()->json([
            'success' => true,
            'data' => $urls
        ], 200);
    }

    public function show($id)
    {
        $url = URL::find($id);

        if (!$url) {
            return response()->json([
                'success' => false,
                'message' => 'URL with id ' . $id . ' not found'
            ], 400);
        }

        return response()->json([
            'success' => true,
            'data' => $url->toArray()
        ], 200);
    }

    public function store(Request $request)
    {
        $custom_slug = preg_replace("![^a-z0-9]+!i", "-", $request->custom_slug);

        $request->merge([
            'custom_slug' => $custom_slug
        ]);

        $this->validate($request, [
            'custom_slug' => 'nullable|string|unique:u_r_ls',
            'redirect_to_url' => 'required|url',
        ]);

        $url = new URL();
        $url->user_id = auth()->user()->id;
        $url->slug = $this->uniqueString();
        $url->custom_slug = $request->custom_slug;
        $url->redirect_to_url = $request->redirect_to_url;
        $saveUrlToDb = $url->save();

        if ( $saveUrlToDb )
            return response()->json([
                'success' => true,
                'data' => $url->toArray()
            ], 200);
        else
            return response()->json([
                'success' => false,
                'message' => 'URL could not be added'
            ], 500);
    }

    public function update(Request $request, $id)
    {
        $url = URL::find($id);

        if (!$url) {
            return response()->json([
                'success' => false,
                'message' => 'URL with id ' . $id . ' not found'
            ], 400);
        }

        $custom_slug = preg_replace("![^a-z0-9]+!i", "-", $request->custom_slug);

        $request->merge([
            'custom_slug' => $custom_slug
        ]);

        $this->validate($request, [
            'custom_slug' => 'nullable|string|unique:u_r_ls,custom_slug,'.$id,
            'redirect_to_url' => 'required|url',
        ]);

        $url->custom_slug = $request->custom_slug;
        $url->redirect_to_url = $request->redirect_to_url;
        $saveUrlToDb = $url->save();
        return $request;
        if ( $saveUrlToDb )
            return response()->json([
                'success' => true,
                'data' => $url->toArray()
            ], 200);
        else
            return response()->json([
                'success' => false,
                'message' => 'URL could not be updated'
            ], 500);
    }

    public function destroy($id)
    {
        $url = URL::find($id);

        if (!$url) {
            return response()->json([
                'success' => false,
                'message' => 'URL with id ' . $id . ' not found'
            ], 400);
        }

        if ($url->delete()) {
            return response()->json([
                'success' => true
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'URL could not be deleted'
            ], 500);
        }
    }

    public function generateRandomString($length = 6)
    {
      //$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      $characters = '0123456789abcdefghijklmnopqrstuvwxyz';
      $charactersLength = strlen($characters);
      $randomString = '';
      for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
      }
      return $randomString;
    }

    public function uniqueString()
    {
      $string = $this->generateRandomString();

      $check1 = URL::where('slug', $string)->count(); //if 1, means duplicate. reject

      $undesiredStrings = ['vulgar', 'bomb' ];

      $check2 = 0; //if 1, means undesired strings present. reject
      for( $i=0; $i<sizeof($undesiredStrings); $i++ ){
        if( strpos( $string, $undesiredStrings[$i] ) !== false ){
          $check2 = 1;
        }
      }

      if( $check1 || $check2 ){
        uniqueString();
      } else {
        return $string;
      }
    }
}
