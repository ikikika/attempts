<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

use App\User;

class TialyTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->get('/about-tia');
        $response->assertStatus(301);
    }

    public function testApiLogin()
    {
        $body = [
            'email' => 'a@a.com',
            'password' => 'a@a.com'
        ];
        $this->json('POST','/api/login',$body,['Accept' => 'application/json'])
            ->assertStatus(200)
            ->assertJsonStructure(['token_type','expires_at','access_token']);
    }

    public function testShowAllShortenedUrl()
    {
        $user = User::find(1);

        $response = $this->actingAs($user, 'api')
                    ->json('GET', '/admin/urls');
        $response
            ->assertStatus(200);
    }
}
